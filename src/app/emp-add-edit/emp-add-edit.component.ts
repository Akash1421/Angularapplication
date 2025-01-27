import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService, Employee } from '../data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {  
   
  
   
  employeeForm: FormGroup;
  employeeRoles: string[] = ['Admin', 'Manager', 'Developer', 'HR']; 
  
 

  constructor(private fb: FormBuilder, 
    private empService: DataService, 
    private _dialogRef:MatDialogRef<EmpAddEditComponent>,  
    @Inject(MAT_DIALOG_DATA) public data:any
    ) {
    this.employeeForm = this.fb.group({
      id: [''],
      fullName: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      experience: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern(/^\d+$/)] , [Validators.required,Validators.minLength(9)]]
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) { 
      if(this.data){  
        this.empService.updateEmployee(this.data.id,this.employeeForm.value).subscribe({ 
          next:(val:any)=>{ 
            alert('employee detail updated'); 
            this._dialogRef.close(true);
          }, 
          error:(err:any)=>{
             console.log(err)
          }
        })

      }else{  
        this.empService.addEmployee(this.employeeForm.value).subscribe({ 
          next:(val:any)=>{ 
            alert('employee added successfully'); 
            this._dialogRef.close(true);
          }, 
          error:(err:any)=>{
             console.log(err)
          }
        })

      }
     
    }
  }

  onCancel(): void {
    this.employeeForm.reset();
  } 
 
  

  ngOnInit(): void { 
    this.employeeForm.patchValue(this.data)
  }

}

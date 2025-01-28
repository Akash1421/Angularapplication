import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DataService, Employee } from '../data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { minDigitsLength1 } from '../validators/custom-validators';


@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css'], 
 
})
export class EmpAddEditComponent implements OnInit {  
   
  
   
  employeeForm: FormGroup;
  employeeRoles: string[] = ['Admin', 'Manager', 'Developer', 'HR'];  
  ManagerLists:string [] = []; 
   
  
 
 

  constructor(private fb: FormBuilder, 
    private empService: DataService, 
    private _dialogRef:MatDialogRef<EmpAddEditComponent>,  
    @Inject(MAT_DIALOG_DATA) public data:any
    ) {
     
    this.employeeForm = this.fb.group({
      id: [''],
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      mail: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      experience: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern(/^\d+$/), minDigitsLength1(9)] ], 
      DateofJoining:['',Validators.required]
    });
  } 
   
  

  onSubmit(): void {
    if (this.employeeForm.valid) { 
      console.log('Form Submitted:', this.employeeForm.value); // Debug log
      if (this.data) {  
        this.empService.updateEmployee(this.data.id, this.employeeForm.value).subscribe({
          next: (val: any) => {
            alert('Employee detail updated');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      } else {  
        this.empService.addEmployee(this.employeeForm.value).subscribe({
          next: (val: any) => {
            alert('Employee added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      }
    } else {
      console.error('Form is invalid!');
    }
  }

  // onCancel(): void {
  //   this.employeeForm.reset();
  // } 
 
  

  ngOnInit(): void { 
    if (this.data) {
      this.employeeForm.patchValue(this.data);
    } 
    this.employeeForm.get('role')?.valueChanges.subscribe((role) => {
      const experienceControl = this.employeeForm.get('experience');
      if (role === 'Developer') {
        experienceControl?.setValidators([
          Validators.required,
          Validators.min(2), // Minimum 2 years for Developer
        ]);
      } else if (role === 'HR') {
        experienceControl?.setValidators([
          Validators.required,
          Validators.min(1), // Minimum 1 year for HR
        ]);
      } else {
        experienceControl?.setValidators([Validators.required]); // Default for other roles
      }
      experienceControl?.updateValueAndValidity(); // Re-evaluate validators
    }); 

  } 
   
  minDigitsLength(minLength: number) {
    return (control: AbstractControl) => {
      const value = control.value?.toString() || '';
      return value.length >= minLength ? null : { minDigitsLength: true };
    };
  }

} 
 

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent implements OnInit {
onSubmit() {

}

  addrolesForm:FormGroup;
  constructor(
    private fb:FormBuilder
  ) { 
    this.addrolesForm = this.fb.group( 
      { 
        id:[''],
        name:['',[Validators.required,Validators.minLength(3)]],
        createdOn:['',[Validators.required]],
        description:['',[Validators.required]],
        elevatedPrivilage:['']
      }
    )
  }

  ngOnInit(): void {
  }

}

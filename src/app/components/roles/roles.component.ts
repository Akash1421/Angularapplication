import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RolesServiceService } from 'src/app/services/roles-service.service';
import { AddRolesComponent } from '../add-roles/add-roles.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit { 
   
  roles:any[]=[];
  displayedColumns:string[]=['id','name','description','elevatedPrivilage','CreatedOn','action'];

  constructor(private rolesService:RolesServiceService,private _dialogRef:MatDialog) { 
    this.getRoles();
  }

  ngOnInit(): void {
  }
  getRoles():void{ 
    this.rolesService.getAllRoles().subscribe(data=>{ 
      this.roles = data;
      console.log(this.roles);
    })
  } 

   editRoles(data:any){ 

   }

   deleteRoles(id:number){ 

   }

   addRolesForm(){ 
    const dialogRef= this._dialogRef.open(AddRolesComponent);

   }
}

import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatIconModule } from '@angular/material/icon';
import { FrontpagesComponent } from './frontpages/frontpages.component'; 
import { MatButtonModule } from '@angular/material/button';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';  
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PracticeComponent } from './practice/practice.component';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    AppComponent,
    FrontpagesComponent,
    EmpAddEditComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,  
    FlexLayoutModule, 
    MatToolbarModule,
    MatAutocompleteModule, 
    MatPaginatorModule,
    MatTableModule, 
    MatIconModule,
    MatButtonModule, 
    MatDialogModule,  
    BrowserAnimationsModule,  
    MatInputModule, 
    HttpClientModule,
    MatNativeDateModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatSelectModule,   
    MatDatepickerModule, 
    MatSortModule
    
    
  ],
  providers: [
    
  ], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

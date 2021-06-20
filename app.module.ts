import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SelectionModel} from '@angular/cdk/collections';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, _MatTableDataSource } from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {SearchIcon} from '@material-ui/icons/Search';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import { TableComponent } from './table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
//import { MatTableDataSource} from '@angular/material/table';


const material=[
  MatTableModule,
  MatCheckboxModule,
  MatMenuModule,
  MatTabsModule,
  MatInputModule,
  MatIconModule,
  //SelectionModel,
  CdkTableModule,
  MatFormFieldModule,
  MatButtonModule,
  MatRadioModule,
  //SearchIcon,
  MatSelectModule,
  MatCardModule,
  MatSortModule,
  //MatTableDataSource,

];
@NgModule({
  imports:[material, BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule],
  
  exports:[material],
  declarations: [
    AppComponent,
    TableComponent
  ],
  //imports: [
    //BrowserModule,
    //AppRoutingModule,
    //BrowserAnimationsModule
  //],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
export class MaterialModule{}

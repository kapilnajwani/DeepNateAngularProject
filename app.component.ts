import {SelectionModel} from '@angular/cdk/collections';
import { Component,ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {CheckboxControlValueAccessor, FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
//import{MatSort} from '@angular/material;
//import {MatSort} from '@angular/material/sort';




export interface PeriodicElement {

  name: string;
  address: string;
  project: number;
  running:number;
  completed:number;
  amount:number;
 
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name:'Loremipsum', address: 'Hydrogen', project: 1, running: 3, completed: 6, amount: .78 },
  { name:'Loremipsum',address: 'Hydrogen', project: 1, running: 3, completed: 6, amount: .78 },

];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent  {
  displayedColumns: string[] = ['button', 'name', 'address', 'project', 'running', 'completed','amount', 'symbol', 'notebook'];
  dataSource = ELEMENT_DATA ;
  



 // @ViewChild(MatSort) sort: MatSort;

  //ngOnInit(){
    //this.dataSource.sort=this.sort;
  //}
  //color: AppComponent = 
  //mode: ProgressSpinnerMode = 'determinate';
  //value = 50;
 // selection = new SelectionModel<PeriodicElement>(true, []);

  //isAllSelected() {
    //const numSelected = this.selection.selected.length;
    //const numRows = this.dataSource.length;
    //return numSelected === numRows;
  //}

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  //masterToggle() {
    //if (this.isAllSelected()) {
      //this.selection.clear();
      //return;
    //}

    //this.selection.select(...this.dataSource);
  //}

   /** The label for the checkbox on the passed row */
   //checkboxLabel(row?: PeriodicElement): string {
    //if (!row) {
      //return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    //}
    //return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  //}
}


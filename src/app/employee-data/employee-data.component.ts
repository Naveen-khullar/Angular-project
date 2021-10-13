import {AfterViewInit, Component, ViewChild, ElementRef, HostListener} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css'],
  
})
export class EmployeeDataComponent implements AfterViewInit  {
  list: any;
  panelOpenState = false;
  navOpen: boolean = false;
  setStatus: boolean | any;
  overlayOpen: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild('nav') nav: ElementRef | any;
  constructor() {
    this.list = [
      {position: 'A1', name: 'Hydrogen', department: 'marketing department', age: 30, value: 3000, progress : 25, lastPayment: '24 jan 2020', symbol: 'H', type: 'part time', status: 'paid'},
      {position: 'A2', name: 'Helium', department: 'hr department', age: 40,  value: 5000, progress : 35,  lastPayment: '24 jan 2020', symbol: 'He', type: 'full time', status: 'paid'},
      {position: 'A3', name: 'Lithium', department: 'finance department', age: 45, value: 5500, progress : 45,  lastPayment: '24 jan 2020', symbol: 'Li', type: 'full time', status: 'pending'},
      {position: 'A4', name: 'Beryllium', department: 'marketing department', age: 35, value: 1100,  progress : 25,  lastPayment: '24 jan 2020', symbol: 'Be',type: 'part time', status: 'paid'},
      {position: 'A5', name: 'Boron', department: 'hr department', age: 30, value: 1500, progress : 55,  lastPayment: '24 jan 2020', symbol: 'B', type: 'part time', status: 'pending'},
      {position: 'A6', name: 'Carbon', department: 'finance department', age: 33, value: 3050, progress : 25,  lastPayment: '24 jan 2020', symbol: 'C', type: 'part time',status: 'paid'},
      {position: 'A7', name: 'Nitrogen', department: 'marketing department', age: 35, value: 3300, progress : 25,  lastPayment: '24 jan 2020', symbol: 'N', type: 'full time', status: 'pending'},
      {position: 'A8', name: 'Oxygen', department: 'hr department', age: 35, value: 10000, progress : 25,  lastPayment: '24 jan 2020',symbol: 'O', type: 'part time', status: 'paid'},
      {position: 'A9', name: 'Fluorine', department: 'finance department', age: 35, value: 3600, progress : 45,  lastPayment: '24 jan 2020', symbol: 'F', type: 'full time', status: 'pending'},
      {position: 'A10', name: 'Neon', department: 'marketing department', age: 35, value: 11000, progress : 75,  lastPayment: '24 jan 2020', symbol: 'Ne', type: 'part time', status: 'paid'},
      {position: 'A11', name: 'Sodium', department: 'hr department', age: 35, value: 4500, progress : 25,  lastPayment: '24 jan 2020', symbol: 'Na',  type: 'full time', status: 'pending'},
      {position: 'A12', name: 'Magnesium', department: 'finance department', age: 31, value: 3000, progress : 25,  lastPayment: '24 jan 2020', symbol: 'Mg',  type: 'full time', status: 'paid'},
      {position: 'A13', name: 'Aluminum', department: 'marketing department', age: 32, value: 3060, progress : 25,  lastPayment: '24 jan 2020', symbol: 'Al',  type: 'part time', status: 'paid'},
      {position: 'A14', name: 'Silicon', department: 'hr department', weight: 28.0855, age: 35, progress : 65,  lastPayment: '24 jan 2020', symbol: 'Si',  type: 'full time', status: 'paid'},
      {position: 'A15', name: 'Phosphorus', department: 'finance department', age: 35, value: 8500, progress : 85,  lastPayment: '24 jan 2020', symbol: 'P',  type: 'full time', status: 'paid'},
      {position: 'A16', name: 'Sulfur', department: 'marketing department', age: 35, value: 9500, progress : 25,  lastPayment: '24 jan 2020', symbol: 'S',  type: 'part time', status: 'pending'},
      {position: 'A17', name: 'Chlorine', department: 'hr department', age: 50, value: 6800, progress : 25,  lastPayment: '24 jan 2020',  symbol: 'Cl',  type: 'part time', status: 'paid'},
      {position: 'A18', name: 'Argon', department: 'finance department', age: 48, value: 7700, progress : 95,  lastPayment: '24 jan 2020', symbol: 'Ar',  type: 'full time', status: 'paid'},
      {position: 'A19', name: 'Potassium', department: 'marketing department', age: 45, value: 8500, progress : 25,  lastPayment: '24 jan 2020', symbol: 'K',  type: 'part time', status: 'pending'},
      {position: 'A20', name: 'Calcium', department: 'hr department', age: 35, value: 7800, progress : 100,  lastPayment: '24 jan 2020', symbol: 'Ca',  type: 'full time', status: 'paid'},
    ]
  }

  ngAfterViewInit() {
    //this.paid();
    //this.setProgress();
  
  }

  openNav() {
    this.navOpen = !this.navOpen
    this.overlayOpen = !this.overlayOpen;
  }

  closeNav() {
    this.navOpen = !this.navOpen
    this.overlayOpen = !this.overlayOpen;
  }
  
  // @HostListener('document:click', ['$event'])
  // clickOutside(event: any) {
    
  //   if(this.navOpen === false) {
     
  //   } else {
  //     if(this.nav.nativeElement.contains(event.target))
  //     {
  //         console.log('click inside')
  //     } else {  
  //         console.log('click outside');  
  //         console.log(this.navOpen)    
  //     }
  //   }
    
 // }

// setProgress(progress: string | any ) {
//   if (progress >= 25 ) {
//     return 'bg-danger' || '';
//   } else if (progress >= 50 ) {
//     return 'bg-warning' || '';
//   } else if (progress >= 75 ) {
//     return 'bg-primary' || '';
//   } else if (progress >= 100 ) {
//     return 'bg-success' || '';
//   }
// }

  // paid() {
  //   console.log(this.list)
  //   if(this.list.status == 'paid'){
      
  //     this.setStatus = true;
  //     console.log(this.setStatus)
  //   } else if (this.list.status == 'pending') {
  //     this.setStatus = false;
  //     console.log(this.setStatus)
  //   }
  // }
  

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  progress: number;
  symbol: string;
  status: string;
}


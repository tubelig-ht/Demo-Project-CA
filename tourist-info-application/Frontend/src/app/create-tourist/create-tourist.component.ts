import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceService } from '../service.service';
import { Tourist } from '../tourist';

@Component({
  selector: 'app-create-tourist',
  templateUrl: './create-tourist.component.html',
  styleUrls: ['./create-tourist.component.css']
})
export class CreateTouristComponent implements OnInit {

  tourist:Tourist=new Tourist();

  constructor(private router:Router,
    private service:ServiceService) { }

  ngOnInit(): void {
    this.tourist.firstName="";
    this.tourist.lastName="";
    this.tourist.age=0;
    this.tourist.fromPlace="";
    this.tourist.gender="";
    this.tourist.numberOfDays=0;
  }

  validate(){
    if(!this.isString(this.tourist.firstName) || this.tourist.firstName.length>15){
      Swal.fire('Invalid Input',"Please Input First Name as Alphabets Only\n and \nEnter input less than 15 Characters!!",'error');
      return false;
    }
    else if(this.tourist.lastName.length>12 || !this.isString(this.tourist.lastName)){
      Swal.fire('Invalid Input',"Please Input Last Name as Alphabets Only\n and \nEnter input less than 12 Characters!!",'error');
      return false;
    }
    else if(this.tourist.gender.length==0){
      Swal.fire('Invalid Input',"Please Select Gender",'error');
      return false;
    }
    else if(this.tourist.age<=0 || this.tourist.age>90){
      Swal.fire('Invalid Input',"Age should be less than 90 and more than 0",'error');
      return false;
    }
    else if(!this.isString(this.tourist.fromPlace) || this.tourist.fromPlace.length==0){
      Swal.fire('Invalid Input',"Please Enter Correct City!!",'error');
      return false;
    }
    else if(this.tourist.numberOfDays<=0){
      Swal.fire('Invalid Input',"Please Enter Valid Days",'error');
      return false;
    }
    return true;
  }

  registerTourist(){
    if(this.validate()){
      this.service.addTourist(this.tourist).subscribe(data=>{
        console.warn(data);
      },error=>{
        Swal.fire('Not Working','Some error in calling service','error');
      });
      Swal.fire('Good Job','Registration Successfull','success').then(
        result=>{
          this.goToViewAllList();
        }
      );
        
    }
  }

  isString(str:string){
    if(typeof str== "undefined"){
      Swal.fire("Please Fill all the details");
      return false;
    }
    return str.match(/^[A-Za-z]+$/);
  }

  goToViewAllList(){
    this.router.navigate(['viewAll']);
  }
}

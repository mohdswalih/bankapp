import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username=""
  accno=""
  pass=""

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
 register(){
var username=this.username
var accno=this.accno
var pass=this.pass
const result=this.ds.register(accno,username,pass)
if(result){
  alert("registerd")
  this.router.navigateByUrl('')
}
else{
  alert('user already exist')
}
// let userDetails=this.ds.userDetails
}
}

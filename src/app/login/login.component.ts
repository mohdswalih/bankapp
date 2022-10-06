import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim='Your perfect banking partner'
  acnt='enter your ac number'
  accno=''
  password=''
  
  

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  login(){
    var accno=this.accno
    var password=this.password

    const result=this.ds.login(accno,password)
    if(result){
      alert("login success")
      this.router.navigateByUrl('dashboard')
    }
    
    
    
  }

  // login(a:any,b:any){
  //   console.log(a.value);
  //   console.log(b.value);
    
    
  //   var accno=a.value
  //   var password=b.value
  //   let userDetails=this.userDetails
  //   if(accno in userDetails){
  //     if(password==userDetails[accno]['password']){
  //       alert('login successful')

  //     }
  //     else{
  //       alert('incorrect password')
  //     }
  //   }
  //   else{
  //     alert('user not exist or incorrect user name')
  //   }
    
    
  // }
  acnoChange(event:any){
   this.accno=event.target.value
   console.log(this.accno);
   
  }
  passchange(event:any){
    this.password=event.target.value
    console.log(this.password)

  }

}

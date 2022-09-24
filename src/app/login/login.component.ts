import { Component, OnInit } from '@angular/core';

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
  
  userDetails:any={
    1000:{accno:1000,username:"amal",password:123,balance:20000},
    1001:{accno:1001,username:"abhi",password:123,balance:15000},
    1002:{accno:1002,username:"ivar",password:123,balance:10000},
    1003:{accno:1003,username:"jhon",password:123,balance:16000},

  }

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    var accno=this.accno
    var password=this.password
    let userDetails=this.userDetails
    if(accno in userDetails){
      if(password==userDetails[accno]['password']){
        alert('login successful')

      }
      else{
        alert('incorrect password')
      }
    }
    else{
      alert('user not exist or incorrect user name')
    }
    
    alert('login successful')
  }
  acnoChange(event:any){
   this.accno=event.target.value
   console.log(this.accno);
   
  }
  passchange(event:any){
    this.password=event.target.value
    console.log(this.password);



  }

}

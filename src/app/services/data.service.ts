import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any
  userDetails: any = {
    1000: { accno: 1000, username: "amal", password: 123, balance: 20000,transaction:[] },
    1001: { accno: 1001, username: "abhi", password: 123, balance: 15000,transaction:[] },
    1002: { accno: 1002, username: "ivar", password: 123, balance: 10000,transaction:[] },
    1003: { accno: 1003, username: "jhon", password: 123, balance: 16000 ,transaction:[]},

  }

  constructor() { }
  register(accno: any, username: any, password: any) {
    let userDetails = this.userDetails
    if (accno in userDetails) {
      return false
    }
    else {
      userDetails[accno] = { accno, username, password, balance: 0 }
      console.log(userDetails);

      return true
    }

  }
  login(accno: any, password: any) {

    let userDetails = this.userDetails
    if (accno in userDetails) {
      if (password == userDetails[accno]['password']) {
        this.currentUser=userDetails[accno]['username']
        this.currentAcno=accno
        return true


      }
      else {
        alert('incorrect password')
        return false
      }
    }
    else {
      alert('user not exist or incorrect user name')
      return false
    }


  }
  deposit(acno:any,pass:any,amnt:any){
    let userDetails=this.userDetails
    var amount=parseInt(amnt) // convert string input data
    if(acno in userDetails){
      if(pass==userDetails[acno]['password']){
      userDetails[acno]['balance']+=amount
      userDetails[acno]['transaction'].push({type:'CREDIT',amount})
      return userDetails[acno]['balance']
    }
    else{
      alert('incorrect password')
    }
    }
    else{
      alert('user not exist')
      return false
    }
  }
  withdraw(acno:any,pass:any,amnt:any){
    let userDetails=this.userDetails
    var amount=parseInt(amnt) // convert string input data
    if(acno in userDetails){
      if(pass==userDetails[acno]['password']){
        if(userDetails[acno]['balance']>=amnt){
      userDetails[acno]['balance']-=amount
      userDetails[acno]['transaction'].push({type:'DEBIT',amount})
  
      return userDetails[acno]['balance']
    }
    else{
      alert('insufficient balance')
      return false
    }
    }
    else{
      alert('incorrect password')
    }
    }
    else{
      alert('user not exist')
      return false
    }
  }
  
  
  getTransaction(acno:any){
   return this.userDetails[acno]['transaction']
  }
  
  }




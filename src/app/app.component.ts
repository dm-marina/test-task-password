import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  password:string
  strength='default';
  onSubmit(){}
  onValidatePassword(){
    let num = /\d{8,}/.test(this.password);
    let letter = /[a-zA-Z]{8,}/.test(this.password);
    let symbols = /[!@#$%^&*]{8,}/.test(this.password);

    let strDigit = /^[a-zA-Z0-9]+$/.test(this.password);
    let strSymbols = /^[a-zA-Z!@#$%^&*]+$/.test(this.password);
    let digitSymbols = /^[0-9!@#$%^&*]+$/.test(this.password);

    let all =  /^[a-zA-Z!@#$%^&*0-9]{8,}/.test(this.password)
   if(this.password.length===0){
    this.strength = 'empty'
   }
   else if(this.password.length<8){
    this.strength = 'less'
   }
   else {
    if(num || letter || symbols){
      this.strength = 'easy'
    }
    else if(strDigit || strSymbols || digitSymbols){
      this.strength ='medium'
    }
    else if(all){
      this.strength = 'strong'
    }
    else{
      this.strength = 'easy'
    }
   }
  }

}


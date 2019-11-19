import { Component } from '@angular/core';
import { User } from './address/user.model';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  { 
  
  user : User = new User();
  textToShow :string = "Initial Value";
  
  //Update directly from github. testing !!! 


  constructor(private svc: TestService, private httpTest: HttpClient){
    svc.printToConsole("in app Component ");
   // this.user = new User();
    this.user.name = 'Salman Sayyed';
    this.user.designation = 'Software Engineer';
    this.user.address = 'KoparKhairane';
    this.user.phone = [
      '123-456-789',
      '123-456-789'
    ]
  }

  ngOnInit(){
    let obs =  this.httpTest.get('https://api.github.com/users/koushikkothagal');
    
    //obs.subscribe((response) => console.log(response));   
  }
}

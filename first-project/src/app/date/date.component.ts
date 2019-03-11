import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message : string  ;

  constructor() { 
    setInterval(()=> {
      let time = new Date();
      this.message = time.toDateString() + ' ' + time.toLocaleTimeString();
    },1000);
  }


  ngOnInit() {
  }

}

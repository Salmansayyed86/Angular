import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input('user') user: User;
  isCollapsed: boolean = true;
  buttonText :string = 'Expand';

  constructor() {
  }

  onToggle() {
    this.isCollapsed = !this.isCollapsed;
    if(!this.isCollapsed){
      this.buttonText = 'Collapse';
    }else{
      this.buttonText = 'Expand';
    }
  }
  ngOnInit() {
  }

}

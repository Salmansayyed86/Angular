import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingRoutePath = [
    {
      name: "Profile",
      url: "profile"
    },
  
    {
      name: "Contact",
      url: "contact"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

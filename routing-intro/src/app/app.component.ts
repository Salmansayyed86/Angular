import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
homePath = "home";
settingsPath = "settings";

routePath = [
  {
    name: "Home",
    url: "home"
  },

  {
    name: "Settings",
    url: "settings"
  }
]
}

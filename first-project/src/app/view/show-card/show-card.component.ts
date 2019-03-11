import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

  userName : string = "";
  response: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  onSubmit(){
    this.http.get("https://api.github.com/users/"+this.userName)
    .subscribe((response)=>
    this.response = response
    )

    // if headers are required then
    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append("Content-Type","Application/Json");
    // headers = headers.append("X-api-Key","ivasnvohsvnovnowvhwhvowvhowh");
    // this.http.get("https://api.github.com/users/"+this.userName,{headers}).subscribe();
  }

}

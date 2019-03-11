import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  printToConsole(args:string ){
    console.log(args);
  }
}

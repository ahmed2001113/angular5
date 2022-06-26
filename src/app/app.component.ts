import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project4';

  name="";
  a = "no";
  f1(){
    this.a="btn1"
  }
  f2(){
    this.a="btn2"
  }
  f3(){
      this.a="btn3"
    }
  

}

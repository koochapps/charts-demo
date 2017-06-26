import { Component } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected:boolean = false;
  mydata:Object[] = [
    {
      name: 'Download Sales',
      enabled: true
    },
    {
      name: 'In-Store Sales',
      enabled: true
    },
    {
      name: 'Mail Sales',
      enabled: true
    }
  ];

  public addData(){
    this.mydata.push({name:'',enabled:false});
    setTimeout(()=>{
      $.fn.styleMyCheckbox();
    },10);
  }
}

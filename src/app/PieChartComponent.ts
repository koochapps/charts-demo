import {Component} from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart-demo.html'
})
export class PieChartComponent {

  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';

  public pieColors:Array<any> = [
  { // grey
    backgroundColor: ['#009688','#CDDC39','#FFA534','#9368E9','#87CB16','#1F77D0','#5e5e5e','#dd4b39','#35465c','#e52d27','#55acee','#cc2127','#1769ff','#6188e2','#a748ca'],
    pointBackgroundColor: ['#009688','#CDDC39','#FFA534','#9368E9','#87CB16','#1F77D0','#5e5e5e','#dd4b39','#35465c','#e52d27','#55acee','#cc2127','#1769ff','#6188e2','#a748ca'],
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: ['#009688','#CDDC39','#FFA534','#9368E9','#87CB16','#1F77D0','#5e5e5e','#dd4b39','#35465c','#e52d27','#55acee','#cc2127','#1769ff','#6188e2','#a748ca']
  }
];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}

import {Component} from '@angular/core';
/**
 * Created by gaston on 6/7/17.
 */

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart-demo.html'
})

export class BarChartComponent{
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barColors:Array<any> = [
    {
      backgroundColor: ['#009688'],
      pointBackgroundColor:  ['#009688'],
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: ['#009688']
    },
    {
      backgroundColor: ['#CDDC39'],
      pointBackgroundColor: ['#CDDC39'],
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: ['#CDDC39']
    }
  ];

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}

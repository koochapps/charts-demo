import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ChartsModule} from 'ng2-charts';
import {PieChartComponent} from './PieChartComponent';
import {LineChartComponent} from './LineChartComponent';
import {BarChartComponent} from "./BarChartComponent";
import {DatosComponent} from "./DatosComponent";

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

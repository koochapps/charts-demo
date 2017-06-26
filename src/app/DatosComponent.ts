import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Created by gaston on 6/7/17.
 */

@Component({
  selector: 'app-datos',
  templateUrl: 'datos-demo.html'
})
export class DatosComponent{

  private arrayOfValues:Object[];
  @Output() dataArrayChange = new EventEmitter();

  @Input()
  get dataArray(){
    return this.arrayOfValues;
  }

  set dataArray(values:Object[]){
    this.arrayOfValues = values;
    this.dataArrayChange.emit(this.arrayOfValues);
  }

  onSelect(event){
    let element = this.findParentElement(event.target);
    if(element.classList.contains('checked')){
      element.classList.remove('checked');
    }else{
      element.classList.add('checked');
    }
  }

  private findParentElement(element){
    if(element.classList.contains('checkbox')){
      return element;
    }
    return this.findParentElement(element.parentElement);
  }
}



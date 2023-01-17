import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  formControls = {
    'name': new FormControl('')
  }

  urlRepo = {
    "imgUrl": "https://material.angular.io/assets/img/examples/shiba2.jpg"
  }

  pText = "No Button Clicked Yet"


  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick(btnType: string){
    this.pText  = 'Button: "' + btnType + '" is clicked just now';
  }

}

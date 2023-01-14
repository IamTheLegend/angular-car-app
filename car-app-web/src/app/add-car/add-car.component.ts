import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {


  urlRepo = {
    "imgUrl": "https://material.angular.io/assets/img/examples/shiba2.jpg"
  }

  pText = "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."

  constructor() { }

  ngOnInit(): void {
  }

}

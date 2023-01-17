import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  addCarForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.addCarForm = this.formBuilder.group({
      brand: ["", Validators.required],
      model: ["",Validators.required],
      year: ["", Validators.required],
      price: ["", Validators.required],      
    });
  }

  ngOnInit(): void {
  }

  onBtnClick(btnType: string){
    this.pText  = 'Button: "' + btnType + '" is clicked just now';
  }

  onSubmit(addCarForm: FormGroup){
    if(addCarForm.valid){
      console.log("valid form")
      console.log(addCarForm)
    }else{
      console.log("invalid form")
    }
  }

}

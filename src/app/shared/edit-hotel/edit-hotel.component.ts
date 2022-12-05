import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HotelModel} from "../../api/models/hotel-model";

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.scss']
})
export class EditHotelComponent implements OnInit {

  hotelForm!: FormGroup

  constructor(public  dialogRef: MatDialogRef<EditHotelComponent>, @Inject(MAT_DIALOG_DATA) public data: HotelModel) { }

  ngOnInit(): void {
    this.hotelForm = new FormGroup({
      address: new FormControl(this.data.address, Validators.required),
      description: new FormControl(this.data.description, Validators.required),
      email: new FormControl(this.data.email, Validators.required),
      name: new FormControl(this.data.name, Validators.required),
      phone: new FormControl(this.data.phone, Validators.required),
      website: new FormControl(this.data.website, Validators.required),

    })

  }


  onClick() {
    let newHotelValue = this.data
    newHotelValue = {...newHotelValue, ...this.hotelForm.value}
    this.dialogRef.close(newHotelValue);


  }
}

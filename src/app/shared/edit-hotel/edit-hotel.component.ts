import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.scss']
})
export class EditHotelComponent implements OnInit {

  hotelForm!: FormGroup

  constructor(public  dialogRef: MatDialogRef<EditHotelComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data.hotel)
    this.hotelForm = new FormGroup({
      address: new FormControl(this.data.hotel.address, Validators.required),
      description: new FormControl(this.data.hotel.description, Validators.required),
      email: new FormControl(this.data.hotel.email, Validators.required),
      name: new FormControl(this.data.hotel.name, Validators.required),
      phone: new FormControl(this.data.hotel.phone, Validators.required),
      website: new FormControl(this.data.hotel.website, Validators.required),

    })

  }


  onClick() {
    let newHotelValue = this.data.hotel
    newHotelValue = {...newHotelValue, ...this.hotelForm.value}
    this.dialogRef.close(newHotelValue);


  }
}

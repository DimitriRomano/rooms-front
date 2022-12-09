import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit {
  hotelForm!: FormGroup

  arrayOfFields = [ 'address', 'city', 'country', 'email', 'images', 'latitude', 'longitude', 'name', 'phone', 'state', 'website', 'zip', 'description' ]
  constructor(public dialogRef: MatDialogRef<AddHotelComponent>) {
  }

  ngOnInit(): void {
    this.hotelForm = new FormGroup({
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      images: new FormControl('', Validators.required),
      latitude: new FormControl('', Validators.required),
      longitude: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      authId: new FormControl('1', Validators.required),
    })

  }
  onClickSubmit() {
    console.log(this.hotelForm.value)
    this.hotelForm.value.images = this.hotelForm.value.images.split(',')
    this.hotelForm.value.featuresIds = []
    this.dialogRef.close(this.hotelForm.value)
  }
}

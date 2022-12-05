import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HotelModel} from "../../api/models/hotel-model";

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {



  roomForm!: FormGroup

  constructor(public dialogRef: MatDialogRef<AddRoomComponent>, @Inject(MAT_DIALOG_DATA) public data: HotelModel) { }

  ngOnInit(): void {
    console.log(this.data)
    this.roomForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      capacity: new FormControl('', Validators.required),
      nbBed: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      hotelId: new FormControl(this.data.id, Validators.required),
      //featuresIds: new FormControl('', Validators.required),
      images: new FormControl('', Validators.required),
    })
  }

  onClickSubmit() {
    this.roomForm.value.images = this.roomForm.value.images.split(',')
    this.roomForm.value.featuresIds = []

    /*this.roomForm.value.featuresIds = this.roomForm.value.featuresIds.split(',')
    if (this.roomForm.value.featuresIds.length > 0) {
      this.roomForm.value.featuresIds = this.roomForm.value.featuresIds.map((feature: any) => {
        return parseInt(feature)
      })
    } else {
      this.roomForm.value.featuresIds = []
    }*/
    this.dialogRef.close(this.roomForm.value)


  }

}

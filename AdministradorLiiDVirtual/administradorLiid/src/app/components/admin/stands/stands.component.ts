import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Stands} from 'src/app/models/stands';
import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;
import { MatDialog } from '@angular/material/dialog';
import { DialogViewComponent } from '../dialog-view/dialog-view.component';
import { Router } from '@angular/router';
import { StandsService } from 'src/app/service/stands.service';

@Component({
  selector: 'app-stands',
  templateUrl: './stands.component.html',
  styleUrls: ['./stands.component.css']
})
export class StandsComponent implements OnInit {

  Stand: Stands[]

  public postForm: FormGroup
  constructor(
    private standsService:StandsService,
    public dialog: MatDialog,
    public formBuilder: FormBuilder,
    public router: Router
  ) {

    this.postForm = this.formBuilder.group({
      title: [''],
      autor: [''],
      image: [''],
      video: [''],
      votacion: [''],
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.standsService.addPost(this.postForm.value)
  }

  openDialog( title:string ) {
    const dialogRef = this.dialog.open(DialogViewComponent, {data:{titleA:title}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Events } from 'src/app/models/events';
import { EventsService } from 'src/app/service/events/events.service';
import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;
import { MatDialog } from '@angular/material/dialog';
import { DialogViewComponent } from '../dialog-view/dialog-view.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  Event: Events[]
  // nameEvent = ""
  // dateStar:Date
  // dateFin:Date
  // description = ""
  title1 ="Escenario 1" 
  title2 ="Escenario 2" 
  title3 ="Escenario 3" 

  public postForm: FormGroup
  constructor(
    private eventsService:EventsService,
    public dialog: MatDialog,
    public formBuilder: FormBuilder,
    public router: Router
  ) {

    this.postForm = this.formBuilder.group({
      title: [''],
      dateStar: [''],
      datefin: [''],
      description: [''],
      createDate: [Date()],
    })
   }

  
  ngOnInit(): void {
  }
  onSubmit(){
    this.eventsService.addPost(this.postForm.value)
  }

  // newEvent(){
  //   var newAuxEvent:Events = {}

  //   newAuxEvent.title=this.nameEvent
  //   newAuxEvent.dateStar=new Date(this.dateStar)
  //   newAuxEvent.datefin= new Date(this.dateFin)
  //   newAuxEvent.description=this.description
  //   newAuxEvent.createDate=new Date()
  //   this.eventsService.addEvent(newAuxEvent)

  // }



  openDialog( title:string ) {
    const dialogRef = this.dialog.open(DialogViewComponent, {data:{titleA:title}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { EventsService } from 'src/app/service/events/events.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  public editForm: FormGroup
  postRef: any

  constructor(
    public eventService: EventsService,
    public formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      title: [''],
      dateStar: [''],
      datefin: [''],
      description: [''],
    })  
   }

  ngOnInit(): void {
    const id  = this.activateRoute.snapshot.paramMap.get('id')
    this.eventService.getEventoById(id).subscribe ( res =>{
      this.postRef = res
      this.editForm = this.formBuilder.group({
        title: [this.postRef.title],
        dateStar: [this.postRef.dateStar],
        datefin: [this.postRef.datefin],
        description: [this.postRef.description],
        
      })
    })
    console.log(id)
  }

  onSubmit(){
    const id = this.activateRoute.snapshot.paramMap.get('id')
    this.eventService.updateEvento(this.editForm.value, id)

    this.router.navigate(['admin/listevento'])
  }

}

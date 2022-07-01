import { Component, OnInit } from '@angular/core';
import { Events, EventsId } from 'src/app/models/events';
import { EventsService } from 'src/app/service/events/events.service';


@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  Event: EventsId[]

  constructor(private eventService:EventsService) { }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((res)=>{
      this.Event = res.map((e)=> {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as EventsId)
        };
      });
      console.log(this.Event)
    });
  }

  deleteRow = (post) => this.eventService.deletePost(post)

}

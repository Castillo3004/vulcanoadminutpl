import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { ListEventComponent } from './list-event/list-event.component';
import { StandsComponent } from './stands/stands.component';

const routes: Routes = [
  {
    path:"",
    component: AdminComponent,
    children: [
      {
        path:"cevento",
        component: CreateEventComponent
      },
      {
        path:"listevento",
        component:ListEventComponent
      },
      {
        path:"listevento/editevent/:id",
        component: EditEventComponent
      },
      {
        path:"cstand",
        component: StandsComponent
      }
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

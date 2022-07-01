import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-view',
  templateUrl: './dialog-view.component.html',
  styleUrls: ['./dialog-view.component.css']
})
export class DialogViewComponent implements OnInit {

  images = [
    {path: "./../../../../assets/Recurso1.png"},
    {path: './../../../../assets/Recurso2.png'},
    {path: './../../../../assets/Recurso3.png'},
    {path: "./../../../../assets/Recurso1.png"},
    {path: './../../../../assets/Recurso2.png'},
    {path: './../../../../assets/Recurso3.png'},
    {path: "./../../../../assets/Recurso1.png"},
    {path: './../../../../assets/Recurso2.png'},
    {path: './../../../../assets/Recurso3.png'},
  ]

  constructor(@Inject(MAT_DIALOG_DATA) public data: {titleA: string}) { }

  ngOnInit(): void {
  }

}

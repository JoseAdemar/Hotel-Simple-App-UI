import { Component, OnInit } from '@angular/core';
import { RoomtypeService } from '../roomtype.service';
import { RoomType } from './roomtype';

@Component({
  selector: 'app-roomtype',
  templateUrl: './roomtype.component.html',
  styleUrls: ['./roomtype.component.css']
})
export class RoomtypeComponent implements OnInit {

  roomtype: RoomType;

  constructor(private service: RoomtypeService) {
      this.roomtype = new RoomType();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.saveRoomtype(this.roomtype)
    .subscribe(response => {
      console.log(response);
    })
  }

}

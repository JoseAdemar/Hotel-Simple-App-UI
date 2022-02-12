import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomType } from './roomtype/roomtype';

@Injectable({
  providedIn: 'root'
})
export class RoomtypeService {

  constructor( private http: HttpClient) {

   }

   saveRoomtype(roomtype: RoomType) : Observable<RoomType>{
    return this.http.post<RoomType>('http://localhost:8080/api/room-types', roomtype);
    
  }
}

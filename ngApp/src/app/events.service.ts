import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private _eventUrl = 'http://localhost:8080/api/events'
  private _specialeventUrl = 'http://localhost:8080/api/specials'
  constructor(
    private http:HttpClient
  ) { }

  getEvents(){
    return this.http.get<any>(this._eventUrl)
  }
  getSpecialEvents(){
    return this.http.get<any>(this._specialeventUrl)
  }

}

import { Component , OnInit} from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  events:any=[]
  constructor(
    private eventService : EventsService
  ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      res=>{this.events= res;
        console.log("data",this.events)},
      err=>{
        console.log("error",err)
      }
    )
  }
}

import { Component , OnInit} from '@angular/core';
import { EventsService } from '../events.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit{
  specailEvents:any=[]
  constructor(
    private specialEventService : EventsService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.specialEventService.getSpecialEvents().subscribe(
      res=>{this.specailEvents= res;
        console.log("specials",this.specailEvents)},
      err=>{
        if(err instanceof HttpErrorResponse){
          if (err.status === 401){
            this.router.navigate(['/login'])
          }
        }
        console.log("error",err)
      }
    )
  }
}

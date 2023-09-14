import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthService } from './auth.service';
import { EventsService } from './events.service';
import { TokenInterceptorService } from './token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService ,EventsService,{
    provide :HTTP_INTERCEPTORS,
    useClass  :TokenInterceptorService,
    multi  :true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

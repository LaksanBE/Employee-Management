import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeaderModule } from './leader/leader.module';
import { MemberModule } from './member/member.module';
import { AdminModule } from './admin/admin.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    LeaderModule,
    MemberModule,
    AdminModule,
    RouterModule.forRoot([


    ]),
  ],
  providers: [ AuthenticationGuard ],

bootstrap: [AppComponent]
})

export class AppModule { }

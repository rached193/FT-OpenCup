import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CircuitModule } from './circuit/circuit.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { OverviewModule } from './overview/overview.module';
import { TemtemModule } from './temtem/temtem.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CircuitComponent } from './circuit/circuit.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    CircuitModule,
    TournamentsModule,
    OverviewModule,
    TemtemModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

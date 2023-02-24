import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'flight-info', component: FlightInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

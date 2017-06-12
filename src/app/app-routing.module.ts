import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'calendar/:date',
    component: CalendarComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: '',
    redirectTo: '/calendar',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
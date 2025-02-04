import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentComponent },
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserBookingsPage } from './user-bookings.page';
import { ThemeModule } from '../theme/theme.module';

const routes: Routes = [
  {
    path: '',
    component: UserBookingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ThemeModule
  ],
  declarations: [UserBookingsPage]
})
export class UserBookingsPageModule { }

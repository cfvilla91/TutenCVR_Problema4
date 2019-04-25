import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.page.html',
  styleUrls: ['./user-bookings.page.scss'],
})
export class UserBookingsPage implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  userBookingsList: MatTableDataSource<any>;
  columnsToDisplay = [
    'bookingId',
    'fullName',
    'bookingTime',
    'streetAddress',
    'bookingPrice',
  ];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getBookingsByUserEmail('contacto@tutem.cl').subscribe(
      data => {
        this.userBookingsList = new MatTableDataSource(data);
        this.userBookingsList.paginator = this.paginator;
        this.userBookingsList.sort = this.sort;
      }
    );
  }

  JSONParse(json: string) {
    return JSON.parse(json);
  }

  applyFilter(filterValue: string) {
    this.userBookingsList.filter = filterValue.trim().toLowerCase();
  }

}

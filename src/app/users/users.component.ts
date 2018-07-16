import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Users } from './users.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Users
  error: string
  constructor(private usersService: UsersService) {
  }

  public ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: Users) => {
      this.users = users;
      this.error = '';
    }, (error) => this.error = error.message);
  }

}

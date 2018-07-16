import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from './users.service';
import {User} from './users.model';
import {MatSort, MatTableDataSource} from '@angular/material';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    displayedColumns: string[] = ['name', 'lastName', 'email', 'group'];
    dataSource;

    @ViewChild(MatSort) sort: MatSort;
    error: string;

    constructor(private usersService: UsersService) {
    }

    public ngOnInit(): void {
        this.dataSource = new MatTableDataSource([]);
        this.usersService.getUsers().subscribe((users: User[]) => {
            this.dataSource.data = users;
            this.dataSource.sort = this.sort;
            this.error = '';
        }, (error) => this.error = error.message);
    }

}

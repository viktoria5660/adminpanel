import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from './users.service';
import {User} from './users.model';
import {MatDialog, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';
import {AddEditUserDialogComponent} from './add-edit-user-dialog/add-edit-user.dialog.component';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    displayedColumns: string[] = ['name', 'lastName', 'email', 'group', 'actions'];
    dataSource;

    @ViewChild(MatSort) sort: MatSort;
    error: string;

    constructor(private usersService: UsersService,
                private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.dataSource = new MatTableDataSource([]);
        this.usersService.getUsers().subscribe((users: User[]) => {
            this.dataSource.data = users;
            this.dataSource.sort = this.sort;
            this.error = '';
        }, (error) => this.error = error.message);
    }

    public addUser(): void {
        const dialogRef: MatDialogRef<AddEditUserDialogComponent> = this.dialog.open(AddEditUserDialogComponent);
        dialogRef.afterClosed().subscribe((newUser: User) => {
            console.log(newUser);
            if (newUser) {
                // todo: add user
            }
        });
    }

    public editUser(user: User): void {
        const dialogRef: MatDialogRef<AddEditUserDialogComponent> = this.dialog.open(AddEditUserDialogComponent, {
            data: {user: user}
        });
        dialogRef.afterClosed().subscribe((editUser: User) => {
            console.log(editUser);
            if (editUser) {
                // todo: edit user
            }
        });
    }

    public deleteUser(user: User): void {
        // todo: delete user
    }

}

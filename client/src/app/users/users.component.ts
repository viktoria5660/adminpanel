import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UsersService} from './users.service';
import {User} from './users.model';
import {MatDialog, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';
import {AddEditUserDialogComponent} from './add-edit-user-dialog/add-edit-user.dialog.component';
import {Subscription} from 'rxjs/Rx';
import {DialogsService} from '../dialogs/dialogs.service';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ['name', 'lastName', 'email', 'company', 'group', 'coins',
        'created_at', 'updatedAt', 'isAdmin', 'actions'];
    dataSource;
    error: string;
    subscription: Subscription;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private usersService: UsersService, private dialogsService: DialogsService,
                private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.dataSource = new MatTableDataSource([]);
        this.dataSource.sort = this.sort;
        this.subscription = this.usersService.users$.subscribe((users: User[]) => {
            this.dataSource.data = users;
        });
    }

    public addUser(): void {
        const dialogRef: MatDialogRef<AddEditUserDialogComponent> = this.dialog.open(AddEditUserDialogComponent, {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe((newUser: User) => {
            // this.message = '';
            if (newUser) {
                this.usersService.addUser(newUser).subscribe((response) => {
                    this.dialogsService.alert('Success', 'User ' + response.name +  ' added', 'success');
                    // this.message = response.message;
                }, (error) => console.log(error));
            }

        });
    }

    public editUser(user: User): void {
        const dialogRef: MatDialogRef<AddEditUserDialogComponent> = this.dialog.open(AddEditUserDialogComponent, {
            width: '450px',
            data: {user: user}
        });
        dialogRef.afterClosed().subscribe((editUser: User) => {
            // console.log(editUser);
            if (editUser) {
                // todo: edit user
                this.usersService.updateUser(editUser).subscribe((response) => {
                    this.dialogsService.alert('Success', 'User updated ', 'success');
                    // this.message = response.message;
                    // console.log('INSIDE SET UPDATE USER COMPO');
                }, (error) => console.log(error));
            }
        });
    }

    public deleteUser(user: User): void {
        // todo: delete user
        this.usersService.deleteUser(user).subscribe((response) => {
            this.dialogsService.alert('Success', 'User deleted', 'success');
            // this.message = response.message;
            // console.log('INSIDE SET UPDATE USER COMPO', user);
        }, (error) => console.log(error));
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}

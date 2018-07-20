import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from './users.service';
import {User} from './users.model';
import {MatDialog, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';
import {AddEditUserDialogComponent} from './add-edit-user-dialog/add-edit-user.dialog.component';
import { FullCompany } from '../company/full.company.model';
import { Observable } from 'rxjs/Observable';
import { CompanyService } from '../company/company.service';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    displayedColumns: string[] = ['name', 'lastName', 'email', 'company' , 'group','coins','created_at','updatedAt','isAdmin', 'actions'];
    dataSource;

    @ViewChild(MatSort) sort: MatSort;
    error: string;

    companies$: Observable<FullCompany[]>;
    selectedCompany: FullCompany;

    constructor(private usersService: UsersService,
                private dialog: MatDialog,  private companyService: CompanyService) {
    }

    public ngOnInit(): void {
        this.dataSource = new MatTableDataSource([]);
        this.usersService.getUsers().subscribe((users: User[]) => {
            this.dataSource.data = users;
            this.dataSource.sort = this.sort;
            this.error = '';
        }, (error) => this.error = error.message);
        this.companies$ = this.companyService.companies$;
        this.companyService.companies$.subscribe((companies) => {
            this.selectedCompany = companies[0];
            });
    }

    public addUser(): void {
        const dialogRef: MatDialogRef<AddEditUserDialogComponent> = this.dialog.open(AddEditUserDialogComponent, {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe((newUser: User) => {
            // this.message = '';
            // console.log(newUser);
            if (newUser) {
                // todo: add user
                this.usersService.setUser(newUser).subscribe((response) => {
                    // this.message = response.message;
                    // console.log("INSIDE SET USER COMPO")
                },  (error) => console.log(error));
            }
        });
    }

    public editUser(user: User): void {
        const dialogRef: MatDialogRef<AddEditUserDialogComponent> = this.dialog.open(AddEditUserDialogComponent, {
            width: '450px',
            data: {user: user}
        });
        dialogRef.afterClosed().subscribe((editUser: User) => {
            console.log(editUser);
            if (editUser) {
                // todo: edit user
                this.usersService.updateUser(editUser).subscribe((response) => {
                    // this.message = response.message;
                    console.log("INSIDE SET UPDATE USER COMPO")
                },  (error) => console.log(error));
            }
        });
    }

    public deleteUser(user: User): void {
        // todo: delete user
        this.usersService.deleteUser(user).subscribe((response) => {
            // this.message = response.message;
            console.log("INSIDE SET UPDATE USER COMPO")
        },  (error) => console.log(error));
    }

}

import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ReportsService} from './reports.service';
import {Reports} from './reports.model';
import {MatDialog, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';
import {Subscription} from 'rxjs/Rx';
import {DialogsService} from '../dialogs/dialogs.service';


@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit{
    displayedColumns: string[] = ['name', 'email', 'company', 'bet', 'isCorrect','qid', 'qContent', 'actions'];
    dataSource;
    error: string;
    subscription: Subscription;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private reportsService: ReportsService, private dialogsService: DialogsService,
                private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.dataSource = new MatTableDataSource([]);
        this.dataSource.sort = this.sort;
        // this.subscription = this.usersService.users$.subscribe((users: User[]) => {
        //     this.dataSource.data = users;
        // });
    }

    
    // public deleteUser(user: User): void {
    //     // todo: delete user
    //     this.usersService.deleteUser(user).subscribe((response) => {
    //         this.dialogsService.alert('Success', 'User deleted', 'success');
    //         // this.message = response.message;
    //         // console.log('INSIDE SET UPDATE USER COMPO', user);
    //     }, (error) => console.log(error));
    // }

    // public ngOnDestroy(): void {
    //     this.subscription.unsubscribe();
    // }

}

import {Injectable} from '@angular/core';
import {ApiService} from '../_services/api.service';
import {Observable} from 'rxjs';
import {User} from './users.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Injectable()
export class UsersService {
    private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    users$: Observable<User[]> = this.usersSubject.asObservable();
    constructor(private apiService: ApiService) {
        this.loadAllUsers();
    }

    public updateUsers(newUsers: User[]): void {
        this.usersSubject.next(_.cloneDeep(newUsers));
    }

    public getUsersValue(): User[] {
        return _.cloneDeep(this.usersSubject.getValue());
    }

    public loadAllUsers(): void {
        this.getUsers().subscribe((users: User[]) => {
            this.updateUsers(users);
        });
    }



    public setUser(newUser: User): Observable<any> {
        // console.log(newUser);
        // console.log('INSIDE SET USER SERViCE');
        return this.apiService.setUser(newUser);
    }

    public updateUser(newUser: User): Observable<any> {
        console.log(newUser);
        // console.log('INSIDE SET USER SERViCE');
        return this.apiService.updateUser(newUser);
    }

    public deleteUser(newUser: User): Observable<any> {
        console.log(newUser);
        // console.log('INSIDE SET USER SERViCE');
        return this.apiService.deleteUser(newUser);
    }



    public getUsers(): Observable<User[]> {
        return this.apiService.getUsers();
    }


}

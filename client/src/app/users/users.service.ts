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



    public addUser(newUser: User): Observable<any> {
        const obs = this.apiService.addUser(newUser);
        obs.subscribe((res: User) => {
            const users: User[] = this.getUsersValue();
            newUser.created_at = res.created_at;
            newUser.updatedAt = res.updatedAt;
            users.push(newUser);
            this.updateUsers(users);
            console.log('New User Added!');
        }, (error) => {
            // handle error!!
        });

        return obs;
    }

    public updateUser(updateUser: User): Observable<any> {
        const users: User[] = this.getUsersValue();
        const index = users.findIndex((user: User) => user.id ===  updateUser.id);
        if (index > -1) {
            users[index] = updateUser;
            this.updateUsers(users);
        }

        return this.apiService.updateUser(updateUser);
    }

    public deleteUser(deleteUser: User): Observable<any> {
        const users: User[] = this.getUsersValue();
        const index = users.findIndex((user: User) => user.id ===  deleteUser.id);
        if (index > -1) {
            users.splice(index, 1);
            this.updateUsers(users);
        }

        return this.apiService.deleteUser(deleteUser);
    }



    public getUsers(): Observable<User[]> {
        return this.apiService.getUsers();
    }


}

import {Injectable} from '@angular/core';
import {ApiService} from '../_services/api.service';
import {Observable} from 'rxjs';
import {Reports} from './reports.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Injectable()
export class ReportsService {
    constructor(private apiService: ApiService) {
    }
    public getReports(){
        
    }
    
}



  
    // public deleteUser(deleteUser: User): Observable<any> {
    //     const users: User[] = this.getUsersValue();
    //     const index = users.findIndex((user: User) => user.id ===  deleteUser.id);
    //     if (index > -1) {
    //         users.splice(index, 1);
    //         this.updateUsers(users);
    //     }

    //     return this.apiService.deleteUser(deleteUser);
    // }



   



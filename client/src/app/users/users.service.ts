import { Injectable } from "@angular/core";
import { ApiService } from "../_services/api.service";
import { Observable } from "rxjs";
import { User } from "./users.model";




@Injectable()
export class UsersService {

    constructor(private apiService: ApiService) {}

    public getUsers(): Observable<User[]> {
        const obs = this.apiService.getUsers();
        obs.subscribe((users: User[]) => {

        }, (error) => console.log('User Service error: ' + error.message));

        return obs;
    }

}

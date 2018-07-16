import { Injectable } from "@angular/core";
import { ApiService } from "../_services/api.service";
import { Observable } from "rxjs";
import { Users } from "./users.model";




@Injectable()
export class UsersService {

    constructor(private apiService: ApiService) {}

    public getUsers() : Observable<Users> {
        const obs = this.apiService.getUsers();
        obs.subscribe((users: Users) => {

        }, (error) => console.log('Users Service error: ' + error.message));

        return obs;
    }

}
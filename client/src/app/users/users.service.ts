import { Injectable } from "@angular/core";
import { ApiService } from "../_services/api.service";
import { Observable } from "rxjs";
import { User } from "./users.model";
import {Company } from '../companies/company.model';



@Injectable()
export class UsersService {
    constructor(private apiService: ApiService) {}

    public getUsers(): Observable<User[]> {
        const obs = this.apiService.getUsers();
        obs.subscribe((users: User[]) => {

        }, (error) => console.log('User Service error: ' + error.message));

        return obs;
    }

    public setUser(newUser: User): Observable<any> {
        // console.log(newUser);
        // console.log("INSIDE SET USER SERViCE");
        return this.apiService.setUser(newUser);
    }
    public updateUser(newUser: User): Observable<any> {
        console.log(newUser);
        // console.log("INSIDE SET USER SERViCE");
        return this.apiService.updateUser(newUser);
    }
    public deleteUser(newUser: User): Observable<any> {
        console.log(newUser);
        // console.log("INSIDE SET USER SERViCE");
        return this.apiService.deleteUser(newUser);
        
    }
    
    public getAllFullSettings(): Observable<Company[]> {
        const obs = this.apiService.getAllCompanies();
        obs.subscribe((settings: Company[]) => {

        }, (error) => console.log('User Service error: ' + error.message));

        return obs;
    }

}

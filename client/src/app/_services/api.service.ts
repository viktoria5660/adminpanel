import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, throwError } from "rxjs";
import { Settings } from "../settings/settings.model";
import { publishLast, refCount, catchError } from "rxjs/operators";
import { User } from "../users/users.model";

const API_URL: string = environment.apiUrl
const company = 'HP'
@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {
    }

    private handleError(error: HttpErrorResponse) {
        return throwError(error)
    }

    public getSettings(): Observable<Settings> {
        return this.http.post<Settings>(API_URL + '/settings/getSttingsByCompany', {'companyName': company})
        .pipe(publishLast(), refCount(), catchError(this.handleError))
    }

    public updateSettings(settings: Settings): Observable<any> {
        // todo: put real api
        return this.http.post<Settings>(API_URL + '/settings/updateSettingsByCompany', settings)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(API_URL + '/users')
        .pipe(publishLast(), refCount(), catchError(this.handleError))
    }
}

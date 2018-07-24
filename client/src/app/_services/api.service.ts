import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, publishLast, refCount} from 'rxjs/operators';
import {User} from '../users/users.model';
import {Question} from '../questions/questions.model';
import {FullSettings} from '../settings/fullsettings.model';

const API_URL: string = environment.apiUrl;
const company = 'HP';
@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {
    }

    private handleError(error: HttpErrorResponse) {
        return throwError(error);
    }

    // public getSettings(): Observable<Settings> {
    //     return this.http.post<Settings>(API_URL + '/settings/getSttingsByCompany', {'companyName': company})
    //     .pipe(publishLast(), refCount(), catchError(this.handleError))
    // }
    public getAllFullSettings(): Observable<FullSettings[]> {
        return this.http.get<FullSettings[]>(API_URL + '/settings/getAllFullSettings')
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }
    
    public getAllFullCompanys(): Observable<any> {
        return this.http.get<FullSettings[]>(API_URL + '/settings/getAllFullCompanys')
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }
    // public updateSettings(settings: FullSettings): Observable<any> {
    //     return this.http.put<FullSettings>(API_URL + '/settings', settings)
    //         .pipe(publishLast(), refCount(), catchError(this.handleError));
    // }
    public updateFullSettings(settings: FullSettings): Observable<any> {
        console.log("APISERVICE");
        return this.http.put(API_URL + '/settings/updateFullSettings', settings)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public addSettings(settings: FullSettings): Observable<any> {
        console.log('INSIDE THE addSetting API SERVICE',settings);
        return this.http.post<FullSettings>(API_URL + '/settings/createNewFullSettings', settings)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public deleteSettings(settings: any): Observable<any> {
        console.log('INSIDE THE deleteSetting API SERVICE',settings);
        return this.http.post(API_URL + '/settings/deleteFullSettings', settings)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(API_URL + '/users')
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public setUser(user: User): Observable<any> {
        // console.log('INSIDE THE POST')
        return this.http.post<User>(API_URL + '/users/createNewUser', user)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public updateUser(user: User): Observable<any> {
        console.log('INSIDE THE update');
        return this.http.put<User>(API_URL + '/users/updateUserFromAdmin', user)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public deleteUser(user: User): Observable<any> {
        console.log('INSIDE THE deleteUser');
        return this.http.post<User>(API_URL + '/users/deleteUser', user)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public getQuestionsByCompany(companyName: string): Observable<Question[]> {
        return this.http.get<Question[]>(API_URL + '/question/getQuestionsByCompany/' + companyName)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public deleteQuestion(question: Question): Observable<any> {
        console.log('INSIDE THE deleteQuestion')
        return this.http.post<Question>(API_URL + '/question/deleteQ', question)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }
    public addQuestion(question: Question): Observable<any> {
        console.log('INSIDE THE addQuestion',question)
        return this.http.post<Question>(API_URL + '/question/enterQ', question)
            .pipe(publishLast(), refCount(), catchError(this.handleError));

    }
    public editQuestion(question: Question): Observable<any> {
        console.log('INSIDE THE addQuestion',question)
        return this.http.put<Question>(API_URL + '/question/updateQ', question)
            .pipe(publishLast(), refCount(), catchError(this.handleError));

    }
}

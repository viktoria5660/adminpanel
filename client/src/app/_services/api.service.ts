import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, publishLast, refCount} from 'rxjs/operators';
import {User} from '../users/users.model';
import {Question} from '../questions/questions.model';
import {Company} from '../companies/company.model';

const API_URL: string = environment.apiUrl;
@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {
    }

    private handleError(error: HttpErrorResponse) {
        return throwError(error);
    }
    public getAllCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(API_URL + '/settings/getAllCompanies')
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public updateCompany(settings: Company): Observable<any> {
        return this.http.put(API_URL + '/settings/updateCompany', settings)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public addCompany(company: Company): Observable<any> {
        return this.http.post<Company>(API_URL + '/settings/createNewFullSettings', company)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public deleteCompany(companyName: string): Observable<any> {
        return this.http.post(API_URL + '/settings/deleteFullSettings', {companyName})
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(API_URL + '/users')
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public addUser(user: User): Observable<any> {
        return this.http.post<User>(API_URL + '/users/createNewUser', user)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public updateUser(user: User): Observable<any> {
        return this.http.put<User>(API_URL + '/users/updateUserFromAdmin', user)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public deleteUser(user: User): Observable<any> {
        return this.http.post<User>(API_URL + '/users/deleteUser', user)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public getQuestionsByCompany(companyName: string): Observable<Question[]> {
        return this.http.get<Question[]>(API_URL + '/question/getQuestionsByCompany/' + companyName)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }
    public getAllQuestions(): Observable<Question[]> {
        return this.http.get<Question[]>(API_URL + '/question/get/getAllQuestions/')
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }

    public deleteQuestion(question: Question): Observable<any> {
        return this.http.post<Question>(API_URL + '/question/deleteQ', question)
            .pipe(publishLast(), refCount(), catchError(this.handleError));
    }
    public addQuestion(question: Question): Observable<any> {
        return this.http.post<Question>(API_URL + '/question/enterQ', question)
            .pipe(publishLast(), refCount(), catchError(this.handleError));

    }
    public editQuestion(question: Question): Observable<any> {
        return this.http.put<Question>(API_URL + '/question/updateQ', question)
            .pipe(publishLast(), refCount(), catchError(this.handleError));

    }
}

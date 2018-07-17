import {Injectable} from '@angular/core';
import {ApiService} from '../_services/api.service';
import {Observable} from 'rxjs/Observable';
import {Question} from './questions.model';

@Injectable()
export class QuestionsService {

    constructor(private apiService: ApiService) {}

    public getQuestionsByCompany(companyName: string): Observable<Question[]> {
        const obs = this.apiService.getQuestionsByCompany(companyName);
        obs.subscribe((questions: Question[]) => {

        }, (error) => console.log('Questions Service error: ' + error.message));

        return obs;
    }

}

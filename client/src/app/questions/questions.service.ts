import {Injectable} from '@angular/core';
import {ApiService} from '../_services/api.service';
import {Observable} from 'rxjs/Observable';
import {Question} from './questions.model';

@Injectable()
export class QuestionsService {

    constructor(private apiService: ApiService) {}

    public getQuestions(): Observable<Question[]> {
        const obs = this.apiService.getQuestions();
        obs.subscribe((questions: Question[]) => {

        }, (error) => console.log('Questions Service error: ' + error.message));

        return obs;
    }

}

import {Injectable} from '@angular/core';
import {ApiService} from '../_services/api.service';
import {Observable} from 'rxjs/Observable';
import {Question} from './questions.model';
import * as _ from 'lodash';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class QuestionsService {
    private questionsSubject: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);
    questions$: Observable<Question[]> = this.questionsSubject.asObservable();
    constructor(private apiService: ApiService) {
        this.loadQuestions();
    }
    public updateQuestions(newQuestions: Question[]): void {
        this.questionsSubject.next(_.cloneDeep(newQuestions));
    }

    public getQuestions(): Question[] {
        return _.cloneDeep(this.questionsSubject.getValue());
    }

    private loadQuestions(): void {
        // this.apiService.getQuestionsByCompany(companyName: string).subscribe((question:Question[]) => {
        //     this.updateQuestions(question);
        // }, (error) => {

        // });
    }

    public getQuestionsByCompany(companyName: string): Observable<Question[]> {
        const obs = this.apiService.getQuestionsByCompany(companyName);
        obs.subscribe((questions: Question[]) => {

        }, (error) => console.log('Questions Service error: ' + error.message));

        return obs;
    }
    public deleteQuestion(newQuestion: Question): Observable<any> {
        console.log(newQuestion);
        // console.log("INSIDE SET USER SERViCE");
        return this.apiService.deleteQuestion(newQuestion);
    }
    public addQuestion(newQuestion: Question): Observable<any> {
        console.log("INSIDE Q SERVICE ADD Q",newQuestion);
        // console.log("INSIDE SET USER SERViCE");
        return this.apiService.addQuestion(newQuestion);
    }
    public editQuestion(newQuestion: Question): Observable<any> {
        console.log("INSIDE Q SERVICE edit Q",newQuestion);
        // console.log("INSIDE SET USER SERViCE");
        return this.apiService.editQuestion(newQuestion);
    }

}

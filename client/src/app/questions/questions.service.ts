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
    }

    public updateQuestions(newQuestions: Question[]): void {
        this.questionsSubject.next(_.cloneDeep(newQuestions));
    }

    public getQuestionsValue(): Question[] {
        return _.cloneDeep(this.questionsSubject.getValue());
    }

    public getQuestionsByCompany(companyName: string): Observable<Question[]> {
        const obs = this.apiService.getQuestionsByCompany(companyName);
        obs.subscribe((questions: Question[]) => {
            this.updateQuestions(questions);
        }, (error) => console.log('Questions Service error: ' + error.message));

        return obs;
    }

    public deleteQuestion(deleteQuestion: Question): Observable<any> {
        const questions: Question[] = this.getQuestionsValue();
        const index = questions.findIndex((question: Question) => question.id === deleteQuestion.id);
        if (index > -1) {
            questions.splice(index, 1);
            this.updateQuestions(questions);
        }
        return this.apiService.deleteQuestion(deleteQuestion);
    }

    public addQuestion(newQuestion: Question): Observable<any> {
        const obs = this.apiService.addQuestion(newQuestion);
        obs.subscribe((res: Question) => {
            const questions: Question[] = this.getQuestionsValue();
            questions.push(res);
            this.updateQuestions(questions);
        });

        return obs;
    }

    public editQuestion(newQuestion: Question): Observable<any> {
        const questions: Question[] = this.getQuestionsValue();
        const index = questions.findIndex((question: Question) => question.id === newQuestion.id);
        console.log(newQuestion.id);
        console.log(questions);
        console.log(index);
        if (index > -1) {
            questions[index] = newQuestion;
            this.updateQuestions(questions);
        }
        return this.apiService.editQuestion(newQuestion);
    }

}

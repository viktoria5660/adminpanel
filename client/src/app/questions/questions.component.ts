import {Component, OnInit, ViewChild} from '@angular/core';
import {QuestionsService} from './questions.service';
import {Question} from './questions.model';
import {MatDialog, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';
import {AddEditQuestionDialogComponent} from './add-edit-question-dialog/add-edit-question.dialog.component';
import {Observable} from 'rxjs/Observable';
import { Company } from '../companies/company.model';
import { Subject } from 'rxjs';
import { CompaniesService } from '../companies/companies.service';


@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
    displayedColumns: string[] = ['picture', 'difficulty', 'content', 'answers', 'actions'];
    dataSource;
    companies$: Observable<Company[]>;
    selectedCompany: Company;
    fullSettingsArr: Company[];
    fullSettingsArrSubject: Subject<Company[]>;

    @ViewChild(MatSort) sort: MatSort;
    error: string;

    constructor(private questionsService: QuestionsService,
                private settingsService: CompaniesService,
                private dialog: MatDialog) {
                    this.selectedCompany = {} as Company;
                    this.fullSettingsArrSubject = new Subject<Company[]>();
    }

    public ngOnInit(): void {
        this.dataSource = new MatTableDataSource([]);
        this.companies$ = this.settingsService.companies$;
        this.settingsService.companies$.subscribe((companies) => {
            console.log(companies)
            this.selectedCompany = companies[0];
            this.getQuestions();
        });
        // this.getQuestions();
    
    }

    public getQuestions(): void {
        this.questionsService.getQuestionsByCompany(this.selectedCompany.companyName).subscribe((questions: Question[]) => {
            this.dataSource.data = questions;
            this.dataSource.sort = this.sort;
            this.error = '';

        }, (error) => this.error = error.message);
    }

    public addQuestion(): void {
        const dialogRef: MatDialogRef<AddEditQuestionDialogComponent> = this.dialog.open(AddEditQuestionDialogComponent, {
            maxWidth: '700px'
        });
        dialogRef.afterClosed().subscribe((newQuestion: Question) => {
            console.log('dialog component closed', newQuestion);
            if (newQuestion) {
                // todo: add question

                this.questionsService.addQuestion(newQuestion).subscribe((response) => {
                    // this.message = response.message;
                    // console.log('INSIDE SET USER COMPO')
                }, (error) => console.log(error));
            }
        });
    }

    public editQuestion(question: Question): void {
        console.log('open editQuestion dialog');
        const dialogRef: MatDialogRef<AddEditQuestionDialogComponent> = this.dialog.open(AddEditQuestionDialogComponent, {
            maxWidth: '700px',
            data: {question: question}
        });
        dialogRef.afterClosed().subscribe((editQuestion: Question) => {
            console.log(editQuestion);
            if (editQuestion) {
                // todo: edit question
                this.questionsService.editQuestion(editQuestion).subscribe((response) => {
                    // this.message = response.message;
                    console.log('INSIDE edit Q', editQuestion);
                }, (error) => console.log(error));

            }
        });
    }

    public deleteQuestion(question: Question): void {
        // todo: delete question
        this.questionsService.deleteQuestion(question).subscribe((response) => {
            // this.message = response.message;
            console.log('INSIDE delet Q');
        }, (error) => console.log(error));
    }

    public getDifficultyString(difficulty: number): string {
        let res: string;
        switch (difficulty) {
            case 1:
                res = 'Easy';
                break;
            case 2:
                res = 'Medium';
                break;
            case 3:
                res = 'Hard';
                break;
        }

        return res;
    }

}

import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {QuestionsService} from './questions.service';
import {Question} from './questions.model';
import {MatDialog, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';
import {AddEditQuestionDialogComponent} from './add-edit-question-dialog/add-edit-question.dialog.component';
import {Observable} from 'rxjs/Observable';
import {Company} from '../companies/company.model';
import {CompaniesService} from '../companies/companies.service';
import {Subscription} from 'rxjs/Rx';


@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ['picture', 'difficulty', 'content', 'answers', 'actions'];
    dataSource;
    companies$: Observable<Company[]>;
    subscription: Subscription;
    selectedCompany: Company;
    isDefaultSelectedCompanySet = false;
    questions: Question[];
    @ViewChild(MatSort) sort: MatSort;
    error: string;

    constructor(private questionsService: QuestionsService,
                private companiesService: CompaniesService,
                private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.dataSource = new MatTableDataSource([]);
        this.companies$ = this.companiesService.companies$;
        this.subscription = this.companiesService.companies$.subscribe((companies) => {
            if (companies.length > 0) {
                if (!this.isDefaultSelectedCompanySet) {
                    this.selectedCompany = companies[0];
                    this.getQuestions();
                    this.isDefaultSelectedCompanySet = true;
                }
            }
        });

        this.questionsService.questions$.subscribe((questions: Question[]) => {
            this.dataSource.data = questions;
            this.dataSource.sort = this.sort;
            this.error = '';

        }, (error) => this.error = error.message);
    }

    public getQuestions(): void {
        this.questionsService.getQuestionsByCompany(this.selectedCompany.companyName);
    }

    public addQuestion(): void {
        const dialogRef: MatDialogRef<AddEditQuestionDialogComponent> = this.dialog.open(AddEditQuestionDialogComponent, {
            maxWidth: '700px'
        });
        dialogRef.afterClosed().subscribe((newQuestion: Question) => {
            console.log('dialog component closed', newQuestion);
            if (newQuestion) {
                this.questionsService.addQuestion(newQuestion).subscribe((response) => {
                    // todo: open success alert
                }, (error) => {
                    // todo: open fail alert
                    console.log(error);
                });
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
                this.questionsService.editQuestion(editQuestion).subscribe((response) => {
                    // todo: open success alert
                }, (error) => {
                    // todo: open error alert
                    console.log(error);
                });

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

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}

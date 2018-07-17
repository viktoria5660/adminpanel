import {Component, OnInit, ViewChild} from '@angular/core';
import {QuestionsService} from './questions.service';
import {Question} from './questions.model';
import {MatDialog, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';
import {AddEditQuestionDialogComponent} from './add-edit-question-dialog/add-edit-question.dialog.component';
import {Company} from '../company/company.model';


@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
    displayedColumns: string[] = ['picture', 'difficulty', 'content', 'answers', 'actions'];
    dataSource;

    @ViewChild(MatSort) sort: MatSort;
    error: string;

    companies = [
        {id: 1, name: 'HP'},
        {id: 2, name: 'DELL'}
    ]; // todo: get from api
    selectedCompany: Company;
    constructor(private questionsService: QuestionsService,
                private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.selectedCompany = this.companies[0];
        this.dataSource = new MatTableDataSource([]);
        this.getQuestions();
    }

    public getQuestions(): void {
        this.questionsService.getQuestionsByCompany(this.selectedCompany.name).subscribe((questions: Question[]) => {
            this.dataSource.data = questions;
            this.dataSource.sort = this.sort;
            this.error = '';
        }, (error) => this.error = error.message);
    }

    public addQuestion(): void {
        const dialogRef: MatDialogRef<AddEditQuestionDialogComponent> = this.dialog.open(AddEditQuestionDialogComponent, {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe((newQuestion: Question) => {
            console.log(newQuestion);
            if (newQuestion) {
                // todo: add question
            }
        });
    }

    public editQuestion(question: Question): void {
        const dialogRef: MatDialogRef<AddEditQuestionDialogComponent> = this.dialog.open(AddEditQuestionDialogComponent, {
            width: '450px',
            data: {question: question}
        });
        dialogRef.afterClosed().subscribe((editQuestion: Question) => {
            console.log(editQuestion);
            if (editQuestion) {
                // todo: edit question
            }
        });
    }

    public deleteQuestion(question: Question): void {
        // todo: delete question
        this.questionsService.deleteQuestion(question).subscribe((response) => {
            // this.message = response.message;
            console.log("INSIDE delet Q")
        },  (error) => console.log(error));
    }

    public getDifficultyString(difficulty: number): string {
        let res: string;
        switch (difficulty) {
            case 1: res = 'Easy'; break;
            case 2: res = 'Medium'; break;
            case 3: res = 'Hard'; break;
        }

        return res;
    }

}

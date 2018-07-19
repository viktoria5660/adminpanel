import {Component, OnInit, ViewChild} from '@angular/core';
import {QuestionsService} from './questions.service';
import {Question} from './questions.model';
import {MatDialog, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';
import {AddEditQuestionDialogComponent} from './add-edit-question-dialog/add-edit-question.dialog.component';
import {FullCompany} from '../company/full.company.model';
import {CompanyService} from '../company/company.service';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
    displayedColumns: string[] = ['picture', 'difficulty', 'content', 'answers', 'actions'];
    dataSource;
    companies$: Observable<FullCompany[]>;
    selectedCompany: FullCompany;

    @ViewChild(MatSort) sort: MatSort;
    error: string;
    
    // companies = [
    //     {id: 1, name: 'HP'},
    //     {id: 2, name: 'DELL'}
    // ]; // todo: get from api
    // selectedCompany: Company;
    constructor(private questionsService: QuestionsService,
               private companyService: CompanyService,
                private dialog: MatDialog) {
    }
    
    public ngOnInit(): void {
        this.companies$ = this.companyService.companies$;
        this.companyService.companies$.subscribe((companies) => {
        this.selectedCompany = companies[0];
        
            
        });
        
        this.dataSource = new MatTableDataSource([]);
        this.getQuestions();
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
            console.log("INSIDE DIALOG COMPONENT",newQuestion);
            if (newQuestion) {
                
                // todo: add question

                this.questionsService.addQuestion(newQuestion).subscribe((response) => {
                    // this.message = response.message;
                    // console.log("INSIDE SET USER COMPO")
                },  (error) => console.log(error));
            }
        });
    }
    
    public editQuestion(question: Question): void {
        console.log("INSIDE COMPO editQuestion ")
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
                    console.log("INSIDE edit Q",editQuestion )
                },  (error) => console.log(error));
                
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

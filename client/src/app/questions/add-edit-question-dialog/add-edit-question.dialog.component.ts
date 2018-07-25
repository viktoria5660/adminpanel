import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Question} from '../questions.model';
import {Answer} from '../_models/answer.model';
import {Observable} from 'rxjs/Observable';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { Company } from '../../companies/company.model';
import { CompaniesService } from '../../companies/companies.service';

const URL = 'http://localhost:3000/upload/testupload';

@Component({
    selector: 'app-add-edit-question',
    templateUrl: './add-edit-question.dialog.component.html',
    styleUrls: ['./add-edit-question.dialog.component.scss']
})
export class AddEditQuestionDialogComponent implements OnInit {
    form: FormGroup;
    question: Question;
    editMode: boolean;
    companies$: Observable<Company[]>;
    selectedCompany: Company;
    constructor(
                private dialogRef: MatDialogRef<AddEditQuestionDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, private companiesService: CompaniesService,
                private formBuilder: FormBuilder) {
    }
    public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
    ngOnInit() {
        this.companies$ = this.companiesService.companies$;
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
             console.log('ImageUpload:uploaded:', item, status, response);
             alert('File uploaded successfully');
         };

        if (this.data && this.data.question) {
            this.editMode = true;
            this.question = this.data.question;
        } else {
            this.editMode = false;
            this.question = new Question();
        }

        this.buildForm();
    }

    public buildForm(): void {
        const answers = [];
        if (this.question.answers) {
            this.question.answers.forEach((answer: Answer) => {
                answers.push(this.createAnswer(answer));
            });
        } else {
            for (let i = 0; i < 4; i++) {
                answers.push(this.createAnswer());
            }
        }

        this.form = this.formBuilder.group({
            picture: [this.question.picture, Validators.required],
            template: [this.question.template, Validators.required],
            company: [this.question.company, Validators.required],
            groups: [this.question.groups, Validators.required],
            content: [this.question.content, Validators.required],
            difficulty: [this.question.difficulty, Validators.required],
            answers: this.formBuilder.array(answers)
        });
    }

    createAnswer(answer?: Answer): FormGroup {
        return this.formBuilder.group({
            content: [answer ? answer.content : '', Validators.required],
            feedback: [answer ? answer.feedback : '', Validators.required],
            iscorrect: [answer ? answer.iscorrect : false, Validators.required,],
        });
    }

    public onSubmit(): void {
        this.question.picture = this.form.value.picture;
        this.question.template = this.form.value.template;
        this.question.company = this.form.value.company;
        this.question.groups = this.form.value.groups;
        this.question.content = this.form.value.content;
        this.question.difficulty = this.form.value.difficulty;
        this.question.answers = this.form.value.answers;
        this.dialogRef.close(this.question);
    }

}

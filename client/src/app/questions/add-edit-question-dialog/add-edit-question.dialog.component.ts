import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Question} from '../questions.model';
import {Answer} from '../_models/answer.model';
import {Observable} from 'rxjs/Observable';
import {CompanyService} from '../../company/company.service';
import {FullCompany} from '../../company/full.company.model';

@Component({
    selector: 'app-add-edit-question',
    templateUrl: './add-edit-question.dialog.component.html',
    styleUrls: ['./add-edit-question.dialog.component.scss']
})
export class AddEditQuestionDialogComponent implements OnInit {
    form: FormGroup;
    question: Question;
    editMode: boolean;
    companies$: Observable<FullCompany[]>;

    constructor(private companyService: CompanyService,
                private dialogRef: MatDialogRef<AddEditQuestionDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.companies$ = this.companyService.companies$;

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
            company: [this.question.company, Validators.required],
            groups: [this.question.groups, Validators.required],
            content: [this.question.content, Validators.required],
            answers: this.formBuilder.array(answers)
        });
    }

    createAnswer(answer?: Answer): FormGroup {
        return this.formBuilder.group({
            content: [answer ? answer.content : '', Validators.required],
            feedback: [answer ? answer.feedback : '', Validators.required],
            iscorrect: [answer ? answer.iscorrect : '', Validators.required],
        });
    }

    public onSubmit(): void {
        this.dialogRef.close(this.form.value);
    }

}

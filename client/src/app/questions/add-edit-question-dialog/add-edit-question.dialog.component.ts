import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Question} from '../questions.model';
import {Answer} from '../_models/answer.model';

@Component({
    selector: 'app-add-edit-question',
    templateUrl: './add-edit-question.dialog.component.html',
    styleUrls: ['./add-edit-question.dialog.component.scss']
})
export class AddEditQuestionDialogComponent implements OnInit {
    form: FormGroup;
    question: Question;
    editMode: boolean;

    constructor(private dialogRef: MatDialogRef<AddEditQuestionDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
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
        this.question.answers.forEach((answer: Answer) => {
            answers.push({
                content: [answer.content, Validators.required],
                feedback: [answer.feedback, Validators.required],
                iscorrect: [answer.iscorrect, Validators.required],
            });
        })
        this.form = this.formBuilder.group({
            picture: [this.question.picture, Validators.required],
            company: [this.question.company, Validators.required],
            category: [this.question.category, Validators.required],
            coins: [this.question.coins, Validators.required],
            content: [this.question.content, Validators.required],
            answers: this.formBuilder.array(answers)
        });
    }

    public onSubmit(): void {
        this.dialogRef.close(this.form.value);
    }

}

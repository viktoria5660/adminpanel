import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-settings',
    templateUrl: './add-company.dialog.component.html',
    styleUrls: ['./add-company.dialog.component.scss']
})
export class AddCompanyDialogComponent implements OnInit {
    form: FormGroup;
    constructor(private dialogRef: MatDialogRef<AddCompanyDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.buildForm();
    }

    public buildForm(): void {
        this.form = this.formBuilder.group({
            companyName: [, Validators.required],
            gameOp: [],
            defaultCoins: [, Validators.required],
            defaultCorrectFB: [, Validators.required],
            defaultInCorrectFB : [, Validators.required],
            timeLimitForQ: [, Validators.required],
            lowToMed: [, Validators.required ],
            medToHigh: [, Validators.required],
            timetToSendToLogin: [, Validators.required],
            EnableGame: [, Validators.required],
            minBet: [, Validators.required],
            groups: [, Validators.required]

        });
    }

    public onSubmit(): void {
        this.dialogRef.close(this.form.value);
    }

}

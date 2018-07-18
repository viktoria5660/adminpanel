import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-settings',
    templateUrl: './add-settings.dialog.component.html',
    styleUrls: ['./add-settings.dialog.component.scss']
})
export class AddSettingsDialogComponent implements OnInit {
    form: FormGroup;
    constructor(private dialogRef: MatDialogRef<AddSettingsDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.buildForm();
    }

    public buildForm(): void {
        this.form = this.formBuilder.group({
            companyName: [, Validators.required],
            defaultCoins: [, Validators.required],
            defaultCorrectFB: [, Validators.required],
            defaultInCorrectFB : [, Validators.required],
            timeLimitForQ: [, Validators.required],
            lowToMed: [, Validators.required ],
            medToHigh: [, Validators.required],
            timetToSendToLogin: [, Validators.required],
            EnableGame: [, Validators.required],
            minBet: [, Validators.required],
            gameOp: [, Validators.required]
        });
    }

    public onSubmit(): void {
        this.dialogRef.close(this.form.value);
    }

}

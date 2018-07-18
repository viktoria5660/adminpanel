import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Settings} from '../settings.model';

@Component({
    selector: 'app-add-settings',
    templateUrl: './add-settings.dialog.component.html',
    styleUrls: ['./add-settings.dialog.component.scss']
})
export class AddSettingsDialogComponent implements OnInit {
    form: FormGroup;
    settings: Settings;
    constructor(private dialogRef: MatDialogRef<AddSettingsDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        if (this.data && this.data.settings) {
            this.settings = this.data.settings;

        }
        this.buildForm();
    }

    public buildForm(): void {
        this.form = this.formBuilder.group({
            companyName: [this.settings.companyName, Validators.required],
            defaultCoins: [this.settings.defaultCoins, Validators.required],
            defaultCorrectFB: [this.settings.defaultCorrectFB, Validators.required],
            defaultInCorrectFB : [this.settings.defaultInCorrectFB,Validators.required],
            timeLimitForQ: [this.settings.timeLimitForQ, Validators.required],
            lowToMed : [this.settings.lowToMed ,Validators.required ],
            medToHigh: [this.settings.medToHigh, Validators.required],
            timetToSendToLogin: [this.settings.timetToSendToLogin, Validators.required],
            EnableGame : [this.settings.EnableGame, Validators.required],
            minBet : [this.settings.minBet, Validators.required],
            gameOp :[this.settings.gameOp, Validators.required]
        });
    }

    public onSubmit(): void {
        this.dialogRef.close(this.form.value);
    }

}

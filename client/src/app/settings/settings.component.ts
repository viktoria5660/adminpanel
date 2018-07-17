import {Component, OnInit} from '@angular/core';
import {SettingsService} from './settings.service';
import {Settings} from './settings.model';
import {AddSettingsDialogComponent} from './add-settings-dialog/add-settings.dialog.component';
import {MatDialog, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Company} from '../company/company.model';
import { ApiService } from '../_services/api.service';
import { FullCompany } from '../company/full.company.model';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    error: string;
    message: string;
    form: FormGroup;
    companies : FullCompany[];
    selectedCompany: FullCompany;
    constructor(private settingsService: SettingsService,private apiService:ApiService,
                private fb: FormBuilder, private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.apiService.getCompanies().subscribe((companies)=> this.companies = companies);

    }

    public addSettings(): void {
        const dialogRef: MatDialogRef<AddSettingsDialogComponent> = this.dialog.open(AddSettingsDialogComponent, {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe((newSettings: Settings) => {
            // this.message = '';
            // console.log(newUser);
            if (newSettings) {
                // todo: add user
                this.settingsService.addSettings(newSettings).subscribe((response) => {
                    // this.message = response.message;
                    // console.log("INSIDE SET USER COMPO")
                },  (error) => console.log(error));
            }
        });
    }

    public buildForm(): void {
        this.form = this.fb.group({
            companyName: [this.selectedCompany.settings.companyName, Validators.required],
            defaultCoins: [this.selectedCompany.settings.defaultCoins, Validators.required],
            defaultCorrectFB: [this.selectedCompany.settings.defaultCorrectFB, Validators.required],
            defaultInCorrectFB: [this.selectedCompany.settings.defaultInCorrectFB, Validators.required],
            timeLimitForQ : [this.selectedCompany.settings.timeLimitForQ, Validators.required ],
            lowToMed: [this.selectedCompany.settings.lowToMed, Validators.required ],
            medToHigh: [this.selectedCompany.settings.medToHigh, Validators.required],
            timetToSendToLogin: [this.selectedCompany.settings.timetToSendToLogin, Validators.required ],
            EnableGame : [this.selectedCompany.settings.EnableGame, Validators.required],
            minBet : [this.selectedCompany.settings.minBet, Validators.required ],
            gameOp: [this.selectedCompany.settings.gameOp, Validators.required]

        });
    }

    public changeCompany(): void {
        // todo: get selected company from settings api
        // this.settingsService.getSettingsByCompany(this.selectedCompany.id).subscribe((settings: Settings) => {
        //     this.error = '';
        //     this.buildForm(settings[0]);
        // }, (error) => this.error = error.message);
    }

    public onSubmit(): void {
        this.message = '';
        this.settingsService.updateSettings(this.form.value).subscribe((response) => {
            this.message = response.message;
        },  (error) => this.message = error.message);
    
    }

}


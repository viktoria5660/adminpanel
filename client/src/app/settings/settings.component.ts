import {Component, OnInit} from '@angular/core';
import {SettingsService} from './settings.service';
import {Settings} from './settings.model';
import {AddSettingsDialogComponent} from './add-settings-dialog/add-settings.dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FullCompany} from '../company/full.company.model';
import {CompanyService} from '../company/company.service';
import {Observable} from 'rxjs/Observable';
import { AddGroupsDialogComponent } from './add-groups-dialog/add-groups.dialog.component';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    error: string;
    message: string;
    form: FormGroup;
    companies$: Observable<FullCompany[]>;
    selectedCompany: FullCompany;
    newSettings: any;

    constructor(private settingsService: SettingsService,
                private companyService: CompanyService,
                private fb: FormBuilder, private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.companies$ = this.companyService.companies$;
        this.companyService.companies$.subscribe((companies) => {
            this.selectedCompany = companies[0];
            this.buildForm();
        });
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
                    this.newSettings = response;
                   
                }, (error) => console.log(error));
            }
        });
    }

    public addGroups(): void {
        const dialogRef: MatDialogRef<AddGroupsDialogComponent> = this.dialog.open(AddGroupsDialogComponent, {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe((newGroups) => {
            // this.message = '';
            // console.log(newUser);
            if (newGroups ) {
               
                newGroups.groups= newGroups.groups.split(',').map(el => new Object({name:el}));
               
                newGroups.settings = this.newSettings.id;
                // todo: add user
                console.log(newGroups);
                this.settingsService.addGroups(newGroups).subscribe((response) => {
                    // this.message = response.message;
                    // console.log("INSIDE SET USER COMPO")
                }, (error) => console.log(error));
            }
        });
    }

    public buildForm(): void {
        this.form = this.fb.group({
            companyName: [this.selectedCompany.settings.companyName, Validators.required],
            defaultCoins: [this.selectedCompany.settings.defaultCoins, Validators.required],
            defaultCorrectFB: [this.selectedCompany.settings.defaultCorrectFB, Validators.required],
            defaultInCorrectFB: [this.selectedCompany.settings.defaultInCorrectFB, Validators.required],
            timeLimitForQ: [this.selectedCompany.settings.timeLimitForQ, Validators.required],
            lowToMed: [this.selectedCompany.settings.lowToMed, Validators.required],
            medToHigh: [this.selectedCompany.settings.medToHigh, Validators.required],
            timetToSendToLogin: [this.selectedCompany.settings.timetToSendToLogin, Validators.required],
            EnableGame: [this.selectedCompany.settings.EnableGame, Validators.required],
            minBet: [this.selectedCompany.settings.minBet, Validators.required],
            gameOp: [this.selectedCompany.settings.gameOp, Validators.required]

        });
    }

    public onSubmit(): void {
        this.message = '';
        this.settingsService.updateSettings(this.form.value).subscribe((response) => {
            this.message = response.message;
        }, (error) => this.message = error.message);
    }

    public deleteSettings(settings: Settings): void {
        // todo: delete user
        this.settingsService.deleteSettings(settings).subscribe((response) => {
            // this.message = response.message;
            console.log("INSIDE deleteSettings")
        },  (error) => console.log(error));
    }

}


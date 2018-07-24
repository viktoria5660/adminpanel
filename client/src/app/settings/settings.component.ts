import {Component, OnInit} from '@angular/core';
import {SettingsService} from './settings.service';
import {AddSettingsDialogComponent} from './add-settings-dialog/add-settings.dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import { FullSettings } from './fullsettings.model';
import { Subject } from 'rxjs';


@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    error: string;
    message: string;
    form: FormGroup;
    newSettings: FullSettings;
    company : any;
    fullSettingsArr:FullSettings[];
    selectedCompany:FullSettings
    fullSettingsArrSubject:Subject<FullSettings[]>

    constructor(private settingsService: SettingsService,
                private fb: FormBuilder, private dialog: MatDialog) {
                    this.selectedCompany = {} as FullSettings;
                    this.fullSettingsArrSubject = new Subject<FullSettings[]>();
                
    }
    

    public ngOnInit(): void {
       this.settingsService.getAllFullSettings().subscribe(fullSettingsArr =>{
        this.fullSettingsArr = fullSettingsArr;
         this.fullSettingsArrSubject.next(this.fullSettingsArr);
         this.selectedCompany = fullSettingsArr[0];
         this.buildForm();
       });
         
        
    }

    public addSettings(): void {
        const dialogRef: MatDialogRef<AddSettingsDialogComponent> = this.dialog.open(AddSettingsDialogComponent, {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe((newSettings: any) => {

            if (newSettings){
                 this.fixGroups(newSettings);
                this.settingsService.addSettings(newSettings).subscribe(res => {this.fullSettingsArr.push(newSettings);console.log("Added!")});
            }},(error) => console.log(error)
            
        );
    }


    private fixGroups(settings: any) {
        let groups = [];
        settings.groups.split(",").forEach(element => {
            groups.push({ name: element });
        });
        settings.groups = groups;
    }

    public buildForm(): void {
        this.form = this.fb.group({
            companyName: [this.selectedCompany.companyName, Validators.required],
            defaultCoins: [this.selectedCompany.defaultCoins, Validators.required],
            defaultCorrectFB: [this.selectedCompany.defaultCorrectFB, Validators.required],
            defaultInCorrectFB: [this.selectedCompany.defaultInCorrectFB, Validators.required],
            timeLimitForQ: [this.selectedCompany.timeLimitForQ, Validators.required],
            lowToMed: [this.selectedCompany.lowToMed, Validators.required],
            medToHigh: [this.selectedCompany.medToHigh, Validators.required],
            timetToSendToLogin: [this.selectedCompany.timetToSendToLogin, Validators.required],
            EnableGame: [this.selectedCompany.EnableGame, Validators.required],
            minBet: [this.selectedCompany.minBet, Validators.required],
            gameOp: [this.selectedCompany.gameOp],
            groups: [this.selectedCompany.groups.map(el=>el.name), Validators.required]

        });
    }

    public onSubmit(): void {
        this.message = '';
        this.form.value.groups = this.form.value.groups.map(el => new Object({name:el}));
        console.log("AFTER");
        this.settingsService.updateFullSettings(this.form.value).subscribe((response) => {
            console.log(response);
        }, (error) =>console.log(error));
    }

    public deleteSettings(): void {
        // todo: delete user
    
        // this.settingsService.deleteSettings(newSettings).subscribe((response) => {
        //     // this.message = response.message;
        //     console.log("INSIDE deleteSettings COMPONENR",newSettings)
        // },  (error) => console.log(error));
        this.settingsService.deleteSettings(new Object({companyName:this.selectedCompany.companyName})).subscribe((response) => {
            this.message = response.message;
            this.fullSettingsArr.splice(this.fullSettingsArr.indexOf(this.selectedCompany), 1);
            this.selectedCompany = this.fullSettingsArr[0];
            this.buildForm();
        }, (error) => this.message = error.message);
    }

}


import {Component, OnDestroy, OnInit} from '@angular/core';
import {CompaniesService} from './companies.service';
import {AddCompanyDialogComponent} from './add-company-dialog/add-company.dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Company} from './company.model';
import {Subscription} from 'rxjs/Subscription';
import {DialogsService} from '../dialogs/dialogs.service';


@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit, OnDestroy {
    error: string;
    message: string;
    form: FormGroup;

    companies: Company[];
    selectedCompany: Company;
    subscription: Subscription;
    isDefaultSelectedCompanySet = false;
    constructor(private companiesService: CompaniesService,
                private dialogsService: DialogsService,
                private fb: FormBuilder, private dialog: MatDialog) {
    }


    public ngOnInit(): void {
        this.subscription = this.companiesService.companies$.subscribe((companies: Company[]) => {
            this.companies = companies;
            if (companies.length > 0) {
                if (!this.isDefaultSelectedCompanySet) {
                    this.selectedCompany = this.companies[0];
                    this.isDefaultSelectedCompanySet = true;
                    this.buildForm();
                }
            }
        });
    }

    public addCompany(): void {
        const dialogRef: MatDialogRef<AddCompanyDialogComponent> = this.dialog.open(AddCompanyDialogComponent, {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe((newCompany: any) => {
                if (newCompany) {
                    this.fixGroups(newCompany);
                    this.companiesService.addCompany(newCompany).subscribe((res: Company) => {
                        this.dialogsService.alert('Success', 'Company ' + res.companyName +  ' added', 'success');
                    });
                }
            }, (error) => console.log(error)
        );
    }


    private fixGroups(settings: any) {
        let groups = [];
        settings.groups.split(',').forEach(element => {
            groups.push({name: element});
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
            groups: [[this.selectedCompany.groups ? this.selectedCompany.groups.map(el => el.name) : []], Validators.required]

        });
    }

    /**
     * update company
     */
    public onSubmit(): void {
        this.message = '';
     
        this.fixGroups(this.form.value);
        console.log("INSIDE ON SUBMIT",this.form.value)
        // this.form.value.groups = this.form.value.groups.map(el => new Object({name: el}));
        // console.log('AFTER');
        
        this.companiesService.updateCompany(this.form.value).subscribe((response) => {
            console.log("response of updated",response);
            this.dialogsService.alert('Success', 'Company ' + response.companyName +  ' updated', 'success');
            
        }, (error) => console.log(error));
    }

    public deleteCompany(): void {
        this.companiesService.deleteCompany(this.selectedCompany.companyName).subscribe((response) => {
            this.message = response.message;
            this.selectedCompany = this.companies[0];
            this.buildForm();
            this.dialogsService.alert('Success', 'Company ' + response.companyName +  ' deleted', 'success');
          
            
        }, (error) => this.message = error.message);
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}


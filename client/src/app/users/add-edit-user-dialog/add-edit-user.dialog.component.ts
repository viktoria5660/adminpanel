import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../users.model';
import { Observable } from 'rxjs/Observable';
import {Company } from '../../companies/company.model';
import {CompaniesService} from '../../companies/companies.service';
// import {settingsService} from '../../settings/settings.service';

@Component({
    selector: 'app-add-edit-user',
    templateUrl: './add-edit-user.dialog.component.html',
    styleUrls: ['./add-edit-user.dialog.component.scss']
})
export class AddEditUserDialogComponent implements OnInit {
    form: FormGroup;
    user: User;
    editMode: boolean;
    companies$: Observable<Company[]>;
    selectedCompany: Company;
    constructor(private dialogRef: MatDialogRef<AddEditUserDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private companiesService: CompaniesService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.companies$ = this.companiesService.companies$;
        if (this.data && this.data.user) {
            this.editMode = true;
            this.user = this.data.user;

        } else {
            this.editMode = false;
            this.user = new User();
        }
        // this.companies$ = this.settingsService.companies$;
        // this.settingsService.companies$.subscribe((companies) => {
        //     this.selectedCompany = companies[0];
        // });
        this.buildForm();
    }

    public buildForm(): void {
        this.form = this.formBuilder.group({
            name: [this.user.name, Validators.required],
            lastName: [this.user.lastName, Validators.required],
            email: [this.user.email, Validators.required],
            password : [this.user.password, Validators.required],
            groups: [this.user.group, Validators.required],
            company : [this.user.company, Validators.required ],
            difficulty: [this.user.difficulty, Validators.required],
            coins: [this.user.coins, Validators.required],
            isAdmin : [this.user.isAdmin, Validators.required ],
        });
    }

    public onSubmit(): void {
        this.dialogRef.close(this.form.value);
    }

}

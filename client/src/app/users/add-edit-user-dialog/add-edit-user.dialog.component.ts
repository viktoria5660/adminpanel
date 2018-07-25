import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../users.model';
import {Observable} from 'rxjs/Observable';
import {Company} from '../../companies/company.model';
import {CompaniesService} from '../../companies/companies.service';

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
            this.companiesService.companies$.subscribe((companies: Company[]) => {
                this.selectedCompany = companies.find((company: Company) => company.companyName === this.user.company);
                this.buildForm();
            });

        } else {
            this.editMode = false;
            this.user = new User();
            this.buildForm();
        }
    }

    public buildForm(): void {
        this.form = this.formBuilder.group({
            name: [this.user.name, Validators.required],
            lastName: [this.user.lastName, Validators.required],
            email: [this.user.email, Validators.required],
            password: [this.user.password, Validators.required],
            group: [this.user.group, Validators.required],
            company: [this.selectedCompany, Validators.required],
            difficulty: [this.user.difficulty, Validators.required],
            coins: [this.user.coins, Validators.required],
            isAdmin: [this.user.isAdmin, Validators.required],
        });
    }

    public onSubmit(): void {
        this.user.name = this.form.value.name;
        this.user.lastName = this.form.value.lastName;
        this.user.email = this.form.value.email;
        this.user.password = this.form.value.password;
        this.user.group = this.form.value.group;
        this.user.company = this.form.value.company.companyName;
        this.user.difficulty = this.form.value.difficulty;
        this.user.coins = this.form.value.coins;
        this.user.isAdmin = this.form.value.isAdmin;
        this.dialogRef.close(this.user);
    }

}

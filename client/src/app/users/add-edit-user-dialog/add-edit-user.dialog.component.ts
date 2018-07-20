import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../users.model';
import { Observable } from 'rxjs/Observable';
import { FullCompany } from '../../company/full.company.model';
import { CompanyService } from '../../company/company.service';

@Component({
    selector: 'app-add-edit-user',
    templateUrl: './add-edit-user.dialog.component.html',
    styleUrls: ['./add-edit-user.dialog.component.scss']
})
export class AddEditUserDialogComponent implements OnInit {
    form: FormGroup;
    user: User;
    editMode: boolean;
    companies$: Observable<FullCompany[]>;
    selectedCompany: FullCompany;
    constructor(private dialogRef: MatDialogRef<AddEditUserDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, private companyService: CompanyService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        if (this.data && this.data.user) {
            this.editMode = true;
            this.user = this.data.user;

        } else {
            this.editMode = false;
            this.user = new User();
        }
        this.companies$ = this.companyService.companies$;
        this.companyService.companies$.subscribe((companies) => {
            this.selectedCompany = companies[0];
        });
        this.buildForm();
        
    }

    public buildForm(): void {
        this.form = this.formBuilder.group({
            name: [this.user.name, Validators.required],
            lastName: [this.user.lastName, Validators.required],
            email: [this.user.email, Validators.required],
            password : [this.user.password,Validators.required],
            group: [this.user.group, Validators.required],
            company : [this.user.company ,Validators.required ],
            difficulty: [this.user.difficulty, Validators.required],
            coins: [this.user.coins, Validators.required],
            isAdmin : [this.user.isAdmin , Validators.required ],
        });
    }

    public onSubmit(): void {
        this.dialogRef.close(this.form.value);
    }

}

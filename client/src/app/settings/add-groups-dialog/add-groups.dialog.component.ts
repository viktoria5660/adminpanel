import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-groups',
    templateUrl: './add-groups.dialog.component.html',
    styleUrls: ['./add-groups.dialog.component.scss']
})
export class AddGroupsDialogComponent implements OnInit {
    form: FormGroup;
    constructor(private dialogRef: MatDialogRef<AddGroupsDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.buildForm();
    }

    public buildForm(): void {
        this.form = this.formBuilder.group({
            companyName: [, Validators.required],
            groups: [, Validators.required]
        });
    }

    public onSubmit(): void {
        this.dialogRef.close(this.form.value);
        window.location.reload();
    }

}

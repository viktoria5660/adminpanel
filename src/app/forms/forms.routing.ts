import { Routes } from '@angular/router';

import { FormUploadComponent } from './form-upload/form-upload.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormEditorComponent } from './form-editor/form-editor.component';

export const FormRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'upload',
      component: FormUploadComponent
    }, {
      path: 'validation',
      component: FormValidationComponent
    }, {
      path: 'editor',
      component: FormEditorComponent
    }]
  }
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobManageComponent } from './job-manage.component';


const routes: Routes = [{
    path: '',
    component: JobManageComponent,
    //   children: [{
    //     path: 'tinymce',
    //     component: TinyMCEComponent,
    //   }, {
    //     path: 'ckeditor',
    //     component: CKEditorComponent,
    //   }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class JobManageRoutingModule { }

export const routedComponents = [
    JobManageComponent,
    //   TinyMCEComponent,
    //   CKEditorComponent,
];

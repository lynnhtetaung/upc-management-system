import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PCManageComponent } from './pc-manage.component';


const routes: Routes = [{
    path: '',
    component: PCManageComponent,
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
export class PCManageRoutingModule { }

export const routedComponents = [
    PCManageComponent,
    //   TinyMCEComponent,
    //   CKEditorComponent,
];

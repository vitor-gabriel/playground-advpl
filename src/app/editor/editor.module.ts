import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { RouterModule, Routes } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { PoCodeEditorModule } from '@po-ui/ng-code-editor';
import { customRegister } from './text-editor/text-editor-advpl.constant';
import { EditorComponent } from './editor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'editor',
    pathMatch: 'full'
  },
  {
    path: 'editor',
    component: EditorComponent
  }
]

@NgModule({
  declarations: [
    TextEditorComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    PoCodeEditorModule.forRegister(customRegister),
    RouterModule.forChild(routes),
  ]
})
export class EditorModule { }

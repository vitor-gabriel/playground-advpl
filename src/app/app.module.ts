import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorModule } from './editor/editor.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';
import { PoCodeEditorModule } from '@po-ui/ng-code-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    PoModule,
    PoCodeEditorModule,
    HttpClientModule,
    PoTemplatesModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

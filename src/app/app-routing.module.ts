import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index.html',
    pathMatch: 'full'
  },
  {
    path: 'index.html',
    loadChildren: () => import(`./editor/editor.module`)
      .then(m => m.EditorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

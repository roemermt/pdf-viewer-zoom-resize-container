import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';

const routes: Routes = [
  { path: 'example-pdf-viewer', component: ExamplePdfViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

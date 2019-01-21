import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QualificationComponent } from './qualification.component';

const qualificationRoutes: Routes = [
    { path: '', component: QualificationComponent }
]

@NgModule({
    imports: [RouterModule.forChild(qualificationRoutes)],
    exports: [RouterModule]
})
export class QualificationRoutingModule{}
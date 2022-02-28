import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MeasurementUnitsComponent } from './measurement-units.component';

const routes: Routes = [
    {
        path: '',
        component: MeasurementUnitsComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MeasurementUnitsRoutingModule {
}

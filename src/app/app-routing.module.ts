import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'currency',
        loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule)
    },
    {
        path: 'mu',
        loadChildren: () => import('./measurement-units/measurement-units.module').then(m => m.MeasurementUnitsModule)
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

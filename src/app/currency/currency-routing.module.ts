import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CurrencyComponent } from './currency.component';

const routes: Routes = [
    {
        path: '',
        component: CurrencyComponent
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
export class CurrencyRoutingModule {
}

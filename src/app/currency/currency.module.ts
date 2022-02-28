import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency.component';
import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyService } from './currency.service';
import { HttpClientModule } from '@angular/common/http';
import { TreeTableModule } from 'primeng/treetable';


@NgModule({
    declarations: [
        CurrencyComponent
    ],
    imports: [
        CommonModule,
        CurrencyRoutingModule,
        HttpClientModule,
        TreeTableModule
    ],
    providers: [
        CurrencyService
    ]
})
export class CurrencyModule {
}

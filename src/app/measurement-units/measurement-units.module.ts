import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasurementUnitsComponent } from './measurement-units.component';
import { MeasurementUnitsRoutingModule } from './measurement-units-routing.module';
import { MeasurementUnitsService } from './measurement-units.service';
import { HttpClientModule } from '@angular/common/http';
import { TreeTableModule } from 'primeng/treetable';


@NgModule({
    declarations: [
        MeasurementUnitsComponent
    ],
    imports: [
        CommonModule,
        MeasurementUnitsRoutingModule,
        HttpClientModule,
        TreeTableModule
    ],
    providers: [
        MeasurementUnitsService
    ]
})
export class MeasurementUnitsModule {
}

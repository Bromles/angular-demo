import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { firstValueFrom } from 'rxjs';
import { MeasurementUnitsService } from './measurement-units.service';

@Component({
  selector: 'app-measurement-units',
  templateUrl: './measurement-units.component.html',
  styleUrls: ['./measurement-units.component.scss']
})
export class MeasurementUnitsComponent implements OnInit {

  data: TreeNode[];

  constructor(private measurementUnitsService: MeasurementUnitsService) {
  }

  ngOnInit(): void {
    firstValueFrom(this.measurementUnitsService.getData()).then(value => this.data = value.root)
  }

}

import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { CurrencyService } from './currency.service';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
    data: TreeNode[];

    constructor(private currencyService: CurrencyService) {
    }

    ngOnInit(): void {
        firstValueFrom(this.currencyService.getData()).then(value => this.data = value.root)
    }
}

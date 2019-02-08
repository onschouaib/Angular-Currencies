import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Currencie } from '../currencie';
import { Currencies } from '../mock-currencies';
import { CurrenciesService } from '../_services/currenciesdata.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input() monAdresse: any;
  currencies = Currencies;
  records={};
  selectedCurrencie: Currencie;
  @Input()
  person: any

  constructor(private metaService: Meta,private service:CurrenciesService) {
    this.metaService.addTags([
      { name: 'keywords', content: 'Content Title' },
      { property: 'description', content: 'Content Title' }
    ]);
   }

  ngOnInit() {
    this.records= this.service.getDate();
  }

  onSelect(currencie: Currencie): void {
    this.selectedCurrencie = currencie;
  }
}
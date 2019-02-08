import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Currencie } from '../currencie';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  users: User[] = [];
  selectedCurrebcies ; any;
  contact = [{
    nom : 'ons',
    prenom : 'chouaib',
    ville : "Sousse"
  },
  {
    nom : 'lilia',
    prenom : 'chouamem',
    ville : "Tunis"
  },
  {
    nom : 'bessem',
    prenom : 'limam',
    ville : "Paris"
  },
  {
    nom : 'alex',
    prenom : 'elys',
    ville : "Lyon"
  }]

  currencies = [
    {
    id: "USD",
    attributes: {
    code: "USD",
    name: "US Dollar",
    currency_type: "national",
    code_iso_numeric3: "840",
    code_iso_alpha3: "USD",
    symbol: "$",
    native_symbol: "$",
    category: "others"
    }
    },
    {
    "id": "EUR",
    "attributes": {
      code: "EUR",
      name: "Euro",
      currency_type: "international",
      code_iso_numeric3: "978",
      code_iso_alpha3: "EUR",    
      native_symbol: "€",
      category: "others"
    }
  },
  {
    id: "JPY",
    attributes: {
      code: "JPY",
      name: "Yen",
      currency_type: "national",
      code_iso_numeric3: "392",
  code_iso_alpha3: "JPY",
  symbol: "¥",
  native_symbol: "￥",
  category: "others"
  }
  },
  {
    id: "ARS",
    attributes: {
      code: "ARS",
      name: "Argentine Peso",
      currency_type: "national",
      code_iso_numeric3: "032",
      code_iso_alpha3: "ARS",
      symbol: "AR$",
      native_symbol: "$",
      category: "others"
  }
  },
  {
    id: "CUC",
    attributes: {
      code: "CUC",
      name: "Peso Convertible",
      currency_type: "national",
      code_iso_numeric3: "931",
      code_iso_alpha3: "CUC",
      symbol: "$$",
      native_symbol: "£",
      category: "others"
  }
  },
  {
    id: "CHF",
    attributes: {
      code: "CHF",
      currency_type: "international",
      code_iso_numeric3: "756",
      code_iso_alpha3: "CHF",
      symbol: "CHF",
      native_symbol: "&",
      category: "others"
  }
  }    
   ]

   
  cont = {
    nom : 'ons',
    prenom : 'chouaib'
  }

  characters = [ {name:'mickey', lastname:'mouse'},
  {name:'donald',lastname:'duck'},
  {name:'pat', lastname:'hibulaire'}]

  
  secondes:number;
 constructor(private meta: Meta, private router : Router, private userService: UserService) {
    this.meta.addTag({ name: 'description', content: 'How to use Angular 4 meta service' });
    this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
    this.meta.addTag({ name: 'keywords', content: 'Angular, Meta Service' });
  }
  ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(users => { 
      this.users = users; 
  });   

    console.log(this.currencies[1].attributes);
}

onselect(currencies): void {
  this.router.navigate(['/product-details',currencies.id]);
}
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { switchMap } from "rxjs/operators" //
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public id;
  public departmentId;
  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    //this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
      console.log(this.id);
     
      
    })
   
  }
  }

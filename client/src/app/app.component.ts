import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './interface/product';
import { IPagination } from './interface/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: IProduct[];

  constructor(private http: HttpClient) {}

  ngOnInit() :void
  {
    this.http.get('https://localhost:5001/api/products').subscribe((response: IPagination )=> {
      this.products = response.data;
    },
    error => {

    })
  }
}
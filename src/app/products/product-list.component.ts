import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  public pageTitle = 'Product List';
  widthImage: string = '50';
  marginImage: string = '2';
  showImage: boolean = false;
  _listFilter: string;
  errorMessage: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
  }
  filteredProducts: any[];
  products: IProduct[];

  constructor(private productService: ProductService) {
  }
  performFilter(filter: string): IProduct[] {
    filter = filter.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filter) !== -1); 
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  onNotify(message: string): void {
    this.pageTitle = message;
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => { this.products = products,
        this.filteredProducts = this.products} ,
      error => this.errorMessage = <any>error);    
  }
}

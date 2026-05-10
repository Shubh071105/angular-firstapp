import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    { id: 1, name: 'Laptop', price: 47999 },
    { id: 2, name: 'Smartphone', price: 65499 },
    { id: 3, name: 'Tablet', price: 12299 },
    { id: 4, name: 'Headphones', price: 899 },
    { id: 5, name: 'Smartwatch', price: 2999 }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsGreaterThanPrice(price: number): Product[] {
    return this.products.filter(product => product.price > price);
  }

  getProductsByName(name: string): Product[] {
    return this.products.filter(product => product.name==name);
  }
}

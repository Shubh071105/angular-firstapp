import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-service-example',
  imports: [CommonModule],
  templateUrl: './service-example.component.html',
  styleUrl: './service-example.component.css',
  providers: [UserService]
})
export class ServiceExampleComponent {

  products: Product[] = [];
  user !: {id: number, name: string, age: number};
  
  constructor(private productService: ProductService, private userService: UserService) {
    this.user = this.userService.user;
   }

   getProducts() {
    this.products = this.productService.getProducts();
   }

   getProductsGreaterThanPrice(price: number) {
    this.products = this.productService.getProductsGreaterThanPrice(price);
   }

   getProductsByName(name: string) {
    this.products = this.productService.getProductsByName(name);
   }
}

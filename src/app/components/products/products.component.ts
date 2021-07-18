import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  product: any;

  constructor(private service: ProductService) {
    service.getProducts().subscribe(
      (response: any) => {
        this.products = response;
      },
      (error) => {
        if (error.status === 404) {
          alert('oh no, getProducts method failed with 404');
        }
        if (error.status === 500) {
          alert('oh no, getProducts method failed');
        }
      }
    );
  }

  ngOnInit(): void {}

  createProduct(product: any) {
    console.log(product);
    this.service.createProduct(product).subscribe((response) => {
      this.product = response;
      this.service
        .getProducts()
        .toPromise()
        .then((data: any) => {
          this.products = data;
        });
      this.products.splice(0, 0, product); // splice(start, deleteCount, item1)
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  products: any[] = [];
  product: any;

  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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
      alert('Product created');
      this.router.navigate(['/products']);
    });
  }
}

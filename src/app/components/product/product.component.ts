import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // Route= http://localhost:8030/product/3
  id: string = '';
  product: any;

  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.service.getProduct(this.id).subscribe((response) => {
        this.product = response;
        console.log(this.product);
      });
    });
  }

  updateProduct(form: any) {
    let name = form.name;
    let price = form.price;
    console.log(name, price);
    let updatedProduct = {
      id: this.id,
      name: name,
      price: price,
    };
    this.service.updateProduct(updatedProduct).subscribe((response) => {
      alert('Product Updated');
      this.router.navigate(['/products']);
    });
  }

  cancel() {
    this.router.navigate(['/products']);
  }

  deleteProduct() {
    this.service.deleteProduct(this.id).subscribe((response) => {
      alert('Product Deleted');
      this.router.navigate(['/products']);
    });
  }
}

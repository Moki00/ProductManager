import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = 'http://localhost:8030/api/v1/products'; //product

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.url);
    // return this.http.get(this.url).toPromise;
  }

  createProduct(product: any) {
    return this.http.post(this.url, product);
  }

  getProduct(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  updateProduct(product: any) {
    // return this.http.put(this.url + '/' + product.id, product);
    return this.http.put(this.url, product);
  }

  deleteProduct(productId: string) {
    return this.http.delete(this.url + '/' + productId);
  }
}

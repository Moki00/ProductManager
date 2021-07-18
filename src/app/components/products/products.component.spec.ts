import { ProductService } from './../../services/product.service';
import { ProductsComponent } from './products.component';
import { Product } from 'src/app/Products';
import { from } from 'rxjs';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fakeHttp: any = null;
  let productService: ProductService = new ProductService(fakeHttp);
  let fakeProduct: Product;

  beforeEach(() => {
    fakeProduct = {
      id: 1,
      name: 'productName',
      price: 1.1,
    };

    component = new ProductsComponent(productService);
  });

  it('PostService getPosts method is called once', () => {
    let spy = spyOn(productService, 'getProducts').and.callFake(function () {
      return from([[]]);
    });
    component.ngOnInit();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

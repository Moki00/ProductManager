import { from } from 'rxjs';
import { Product } from 'src/app/Products';
import { ProductService } from 'src/app/services/product.service';
import { ProductsComponent } from '../products/products.component';

import { ProductComponent } from './product.component';

fdescribe('ProductComponent', () => {
  let component: ProductComponent;
  let fakeHttp: any = null;
  let productService: ProductService = new ProductService(fakeHttp);
  let fakeProduct: Product;

  beforeEach(() => {
    fakeProduct = {
      id: 1,
      name: 'productName',
      price: 1.1,
    };

    // component = new ProductComponent(productService);
  });

  it('ProductService getProducts method is called once', () => {
    let spy = spyOn(productService, 'getProducts').and.callFake(function () {
      return from([[]]);
    });
    component.ngOnInit();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

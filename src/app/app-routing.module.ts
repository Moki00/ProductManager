import { AddProductComponent } from './components/add-product/add-product.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactFormComponent },
  { path: 'addproduct', component: AddProductComponent },
  // { path: 'login', component: TemplateFormComponent },
  { path: '**', component: NotfoundComponent }, // keep at bottom
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },])

  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,]
})
export class ProductModule { }

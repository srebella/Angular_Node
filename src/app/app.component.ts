import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:  `
<ul class='nav nav-pills'>
          <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
        </ul>
 <div class='container'>
      <router-outlet></router-outlet>
    </div>
   `
})
export class AppComponent {
  title = 'Products Showroom';
}

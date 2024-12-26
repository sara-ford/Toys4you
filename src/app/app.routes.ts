import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { CheckOutComponent } from './check-out/check-out.component'
import { FormsModule } from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'game-details', component: GameDetailsComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'signIn', component: SingInComponent}, 
   { path: 'favorite', component: FavoritesComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }




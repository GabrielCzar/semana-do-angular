import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from 'app/pages/product-page/product-page.component';
import { ProductsPageComponent } from 'app/pages/products-page/products-page.component';
import { HomePageComponent } from 'app/pages/home-page/home-page.component';
import { Error404PageComponent } from "app/pages/error-404-page/error-404-page.component";

const routes : Routes = [
    // home
    {
        path: '',
        component: HomePageComponent
    },
    // products
    {
        path: 'products',
        component: ProductsPageComponent
    },
    {
        path: 'products/:slug/:id',
        component: ProductPageComponent
    },
    // 404
    {
        path: '**',
        component: Error404PageComponent
    }
]

export const RoutingModule = RouterModule.forRoot(routes);
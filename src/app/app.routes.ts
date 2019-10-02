import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ErrorComponent } from './components/error/error.component';

const MisRutas:Routes=[
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'productos',
        component: ProductosComponent
    },
    {
        path:'clientes',
        component: ClientesComponent
    },
    {
        path:'**',
        component: ErrorComponent
    }
];
export const Rutas=RouterModule.forRoot(MisRutas);
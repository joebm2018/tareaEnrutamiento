import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ErrorComponent } from './components/error/error.component';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';
import { VerProductosComponent } from './components/ver-productos/ver-productos.component';
import { CrearClientesComponent } from './components/crear-clientes/crear-clientes.component';

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
        path:'productos/crear',
        component:CrearProductosComponent
    },
    {
        path:'productos/:id',
        component:VerProductosComponent
    },
    {
        path:'clientes',
        component: ClientesComponent
    },
    {
        path:'clientes/crear',
        component:CrearClientesComponent
    },
    {
        path:'**',
        component: ErrorComponent
    }
];
export const Rutas=RouterModule.forRoot(MisRutas);
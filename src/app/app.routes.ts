import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DespachosComponent } from './components/despachos/despachos.component';
import { AlmacenComponent } from './components/almacen/almacen.component';

export const routes: Routes = [


  // vacio
  {path:'' , redirectTo:'Index' , pathMatch : 'full'},


  {path:'Index' , component: IndexComponent} ,
  {path:'Vendedor' , component: DespachosComponent} ,
  {path:'Almacen' , component: AlmacenComponent} ,


  //  * name
  {path:'**' , redirectTo:'Index' , pathMatch : 'full'}
];

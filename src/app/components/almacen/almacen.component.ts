import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';



interface Despachos {
  tipo: string;
  detalle: string;
}


@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, DividerModule , TableModule,
    CommonModule, ReactiveFormsModule, DropdownModule, ButtonModule],
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.css'
})
export class AlmacenComponent {





  // combo
  TiposDespachos: Despachos[] | undefined;




  // icono navageacion
  items: MenuItem[] | undefined;






  // data tabla
  products = [{
    id: 151,
    name: 'Alan B. Shepard, Jr.',
    job: 'Astronaut',
    year_joined: 1959,
    missions: ['MR-3', 'Apollo 14']
  },
  {
    id: 152,
    name: 'Virgil I. Grissom',
    job: 'Astronaut',
    year_joined: 1959,
    missions: ['MR-4', 'Apollo 1']
  },
  {
    id: 153,
    name: 'John H. Glenn, Jr.',
    job: 'Astronaut',
    year_joined: 1959,
    missions: ['MA-6', 'STS-95']
  },
  {
    id: 154,
    name: 'M. Scott Carpenter',
    job: 'Astronaut',
    year_joined: 1959,
    missions: ['MA-7']
  },
  {
    id: 154,
    name: 'M. Scott Carpenter',
    job: 'Astronaut',
    year_joined: 1959,
    missions: ['MA-7']
  },
  {
    id: 154,
    name: 'M. Scott Carpenter',
    job: 'Astronaut',
    year_joined: 1959,
    missions: ['MA-7']
  }
];




  // inicia
  constructor(){
  }
  ngOnInit(){
    this.items =[
      {
        label: 'Actualizar Contraseña', //titulo
        icon: 'pi pi-fw pi-user-edit'//icono
      },
    {
        label:'Salir',
        icon:'pi pi-fw pi-power-off'
    }
  ]
  this.TiposDespachos=[
    {tipo:'GR-Credito',detalle :'Credito'},
    {tipo:'GR-Contado',detalle :'Contado'},
    {tipo:'ST',detalle :'Transeferencia'},
    {tipo:'OF',detalle :'Consumo Interno'},
  ]

  }






}

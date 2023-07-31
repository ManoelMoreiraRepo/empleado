import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/model/empleados';
import { EmpleadosService } from 'src/app/service/empleados.service';



@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})


export class EmpleadosComponent implements OnInit{

  empleados: Empleados[] = [];


    constructor(
      private empleadosS: EmpleadosService, 
      ){}
  
    ngOnInit(): void {}

    cargarEmpleados(): void {
      this.empleadosS.lista().subscribe((data) => {
        this.empleados = data;
      });
    }
   
}



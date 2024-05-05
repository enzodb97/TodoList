import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, 
    MatInputModule, MatCardModule,MatDividerModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  listaTareas:string[] = [];
  nuevaTarea:string = '';
  
  
  private _tareasService = inject(TareasService);
  
  
  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }

  agregarTarea(){
    if (this.nuevaTarea.trim() === '') {
      alert('Por favor, ingresa una tarea válida.');
      return;
    }
    this._tareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareasService.getTareas();
  }

  eliminarTarea(index: number){
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }


}
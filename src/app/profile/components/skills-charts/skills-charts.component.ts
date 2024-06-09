import { Component, OnInit } from '@angular/core';
import { ChartjsComponent } from '@coreui/angular-chartjs';

@Component({
  selector: 'app-skills-charts',
  standalone: true,
  imports: [ChartjsComponent],
  templateUrl: './skills-charts.component.html',
  styleUrl: './skills-charts.component.css'
})
export class SkillsChartsComponent implements OnInit{

  constructor(){
    this.drawCanvas();
  }
  ngOnInit(): void {
    const canvas = document.getElementById('skillsCanvas') as HTMLCanvasElement | null;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const habilidades: string[] = [
          "Comunicación efectiva",
          "Trabajo en equipo",
          "Liderazgo",
          // ... más habilidades ...
        ];

        const columnas: number = 3;
        const anchoCuadricula: number = canvas.width / columnas;
        const altoCuadricula: number = 100; // Altura fija para cada cuadrícula

        habilidades.forEach((habilidad, index) => {
          const x: number = (index % columnas) * anchoCuadricula;
          const y: number = Math.floor(index / columnas) * altoCuadricula;

          // Dibuja el rectángulo para la habilidad
          ctx.fillStyle = 'rgba(0, 123, 255, 0.5)'; // Color de fondo
          ctx.fillRect(x, y, anchoCuadricula, altoCuadricula);

          // Añade el texto de la habilidad
          ctx.fillStyle = '#000'; // Color del texto
          ctx.font = '16px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(habilidad, x + anchoCuadricula / 2, y + altoCuadricula / 2);
        });
      } else {
        console.error('No se pudo obtener el contexto del canvas');
      }
    } else {
      console.error('No se encontró el elemento canvas');
    }
  }

  drawCanvas(){

  }
}

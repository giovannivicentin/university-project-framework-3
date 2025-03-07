import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="container" [ngClass]="{ 'dark-mode': isDarkMode }">
    <div class="header">
      <h1>Bem-vindo ao {{ title }}!</h1>
      <button class="theme-toggle" (click)="toggleDarkMode()">
        {{ isDarkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro" }}
      </button>
    </div>
    <p>Essa é uma aplicação Angular Simples para Iniciarmos.</p>

    <div class="container-content">
      <h2>Contador: {{ contador }}</h2>

      <div class="container-buttons">
        <button (click)="incrementar()">Incrementar</button>
        <button (click)="decrementar()">Decrementar</button>
        <button (click)="resetar()">Zerar</button>
      </div>
    </div>
  </div>`,
  styles: [
    `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
        color: #333;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }

      .dark-mode {
        background-color: #222;
        color: #f5f5f5;
      }

      .dark-mode button {
        background-color: #444;
        color: #fff;
        border-color: #666;
      }

      .dark-mode button:hover {
        background-color: #555;
      }

      h1 {
        color: #2c3e50;
        margin-bottom: 20px;
      }

      .dark-mode h1 {
        color: #ecf0f1;
      }

      .container-content {
        margin-top: 30px;
        padding: 20px;
        background-color: #fff;
        border-radius: 6px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
      }

      .dark-mode .container-content {
        background-color: #333;
        box-shadow: 0 1px 5px rgba(255, 255, 255, 0.05);
      }

      .container-buttons {
        display: flex;
        gap: 10px;
        margin-top: 20px;
      }

      button {
        padding: 10px 15px;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      button:hover {
        background-color: #2980b9;
      }

      .theme-toggle {
        background-color: #7f8c8d;
      }

      .theme-toggle:hover {
        background-color: #95a5a6;
      }
    `,
  ],
})
export class AppComponent {
  title = "framework-3";
  contador = 0;
  isDarkMode = false;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    if (this.contador > 0) {
      this.contador--;
    }
  }

  resetar() {
    this.contador = 0;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}

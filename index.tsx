
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("🛠️ Lepre Reparos: Iniciando aplicação...");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("❌ Lepre Reparos: Erro fatal - Elemento #root não encontrado no DOM!");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("✅ Lepre Reparos: Renderização inicial concluída.");
  } catch (error) {
    console.error("❌ Lepre Reparos: Erro durante a renderização:", error);
  }
}

/// <reference types="vite/client" />
// src/vite-env.d.ts

/// <reference types="vite/client" />

// Declaração para arquivos JSON importados diretamente
declare module '*.json' {
  const value: any; // Você pode refinar o tipo depois, se quiser mais tipagem
  export default value;
}

// Declaração para arquivos JSON importados com o sufixo '?url' (comum no Vite)
declare module '*.json?url' {
  const content: string;
  export default content;
}

// Declaração para arquivos JSON importados com o sufixo '?raw' (comum no Vite, se você precisar do texto bruto)
declare module '*.json?raw' {
  const content: string;
  export default content;
}
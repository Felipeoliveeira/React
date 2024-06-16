import React from "react";
// Componente em classe é uma classe que herda o component do React,
// e retorna HTML do método render
class App extends React.Component{
  // Método responsável por renderizar o conteúdo HTML do nosso componente 
  render(){
    return (
      <div>
        <h1>Aprendendo React</h1>
        <p>Olá</p>
      </div>
    );
  }
}

export default App;

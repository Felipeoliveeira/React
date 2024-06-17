import React from "react";
import "./components/Navbar/style.css";

import "./style/App.css"
import {Navbar} from "./components/Navbar/Navbar";
import {Article} from "./components/article/Article"
// Componente em classe é uma classe que herda o component do React,
// e retorna HTML do método render
export class App extends React.Component{
  // Método responsável por renderizar o conteúdo HTML do nosso componente 
  render(){
    return (
      <>
      <Navbar />

      <section id="articles">
        <Article title="Desingn Dashboards" provider="NASA" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, labore similique? Vel nihil enim facilis eum a nobis dolorem dolor veritatis atque nostrum illum recusandae, illo libero maiores doloremque voluptates?"/>
        <Article title="Vibrant Portraits of 2020" provider="Spaceflight News" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, labore similique? Vel nihil enim facilis eum a nobis dolorem dolor veritatis atque" />
        <Article title="36 Days of Malayalam type" provider="SpaceNews" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, dolor veritatis atque nostrum illum recusandae, illo libero maiores doloremque voluptates?"/>
        <Article title="Material from OGlobo" provider="Globo" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Vel nihil enim facilis eum a nobis dolorem dolor veritatis atque"/>
      </section>
      </>
    );
  }
}

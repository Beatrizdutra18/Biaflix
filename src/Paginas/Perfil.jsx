import React from "react";
import { Link } from "react-router-dom";
import estilos from "./Perfil.module.css";

const perfis = [
  { nome: "Ygor", imagem: "./imagens/imagem1.png" },
  { nome: "Beatriz", imagem: "./imagens/imagem2.png" },
  { nome: "Guilherme", imagem: "./imagens/imagem4.png" },
  { nome: "Adelia", imagem: "./imagens/imagem3.jpg" },
  { nome: "Paulo", imagem: "./imagens/imagem5.png" },
];

export function Perfil() {
  return (
    <div className={estilos.container}>
      <h1>Quem está assistindo?</h1>
      <div className={estilos.perfis}>
        {perfis.map((perfil, index) => (
          <Link to="/home" key={index} className={estilos.perfil}>
            <img src={perfil.imagem} alt={perfil.nome} />
            <span>{perfil.nome}</span>
          </Link>
        ))}
        <div className={estilos.adicionar}>
          <button>+</button>
          <span>Adicionar perfil</span>
        </div>
      </div>
    </div>
  );
}

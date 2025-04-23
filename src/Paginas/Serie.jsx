
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from '../Componente/Card';
import { Modal } from '../Componente/Modal';
import estilos from "../paginas/Serie.module.css";

const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Serie() {
  const [series, setSeries] = useState([]);
  const [selectedSerie, setSelectedSerie] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/tv/popular?api_key=${API_KEY}&language=pt-BR`)
      .then((res) => setSeries(res.data.results))
      .catch((err) => console.error("Erro ao carregar séries:", err));
  }, []);

  const handleOpenModal = (serie) => {
    setSelectedSerie(serie);
  };

  const handleCloseModal = () => {
    setSelectedSerie(null);
  };

  return (
    <div className={estilos.container}>
      <h1>Séries Populares</h1>
      <div className={estilos.grid}>
        {series.map((serie) => (
          <Card key={serie.id} movie={serie} onOpenModal={handleOpenModal} />
        ))}
      </div>
      {selectedSerie && <Modal movie={selectedSerie} onClose={handleCloseModal} />}
    </div>
  );
}

import React, {useState} from "react";
import "./estilo.css";

export default function PaginaInicial(){
    const[numeroAleatorio, setNumeroAleatorio] = useState(0);

    function gerarNumero(){
        const novoNumero = Math.floor(Math.random() * 100);
        setNumeroAleatorio(novoNumero);
    }

    return(
        <div clasName='conteudo-centralizado'>
            <h1>Gerador de Numeros Aleatórios</h1>
            <h2>{numeroAleatorio}</h2>
            <div clasName='area-boatao'>
                <label>Click no botão para gerar um novo numero aleatório</label>
                <button onClick={gerarNumero}>Gerar Numero</button>
            </div>
        </div>
    )
}
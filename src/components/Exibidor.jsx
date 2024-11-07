import React, { useState } from "react";
import styled from "styled-components";

const Modelo = styled.div`
    background: #fff;
    display: flex;
    margin: 32px 0;
    overflow: hidden;
`
const ModeloImagens = styled.div`
    display: flex;
    max-width: 480px;
    overflow-x: scroll;
`

const ModeloDados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
`
export default function Exibidor(props){
    
    const produto = props.produto || {};
    const [carrinho, setCarrinho] = useState(JSON.parse(localStorage.getItem('carrinho')) || []);

    const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
    localStorage.setItem('carrinho', JSON.stringify([...carrinho, produto]));
    };
    return Object.keys(produto).length > 0 ? (
     <Modelo>
        <ModeloImagens>
            <img
                src={props.produto.imagem}
                alt="Foto do Produto"
                height={450}
                width={299}/>

        </ModeloImagens>

        <ModeloDados>
            <div>{props.produto.marca}</div>
            <div>{props.produto.modelo}</div>
            <div>{props.produto.preco}</div>
            <div>{props.produto.descricao}</div>
            <button onClick={() => adicionarAoCarrinho(produto)}>Adicinar ao Carrinho</button>
        </ModeloDados>
    </Modelo>

    ):(

    <Modelo>
        <ModeloDados>Produto não encontrado!</ModeloDados>
    </Modelo>
    );
}
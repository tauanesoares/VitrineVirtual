import React, { useState, useEffect } from 'react';
import Navegacao from "../components/Navegacao"
import Janela from "../components/Janela"


export default function Carrinho() {
    const produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const novoTotal = produtosCarrinho.reduce((total, produto) => total + produto.preco, 0);
        setTotal(novoTotal);
      }, [produtosCarrinho]);

    return <>
        <Navegacao titulo="VITRINE">
            <a href="/"> Início </a>
            <a href="/promocao"> Promoção </a>
            <a href="/carrinho"> Carrinho </a>
        </Navegacao>

        <Janela>
            <table width="100%" style={{
        borderCollapse: 'collapse',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)'
      }}>
                <tbody>
                    <tr>
                        <th>Código</th>
                        <th>Modelo</th>
                        <th>Preço</th>
                    </tr>
                {produtosCarrinho.map((produto, index) => (
                    <tr key={index}>
                        <td style={{ textAlign: 'center' }}> {produto.codigo} </td>
                        <td style={{ textAlign: 'center' }}> {produto.modelo} </td>
                        <td style={{ textAlign: 'center' }}> {produto.preco} </td>
                    </tr>
                    ))}
                    <tr style={{ border: '1px solid #ccc' }}>
                        <th colspan="2" style={{paddingLeft: "20px"}}>Total:</th>
                        <th>R$ {total.toFixed(2)}</th>
                    </tr>
                </tbody>
            </table>
        </Janela>
    </>
}
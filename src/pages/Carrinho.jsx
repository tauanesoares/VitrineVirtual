import React, { useState, useEffect } from 'react';
import Navegacao from "../components/Navegacao"
import Janela from "../components/Janela"


export default function Carrinho() {
    const [produtosCarrinhoo, setProdutosCarrinho] = useState(() => {
        // Inicializa o estado a partir do localStorage
        return JSON.parse(localStorage.getItem('carrinho')) || [];
    });

    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Calcula o total sempre que produtosCarrinhoo muda
        const novoTotal = produtosCarrinhoo.reduce((total, produto) => total + produto.preco, 0);
        setTotal(novoTotal);
    }, [produtosCarrinhoo]);

    const excluirdoCarrinho = (produto) => {
        const novosProdutos = produtosCarrinhoo.filter(item => item.codigo !== produto.codigo);
        localStorage.setItem('carrinho', JSON.stringify(novosProdutos));
        setProdutosCarrinho(novosProdutos);
    };

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
                {produtosCarrinhoo.map((produto, index) => (
                    <tr key={index}>
                        <td style={{ textAlign: 'center' }}> {produto.codigo} </td>
                        <td style={{ textAlign: 'center' }}> {produto.modelo} </td>
                        <td style={{ textAlign: 'center' }}> {produto.preco} </td>
                        <td>
                            <button onClick={() => excluirdoCarrinho(produto)}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
<path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
</svg></button>
                        </td>
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
import React, { useEffect, useState } from "react"
import styles from "./Produto.module.css"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { adicionarProduto } from "../../reduxFeatures/conta";
import { fetchProduto } from "../../reduxFeatures/geral";

function Produto_detalhes(){
    const {produtoId}   = useParams();
    const dispatch      = useDispatch();
    let state           = useSelector( state => state.geral );
    let conta           = useSelector( state => state.conta );

    let prod            = state.produto;

    useEffect(() => { dispatch(fetchProduto({_id: produtoId})) }, []);

    return (
        
          <div className={styles.produto_body}>
        {
            prod == null || prod == undefined ? (<></>) : 
            (
                     <div className={styles.produto_container}>
                         <div className={styles.campo_img}><img src={prod.img}/></div>
                         <div className={styles.campo_desc}>
                            <h1 className={styles.descricao}>{prod.descricao}</h1>
                            <div className={styles.preco}>Preço: R${prod.preco}</div>
                            <div className={styles.detalhes1}><strong>Informações Técnicas:</strong>{prod.detalhes}</div>
                            <button className={styles.botao_comprar}  
                            onClick={() => {
                                if(conta != null){
                                    dispatch(adicionarProduto({produto: prod}));
                                }else{
                                    alert("Você precisa estar logado para adicionar o produto ao carrinho.")
                                }
                            }}>Adicionar ao carrinho</button>
                         </div>
                
                
                     </div>
                
                )
            }
            </div>
       
    )
}


export default connect()(Produto_detalhes)

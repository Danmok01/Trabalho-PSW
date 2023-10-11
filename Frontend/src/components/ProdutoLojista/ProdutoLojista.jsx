import styles from "./ProdutoLojista.module.css"
import { Link } from "react-router-dom"

//import p from "../components/Dados"


const ProdutoLojista = ({produto}) => {
    return(
        <div className={styles.produtoLojista}>
            <div className={styles.produtoLojista_campo_img}>
                <Link to={`/produtos/${produto._id}`}>
                    <img src={produto.img} alt='' className={styles.produto_lojista_imagem} />
                </Link>

            </div>
            <div className={styles.produtoLojista_campo_info}>
                <Link to={`/produtos/${produto._id}`}>
                    <div className={styles.produto_lojista_descricao}>{produto.descricao}</div>
                    <div></div>
                </Link>
                <h3>{produto.detalhes}</h3>
                <div>R$: {produto.preco}</div>
                <Link to={`/editarProduto/${produto._id}`} className={styles.produto_lojista_botao_editar}>Editar</Link>
            </div>

        </div>
        
    )
}

export default ProdutoLojista
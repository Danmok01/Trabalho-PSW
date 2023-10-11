import Header from "./pages/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./pages/Footer/Footer"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Registro from "./pages/RegistroUsuario/Registro"
import Carrinho from "./pages/Carrinho/Carrinho"
import CadastroProduto from "./pages/CadastroProduto/CadastroProduto"
import CadastroLoja from "./pages/CadastroLoja/CadastroLoja"
import Lojista from "./pages/Loja/Lojista"
import Produto_detalhes from "./pages/Produto/Produto_detalhes"
import ProdutoLojista_Editar from "./pages/ProdutoLojista_Editar/ProdutoLojista_Editar" 
import Usuario from "./pages/Usuario/Usuario"
import Produtos from "./pages/Produtos/Produtos"
import Pesquisa from "./pages/Pesquisa/Pesquisa"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import RegistroLojista from "./pages/RegistroLojista/RegistroLojista"
import {p as produtos, c as categorias} from "./components/Dados"
import {connect} from "react-redux"

const App=()=> {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home produtos={produtos} categorias={categorias}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/carrinho" element={<Carrinho/>} />
          <Route path="/lojista" element={<Lojista/>} />
          <Route path="/cadastroLoja" element={<CadastroLoja/>} />
          <Route path="/cadastroProduto" element={<CadastroProduto/>} />
          <Route path="/produtos/:produtoId" element={<Produto_detalhes/>} />
          <Route path="/editarProduto/:produtoId" element={<ProdutoLojista_Editar/>} />
          <Route path="/pesquisa" element={<Pesquisa/>} />
          <Route path="/usuario" element={<Usuario/>} />
          <Route path="/produtos" element={<Produtos/>} />
          <Route path="/error" element={<ErrorPage/>} />
          <Route path="/registroLojista" element={<RegistroLojista/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default connect()(App);


import '../../App.css'
import google from '../../assets/google.png'
import { Link } from 'react-router-dom';

function Index() {


  return (
    <>
      <div>
        <h1>
          Um aplicativo projetado especialmente para quem busca praticidade e economia ao realizar suas compras.
        </h1>
        <h3>
          Em breve, o nosso aplicativo estará disponível.
        </h3>
        <a href="" >
          <img id='google' src={google} alt="Erro" />
        </a>
        <h3>
          Não fique só olhando venha fazer seu 
          <Link to="/cadastro">
           <span> Cadastro </span>
          </Link>
           ou 
          <Link to="/login">
            <span> Login</span>
          </Link>
        </h3>

      </div>

    </>
  )
}

export default Index;

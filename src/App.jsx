

import './css/App.css'
import axios from 'axios';
import { useState } from "react";


function App() {
  const [cnpj, setCnpj] = useState("");
  const [dados, setDados] = useState([]);
  const [token, setToken] = useState("");
  const [corTexto, setCorTexto] = useState("black");
  const [tamanho, setTamanho] = useState(0);
  const [mensagen, setMensagen] = useState("");

  const inputCnpj = (e) => {
    const inputValue = e.target.value;
    setCnpj(inputValue);
    setTamanho(inputValue.length)
    
    if (inputValue.length < 14  && inputValue.length > 0 || inputValue.length > 14) {
      setMensagen("digite apenas os 14 numeros do CNPJ");
      setCorTexto("red");
    } else if (inputValue.length == 14) {
      setMensagen("");
      setCorTexto("green");
    } else if (inputValue.length == 0 ) {
      setMensagen("");
      setCorTexto("black");
    }
  };

  const buscar = () => {

    if (tamanho === 14) {
      axios.get(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`)
        .then(response => {
          setDados(response.data);
        })
        .catch(error => {
          console.error("Erro na busca do CNPJ", error);
        });
    } else {
      alert("Erro confira o CNPJ digitado")
    }
  };
  const linhasTabela = Object.entries(dados).map(([chave, valor]) => (
    <tr key={chave}>
        <td><strong>{chave}</strong></td>
        <td>{valor}</td>
      </tr>
  ));
  return (
    <>
      <div>
        <fieldset>
          <legend>Buscar CNPJ</legend>
          <label htmlFor="cnpj">Digite o CNPJ que deseja buscar</label>
          <br />
          <input type="number" id='cnpj' onChange={inputCnpj} style={{ color: corTexto }} placeholder='digite apenas numeros' />
          <br />
          <span style={{ color: corTexto }}>{mensagen}</span>
          <p id='mostrar' style={{ color: corTexto }}>CNPJ: {cnpj} </p>
        </fieldset>
        <button onClick={buscar}>Buscar</button>
        
      </div>
      <table id='retorno'>
          <tbody>
            {linhasTabela}
          </tbody>
        </table>
    </>
  )
}

export default App
//39559195000140
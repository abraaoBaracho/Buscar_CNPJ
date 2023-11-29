import './css/App.css';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Img from './componets/Img';
import ButtonBusca from './componets/ButtonBusca';
import { Table } from 'reactstrap';
import { FormGroup, Label, FormFeedback, Input, FormText } from 'reactstrap';

function App() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  

  const [cnpj, setCnpj] = useState("");
  const [dados, setDados] = useState([]);
  const [tamanho, setTamanho] = useState(0);
  const [botaoAnimado, setBotaoAnimado] = useState(false);
  const [botaoPadrao, setBotaoPadrao] = useState(true);
  const [inputErro, setInputErro] = useState(false);
  const [inputCorreto, setInputCorreto] = useState(false);
  const [input, setInput] = useState(true);

  const inputCnpj = (e) => {
    const inputValue = e.target.value;
    setCnpj(inputValue);
    setTamanho(inputValue.length)

    if (inputValue.length < 14 && inputValue.length > 0 || inputValue.length > 14) {
      setInputErro(true)
      setInput(false)
      setInputCorreto(false)
     // inputRef3.current.focus();
    } else if (inputValue.length === 14) {
      setInputErro(false)
      setInput(false)
      setInputCorreto(true)
     // inputRef2.current.focus();
    } else if (inputValue.length === 0) {
      setInputErro(false)
      setInputCorreto(false)
      setInput(true)
    //  inputRef1.current.focus();
    }
  };

  const buscar = () => {

    if (tamanho === 14) {
      setBotaoAnimado(true);
      setBotaoPadrao(false);

      axios.get(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`)
        .then(response => {
          setDados(response.data);
          setTimeout(() => {
            setBotaoAnimado(false);
            setBotaoPadrao(true);
          }, 400);
        })
        .catch(error => {
          console.error("Erro na busca do CNPJ", error);
          setBotaoAnimado(false);
          setBotaoPadrao(true);
        });
    } else {
      alert("Erro, confira o CNPJ digitado")
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

      <div id='img'>
        <Img />
      </div>

      <div>
        <form id='form'>

          <Label for="cnpj" id='cnpjLabel'>
            Digite o CNPJ que deseja pesquisar
          </Label>
          {input &&
            <Input id='cnpj' onChange={inputCnpj} type='number' ref={inputRef1} />
          }
          <br />

          {inputCorreto &&
            <FormGroup className="position-relative">
              <Input valid id='cnpj' onChange={inputCnpj} type='number' value={cnpj} ref={inputRef2} />
            </FormGroup>
          }

          {inputErro &&
            <FormGroup className="position-relative">
              <Input invalid id='cnpj' onChange={inputCnpj} type='number' value={cnpj} ref={inputRef3} />
              <FormFeedback tooltip>
                CNPJ invalido
              </FormFeedback>
            </FormGroup>
          }
        </form>
        <br />
        {botaoPadrao && <button id='buscar' onClick={buscar}><strong>Pesquisar</strong></button>}
        {botaoAnimado && <ButtonBusca />}

      </div>

      <br />




      <br />

      <Table
        hover
      >
        <tbody>
          {linhasTabela}
        </tbody>
      </Table>
    </>
  )
}

export default App
//39559195000140
import './css/App.css';
import React, { useState } from 'react';
import axios from 'axios';
import ButtonBusca from './componets/ButtonBusca';
import { Table, FormGroup, Label, FormFeedback, Input } from 'reactstrap';
import Img from './componets/Img';

function App() {
  const [cnpj, setCnpj] = useState("");
  const [dados, setDados] = useState([]);
  const [tamanho, setTamanho] = useState(0);
  const [botaoAnimado, setBotaoAnimado] = useState(false);
  const [botaoPadrao, setBotaoPadrao] = useState(true);
  const [inputErro, setInputErro] = useState(false);
  const [inputCorreto, setInputCorreto] = useState(false);

  const inputCnpj = (e) => {
    const inputValue = e.target.value;
    setCnpj(inputValue);
    setTamanho(inputValue.length);

    if (inputValue.length === 14) {
      setInputErro(false);
      setInputCorreto(true);
    } else {
      setInputErro(inputValue.length > 0);
      setInputCorreto(false);
    }
  };

  const limpar = () => {
    setCnpj("");
    setDados([]);
    setInputErro(false);
    setInputCorreto(false);
  };

  const buscar = () => {
    if (tamanho === 14) {
      setBotaoAnimado(true);
      setBotaoPadrao(false);

      axios
        .get(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`)
        .then((response) => {
          setDados(response.data);
          setTimeout(() => {
            setBotaoAnimado(false);
            setBotaoPadrao(true);
          }, 400);
        })
        .catch((error) => {
          console.error("Erro na busca do CNPJ", error);
          setBotaoAnimado(false);
          setBotaoPadrao(true);
          setInputErro(true);
          setInputCorreto(false);
        });
    } else {
      alert("Erro, confira o CNPJ digitado.");
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
      <div id="img">
        <Img />
      </div>

      <div>
        <form id="form">
          <Label for="cnpjInput" id="cnpjLabel">
            Digite o CNPJ que deseja pesquisar
          </Label>
          <FormGroup className="position-relative">
            <Input
              id="cnpjInput"
              type="number"
              value={cnpj}
              onChange={inputCnpj}
              valid={inputCorreto}
              invalid={inputErro}
            />
            {inputErro && <FormFeedback tooltip>CNPJ inválido</FormFeedback>}
          </FormGroup>
        </form>
        <div>
          {botaoPadrao && (
            <button id="buscar" onClick={buscar}>
              <strong>Pesquisar</strong>
            </button>
          )}
          {botaoAnimado && <ButtonBusca />}
          <button id="limpar" onClick={limpar}>
            Limpar
          </button>
        </div>
      </div>

      <div id="tabela">
        <Table hover>
          <tbody>{linhasTabela}</tbody>
        </Table>
      </div>
    </>
  );
}

export default App;

//39559195000140

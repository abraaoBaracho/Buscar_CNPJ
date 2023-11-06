import { Link } from "react-router-dom";
import { useState } from 'react'

function Cadastro() {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');



    return (
        <>
            <form > 
                <fieldset>
                    <legend>Cadastro</legend>
                    <label htmlFor="user">Nome</label>
                    <br />
                    <input type="text" id="user" placeholder="Digite seu nome" onChange={(user) => setUser(user.target.value)} />
                    <br />
                    <label htmlFor="email">E-mail</label>
                    <br />
                    <input type="text" id="email" placeholder="Digite seu email" onChange={(email) => setEmail(email.target.value)} />
                    <br />
                    <label htmlFor="senha">Senha</label>
                    <br />
                    <input type="password" id="senha" placeholder="Digite seu senha" onChange={(senha) => setSenha(senha.target.value)} />
                    <br />
                    <button type="submit">Salvar</button>
                </fieldset>

            </form>
            <Link to="/">
                Voltar
            </Link>
        </>
    )

}
export default Cadastro;
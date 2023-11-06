import { Link } from "react-router-dom";
import { useState } from 'react'


function Login() {

    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');

    

    return (
        <>
            <form >
                <fieldset>
                    <legend>Login</legend>
                    <label htmlFor="user">Usuario</label>
                    <br />
                    <input type="text" id="user" onChange={(user) => setUser(user.target.value)} />
                    <br />
                    <label htmlFor="senha">Senha</label>
                    <br />
                    <input type="password" id="senha" onChange={(senha) => setSenha(senha.target.value)} />
                    <br />
                    <button type="submit">Login</button>
                </fieldset>
            </form>
            <Link to="/">
                Voltar
            </Link>
        </>
    )
}
export default Login;
import React from "react";
import { Button } from "../../components/Button/styles";
import Input from "../../components/Input/Input";
import Registration from "../Registration/Registration";
import * as S from "./styles";

const Login = () => {
	const handleClick = () => {
		<Registration />;
	};

	return (
		<S.Container>
			<h1> Faça Login </h1>
			<S.Content>
				<Input name="usuario" placeholder="Usuario"></Input>
				<Input name="Senha" placeholder="Senha"></Input>
			</S.Content>

			<S.Content>
				<Button onClick={handleClick}>Login</Button>
			</S.Content>

			<S.Content>
				<p>
					Esqueceu sua <span>senha?</span>
				</p>

				<p>
					Não tem conta?{" "}
					<a href="#" onClick={handleClick}>
						Criar
					</a>
				</p>
			</S.Content>
		</S.Container>
	);
};

export default Login;

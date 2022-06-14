import React from "react";

import * as S from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	ref?: React.RefObject<HTMLInputElement>;
}
const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ children, ref, ...rest }: InputProps) => {
	return <S.Input {...rest}></S.Input>;
};

export default Input;

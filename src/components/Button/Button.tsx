import React from "react";

import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	ref?: React.RefObject<HTMLButtonElement>;
}
const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({ children, ref, ...rest }: ButtonProps) => {
	return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;

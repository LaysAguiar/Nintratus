import React from "react";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";
import { GlobalStyle } from "./styles/global";

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Header />
			<Login />;
		</React.Fragment>
	);
}

export default App;

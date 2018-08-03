import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
	<div>
		<h1 className="test">Hello World, from React!</h1>
	</div>
);

ReactDom.render(<App />,document.getElementById("react-root"));
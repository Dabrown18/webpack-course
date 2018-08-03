import React from 'react';
import ReactDom from 'react-dom';
import Counter from './counter';

const App = () => (
	<div>
		<Counter />
	</div>
);

ReactDom.render(<App />,document.getElementById("react-root"));
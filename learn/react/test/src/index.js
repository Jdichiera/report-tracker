import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Welcome(props) {
	return <h1>Hi, {props.firstName} {props.lastName}</h1>
}

function App() {
	return (
		<div>
			<Welcome firstName='jer' lastName='Dic'/>
			<Welcome firstName='12' lastName='wer'/>
			<Welcome firstName='464564' lastName='		qw'/>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
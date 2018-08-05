import React, { Component } from 'react';
import { css } from 'emotion';

const red = "#f00";
const className = css`
	color: ${red}
`;

export default class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};

		this.climb = this.climb.bind(this)
	}

	climb() {
		this.setState(() => ({
			count: this.state.count + 1
		}))
	}

	render() {
		return (
			<div onClick={this.climb}>
				<h1 className={className}>Count: {this.state.count}</h1>
			</div>
		)
	}
}

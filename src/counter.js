import React, { Component } from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

// React Emotion
const Fancy = styled("h1")`
	color: ${ props => props.wild ? "hotpink" : "gold" }
`;

// Emotion
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
		const isWild = this.state.count % 2 === 0;
		return (
			<div onClick={this.climb}>
				<Fancy wild={isWild}>Count: {this.state.count}</Fancy>
			</div>
		)
	}
}

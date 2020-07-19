import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const NumberButtonsContainer = styled.div`
	display: flex;
	cursor: pointer;
`;
const NumberButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
	width: 100px;
	padding; 15px;
	cursor: pointer;
`;
const CalculatorContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const ButtonsContainer = styled.div`
	border: 1px solid black;
`;
const DisplayContainer = styled.div`
	height: 150px;
	width: 250px;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	flex-direction: column;
`
const Calculator = () => {
	const [answer, setAnswer] = useState(0);
	const [input, setInput] = useState('');
	const [waitingForNextExpression, setWaitingForNextExpression] = useState(
		false
	);
	const history = useHistory();

	useEffect(() => {
		if (
			waitingForNextExpression ||
			input[input.length - 1] === '+' ||
			input[input.length - 1] === '-' ||
			input[input.length - 1] === '*' ||
			input[input.length - 1] === '/'
		)
			return;
		setAnswer(eval(input));
	}, [input, waitingForNextExpression]);

	return (
		<div>
			<div onClick={ () => history.push('/') } style={{cursor: 'pointer'}}>Back</div>
			<CalculatorContainer>
				<DisplayContainer>
					<h2>{input}</h2>
					<h2> = {answer}</h2>
				</DisplayContainer>
				<ButtonsContainer>
					<NumberButtonsContainer>
						<NumberButtonContainer onClick={() => setInput(input.slice(0, -1))}>
							Erase
						</NumberButtonContainer>
						<NumberButtonContainer onClick={() => setInput('')}>
							Erase All
						</NumberButtonContainer>
						<NumberButtonContainer
							style={
								waitingForNextExpression
									? { pointerEvents: 'none' }
									: { pointerEvents: 'auto' }
							}
							onClick={() => {
								if (setWaitingForNextExpression) {
									setInput(input + '%');
									setWaitingForNextExpression(true);
								}
							}}
						>
							%
						</NumberButtonContainer>
						<NumberButtonContainer
							style={
								waitingForNextExpression
									? { pointerEvents: 'none' }
									: { pointerEvents: 'auto' }
							}
							onClick={() => {
								if (setWaitingForNextExpression) {
									setInput(input + '/');
									setWaitingForNextExpression(true);
								}
							}}
						>
							/
						</NumberButtonContainer>
					</NumberButtonsContainer>
					<NumberButtonsContainer>
						<NumberButtonContainer
							onClick={() => {
								setInput(input + '1');
								setWaitingForNextExpression(false);
							}}
						>
							1
						</NumberButtonContainer>
						<NumberButtonContainer
							onClick={() => {
								setInput(input + '2');
								setWaitingForNextExpression(false);
							}}
						>
							2
						</NumberButtonContainer>
						<NumberButtonContainer
							onClick={() => {
								setInput(input + '3');
								setWaitingForNextExpression(false);
							}}
						>
							3
						</NumberButtonContainer>
						<NumberButtonContainer
							style={
								waitingForNextExpression
									? { pointerEvents: 'none' }
									: { pointerEvents: 'auto' }
							}
							onClick={() => {
								if (setWaitingForNextExpression) {
									setInput(input + '*');
									setWaitingForNextExpression(true);
								}
							}}
						>
							*
						</NumberButtonContainer>
					</NumberButtonsContainer>
					<NumberButtonsContainer>
						<NumberButtonContainer
							onClick={() => {
								setInput(input + '4');
								setWaitingForNextExpression(false);
							}}
						>
							4
						</NumberButtonContainer>
						<NumberButtonContainer
							onClick={() => {
								setInput(input + '5');
								setWaitingForNextExpression(false);
							}}
						>
							5
						</NumberButtonContainer>
						<NumberButtonContainer
							onClick={() => {
								setInput(input + '6');
								setWaitingForNextExpression(false);
							}}
						>
							6
						</NumberButtonContainer>

						<NumberButtonContainer
							style={
								waitingForNextExpression
									? { pointerEvents: 'none' }
									: { pointerEvents: 'auto' }
							}
							onClick={() => {
								if (setWaitingForNextExpression) {
									setInput(input + '-');
									setWaitingForNextExpression(true);
								}
							}}
						>
							-
						</NumberButtonContainer>
					</NumberButtonsContainer>
					<NumberButtonsContainer>
						<NumberButtonContainer
							onClick={() => {
								setInput(input + '7');
								setWaitingForNextExpression(false);
							}}
						>
							7
						</NumberButtonContainer>
						<NumberButtonContainer
							onClick={() => {
								setInput(input + '8');
								setWaitingForNextExpression(false);
							}}
						>
							8
						</NumberButtonContainer>
						<NumberButtonContainer
							onClick={() => {
								setInput(input + '9');
								setWaitingForNextExpression(false);
							}}
						>
							9
						</NumberButtonContainer>
						<NumberButtonContainer
							style={
								waitingForNextExpression
									? { pointerEvents: 'none' }
									: { pointerEvents: 'auto' }
							}
							onClick={() => {
								if (setWaitingForNextExpression) {
									setInput(input + '+');
									setWaitingForNextExpression(true);
								}
							}}
						>
							+
						</NumberButtonContainer>
					</NumberButtonsContainer>
					<NumberButtonsContainer>
						<NumberButtonContainer></NumberButtonContainer>
						<NumberButtonContainer
							onClick={() => {
								setInput(input + '0');
								setWaitingForNextExpression(false);
							}}
						>
							0
						</NumberButtonContainer>
						<NumberButtonContainer
							onClick={() => {
								setInput(input + '.');
								setWaitingForNextExpression(false);
							}}
						>
							.
						</NumberButtonContainer>
						<NumberButtonContainer
							onClick={() => {
								setInput(input + '.');
								setWaitingForNextExpression(false);
							}}
						>
							=
						</NumberButtonContainer>
					</NumberButtonsContainer>
				</ButtonsContainer>
			</CalculatorContainer>
		</div>
	);
};

export default Calculator;

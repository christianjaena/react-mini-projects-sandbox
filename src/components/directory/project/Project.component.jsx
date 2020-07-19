import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
const ProjectWrapper = styled.div`
	border: 1px solid black;
	height: 100px;
	width: 100px;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	h2 {
		padding: 0;
		margin: 0;
	}
`;

const Project = ({ title }) => {
	const history = useHistory();
	const route = history.location.pathname;
	return (
		<ProjectWrapper onClick={() => history.push(`${route}${title}`)}>
			<h2>{title ? title : 'No project yet'}</h2>
		</ProjectWrapper>
	);
};

export default Project;

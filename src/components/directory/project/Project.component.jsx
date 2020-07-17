import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
const ProjectWrapper = styled.div`
	border: 1px solid black;
	height: 100px;
	width: 100px;
`;

const Project = ({ title }) => {
	const history = useHistory();
	const route = history.location.pathname;
	return (
		<ProjectWrapper onClick={() => history.push(`${route}${title}`)}>
			<h1>{title ? title : 'No project yet'}</h1>
		</ProjectWrapper>
	);
};

export default Project;

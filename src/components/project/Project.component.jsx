import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
const ProjectWrapper = styled.div`
	border: 1px solid black;
	height: 100px;
	width: 100px;
`;

class Project extends React.Component {
	render() {
		const { title } = this.props;
		return (
			<ProjectWrapper>
				<h1>{title ? title : 'No project yet'}</h1>
			</ProjectWrapper>
		);
	}
}

export default withRouter(Project);

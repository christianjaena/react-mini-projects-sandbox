import React from 'react';
import styled from 'styled-components';
import Project from './project/Project.component';

const DirectoryWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	justify-items: center;
`;

const Directory = () => {
	return (
		<DirectoryWrapper>
			<Project title='calculator' />
			<Project title='countdown' />
		</DirectoryWrapper>
	);
};

export default Directory;

import React from 'react';
import ContentCard from '../components/ContentCard';
import styled from 'styled-components';
import mockData from '../mockData'; // Importe os dados mock

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
`;

const HomePage = () => {
  return (
    <Grid>
      {mockData.map((content) => (
        <ContentCard key={content.id} {...content} />
      ))}
    </Grid>
  );
};

export default HomePage;

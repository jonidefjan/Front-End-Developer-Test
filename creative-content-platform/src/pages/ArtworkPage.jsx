import React from 'react';
import ContentCard from '../components/ContentCard';
import styled from 'styled-components';
import mockData from '../mockData';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
`;

const ArtworkPage = () => {
  const artworkData = mockData.filter((content) => content.category === 'Artwork');

  return (
    <Grid>
      {artworkData.map((content) => (
        <ContentCard key={content.id} {...content} />
      ))}
    </Grid>
  );
};

export default ArtworkPage;

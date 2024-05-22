import React from 'react';
import { useLocation } from 'react-router-dom';
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

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResultsPage = () => {
  const query = useQuery();
  const searchQuery = query.get('q').toLowerCase();
  const filteredData = mockData.filter((content) =>
    content.title.toLowerCase().includes(searchQuery) ||
    content.category.toLowerCase().includes(searchQuery)
  );

  return (
    <Grid>
      {filteredData.length > 0 ? (
        filteredData.map((content) => (
          <ContentCard key={content.id} {...content} />
        ))
      ) : (
        <p>No results found</p>
      )}
    </Grid>
  );
};

export default SearchResultsPage;

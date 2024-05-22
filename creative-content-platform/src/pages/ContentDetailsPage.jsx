import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import mockData from '../mockData'; // Importe os dados mock

const ContentWrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const LargeImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.text};
  margin-top: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
  margin-top: 1rem;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
`;

const StarIcon = styled(FaStar)`
  color: ${(props) => (props.active ? props.theme.colors.accent : '#ddd')};
  cursor: pointer;
  margin-right: 0.5rem;
  transition: color 0.2s;
`;

const ContentDetailsPage = () => {
  const { id } = useParams();
  const content = mockData.find((item) => item.id === parseInt(id));
  
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  if (!content) {
    return <ContentWrapper>Content not found</ContentWrapper>;
  }

  return (
    <ContentWrapper>
      <LargeImage src={content.thumbnail} alt={content.title} />
      <Title>{content.title}</Title>
      <Description>{content.description}</Description>
      <RatingWrapper>
        {[1, 2, 3, 4, 5].map((rate) => (
          <StarIcon
            key={rate}
            active={rate <= rating}
            onClick={() => handleRating(rate)}
          />
        ))}
      </RatingWrapper>
    </ContentWrapper>
  );
};

export default ContentDetailsPage;

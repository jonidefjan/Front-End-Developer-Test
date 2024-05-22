import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
`;

const Category = styled.p`
  margin: 0.5rem 0 0;
  color: ${(props) => props.theme.colors.secondary};
`;

const ContentCard = ({ id, thumbnail, title, category }) => {
  return (
    <Link to={`/content/${id}`}>
      <Card>
        <Thumbnail src={thumbnail} alt={title} />
        <Content>
          <Title>{title}</Title>
          <Category>{category}</Category>
        </Content>
      </Card>
    </Link>
  );
};

export default ContentCard;

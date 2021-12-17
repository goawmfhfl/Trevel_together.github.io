import React from 'react';
import styled from 'styled-components';

export const Card = styled.article``;
export const Link = styled.a``;
export const CardList = styled.ul`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;
export const CardItem = styled.li`
  width: 45%;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 1px;
  &:nth-child(2) ~ li {
    margin-top: 1rem;
  }
`;
export const ImgCont = styled.figure``;
export const Img = styled.img`
  max-width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: contain;
`;

export const DescCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const CategoryCont = styled.div`
  display: flex;
`;
export const Category = styled.span`
  font-size: 1.2rem;
`;
export const Star = styled.span`
  font-size: 1.2rem;
`;
export const Desc = styled.div`
  font-size: 1.2rem;
  margin-bottom: 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const PriceInfo = styled.div`
  display: flex;
`;
export const Price = styled.span`
  font-size: 1.2rem;
`;
export const Discount = styled.span`
  font-size: 1.2rem;
`;

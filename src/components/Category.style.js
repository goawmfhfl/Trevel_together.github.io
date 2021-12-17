import styled from 'styled-components';

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-top: 1rem;
`;
export const CategoryItem = styled.li`
  width: 45%;
  text-align: center;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  &:nth-child(2) ~ li {
    margin-top: 10px;
  }
`;

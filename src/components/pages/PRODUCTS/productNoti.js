import styled from 'styled-components';
import './productNoti.scss';

function ProductNoti() {
  return (
    <NotiList>
      <NotiItem>non - refundable</NotiItem>
      <NotiItem>non - refundable</NotiItem>
      <NotiItem>non - refundable</NotiItem>
      <NotiItem>non - refundable</NotiItem>
      <NotiItem>non - refundable</NotiItem>
      <NotiItem>non - refundable</NotiItem>
    </NotiList>
  );
}

const NotiList = styled.ul`
  all: revert;
`;
const NotiItem = styled.li`
  &:nth-child(1) ~ li {
    margin-top: 0.4rem;
  }
`;

export default ProductNoti;

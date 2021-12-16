import styled from 'styled-components';

function TravelBtn() {
  return (
    <>
      <SelectBtn>
        <Button>Category</Button>
        <SelectList>
          <Selectitem>item</Selectitem>
          <Selectitem>item</Selectitem>
          <Selectitem>item</Selectitem>
        </SelectList>
      </SelectBtn>
    </>
  );
}

const SelectBtn = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Button = styled.button`
  display: inline-block;
  padding: 5px;
  font-size: 20px;
  border: 1px solid #000;
  color: #000;
  &:hover {
    border: 1px solid grey;
  }
`;
const SelectList = styled.ul`
  display: none;
  position: absolute;
  top: 33px;
  right: 0px;
  background-color: #fff;
  z-index: 1;
  border: 1px solid #000;
`;
const Selectitem = styled.li`
  text-align: center;
  padding: 8px;
  width: 100px;
  font-size: 24px;
  border-bottom: 1px solid #000;
  &:nth-child(3) {
    border: none;
  }
`;
export default TravelBtn;

import styled from 'styled-components';

export const Self = styled.div`
  min-width: 300px;
  background-color: white;
`;

export const Header = styled.div`
  color: #878787;
  font-size: 24px;
  padding: 20px 10px;
`;

export const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  height: 40px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 15px;
  cursor: pointer;
  &.active {
    border-left: 2px solid #539def;
    background-color: #f5f5f5;
    font-weight: bold;
  }
`;

export const ItemInner = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemInnerText = styled.div`
  color: #878787;
  font-size: 16px;
`;

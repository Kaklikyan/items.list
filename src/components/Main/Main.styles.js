import styled from 'styled-components';

export const Self = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #f3f3f3;
`;

export const Container = styled.div`
  margin: 0 200px;
  width: 100%;
  background-color: white;
  border: 1px solid #cccccc;
`;

export const Header = styled.div`
  background-color: #00d1b2;
  color: white;
  font-size: 24px;
  padding: 20px 15px 70px;
`;

export const BlocksWrapper = styled.div`
  display: flex;
  padding: 20px;
`;

export const DetailsBlock = styled.div`
  flex: 1;
`;

export const ActionsBlock = styled.div`
  flex: 1;
  margin-left: 10px;
`;

export const BlockHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.isActions ? '52px' : '20px;'}
`;

export const BlockHeaderText = styled.div`
  color: #539def;
  text-transform: uppercase;
  font-size: 14px;
`;

export const PanelWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.div`
  color: #b8bac9;
  margin-bottom: 15px;
`;

export const Panel = styled.div`
  padding: 8px 16px;
  background-color: #f5f5f5;
  border-radius: 1px;
  color: #878787;
  font-size: 14px;
`;

export const ActionPanel = styled(Panel)`
  color: #b8bac9;
  padding: 12px 14px;
  margin-bottom: 5px;
  font-size: 16px;
`;

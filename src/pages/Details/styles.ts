import styled from 'styled-components/native';

export const Main = styled.View`
  flex: 1;
  padding: 20px 30px 20px 30px;
  background-color: #fafafa;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 25px;
  background-color: #54b175;
`;

export const TitleHeader = styled.Text`
  color: #fafafa;
  font-size: 16px;
  font-weight: 600;
`;

export const InvisibleAlign = styled.View`
  width: 22px;
  height: 22px;
`;

export const CompletePurchase = styled.View`
  width: 100%;
  height: 70px;
  border-top-width: 1px;
  border-color: #dedede;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
`;

export const InfoPurchase = styled.View`
  padding: 0px 10px;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #313030;
`;

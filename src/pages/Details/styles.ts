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
  z-index: 999;
  background-color: #fafafa;
`;

export const InfoPurchase = styled.View`
  padding: 0px 10px;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerPicture = styled.View`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ContainerDescription = styled.View`
  width: 100%;
`;

export const NameMotor = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #313030;
`;

export const CardsDescription = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0px 30px 0px;
`;

export const CardDescription = styled.View`
  justify-content: space-evenly;
  align-items: center;
  width: 80px;
  max-width: 74px;
  height: 87px;
  background-color: #f4f4f4;
  border-radius: 8px;
`;

export const Description = styled.Text`
  color: #414040;
  font-size: 12px;
  text-align: center;
`;

export const DetailedDescription = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const TitleDescription = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #414040;
`;

export const ValueDescription = styled.Text`
  font-size: 14px;
  color: #414040;
`;

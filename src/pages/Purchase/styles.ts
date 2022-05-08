import styled from 'styled-components/native';

export const Main = styled.View`
  flex: 1;
  padding: 20px 30px 20px 30px;
  background-color: #fafafa;
`;

export const CardPurchase = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const NameMotorcycle = styled.Text`
  font-size: 17px;
  color: #313030;
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 17px;
  color: #54b175;
  font-weight: bold;
`;

export const Color = styled.Text`
  font-size: 13px;
  color: #a7a7aa;
`;

export const InfoMotorcycle = styled.View``;

export const TitleSection = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 14.5px;
  margin-bottom: 8px;
  color: #313030;
`;

export const TitleInput = styled.Text`
  font-size: 14px;
  color: #414040;
  margin-bottom: 6px;
`;

export const InputArea = styled.View`
  width: 100%;
  height: 45px;
  border-width: 1px;
  border-color: #54b175;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const FormOfPayment = styled.TouchableOpacity`
  width: 100%;
  padding: 5px 8px;
  border-radius: 8px;
  margin-bottom: 11px;
  background-color: #f4f4f4;
  flex-direction: row;
  align-items: center;
`;

export const TitleFormOfPayment = styled.Text`
  font-size: 14px;
  color: #414040;
  margin-left: 8px;
`;

export const ModalPayment = styled.View`
  width: 325px;
  padding: 10px;
  border-radius: 8px;
  background-color: #fafafa;
`;

export const HeaderModal = styled.View`
  width: 100%;
  margin-bottom: 18px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleModal = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #414040;
`;

export const ContainerValidate = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

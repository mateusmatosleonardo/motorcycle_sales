import styled from 'styled-components/native';

export const Main = styled.ScrollView`
  flex: 1;
  padding: 20px 30px 20px 30px;
`;

export const Logo = styled.Image`
  width: 79.09px;
  height: 88px;
`;

export const Header = styled.View`
  width: 100%;
  padding: 0px 40px;
  justify-content: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const ListCard = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const BgMoto = styled.View`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 10px;
`;

export const NameMoto = styled.Text`
  font-size: 14.5px;
  font-weight: bold;
  color: #414040;
  margin: 4px 0px 2px 0px;
`;

export const Cc = styled.Text`
  font-size: 12px;
  color: #8a8a8e;
`;

export const Price = styled.Text`
  font-size: 14.5px;
  font-weight: bold;
  color: #313030;
`;

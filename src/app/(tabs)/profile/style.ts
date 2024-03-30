import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #f0f0f0;
`;
export const ContainerHeader=styled.View`
  border-radius: 8px;
  background: #fff;
  width: 100%;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  height: 150px;
  gap: 10px;
  margin-bottom: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.23);
`

export const Card = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Avatar = styled.Image`
  width: 85px;
  height: 85px;
  border-radius: 50px;
`;

export const Content = styled.View`
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const Paragraph = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;


export const LogoutButton = styled.TouchableOpacity`
  background-color: #f87171;
  padding: 10px;
  border-radius: 5px;
`;

export const LogoutText = styled.Text`
  color: #fff;
  text-align: center;
`;

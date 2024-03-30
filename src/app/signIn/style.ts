import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  border: 1px solid #000;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
`;
export const Button = styled.TouchableOpacity`
width: 80%;
background: #4CAF50;
padding: 10px;
border-radius: 8px;
`;
export const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 18px;
`;
export const StyledLink = styled.View`
  color: blue;
  text-decoration: underline;
`;
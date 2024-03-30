import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f4f4f4;
`;

export const MessageList = styled.FlatList`
  flex: 1;
`;

export const MessageInput = styled.TextInput`
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 0 10px;
  margin: 10px;
`;

export const MessageButton = styled.Button`
  margin: 10px;
`;

export const MessageItem = styled.View`
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
`;

export const MessageText = styled.Text`
  color: #000;
`;
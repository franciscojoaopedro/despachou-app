import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container,MessageButton,MessageInput,MessageList,MessageItem,MessageText } from './style';
import { useState } from 'react';

export default function Message() {
  const [message,setMessage]=useState<string>("")
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    setMessages([...messages, message]);
    setMessage('');
  };
  const  MessageItemRender=({ message })=> {
    return (
      <MessageItem>
        <MessageText>{message}</MessageText>
      </MessageItem>
    );
  }
  return (
    <Container>
      <MessageList
        data={messages}
        renderItem={({ item }) => <MessageItemRender message={item} />}
        keyExtractor={item => item.id}
      />
      <MessageInput
        placeholder="Type a message..."
        value={message}
        onChangeText={setMessage}
      />
      <MessageButton title="Send" onPress={sendMessage} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

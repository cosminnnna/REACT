import React, { useState } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";


const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 50px;
  background-color: #f8e1f4; 
`;

const Input = styled.TextInput`
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-bottom: 15px;
  padding: 8px;
`;

const Button = styled.TouchableOpacity`
  margin-top: 30px;
  background-color: #ff69b4; /* Buton roz închis */
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export interface ILogin {
  onSubmit: (email: string, password: string) => void;
  goToRegister: () => void;
}

const Login: React.FC<ILogin> = ({ onSubmit, goToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => onSubmit(email, password);

  return (
    <Container>
      <Text style={{ fontSize: 40, marginBottom: 30, textAlign: "center" }}>
        Login
      </Text>
      <Input
        keyboardType="email-address"
        onChangeText={setEmail}
        placeholder="Enter email here..."
        placeholderTextColor="#000"
      />
      <Input
        secureTextEntry
        onChangeText={setPassword}
        placeholder="Enter password here..."
        placeholderTextColor="#000"
      />
      <Button onPress={handleSubmit}>
        <ButtonText>Submit!</ButtonText>
      </Button>
      <Button onPress={goToRegister}>
        <ButtonText>Register here!</ButtonText>
      </Button>
    </Container>
  );
};

export default Login;

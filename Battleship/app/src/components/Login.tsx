import React, { useState } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f8e1f4; /* Fundal roz pudrat */
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ff69b4; /* Titlu roz-mov */
  margin-bottom: 20px;
  font-family: 'Poppins_700Bold';
`;

const DetailText = styled.Text`
  font-size: 18px;
  margin: 10px 0;
  font-family: 'Poppins_400Regular';
`;

const Button = styled.TouchableOpacity`
  width: 80%;
  padding: 15px;
  background-color: #ff69b4; /* Buton roz-mov */
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Poppins_700Bold';
`;

// const Container = styled.View`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   padding: 50px;
//   margin-top: 30px;
//   background-color: #f8e1f4; /* Fundal roz pudrat */
// `;

const Input = styled.TextInput`
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-bottom: 15px;
  padding: 8px;
`;

// const Button = styled.TouchableOpacity`
//   margin-top: 30px;
//   background-color: #ff69b4; /* Buton roz închis */
//   padding: 10px 20px;
//   border-radius: 5px;
// `;

// const ButtonText = styled.Text`
//   color: white;
//   font-size: 20px;
//   font-weight: bold;
//   text-align: center;
// `;

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

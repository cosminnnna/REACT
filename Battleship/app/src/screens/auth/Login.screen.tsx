// import React, { useState } from 'react';
// import styled from 'styled-components/native';
// import { useNavigation } from '@react-navigation/native';
// import { AuthRouteNames } from '../../router/route-names';
// import { useAuth } from '../../hooks/authContext';

// const Container = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: #f8e1f4; /* Fundal roz pudrat */
// `;

// const Input = styled.TextInput`
//   width: 80%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   background-color: #fff;
// `;

// const Button = styled.TouchableOpacity`
//   width: 80%;
//   padding: 15px;
//   background-color: #ff69b4; /* Buton roz-mov */
//   border-radius: 5px;
//   align-items: center;
//   margin-top: 10px;
// `;

// const ButtonText = styled.Text`
//   color: white;
//   font-size: 16px;
//   font-weight: bold;
// `;

// const Title = styled.Text`
//   font-size: 24px;
//   font-weight: bold;
//   color: #ff69b4; /* Titlu roz-mov */
//   margin-bottom: 20px;
// `;
// const LoginScreen: React.FC = () => {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const navigation =  useNavigation<any>();
//   const auth = useAuth();

//   const handleLogin = () => {
//     // Apelează funcția de login din contextul de autentificare
//     auth.login(email, password);
//   };

//       const handleGoToRegister = () => {
//         navigation.navigate(AuthRouteNames.REGISTER)
//     }

//   return (
//     <Container>
//       <Title>Login</Title>
//       <Input
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <Input
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button onPress={handleLogin}>
//         <ButtonText>Login</ButtonText>
//       </Button>
//       <Button onPress={handleGoToRegister}>
//         <ButtonText>Go to Register</ButtonText>
//       </Button>
//     </Container>
//   );
// };

// export default LoginScreen;

import { NavigationProp, useNavigation } from "@react-navigation/native"
import Login from "../../components/Login"
import { AuthRouteNames } from "../../router/route-names"
import { useAuth } from "../../hooks/authContext"

const LoginScreen = () => {
    const navigation = useNavigation<any>()
    const handleGoToRegister = () => {
        navigation.navigate(AuthRouteNames.REGISTER)
    }
    const auth = useAuth()
    return <Login onSubmit={auth.login} goToRegister={handleGoToRegister}/> 
}

export default LoginScreen
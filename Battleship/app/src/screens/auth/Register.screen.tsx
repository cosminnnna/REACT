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
//   font-family: 'Poppins_400Regular';
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
//   font-family: 'Poppins_700Bold';
// `;

// const Title = styled.Text`
//   font-size: 24px;
//   font-weight: bold;
//   color: #ff69b4; /* Titlu roz-mov */
//   margin-bottom: 20px;
//   font-family: 'Poppins_700Bold';
// `;

// const RegisterScreen = () => {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [confirmPassword, setConfirmPassword] = useState<string>('');
//   const navigation = useNavigation<any>();
//   const auth = useAuth();

//   const handleRegister = () => {
//     if (password === confirmPassword) {
//       auth.register(email, password);
//     } else {
//       alert("Passwords do not match");
//     }
//   };

//   const handleGoToLogin = () => {
//     navigation.navigate(AuthRouteNames.LOGIN);
//   };

//   return (
//     <Container>
//       <Title>Register</Title>
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
//       <Input
//         placeholder="Confirm Password"
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//         secureTextEntry
//       />
//       <Button onPress={handleRegister}>
//         <ButtonText>Register</ButtonText>
//       </Button>
//       <Button onPress={handleGoToLogin}>
//         <ButtonText>Go to Login</ButtonText>
//       </Button>
//     </Container>
//   );
// };

// export default RegisterScreen;

import Register from "../../components/Register"
import { useAuth } from "../../hooks/authContext"


const RegisterScreen = () => {
    const auth = useAuth()
    return <Register onSubmit={auth.register} />
}

export default RegisterScreen
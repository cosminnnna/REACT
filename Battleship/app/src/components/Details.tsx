import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { IUserDetails } from "../hooks/userDetailsContext";

export interface IUserDetailsProps {
  userDetails: IUserDetails | null;
}


const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin-top: 30px;
  background-color: #f8e1f4;
`;

const TextBox = styled.View`
  background-color: #ffc0cb; 
  padding: 20px;
  border-radius: 10px; 
  margin-bottom: 20px;
`;

const UserDetails: React.FC<IUserDetailsProps> = ({ userDetails }) => {
  return (
    <Container>
      {userDetails ? (
        <>
          <TextBox>
            <Text style={{ fontSize: 40 }}>User Details</Text>
          </TextBox>
          <Text>Email: {userDetails.user.email}</Text>
          <Text>Currently Games Playing: {userDetails.currentlyGamesPlaying}</Text>
          <Text>Games Lost: {userDetails.gamesLost}</Text>
          <Text>Games Played: {userDetails.gamesPlayed}</Text>
          <Text>Games Won: {userDetails.gamesWon}</Text>
        </>
      ) : (
        <Text style={{ fontSize: 20 }}>No user details available.</Text>
      )}
    </Container>
  );
};

export default UserDetails;

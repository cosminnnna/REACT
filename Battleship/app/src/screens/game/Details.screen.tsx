import { NavigationProp, useNavigation } from "@react-navigation/native"
import { useAuth } from "../../hooks/authContext"
import { Button, Text, View } from "react-native"
import { useUserDetails } from "../../hooks/userDetailsContext"
import UserDetails from "../../components/Details";

const DetailsScreen: React.FC = () => {
    const { userDetails } = useUserDetails();
  
    return (
      <UserDetails userDetails={userDetails} />
    ); 
  };
  
  export default DetailsScreen;
  
import React from 'react';
import styled from "styled-components";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import Text from "../components/Text";


export default TouchScreen = ({ navigation }) => {
    return (
        <Container>
            <BankLogo source={require("../../assets/banklogo.png")} />
            <Touch onLongPress={() => navigation.navigate("Tabs")} delayPressIn={0}>
                <Circle bgColor="#1e1e1e">
                    <Circle bgcolor="#5196f405">
                        <Circle bgColor="#5196f410">
                            <Circle bgColor="#5196f430">
                                <TouchButton>
                                    <MaterialIcons name="fingerprint" size={64} color="#ffffff" />
                                </TouchButton>
                            </Circle>
                        </Circle>
                    </Circle>
                </Circle>
            </Touch>
            <Text center heavy large>
                Use a biometria para acessar {"\n"}seu ReactBank.
            </Text>
            <Text center bold margin="16px 0 0 0" color="#9c9c9f">
                Por favor verifique sua identidade{"\n"} usando o sensor biométrico, ou acesse com o PIN.
            </Text>
            <PinAccess onPress={() => navigation.navigate("Pin")} delayPressIn={0}>
                <Fontisto name="locked" color="#964ff0" size={16} />
                <Text bold margin="0 0 0 8px" color="#964ff0">
                    Acesse usando o PIN
                </Text>
            </PinAccess>
            <StatusBar barStyle="light-content" />
        </Container>
    );
};

const BankLogo = styled.Image`
  margin-top: 50px;
  width: 180px;
  height: 100px;
`;

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
    justify-content: center;
    align-items: center;
`;

const Touch = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Circle = styled.View`
    background-color: ${props => props.bgColor};
    padding: 32px;
    border-radius: 999px;
`;

const TouchButton = styled.View`
    background-color: #5196f4;
    padding: 8px;
    border-radius: 100px;
`;

const PinAccess = styled.TouchableOpacity`
    margin-top: 16px;
    padding: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const StatusBar = styled.TouchableOpacity`

`;
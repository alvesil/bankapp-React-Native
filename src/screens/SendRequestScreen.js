import React, { useState } from "react";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

import Text from "../components/Text";
import NumberPad from "../components/NumberPad";
import { ScrollView } from "react-native-gesture-handler";


export default SendRequestScreen = () => {
  const [amount, setAmount] = useState("0");

  const convertToReais = (currentAmount) => {
    const newAmount = currentAmount / 100;

    return newAmount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  const pressKey = (item, index) => {
    setAmount((prev) => {
      return index != 10 ? prev + item : prev.slice(0, prev.length - 1);
    })
  }
  return (
    <ScrollView>
      <Container>
        <Text center large heavy margin="16px 0 0 0">Transferências</Text>
        <Amount>
          <Text title heavy>R$ {convertToReais(amount)}</Text>
          <Text bold color="#727479">Escolha o valor a transferir</Text>
        </Amount>
        <User>
          <ProfilePhoto source={require("../../assets/zacarias.jpg")} />
          <UserDetails>
            <Text medium heavy>Zacarias</Text>
            <Text bold color="#727479">de Contatos</Text>
          </UserDetails>
          <MaterialIcons name="edit" size={18} color="#ffffff" />
        </User>
        <Send>
          <Text medium heavy>Enviar R$ {convertToReais(amount)} para Zacarias</Text>
        </Send>
        <NumberPad onPress={pressKey} />
        <StatusBar barStyle="light-content" />
      </Container>
    </ScrollView>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #1e1e1e;
`;

const Amount = styled.View`
  margin-top: 64px;
  align-items: center;
`;

const User = styled.View`
  margin: 32px;
  flex-direction: row;
  align-items: center;
`;

const ProfilePhoto = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 12px;
`;

const UserDetails = styled.View`
  flex: 1;
  margin: 0 16px;
`;

const Send = styled.TouchableOpacity`
  margin: 16px;
  background-color: #5196f4;
  padding: 16px 32px;
  align-items: center;
  border-radius: 12px;
`;

const StatusBar = styled.View``;
import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { FontAwesome5, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";

import Text from "../components/Text";
import purchaseData from "../../purchases";

export default HomeScreen = () => {
  const renderPurchase = ({ item }) => (
    <Purchase>
      <PurchaseInfo>
        <Text heavy >{item.product}</Text>
        <Text bold margin="2px 0 2px 0">{item.store}</Text>
        <Text small color="#727479">{item.address}</Text>
      </PurchaseInfo>
      <Text heavy>{item.price}</Text>
    </Purchase>
  );
  return (

    <Container nestedScrollEnabed>
      <Header>
        <ProfilePhoto source={require("../../assets/mussum.webp")} />
        <Welcome>
          <Text heavy medium>Bem-vindo, </Text>
          <Text>Mussum</Text>
        </Welcome>
        <FontAwesome5 name="cog" size={24} color="#565656" />
      </Header>
      <Text center title black>
        R$7.894,46
      </Text>
      <Text center heavy color="#727479">
        Saldo atual
      </Text>

      <Chart>
        <LineChart data={{
          labels: ["Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro"],
          datasets: [
            {
              data: [
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10
              ],
            },
          ],

        }}
          width={Dimensions.get("window").width}
          height={250}
          yAxisLabel="R$"
          yAxisSuffix="k"
          chartConfig={{
            backgroundGradientFrom: "#1e1e1e",
            backgroundGradientTo: "#1e1e1e",
            color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
            labelColor: () => `rgba(255, 255, 255, 0.2)`,
            strokeWidth: 3,
          }}
          withVerticalLines={false}
          withHorizontalLines={false}
          bezier
        />
      </Chart>

      <Purchases ListHeaderComponent={
        <>
          <TransactionsHeader>
            <Text>??ltimas Compras</Text>
            <MaterialIcons name="sort" size={24} color="#5196f4" />
          </TransactionsHeader>
          <SearchContainer>
            <AntDesign name="search1" size={18} color="#5196f4" />
            <Search placeholder="Pesquisar transa????es" />
          </SearchContainer>
        </>
      }

        data={purchaseData} renderItem={renderPurchase} showVerticalScrollIndicator={false}

      />
      <StatusBar barStyle="light-content" />
    </Container>

  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 16px 32px 16px;
`;

const ProfilePhoto = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const Welcome = styled.View`
  flex: 1;
  padding: 0 16px;

`;

const Chart = styled.View`
  margin: 32px 0;
`;

const Purchases = styled.FlatList`
  background-color: #2c2c2c;
  padding: 16px;
`;

const TransactionsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SearchContainer = styled.View`
  background-color: #3d3d3d;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  border-radius: 6px;
  margin: 16px 0;
`;

const Search = styled.TextInput`
  flex: 1;
  padding: 8px 16px;
  font-family: "normal";
  color: #dbdbdb;
`;

const Purchase = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #393939;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const PurchaseInfo = styled.View``;

const StatusBar = styled.StatusBar`

`;
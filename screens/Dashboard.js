import React from "react";
import { StyleSheet, Dimensions, View, Text, ScrollView } from "react-native";
import { Block, Button, theme } from "galio-framework";
import { materialTheme } from "../constants";
import CustomSearch from "./CustomSearch";
import navigationConstants from "../constants/navigationConstants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BestSellers from "./BestSellers";
import MainCategories from "./MainCategories";
import Carousal from "../components/Carousel";
import { data } from "../constants/images/carousal_data";
const { width } = Dimensions.get("screen");

const Dashboard = ({ navigation }) => {
  return (
    <View>
      <CustomSearch />
      <ScrollView style={{ marginTop: 120 }}>
        <Block flex>
          <Block left style={{ marginLeft: 25 }}>
            <Text>
              <MaterialCommunityIcons
                name="map-marker"
                color="black"
                size={25}
              />
              Deliver to SUNIL - Hyderabad 500075
            </Text>
          </Block>
        </Block>
        <Block flex>
          <Block left style={{ marginLeft: 25, marginTop: -290 }}>
            <MainCategories />
          </Block>
        </Block>
        <Block flex>
          <Block style={{ marginTop: -50, width: width }}>
            <Carousal data={data} />
          </Block>
        </Block>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 5,
    shadowOpacity: 5,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 8,
    marginLeft: 12,
    borderRadius: 2,
    height: 22,
  },
  gradient: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 66,
  },
});
export default Dashboard;

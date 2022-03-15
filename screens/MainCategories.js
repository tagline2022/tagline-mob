import React from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { Button, Block, Text, theme } from "galio-framework";

import { Product, Select } from "../components/";
import { materialTheme } from "../constants/";
import categories_data from "../constants/images/categories_data";

const { width } = Dimensions.get("screen");

export default class MainCategories extends React.Component {
  state = {
    cart: categories_data.products,
  };

  handleQuantity = (id, qty) => {
    const { cart } = this.state;

    const updatedCart = cart.map((product) => {
      if (product.id === id) product.qty = qty;
      return product;
    });

    this.setState({ cart: updatedCart });
  };

  handleDelete = (id) => {
    const { cart } = this.state;
    const updatedCart = cart.filter((product) => product.id !== id);
    this.setState({ cart: updatedCart });
  };

  handleAdd = (item) => {
    const { cart } = this.state;

    cart.push({
      ...item,
      id: cart.length + 1,
      stock: true,
      qty: 1,
    });

    this.setState({ cart });
  };

  renderProduct = ({ item }) => {
    const { navigation } = this.props;

    return (
      <Block>
        <Block card shadow style={styles.product}></Block>
      </Block>
    );
  };

  renderHorizontalProduct = ({ item }) => {
    return (
      <Block style={{ marginRight: theme.SIZES.BASE }}>
        <Product
          product={item}
          priceColor={materialTheme.COLORS.ACTIVE}
          imageStyle={{ width: "auto", height: 94 }}
          style={{ width: width / 2.88 }}
        />
      </Block>
    );
  };

  renderHorizontalProducts = () => {
    return (
      <Block style={{ marginHorizontal: theme.SIZES.BASE }}>
        <FlatList
          data={categories_data.suggestions}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `INR{index}-INR{item.title}`}
          renderItem={this.renderHorizontalProduct}
        />
      </Block>
    );
  };

  renderFooter = () => {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.footer}>
        {this.renderHorizontalProducts()}
        <Block style={styles.divider} />
      </Block>
    );
  };

  renderEmpty() {
    return <Text color={materialTheme.COLORS.ERROR}>The cart is empty</Text>;
  }

  render() {
    return (
      <Block flex center style={styles.cart}>
        <FlatList
          data={this.state.cart}
          renderItem={this.renderProduct}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => `INR{index}-INR{item.title}`}
          ListFooterComponent={this.renderFooter()}
        />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  cart: {
    width: width,
    marginTop: 1,
  },
  header: {
    paddingVertical: theme.SIZES.BASE,
    marginTop: 200,
    marginHorizontal: theme.SIZES.BASE,
  },
  footer: {
    marginBottom: theme.SIZES.BASE * 2,
  },
  divider: {
    height: 1,
    backgroundColor: materialTheme.COLORS.INPUT,
    marginVertical: theme.SIZES.BASE,
  },
  checkoutWrapper: {
    paddingTop: theme.SIZES.BASE * 2,
    margin: theme.SIZES.BASE,
    borderStyle: "solid",
    borderTopWidth: 1,
    borderTopColor: materialTheme.COLORS.INPUT,
  },
  products: {
    minHeight: "100%",
  },
  product: {
    width: width * 0.9,
    borderWidth: 0,
    marginVertical: theme.SIZES.BASE * 1.5,
    marginHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: theme.SIZES.BASE / 4,
    shadowOpacity: 0.1,
  },
  productTitle: {
    flex: 1,
    flexWrap: "wrap",
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageHorizontal: {
    width: theme.SIZES.BASE * 6.25,
    margin: theme.SIZES.BASE / 2,
  },
  options: {
    padding: theme.SIZES.BASE / 2,
  },
  qty: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: theme.SIZES.BASE * 6.25,
    backgroundColor: materialTheme.COLORS.INPUT,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10,
    borderRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  optionsButtonText: {
    fontSize: theme.SIZES.BASE * 0.75,
    color: "#4a4a4a",
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.29,
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10,
    borderRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  checkout: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  similarTitle: {
    lineHeight: 26,
    marginBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE,
  },
  productVertical: {
    height: theme.SIZES.BASE * 10.75,
    width: theme.SIZES.BASE * 8.125,
    overflow: "hidden",
    borderWidth: 0,
    borderRadius: 4,
    marginBottom: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: theme.SIZES.BASE / 4,
    shadowOpacity: 1,
  },
});

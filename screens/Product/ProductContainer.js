import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Button, Block, Text, Input, theme } from "galio-framework";

const data = require("../../assets/data/products.json");

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
    return () => setProducts([]);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.products}
    >
      <Block flex>
        {products.map((ep, indx) => (
          <Block flex row key={indx}>
            <Product product={ep} style={{ marginRight: theme.SIZES.BASE }} />
          </Block>
        ))}
      </Block>
    </ScrollView>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({});

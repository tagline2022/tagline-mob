import React from "react";
import { withNavigation } from "@react-navigation/compat";
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
const { width } = Dimensions.get("screen");

class Product extends React.Component {
  render() {
    const { navigation, product, horizontal, style, imageStyle } = this.props;
    const imageStyles = [styles.image, styles.fullImage, imageStyle];
    let prodImg = "../assets/images/CAT_EDIBLE_OILS_old.jpg";
    console.log("prodImg :--> ", prodImg);
    const productImage = product.image;
    console.log("productImage  :--> ", productImage);

    return (
      <Block
        row={horizontal}
        card
        flex
        style={[styles.product, styles.shadow, style]}
      >
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Pro", { product: product })}
        >
          <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Image
              // source={require(prodImg)}
              // source={{ uri: require(productImage) }}
              source={{ uri: product.image }}
              // uri: "https://tagline-app.s3.us-east-2.amazonaws.com/Images/images/logo.jpg",
              // uri: product.image,
              // }}
              style={imageStyles}
            />
          </Block>
        </TouchableWithoutFeedback>

        <Block flex space="between" style={styles.productDescription}>
          <Text size={14} style={styles.productTitle}>
            {product.title}
          </Text>
        </Block>
      </Block>
    );
  }
}

export default withNavigation(Product);

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    paddingBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 5,
  },
  image: {
    borderRadius: 5,
    marginHorizontal: theme.SIZES.BASE / 2,
    margin: 10,
  },
  horizontalImage: {
    height: 50,
    width: "auto",
  },
  fullImage: {
    height: 50,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 5,
  },
});

import React, { Component } from "react";
import { View, ScrollView, Text, Dimensions } from "react-native";
import {
  Button,
  BottomSheet,
  Rating,
  Divider,
  Image,
  Avatar,
} from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NumericInput from "react-native-numeric-input";
import Icon from "react-native-vector-icons/Ionicons";
import ImageSlider from "react-native-image-slider";
import CatHeader from "../component/CatHeader";
import Product from "../component/Product";
import HTML from "react-native-render-html";

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMeta: false,
      showDesc: false,
      showReview: false,
    };
  }

  metaVisibility = (visible) => {
    this.setState({
      showMeta: visible,
    });
  };

  descVisibility = (visible) => {
    console.log("pressed");
    this.setState({
      showDesc: visible,
    });
  };

  reviewVisibility = (visible) => {
    this.setState({
      showReview: visible,
    });
  };

  ratingCompleted = () => {
    console.log("rating submited");
  };

  gotoCart = () => {
    this.props.navigation.navigate("Cart");
    console.log("This is cart");
  };

  render() {
    const windowWidth = Dimensions.get("window").width;
    const productData = {
      images: [
        "http://cayzilla.polbd.com/images/details/1.jpg",
        "http://cayzilla.polbd.com/images/details/2.jpg",
        "http://cayzilla.polbd.com/images/details/3.jpg",
        "http://cayzilla.polbd.com/images/details/4.jpg",
        "http://cayzilla.polbd.com/images/details/5.jpg",
      ],
      title:
        "Garmin Forerunner 735XT GPS Running Watch w/ Multisport Features - Midnight Blue",
      fav: false,
      subtitle: "Garmin, Brand New, Authorized Dealer, USA Warranty",
      price: "$189.99",
      listPrice: "$289.99",
      discount: "45% off",
      estDelivery: "Wed March 17 - Thu Apr 1",
      buyerSatisfaction: "90%",
      totalSold: "1009",
      return: "Not Accepted",
      shipping: "$19.99",
      sellerProducts: [
        {
          image:
            "https://images-na.ssl-images-amazon.com/images/I/710IXp7YhyL._AC_SX522_.jpg",
          title:
            "Brita Standard Replacement Filters for Pitchers and Dispensers, 3 Count, White",
          price: "$132.12",
          oldPrice: "$190",
          discount: "12% off",
        },
        {
          image:
            "https://images-na.ssl-images-amazon.com/images/I/81BIw-Txa9L._AC_SX569_.jpg",
          title: "Libbey Mixologist 9-Piece Cocktail Set",
          price: "$31.99",
          oldPrice: "$39.99",
          discount: "20% off",
        },
        {
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51aJaF1EDhL._AC_SX569_.jpg",
          title:
            "Homemory Realistic and Bright Flickering Bulb Battery Operated Flameless LED Tea Light",
          price: "$10.99",
        },
      ],
      meta: [
        { key: "Condition", value: "New" },
        { key: "Brand", value: "Garmin" },
        {
          key: "Features",
          value: "Alarm, Calendar/Date, Calorie Monitor, Clock, Compass",
        },
        { key: "MPN", value: "010-01614-01" },
        { key: "Display Size", value: "1.23 in" },
        { key: "Model", value: "Garmin 010-01614-01" },
        { key: "Mobile App", value: "Yes" },
        { key: "Color", value: "Blue" },
        { key: "Custom Bundle", value: "No" },
        { key: "Body Area", value: "Wrist" },
        { key: "Item Height", value: "11.9 mm" },
        { key: "Item Width", value: "44.5 mm" },
        {
          key: "Sensors",
          value: "Accelerometer, Compass, GPS, GLONASS, Heart Rate Monitor",
        },
        { key: "Material", value: "Glass, Silicone" },
        { key: "Display Resolution", value: "215 x 180" },
        { key: "Sport/Activity", value: "Running & Jogging, Swimming" },
        { key: "Power Source", value: "Batteries" },
        { key: "Type", value: "GPS" },
      ],
      shortDesc:
        "Be a better athlete today than you were yesterday with Forerunner 735XT. This GPS running watch with multisport features is for athletes who want dialed-in data for training and a lighter load on race day. A smaller form factor and comfortable band make 735XT the ideal watch to get you from workout through workday. Connected features like automatic uploads to Garmin Connect, our free online fitness community, let you share your stats and triumphs through social media.",
      description:
        "<p><strong>GPS Running Watch with Multisport Features and Wrist-based Heart Rate</strong></p> <ul> <li>Measures heart rate at the wrist so you can run freer on race day</li> <li>Provides advanced dynamics for running, cycling and swimming, including ground contact time balance, stride length, vertical ratio and more</li> <li>Offers VO2 max estimate, lactate threshold, race predictor and recovery advisor</li> <li>Connected features: smart notifications, automatic uploads to Garmin Connect, live tracking and more</li> <li>Customize with free watch faces, apps and more from our Connect IQ store</li> </ul> <p>&nbsp;</p> <p><strong>You Do It All, Now Your Watch Can Too </strong></p> <p>Be a better athlete today than you were yesterday with Forerunner 735XT. This GPS running watch with multisport features is for athletes who want dialed-in data for training and a lighter load on race day. A smaller form factor and comfortable band make 735XT the ideal watch to get you from workout through workday. Connected features like automatic uploads to Garmin Connect, our free online fitness community, let you share your stats and triumphs through social media.</p> <p>&nbsp;</p> <p><strong>Run, Sprint, Swim, Bike, Tri </strong></p> <p>Your routine is anything but routine. Forerunner 735XT lets you change things up with ease thanks to built-in activity profiles for running (indoor/outdoor), cycling (indoor/outdoor), swimming (pool/open water), cross-country skiing, paddle sports, trail running, hiking and strength training.</p> <p>For brick workouts and du/triathlon races, the auto multisport feature lets you switch sports with just one button press. 735XT is compatible with advanced workouts for running, cycling - and even pool swimming. Create your own custom workouts and download for free from Garmin Connect. Then review your past efforts on the app or share them with family and friends for added motivation.</p> <p>&nbsp;</p> <p><strong>Wrist-based Heart Rate Monitors Your Ticker </strong></p> <p>Forerunner 735XT has built-in Elevate heart rate technology to measure heart rate at the wrist. That means you can run freer when it's time to toe the line. No need to wear a chest strap to see your heart rate zone and beats per minute in real time, displayed on a colorful gauge.</p> <p>&nbsp;</p> <p><strong>Train Your Heart Out </strong></p> <p>Wrist-based heart rate may suit your needs to a T on race day, but when it comes to training and recovery, you might want more dialed-in data. With Forerunner 735XT, you have options. Here are some of the advanced metrics you'll gain with the addition of a heart rate strap:</p> <ul> <li>Running dynamics such as ground contact time balance, stride length, vertical ratio and more</li> <li>VO2 max estimate, lactate threshold, race predictor and recovery advisor</li> <li>Underwater heart rate for swimming</li> </ul> <p>&nbsp;</p> <p><strong>Prove It </strong></p> <p>With the integration of the Strava Live Suffer Score, you can get street cred for your sweat. Strava Suffer Score analyzes your heart rate during a workout and ranks your total activity effort. With the purchase of a 735XT you get a 60-day free trial to Strava Premium, so you can see your suffer score and use it to push yourself harder than ever. Your suffering has value, so use it.</p> <p>&nbsp;</p> <p><strong>Connect and Customize </strong></p> <p>Smart notifications, automatic uploads to Garmin Connect and live tracking make 735XT the ultimate smartwatch for athletes. Keep your phone tucked away when you're on a long ride or run, and get all your notifications at the wrist so you can decide to respond or keep moving. Also, with Garmin Connect Mobile's ability to share your runs and workouts, cheerleading doesn't just take place at the sidelines anymore. Your friends and family can view and comment, no matter how far away they are. You can even customize your device with free watch faces, apps and data fields from Connect IQ to really make 735XT your watch.</p>",
      seller: {
        id: 591267,
        name: "buydig",
        feedback: "99.3%",
        pic: "http://cayzilla.polbd.com/images/seller.png",
      },
      rating: {
        value: 4.9,
        count: 41,
      },
      reviews: [
        {
          value: 5,
          user: "runfastjkw",
          date: "Jul 04, 2017",
          title: "Best Watch!",
          review:
            "Loving my new watch.  It has my heart rate, tracks my steps and can be used for all different sports.  I also have it linked to my phone and can view texts and notifications.  It is lightweight and fits great!",
        },
        {
          value: 3.5,
          user: "roblessinge-0",
          date: "Jan 14, 2021",
          title: "Great value for the price",
          review:
            "I got this for my wife who does triathlons.  So far she really likes it. It tracks everything that she needs it to track from swimming,  running, and biking. It tracks both indoor and outdoor activities. ",
        },
        {
          value: 4,
          user: "greatday505",
          date: "Feb 20, 2019",
          title: "Highly recommend this sports watch!",
          review:
            "This is a way cool sports watch! Easy to read dial and much more sensible t han fitbit. I highly recommend it.",
        },
        {
          value: 4.5,
          user: "jta4259_gjpxkk2",
          date: "Jun 16, 2020",
          title: "Great Watch",
          review:
            "Does so many things and connects to Connect IQ and you can download even more apps. Great watch!",
        },
        {
          value: 3,
          user: "anabelle1912",
          date: "Jul 29, 2016",
          title: "Great watch - comes with everything you need",
          review:
            "No matter if you are a runner or a triathlete this watch will be a great training tool for you!!!",
        },
      ],
    };

    let metaValue = productData.meta.slice(0, 8);

    let reviewValue = productData.reviews.slice(0, 3);

    let favIcon = <Icon name="heart-outline" size={20} color="#3665f3" />;
    if (productData.fav) {
      favIcon = <Icon name="heart" size={20} color="#cc0119" />;
    }
    return (
      <SafeAreaProvider>
        <BottomSheet
          isVisible={this.state.showDesc}
          containerStyle={{ backgroundColor: "#fff", padding: 10 }}
        >
          <View>
            <Button
              icon={
                <Icon name="close-circle-sharp" size={26} color="#2a2a2a" />
              }
              containerStyle={{ flex: 1 }}
              title=""
              onPress={() => {
                this.descVisibility(false);
              }}
              buttonStyle={{ backgroundColor: "#fff" }}
            />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Product Description
          </Text>
          <HTML
            tagsStyles={{ p: { marginBottom: 5 } }}
            source={{ html: productData.description }}
          />
        </BottomSheet>
        <BottomSheet
          isVisible={this.state.showMeta}
          containerStyle={{ backgroundColor: "#fff", padding: 10 }}
        >
          <View>
            <Button
              icon={
                <Icon name="close-circle-sharp" size={26} color="#2a2a2a" />
              }
              containerStyle={{ flex: 1 }}
              title=""
              onPress={() => {
                this.metaVisibility(false);
              }}
              buttonStyle={{ backgroundColor: "#fff" }}
            />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            About This Item
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>
            Item Details
          </Text>
          {productData.meta.map((data, index) => (
            <View
              style={{
                flexDirection: "row",
                marginBottom: 5,
                borderBottomColor: "#e5e5e5",
                borderBottomWidth: 1,
                paddingBottom: 5,
              }}
            >
              <Text style={{ flex: 1, color: "#777777", fontSize: 16 }}>
                {data.key}
              </Text>
              <Text style={{ flex: 1, fontSize: 16 }}>{data.value}</Text>
            </View>
          ))}
        </BottomSheet>
        <BottomSheet
          isVisible={this.state.showReview}
          containerStyle={{ backgroundColor: "#fff", padding: 10 }}
        >
          <View>
            <Button
              icon={
                <Icon name="close-circle-sharp" size={26} color="#2a2a2a" />
              }
              containerStyle={{ flex: 1 }}
              title=""
              onPress={() => {
                this.reviewVisibility(false);
              }}
              buttonStyle={{ backgroundColor: "#fff" }}
            />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            User Reviews
          </Text>
          {productData.reviews.map((rev, index) => (
            <View
              style={{
                alignItems: "flex-start",
                marginBottom: 10,
                paddingBottom: 10,
                borderBottomColor: "#e5e5e5",
                borderBottomWidth: 1,
              }}
            >
              <Rating
                type="custom"
                ratingCount={5}
                startingValue={rev.value}
                readonly
                imageSize={20}
                minValue={4}
                ratingColor="#000"
                style={{ borderColor: "#000" }}
              />
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <Text>by {rev.user}</Text>
                <Text>{rev.date}</Text>
              </View>
              <Text style={{ fontWeight: "700", fontSize: 22 }}>
                {rev.title}
              </Text>
              <Text style={{ color: "#767676" }}>{rev.review}</Text>
            </View>
          ))}
        </BottomSheet>
        <ScrollView>
          <CatHeader title="Item" share={true} />
          <ImageSlider
            style={{ width: "100%", height: 250 }}
            images={productData.images}
          />
          <View
            style={{
              marginTop: -35,
              justifyContent: "flex-end",
              alignContent: "flex-end",
              flexDirection: "row",
              paddingRight: 10,
            }}
          >
            <Button
              type="outline"
              icon={favIcon}
              containerStyle={{
                width: 35,
                height: 35,
                backgroundColor: "#fff",
                borderRadius: 50,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Text style={{ fontSize: 22, paddingTop: 5, paddingBottom: 0 }}>
              {productData.title}
            </Text>
            <Text style={{ color: "#767676", fontSize: 16, marginBottom: 5 }}>
              {productData.subtitle}
            </Text>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Rating
                type="custom"
                ratingCount={5}
                defaultRating={productData.rating.value}
                imageSize={20}
                showRating={false}
                ratingColor="#000"
                style={{ borderColor: "#000" }}
                onFinishRating={this.ratingCompleted}
              />
              <Text style={{ color: "#3665f3", marginLeft: 5, fontSize: 18 }}>
                (40)
              </Text>
            </View>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "700",
                color: "#2a2a2a",
                marginBottom: 5,
              }}
            >
              {productData.price}
            </Text>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Text
                style={{ textDecorationLine: "line-through", marginRight: 10 }}
              >
                {productData.listPrice}
              </Text>
              <Text>{productData.discount}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 0,
                borderBottomColor: "#e5e5e5",
                borderBottomWidth: 1,
                paddingBottom: 10,
              }}
            >
              <Text style={{ lineHeight: 22 }}>Est Delivery: </Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, marginLeft: 10 }}
              >
                {productData.estDelivery}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                borderBottomColor: "#e5e5e5",
                borderBottomWidth: 1,
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  flex: 1,
                  borderRightColor: "#e5e5e5",
                  borderRightWidth: 1,
                }}
              >
                {productData.buyerSatisfaction} buyer satisfaction
              </Text>
              <Text style={{ flex: 1, textAlign: "center" }}>
                {productData.totalSold} sold
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={{ marginRight: 10, fontSize: 18 }}>Quantity</Text>
              <NumericInput
                initValue={1}
                minValue={1}
                totalHeight={30}
                onChange={(value) => console.log(value)}
              />
            </View>
            <Button
              type="solid"
              title="Buy It Now"
              containerStyle={{
                borderRadius: 20,
                backgroundColor: "#3665f3",
                marginBottom: 10,
              }}
              buttonStyle={{ backgroundColor: "#3665f3" }}
            />
            <Button
              onPress={() => {
                this.gotoCart();
              }}
              type="outline"
              title="Add To Cart"
              containerStyle={{
                borderColor: "#3665f3",
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 10,
              }}
              titleStyle={{ color: "#3665f3" }}
            />
            <Button
              type="outline"
              icon={<Icon name="heart-outline" size={20} color="#3665f3" />}
              title="Add To Watchlist"
              containerStyle={{
                borderColor: "#3665f3",
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 10,
              }}
              titleStyle={{ color: "#3665f3" }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 22, marginTop: 20 }}>
              Seller's Other Items
            </Text>
            <ScrollView
              horizontal={true}
              centerContent={true}
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 5,
                paddingRight: 5,
                borderBottomWidth: 1,
                borderBottomColor: "#e5e5e5",
              }}
            >
              {productData.sellerProducts.map((product, index) => (
                <Product
                  key={index}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  discount={product.discount}
                />
              ))}
            </ScrollView>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 22,
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              About This Item
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}
            >
              Item Details
            </Text>
            {metaValue.map((data, index) => (
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
                <Text style={{ flex: 1, color: "#777777", fontSize: 16 }}>
                  {data.key}
                </Text>
                <Text style={{ flex: 1, fontSize: 16 }}>{data.value}</Text>
              </View>
            ))}
            <Button
              type="outline"
              icon={
                <Icon name="chevron-forward-sharp" size={20} color="#3665f3" />
              }
              iconRight
              title="See More"
              buttonStyle={{ borderColor: "#fff" }}
              containerStyle={{
                borderColor: "#fff",
                borderWidth: 0,
                borderRadius: 20,
                marginBottom: 10,
              }}
              titleStyle={{ color: "#3665f3" }}
              onPress={() => {
                this.metaVisibility(true);
              }}
            />
            <Divider
              style={{
                backgroundColor: "#e5e5e5",
                height: 2,
                marginBottom: 10,
              }}
            />
            <Text
              style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}
            >
              Item Description
            </Text>
            <Text>{productData.shortDesc}</Text>
            <Button
              type="outline"
              icon={
                <Icon name="chevron-forward-sharp" size={20} color="#3665f3" />
              }
              iconRight
              title="See Full Description"
              buttonStyle={{ borderColor: "#fff" }}
              containerStyle={{
                borderColor: "#fff",
                borderWidth: 0,
                borderRadius: 20,
                marginBottom: 10,
              }}
              titleStyle={{ color: "#3665f3" }}
              onPress={() => {
                this.descVisibility(true);
              }}
            />
            <Divider
              style={{
                backgroundColor: "#e5e5e5",
                height: 2,
                marginBottom: 10,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 22,
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Shipping, Return & Payment
            </Text>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Text style={{ flex: 1, color: "#777777", fontSize: 16 }}>
                Est Delivery
              </Text>
              <Text style={{ flex: 1, fontSize: 16 }}>
                {productData.estDelivery}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Text style={{ flex: 1, color: "#777777", fontSize: 16 }}>
                Shipping
              </Text>
              <Text style={{ flex: 1, fontSize: 16 }}>
                {productData.shipping}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Text style={{ flex: 1, color: "#777777", fontSize: 16 }}>
                Payments
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                <Image
                  style={{
                    width: 38,
                    height: 26,
                    marginRight: 3,
                    marginBottom: 3,
                  }}
                  source={require("../assets/images/amex.png")}
                />
                <Image
                  style={{
                    width: 38,
                    height: 26,
                    marginRight: 3,
                    marginBottom: 3,
                  }}
                  source={require("../assets/images/visa.png")}
                />
                <Image
                  style={{
                    width: 38,
                    height: 26,
                    marginRight: 3,
                    marginBottom: 3,
                  }}
                  source={require("../assets/images/mastercard.png")}
                />
                <Image
                  style={{
                    width: 38,
                    height: 26,
                    marginRight: 3,
                    marginBottom: 3,
                  }}
                  source={require("../assets/images/discover.png")}
                />
                <Image
                  style={{
                    width: 38,
                    height: 26,
                    marginRight: 3,
                    marginBottom: 3,
                  }}
                  source={require("../assets/images/paypal.png")}
                />
              </View>
            </View>
            <Divider
              style={{
                backgroundColor: "#e5e5e5",
                height: 2,
                marginBottom: 10,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 22,
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              About The Seller
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Avatar
                rounded
                containerStyle={{ backgroundColor: "#f2f2f2" }}
                size={windowWidth * 0.3}
                imageProps={{ resizeMode: "contain" }}
                source={{ uri: productData.seller.pic }}
              />
              <View
                style={{
                  width: windowWidth * 0.6,
                  paddingLeft: 15,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  {productData.seller.name} ({productData.seller.id})
                </Text>
                <Text style={{ fontSize: 17, color: "#777777" }}>
                  {productData.seller.feedback} positive feedback
                </Text>
                <Button
                  type="outline"
                  icon={<Icon name="heart-outline" size={20} color="#3665f3" />}
                  title="Save This Seller"
                  buttonStyle={{ borderColor: "#fff" }}
                  containerStyle={{
                    borderColor: "#fff",
                    borderWidth: 0,
                    borderRadius: 20,
                    marginLeft: 0,
                    paddingLeft: 0,
                  }}
                  titleStyle={{ color: "#3665f3", textAlign: "left" }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderTopColor: "#f2f2f2",
                borderBottomColor: "#f2f2f2",
                borderTopWidth: 2,
                borderBottomWidth: 2,
                marginTop: 15,
                justifyContent: "space-around",
              }}
            >
              <Button
                type="outline"
                title="Contact Seller"
                buttonStyle={{ borderColor: "#fff" }}
                containerStyle={{
                  borderColor: "#fff",
                  borderWidth: 0,
                  borderRadius: 20,
                  marginLeft: 0,
                  paddingLeft: 0,
                }}
                titleStyle={{ color: "#3665f3", textAlign: "left" }}
              />
              <Button
                type="outline"
                title="Seller Home"
                buttonStyle={{ borderColor: "#fff" }}
                containerStyle={{
                  borderColor: "#fff",
                  borderWidth: 0,
                  borderRadius: 20,
                  marginLeft: 0,
                  paddingLeft: 0,
                }}
                titleStyle={{ color: "#3665f3", textAlign: "left" }}
              />
            </View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 22,
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              Rating & Reviews
            </Text>
            <View
              style={{
                flexDirection: "row",
                borderBottomWidth: 2,
                borderBottomColor: "#e5e5e5",
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  flex: 1,
                  fontSize: 45,
                  fontWeight: "bold",
                  color: "#767676",
                }}
              >
                {productData.rating.value}
              </Text>
              <View
                style={{
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Rating
                  type="custom"
                  ratingCount={5}
                  defaultRating={productData.rating}
                  imageSize={20}
                  showRating={false}
                  ratingColor="#000"
                  style={{ borderColor: "#000" }}
                  onFinishRating={this.ratingCompleted}
                />
                <Text>{productData.rating.count} product ratings</Text>
              </View>
            </View>
            <Text
              style={{
                color: "#111820",
                fontSize: 22,
                fontWeight: "bold",
                marginBottom: 15,
              }}
            >
              Most Recent Reviews
            </Text>
            {reviewValue.map((rev, index) => (
              <View
                style={{
                  alignItems: "flex-start",
                  marginBottom: 10,
                  paddingBottom: 10,
                  borderBottomColor: "#e5e5e5",
                  borderBottomWidth: 1,
                }}
              >
                <Rating
                  type="custom"
                  ratingCount={5}
                  startingValue={rev.value}
                  readonly
                  imageSize={20}
                  minValue={4}
                  ratingColor="#000"
                  style={{ borderColor: "#000" }}
                />
                <View
                  style={{
                    width: "100%",
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 5,
                  }}
                >
                  <Text>by {rev.user}</Text>
                  <Text>{rev.date}</Text>
                </View>
                <Text style={{ fontWeight: "700", fontSize: 22 }}>
                  {rev.title}
                </Text>
                <Text style={{ color: "#767676" }}>{rev.review}</Text>
              </View>
            ))}
            <Button
              type="outline"
              icon={
                <Icon name="chevron-forward-sharp" size={20} color="#3665f3" />
              }
              iconRight
              title={"See All " + productData.reviews.length + " Reviews"}
              buttonStyle={{ borderColor: "#fff" }}
              containerStyle={{
                borderColor: "#fff",
                borderWidth: 0,
                borderRadius: 20,
                marginBottom: 10,
              }}
              titleStyle={{ color: "#3665f3" }}
              onPress={() => {
                this.reviewVisibility(true);
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaProvider>
    );
  }
}

export default SingleProduct;

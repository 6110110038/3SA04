import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const availableZipItems = [
  { place: "ฺBangkok", code: "10100" },
  { place: "Hatyai", code: "90110" },
  { place: "Trang", code: "92000" },
  { place: "Chiangmai", code: "50000" },
  { place: "Khonkaen", code: "40000" },
  { place: "Chonburi", code: "20000" },
  { place: "Phuket", code: "83000" },
];

const ZipItem = ({ place, navigation }) => (
  <TouchableHighlight
    onPress={() => {
      navigation.navigate("Weather", { zipCode: place.code });
    }}
  >
    <View style={styles.ZipItem}>
      <Text style={styles.ZipPlace}>{place.place}</Text>
    </View>
  </TouchableHighlight>
);

export default function ZipCodeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={require('../main-bg.jpg')} style={styles.backgroundImage}>
      <View style={styles.header}>
        <Text style={styles.headerText}>เลือกเมืองที่ต้องการทราบสภาพอากาศ</Text>
      </View>
      <FlatList
        data={availableZipItems}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => <ZipItem place={item} navigation={navigation} />}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ZipItem: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginVertical: 5,
    borderRadius: 10,
    width: '100%',
  },
  ZipPlace: {
    fontSize: 18,
  },
});

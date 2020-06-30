import React from "react";
import axios from "axios";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const seoulApiKey = "56566d4f7a6b6b69333572706d676d";

async function CheckNanoDust() {
  const {
    data: {
      ListAirQualityByDistrictService: { row },
    },
  } = await axios.get(
    `http://openapi.seoul.go.kr:8088/${seoulApiKey}/json/ListAirQualityByDistrictService/1/50`
  );
}

function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{ alignItems: "center", justifyContent: "center", fontSize: 30 }}
      >
        서울시 미세먼지 정보
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        activeOpacity={0.6}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonFontStyle}>지역설정</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={CheckNanoDust}
        activeOpacity={0.6}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonFontStyle}>
          {route.params?.selectDistrict.label}조회
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: "#023e71",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    maxHeight: 50,
    width: "auto",
  },
  buttonFontStyle: {
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
    color: "white",
  },
});

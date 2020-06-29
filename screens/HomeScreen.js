import React from "react";
import axios from "axios";
import { View, Text, TouchableOpacity } from "react-native";

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
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={{ fontSize: 25, margin: 10, marginTop: 30 }}>
          지역설정
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={CheckNanoDust}>
        <Text style={{ fontSize: 25, margin: 10 }}>
          {route.params?.selectDistrict.label} 조회
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

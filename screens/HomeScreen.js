import React, { useState } from "react";
import axios from "axios";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import moment from "moment";

const seoulApiKey = "56566d4f7a6b6b69333572706d676d";

function HomeScreen({ navigation, route }) {
  const [airData, setAirData] = useState({});

  async function CheckNanoDust(distCode) {
    if (distCode != undefined && distCode.length > 0 && distCode !== null) {
      const {
        data: {
          ListAirQualityByDistrictService: { row },
        },
      } = await axios.get(
        `http://openapi.seoul.go.kr:8088/${seoulApiKey}/json/ListAirQualityByDistrictService/1/25/${distCode}`
      );

      setAirData(row[0]);
    }
  }

  function abc() {
    if (airData?.PM10) {
      console.log(airData);
      return (
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {airData.MSRSTENAME}의 대기질 상황{"\n"}
            초미세먼지 : {airData.PM10}
            {"\n"}
            미세먼지 : {airData.PM25}
            {"\n"}
            대기질상태 : {airData.GRADE}
            {"\n"}
            측정시간 : {airData.MSRDATE.substr(8, 2)}시
          </Text>
        </View>
      );
    } else {
      return <></>;
    }
  }

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
        onPress={() => CheckNanoDust(route.params?.selectDistrict.value)}
        activeOpacity={0.6}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonFontStyle}>
          {route.params?.selectDistrict.label}조회
        </Text>
      </TouchableOpacity>
      <>{abc()}</>
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

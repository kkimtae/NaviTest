import * as React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.defaultStyle}>
      <View style={styles.defaultStyle}>
        <DropDownPicker
          items={districtList}
          containerStyle={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            margin: 20,
          }}
          style={{ backgroundColor: "#fafafa", height: 40 }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={(item) => {
            navigation.navigate("Home", { selectDistrict: item });
          }}
          searchable={true}
          searchablePlaceholder="지역 검색"
          searchableError="서울 지역구만 선택 가능"
          placeholder="지역 선택"
          labelStyle={{ fontSize: 14 }}
          placeholderStyle={{ fontWeight: "bold" }}
          activeLabelStyle={{ color: "red" }}
        />
      </View>
      <View style={styles.defaultStyle}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate("Modal")}
          style={styles.buttonStyle}
        >
          <Text style={{ fontSize: 25, color: "white" }}>
            Open Modal Screen
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfileScreen;

const districtList = [
  { key: "111123", value: "111123", label: "종로구" },
  { key: "111121", value: "111121", label: "중구" },
  { key: "111131", value: "111131", label: "용산구" },
  { key: "111142", value: "111142", label: "성동구" },
  { key: "111141", value: "111141", label: "광진구" },
  { key: "111152", value: "111152", label: "동대문구" },
  { key: "111151", value: "111151", label: "중랑구" },
  { key: "111161", value: "111161", label: "성북구" },
  { key: "111291", value: "111291", label: "강북구" },
  { key: "111171", value: "111171", label: "도봉구" },
  { key: "111311", value: "111311", label: "노원구" },
  { key: "111181", value: "111181", label: "은평구" },
  { key: "111191", value: "111191", label: "서대문구" },
  { key: "111201", value: "111201", label: "마포구" },
  { key: "111301", value: "111301", label: "양천구" },
  { key: "111212", value: "111212", label: "강서구" },
  { key: "111221", value: "111221", label: "구로구" },
  { key: "111281", value: "111281", label: "금천구" },
  { key: "111231", value: "111231", label: "영등포구" },
  { key: "111241", value: "111241", label: "동작구" },
  { key: "111251", value: "111251", label: "관악구" },
  { key: "111262", value: "111262", label: "서초구" },
  { key: "111261", value: "111261", label: "강남구" },
  { key: "111273", value: "111273", label: "송파구" },
  { key: "111274", value: "111274", label: "강동구" },
];

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
    marginBottom: 10,
    borderRadius: 5,
    maxHeight: 40,
    width: 200,
  },
});

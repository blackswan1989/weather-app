import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  getLocation = async () => {
    try {
      // throw Error();
      await Location.requestPermissionsAsync();
      // console.log(response);
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}

//1) https://reactnative.dev/docs/geolocation
//1)-1 getCurrentPosition()
//2) https://docs.expo.io/versions/v39.0.0/sdk/location/#usage - Loading.js add: import \* as Location from 'expo-location';
//3) https://docs.expo.io/versions/v39.0.0/sdk/location/#locationgetcurrentpositionasyncoptions
//3)-1 Location.getCurrentPositionAsync(options): 사용자의 현재 위치에 대한 일회성 전송을 요청합니다. 주어진 accuracy옵션 에 따라 특히 건물 내부에있을 때 해결하는 데 시간이 걸릴 수 있습니다.

//4) https://docs.expo.io/versions/v39.0.0/sdk/location/#locationrequestpermissionsasync
//4)-1 Location.requestPermissionsAsync()

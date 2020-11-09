import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getLocation = async () => {
    try {
      // throw Error();
      await Location.requestPermissionsAsync();
      // console.log(response);
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
      // console.log(coords.latitude, coords.longitude);
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

//1) https://reactnative.dev/docs/geolocation
//1)-1 getCurrentPosition()
//2) https://docs.expo.io/versions/v39.0.0/sdk/location/#usage - Loading.js add: import \* as Location from 'expo-location';
//3) https://docs.expo.io/versions/v39.0.0/sdk/location/#locationgetcurrentpositionasyncoptions
//3)-1 Location.getCurrentPositionAsync(options): 사용자의 현재 위치에 대한 일회성 전송을 요청합니다. 주어진 accuracy옵션 에 따라 특히 건물 내부에있을 때 해결하는 데 시간이 걸릴 수 있습니다.

//4) https://docs.expo.io/versions/v39.0.0/sdk/location/#locationrequestpermissionsasync
//4)-1 Location.requestPermissionsAsync()

//5) console.log(location) 에서 "coords": Object {...}값 확인 가능 -> const {coords} = await Location.getCurrentPositionAsync()로 변경
//5) "altitude": 32.92097854614258, "longitude": 127.08788049968794,

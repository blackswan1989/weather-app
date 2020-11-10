import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";
const API_KEY = "f2e9b29b46060b09dba2b412d6277738";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  //URL을 fetch하기 위함
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
        name,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
      name: name,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, name } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} name={name} />
    );
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
//5)-1 "altitude": 37.5056, "longitude": 127.08788049968794,

//6) http://api.openweathermap.org/data/2.5/weather?lat=37.5056&lon=127.08788049968794&appid=f2e9b29b46060b09dba2b412d6277738&units=metric

/*
NOTE console.log(data)
Object {
  "base": "stations",
  "clouds": Object {
    "all": 75,
  },
  "cod": 200,
  "coord": Object {
    "lat": 37.51,
    "lon": 127.09,
  },
  "dt": 1604906514,
  "id": 6571507,
! "main": Object {
    "feels_like": 4.32,
    "humidity": 21,
    "pressure": 1025,
 !  "temp": 9,
    "temp_max": 9,
    "temp_min": 9,
  },
  "name": "Samjeon-dong",
  "sys": Object {
    "country": "KR",
    "id": 8096,
    "sunrise": 1604873095,
    "sunset": 1604910366,
    "type": 1,
  },
  "timezone": 32400,
  "visibility": 10000,
! "weather": Array [
    Object {
      "description": "broken clouds",
      "icon": "04d",
      "id": 803,
      "main": "Clouds",
    },
  ],
  "wind": Object {
    "deg": 280,
    "speed": 2.1,
  },
}
}*/

## 0.1 Requirements

1. node -v 10이상(v14.15.0), npm -v 6이상(v6.14.8)
2. react-native: expo cli install

   - https://reactnative.dev/docs/environment-setup
   - npm install -g expo-cli
   - (sudo npm install -g expo-cli 권한문제로 설치 안될 경우 sudo붙이고 인스톨)

3. Terminal: expo init AwesomeProject

   - cd AwesomeProject
   - npm start # you can also use: expo start

4. start: npm start

## 1.2 Getting the location

1. https://reactnative.dev/docs/geolocation

   - getCurrentPosition()

2. https://docs.expo.io/versions/v39.0.0/sdk/location/

   - expo install expo-location

3. https://docs.expo.io/versions/v39.0.0/sdk/location/#usage

   - Loading.js add: import \* as Location from 'expo-location';

4. https://docs.expo.io/versions/v39.0.0/sdk/location/#locationgetcurrentpositionasyncoptions
   - Location.getCurrentPositionAsync(options)

## 1.4 Getting the Weather

1. https://openweathermap.org/current

   - Weather API & API_KEY
   - By geographic coordinates -> API call
   - http://api.openweathermap.org/data/2.5/weather?lat=37.5056&lon=127.08788049968794&appid=f2e9b29b46060b09dba2b412d6277738

2. URL을 fetch하기 위해 getWeather = async() => {}
   - npm install axios 입력하여 설치
   - error발생시 node_bodules & package-lock 삭제후 "npm i" 로 다시 설치

## 2.0 Displaying Temperature

1. https://openweathermap.org/current#data

   - For temperature in Fahrenheit use units=imperial
   - For temperature in Celsius use units=metric (섭씨)
   - celsius 섭씨 사용 : API_KEY주소 뒤에 &units=metric 추가해주기
   - console.log(data)에서 temp: 9 로 바뀌는것 확인.
   - Weather.js 생성 -> npm install prop-types

2. prop-type 설치
   - npm install prop-types
   - Weather.js: import PropTypes from "prop-types"; 등 추가

## 2.1 Getting the Condition Names

1. https://openweathermap.org/current#list
2. https://openweathermap.org/weather-conditions
   - Weather Conditions -> "Group names" Weather.js의 Weather.propTypes에 입력

## 2.2 Icons and Styling

1. https://docs.expo.io/guides/icons/
   - https://icons.expo.fyi/ : @expo/vector-icons directory.
   - 위 사이트에서 원하는 아이콘을 가진 것을 import에 추가해준다.
   - ex)import { FontAwesome5 } from "@expo/vector-icons";
   - 아이콘 출력 : retrun (<FontAwesome5 name="cloud-rain" size={120} color="white" />);

## 2.3 Background gradient

1. https://docs.expo.io/versions/latest/sdk/linear-gradient/
   - expo install expo-linear-gradient
   - Weather.js: import { LinearGradient } from 'expo-linear-gradient';

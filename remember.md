## 0.1 Requirements

1. node -v 10이상(v14.15.0), npm -v 6이상(v6.14.8)
2. react-native: expo cli install

   > https://reactnative.dev/docs/environment-setup
   > npm install -g expo-cli
   > (sudo npm install -g expo-cli 권한문제로 설치 안될 경우 sudo붙이고 인스톨)

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

2. https://openweathermap.org/current

   - By geographic coordinates -> API call
   - http://api.openweathermap.org/data/2.5/weather?lat=37.5056&lon=127.08788049968794&appid=f2e9b29b46060b09dba2b412d6277738

3. URL을 fetch하기 위해 getWeather = async() => {}
   - npm install axios 입력하여 설치
   - error발생시 node_bodules & package-lock 삭제후 "npm i" 로 다시 설치

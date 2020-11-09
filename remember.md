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

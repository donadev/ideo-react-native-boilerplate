#!/bin/sh

# initialize test app
npm install -g react-native-cli
react-native init DevApp
cp -r src DevApp/src
cd DevApp

# install dependencies
yarn add prop-types@15.6 react-native-drawer@2.5 react-native-elements@0.19 react-native-vector-icons@4.6 react-navigation@1.5 react-redux@5.0 redux@4 redux-thunk@2.2

# link dependencies
react-native link

# complete!
react-native run-ios

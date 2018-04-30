# Ideo React Native boilerplate

Official starting boilerplate for React Native applications.

## Usage

Initialize a ner React Native application:

```shell
npm install -g react-native-cli
react-native init ApplicationName
```

Clone the repository and copy all files inside the application:

```shell
git clone https://github.com/ideonetwork/ideo-react-native-boilerplate
cp -r ideo-react-native-boilerplate/* ApplicationName
```

Install dependencies inside the application:

```shell
cd ApplicationName
yarn add prop-types@15.6 react-native-drawer@2.5 react-native-elements@0.19 react-native-vector-icons@4.6 react-navigation@1.5 react-redux@5.0 redux@4 redux-thunk@2.2
```

Link dependencies:

```shell
react-native link
```

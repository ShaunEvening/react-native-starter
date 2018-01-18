# React Native Starter
#### Opinionated boilerplate code for creating a localized react native application.


## Getting Started

- Run through the [react native](https://facebook.github.io/react-native/docs/getting-started.html) "Building Project With Native Code" tutorial for setting up your environment for development of both iOS and Android

- To run the application with the Example scene, run the following commands
  ```bash
    # Install dependencies
    yarn install

    # Start the react native packager
    yarn start

    # RUN APPLICATION:    
    yarn ios        # On the iOS simulator
    yarn android    # On android simulator OR live android device

    # NOTE: To run the application on a live iOS device you
    #       will need xcode and an apple developer account
  ```

## Key Technologies

We make use of several javascript packages in this project. Some of the main ones that you will want to make yourself familiar with are:

- [react-native-navigation:](https://wix.github.io/react-native-navigation/#/) Natively implemented navigation package for react native.

- [react-native-style-tachyons:](https://github.com/tachyons-css/react-native-style-tachyons) Functional styling library for react native inspired by tachyons.

- [recompose:](https://github.com/acdlite/recompose/blob/master/docs/API.md) Used for creating and composing higher order components.

- [reselect:](https://github.com/reactjs/reselect) Used to create selectors for the redux store.

- [i18next:](https://www.i18next.com/) Localization package for application copy.


## Renaming The Project

To rename the project you will need to do the following:

- Run the following command: `npm run config -- --displayName='Your App Name'`

- Relink the react-native packages for both android and iOS. We recommend doing this manually as `react-native link` doesn't always get it right.

   - **NOTE:** `react-native-navigation` **MUST** be linked manually as it alters how react native bootstraps the application. Instructions on linking `react-native-navigation` can be found [here](https://wix.github.io/react-native-navigation/#/)

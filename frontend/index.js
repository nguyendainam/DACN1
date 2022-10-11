/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';                                                 
import {name as appName} from './app.json';
import MainScreen from './screens/MainScreen';

AppRegistry.registerComponent(appName, () => MainScreen);

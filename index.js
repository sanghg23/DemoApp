/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './DemoApp_file_js/App';
import {name as appName} from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));

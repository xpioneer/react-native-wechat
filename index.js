/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// 关闭远程调式非独立窗口的⚠️
YellowBox.ignoreWarnings([
  'Warning: componentWillReceiveProps is deprecated'
]);
AppRegistry.registerComponent(appName, () => App);

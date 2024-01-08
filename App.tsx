import React, {Component} from 'react';
import {Platform, Text} from 'react-native';
import PSPDFKitView from 'react-native-pspdfkit';

const DOCUMENT =
  Platform.OS === 'ios' ? 'misc.pdf' : 'file:///android_asset/misc.pdf';
export default class App extends Component<{}> {
  render() {
    return (
      <>
        <Text>123456789</Text>
      </>
    );
  }
}

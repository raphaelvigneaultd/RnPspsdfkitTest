import React, {Component} from 'react';
import {Platform, Text} from 'react-native';
import PSPDFKitView from 'react-native-pspdfkit';

const DOCUMENT =
  Platform.OS === 'ios' ? 'misc.pdf' : 'file:///android_asset/misc.pdf';
export default class App extends Component<{}> {
  renderKit = () => {
    return (
      <PSPDFKitView
        document={DOCUMENT}
        configuration={{
          showThumbnailBar: 'scrollable',
          pageTransition: 'scrollContinuous',
          scrollDirection: 'vertical',
        }}
        ref="pdfView"
        fragmentTag="PDF1"
        style={{flex: 1}}
      />
    );
  };

  render() {
    return (
      <>
        <Text>123456789</Text>
        {this.renderKit()}
      </>
    );
  }
}

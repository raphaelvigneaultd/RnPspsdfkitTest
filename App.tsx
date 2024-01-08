import React, {Component} from 'react';
import {Platform, Text} from 'react-native';
import PSPDFKitView from 'react-native-pspdfkit';

const DOCUMENT =
  Platform.OS === 'ios' ? 'misc.pdf' : 'file:///android_asset/misc.pdf';
export default class App extends Component<{}> {

  //@FIXME:  RCTPSPDFKitView was not found in the UI manager
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
        <Text>Hello Blobs</Text>
        {this.renderKit()}
      </>
    );
  }
}

import React, { Component } from 'react'
import { WebView } from 'react-native'

export default class MyWeb extends Component {

  onLoad = (e) => {
    console.log(e, 'onLoad')
  }
  onLoadEnd = (e) => {
    console.log(e, 'onLoadEnd')
  }
  onLoadStart = (e) => {
    console.log(e, 'onLoadStart')
  }

  render() {
    return (
      <WebView
        onLoad={onLoad}
        onLoadEnd={onLoadEnd}
        onLoadStart={onLoadStart}
        source={{uri: 'https://www.baidu.cn'}}
        style={{marginTop: 20}}
      />
    );
  }
}
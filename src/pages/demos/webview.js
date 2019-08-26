import React, { Component } from 'react'
import { Platform } from 'react-native'
import { WebView } from 'react-native-webview'
import { VERSION } from '../../config'


export default class DemoWebView extends Component {
  
  userAgent = `ACard${VERSION},${Platform.OS},${Platform.Version}`

  onLoadStart = (e) => {
    console.log(e, 'onLoadStart', this.userAgent)
  }
  onLoad = (e) => {
    console.log(e, 'onLoad')
  }
  onLoadEnd = (e) => {
    console.log(e, 'onLoadEnd')
    const { setParams, state: {params: {title}} } = this.props.navigation
    setParams({title: '百度'})
  }

  render() {
    
    const { source } = this.props

    return (
      <WebView style={{flex: 1}} userAgent={this.userAgent}
        onLoad={this.onLoad}
        onLoadEnd={this.onLoadEnd}
        onLoadStart={this.onLoadStart}
        source={{uri: source}}
        style={{marginTop: 20}}
      />
    );
  }
}
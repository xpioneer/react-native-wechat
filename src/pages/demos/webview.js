import React, { Component } from 'react'
import { SafeAreaView, Platform, View } from 'react-native'
import { WebView } from 'react-native-webview'
import { VERSION } from '../../config'


export default class DemoWebView extends Component {
  
  static navigationOptions = (navigation) => {
    console.log(navigation, 'navigation')
    return {
      title: '微信(8)'
    }
  };
  
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      loadDone: false
    };
  }
  
  userAgent = `ACard${VERSION},${Platform.OS},${Platform.Version}`


  onNavigationStateChange = e => {
    console.log(e, '-----')
  }

  onLoadProgress = (e) => {
    const { progress } = e.nativeEvent
    console.log(e.nativeEvent)
    this.setState({progress})
    if(progress == 1) {
      this.setState({loadDone: true})
    }
  }

  onLoadStart = (e) => {
    console.log('onLoadStart', this.userAgent)
  }
  onLoad = (e) => {
    console.log('onLoad')
  }
  onLoadEnd = (e) => {
    console.log('onLoadEnd')
    const { setParams, state: {params: {title}} } = this.props.navigation
    // setParams({title: '百度'})
  }

  goBack = (e) => {
    // console.log(e, 'goback')
  }

  onMessage = (e) => {
    const {nativeEvent: {data}} = e
    const _data = JSON.parse(data)
  }

  render() {
    const { progress, loadDone } = this.state
    const { source } = this.props

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#f0f0f0', margin: 0, padding: 0}}>
        <View style={{height: 2, width: `${progress*100}%`, backgroundColor: '#6484ff', display: loadDone ? 'none' : 'flex' }}></View>
        <WebView style={{flex: 1, margin: 0, padding: 0}}
          useWebKit={true}
          onLoadProgress={this.onLoadProgress}
          userAgent={this.userAgent}
          onLoad={this.onLoad}
          onLoadEnd={this.onLoadEnd}
          onLoadStart={this.onLoadStart}
          goBack={this.goBack}
          onMessage={this.onMessage}
          onNavigationStateChange={this.onNavigationStateChange}
          source={{uri: source}}
          style={{marginTop: 20}}/>
      </SafeAreaView>
      
    );
  }
}
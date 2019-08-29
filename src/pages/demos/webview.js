import React, { Component } from 'react'
import { SafeAreaView, Platform, View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { WebView } from 'react-native-webview'
import { APPNAME, VERSION, arrowRightUrl } from '../../config'

const MessageType = {
  navigationStateChange: 'navigationStateChange',
  openNativeScene: 'openNativeScene'
}

const Navigation = (props) => {

  const {title, goBack, doFresh} = props

  return (
    <View style={{height: 40, backgroundColor: '#fff', flexDirection: 'row'}}>
      <TouchableOpacity style={{width: 36, height: 40, alignItems: 'center', justifyContent: 'center', fontSize: 16}} onPress={goBack}><Image style={{width: 6, height: 12, transform: [{rotate: '180deg'}]}} source={{uri: arrowRightUrl}}></Image></TouchableOpacity>
      <TouchableOpacity style={{width: 36, height: 40, alignItems: 'center', justifyContent: 'center',fontSize: 16}} onPress={() => Actions.pop()}><Text>关闭</Text></TouchableOpacity>
      <View style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8}}><Text numberOfLines={1} ellipsizeMode={'clip'} style={{fontSize: 16, color: '#6484ff'}}>{title}</Text></View>
      <View style={{width: 36, height: 40}}></View>
      <TouchableOpacity style={{width: 36, height: 40, alignItems: 'center', justifyContent: 'center'}}  onPress={doFresh}><Text>...</Text></TouchableOpacity>
    </View>
  )
  
}

export default class DemoWebView extends Component {
  
  constructor(props) {
    super(props);
    // console.log(props, 'super')
    this.state = {
      title: '',
      source: props.source,
      progress: 0,
      loadDone: false
    };
  }
  
  $webview = ''
  pages = []

  injectedJavaScript = `
  (function(){
    window.postMsg = function(data) {
      window.ReactNativeWebView.postMessage(data, '*');
    };
    function wrap(fn) {
      return function wrapper() {
        var res = fn.apply(this, arguments);
        var title = document.title;
        var data = {type: '${MessageType.navigationStateChange}', url: location.href, title: title}
        window.postMsg(JSON.stringify(data));
        return res;
      }
    }
    history.pushState = wrap(history.pushState);
    history.replaceState = wrap(history.replaceState);
    window.nativeBrige = {
      setTitle: function(str){
        var title = document.title;
        window.postMsg('123');
      },
      openUrl: function(url){
        var data = {type: '${MessageType.openNativeScene}', url: location.href, scene: url}
        window.postMsg(JSON.stringify(data));
      }
    }
  })()
  `
  
  userAgent = `${APPNAME}${VERSION}_${Platform.OS}_${Platform.Version}`


  onNavigationStateChange = e => {
    // console.log(e, '-----')
  }

  onLoadProgress = (e) => {
    const { progress } = e.nativeEvent
    // console.log(e.nativeEvent)
    this.setState({progress})
  }

  onLoadStart = (e) => {
    // console.log('onLoadStart', this.userAgent)
  }
  onLoad = (e) => {
    // console.log('onLoad', e.nativeEvent)
  }
  onLoadEnd = (e) => {
    // console.log('onLoadEnd', e.nativeEvent)
    const { title, url } = e.nativeEvent
    this.setState({title})
    this.pushPage(url, 'fresh')
    // console.log(this.pages)
  }

  goBack = (e) => {
    console.log('goback')
    const length = this.pages.length
    if(length > 1) {
      const lastOne = this.pages[length - 1]
      if(lastOne.type == 'fresh') {
        this.pages.splice(length - 2, 2)
      } else {
        this.pages.pop()
      }
      // console.log(this.pages, '======')
      this.$webview.goBack()
    }else {
      Actions.pop()
    }
  }

  onMessage = (e) => {
    const {nativeEvent:{data}} = e
    const _data = JSON.parse(data)
    const {type} = _data
    if(type === MessageType.navigationStateChange) { // 导航栏改变
      const {url, title} = _data
      this.setState({title})
      this.pushPage(url, 'other')
      // console.log(this.pages)
    } else if(type === MessageType.openNativeScene) { // 打开指定的客户端页面
      const {scene} = _data
      Actions.push(scene, { needLogin: true })
    }
    console.log(data, '****')
  }

  pushPage = (url, type) => {
    const length = this.pages.length
    const lastOne = this.pages[length - 1]
    if(length === 0 || lastOne.url !== url) {
      this.pages.push({url, type})
    }
  }

  doFresh = () => {
    this.$webview.reload()
  }

  componentDidMount() {
    // console.log('did mount', this.$webview)
  }

  render() {
    const { title, source, progress } = this.state

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#f0f0f0', margin: 0, padding: 0}}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
        <Navigation title={title} goBack={this.goBack} doFresh={this.doFresh}></Navigation>
        <View style={{height: 2, width: `${progress*100}%`, backgroundColor: '#6484ff', display: progress == 1 ? 'none' : 'flex' }}></View>
        <WebView style={{flex: 1, margin: 0, padding: 0, height: '100%'}}
          ref={webview => this.$webview = webview}
          useWebKit={true}
          onLoadProgress={this.onLoadProgress}
          applicationNameForUserAgent={this.userAgent}
          onLoad={this.onLoad}
          onLoadEnd={this.onLoadEnd}
          onLoadStart={this.onLoadStart}
          onNavigationStateChange={this.onNavigationStateChange}
          source={{uri: source}}
          injectedJavaScript={this.injectedJavaScript}
          onMessage={this.onMessage}/>
      </SafeAreaView>
    );
  }
}
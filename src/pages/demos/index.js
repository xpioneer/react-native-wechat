import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ToastAndroid
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import { Actions } from 'react-native-router-flux'
import { ATouchable } from '../../components/touchable'
import { arrowRightUrl } from '../../config/global'


function openWebView() {
  Actions.demoWebview({source: 'https://app-treasure.myocard.cn'})
}

function showToast() {
  ToastAndroid.show('这里是toast')
}

const Demo = () => {

  function openInputPage() {
    Actions.push('inputPage')
  }
  
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          {/* <Header /> */}
          <ATouchable style={styles.wrap} onPress={openWebView}>
            <Text>WebView</Text>
            <Image style={styles.arrow} source={{uri: arrowRightUrl}}></Image>
          </ATouchable>
          <ATouchable style={styles.wrap} onPress={openInputPage}>
            <Text>TextInput</Text>
            <Image style={styles.arrow} source={{uri: arrowRightUrl}}></Image>
          </ATouchable>

          <View style={styles.list}>
            <ATouchable style={styles.item3}><Text onPress={showToast}>Toast</Text></ATouchable>
            <ATouchable style={styles.item3}><Text>Alert</Text></ATouchable>
            <ATouchable style={styles.item3}><Text>Comfirm</Text></ATouchable>
            <ATouchable style={styles.item3}><Text onPress={showToast}>Toast</Text></ATouchable>
            <ATouchable style={styles.item3}><Text>Alert</Text></ATouchable>
            <ATouchable style={styles.item3}><Text>Comfirm</Text></ATouchable>
          </View>

        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  wrap: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },

  arrow: {
    width: 8,
    height: 16
  },

  list: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  item3: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    flexBasis: '25%',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    borderRightWidth: 1,
    borderRightColor: '#f0f0f0',
    // textAlign: 'center'
  }

  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
});

export default Demo;

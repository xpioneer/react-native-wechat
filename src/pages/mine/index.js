import React, { Component } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { ATouchable } from '../../components/touchable'
import { arrowRightUrl } from '../../config/global'
// import { observer } from 'mobx-react';
// import { action } from 'mobx';



// @observer
export default class Mine extends Component {
  // static navigationOptions = (navigation) => {
  //   console.log(navigation, 'navigation', this)
  //   return {
  //     headerTitle: '个人中心'
  //   }
  // };

  constructor(props) {
    super(props);
    const { CartStore, data } = this.props;
    // this.CartStore = CartStore;
    this.data = {
      name: 23, price: 233, count: 123,
      image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566486859064&di=c4d4560e33cd954922054f9d1ad432c6&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh1%2Fh991%2Fimg201712091729030_info400X400.jpg', isSelected: true,
      payUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1257180244,1181127241&fm=26&gp=0.jpg',
    };
  }

  showName = (e) => {
    console.log('show')
    Actions.login({needLogin: true})
  }

  headerFun = (e) => {
    console.log('headerFun')
  }

  nickName = (e) => {
    // console.log(e)
  }

  goSetting = (e) => {
    console.log('setting', 12, 99)
    Actions.push('setting', {hehe: 'heheda'})
  }

  goDemo = (e) => {
    console.log('demos')
    Actions.push('demos', {hehe: 'heheda'})
  }

  componentDidMount() {
    // console.log('home mounted', styles)
  }

  render() {
    const { name, price, payUrl, image, arrow } = this.data;

    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 40,
          backgroundColor: '#fff'
        }} activeOpacity={1} onPress={(e) => this.headerFun(e)}>
          <View style={styles.header}>
            <Image style={styles.avatar} source={{uri: image}}></Image>
            <View style={{height: '100%', flex: 1, justifyContent: 'space-between'}}>
              <Text style={styles.name} onPress={(e) => this.nickName(e)}>233</Text>
              <Text style={styles.wxid}>微信号：chinese</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.list}>
          <ATouchable style={styles.item}>
            <View style={styles.itemL}>
              <Image style={{height: 30, width: 30, marginRight: 10}} source={{uri: payUrl}}></Image>
              <Text style={{fontSize: 16}}>支付</Text>
            </View>
            <Image style={{height: 16, width: 8, resizeMode: 'contain'}} source={{uri: arrowRightUrl}}></Image>
          </ATouchable>
        </View>

        <View style={styles.list}>
          <ATouchable style={styles.item}>
            <View style={styles.itemL}>
              <Image style={{height: 30, width: 30, marginRight: 10}} source={{uri: payUrl}}></Image>
              <Text style={{fontSize: 16}}>收藏</Text>
            </View>
            <Image style={{height: 16, width: 8, resizeMode: 'contain'}} source={{uri: arrowRightUrl}}></Image>
          </ATouchable>
          <ATouchable style={styles.item}>
            <View style={styles.itemL}>
              <Image style={{height: 30, width: 30, marginRight: 10}} source={{uri: payUrl}}></Image>
              <Text style={{fontSize: 16}}>相册</Text>
            </View>
            <Image style={{height: 16, width: 8, resizeMode: 'contain'}} source={{uri: arrowRightUrl}}></Image>
          </ATouchable>
          <ATouchable style={styles.item}>
            <View style={styles.itemL}>
              <Image style={{height: 30, width: 30, marginRight: 10}} source={{uri: payUrl}}></Image>
              <Text style={{fontSize: 16}}>卡包</Text>
            </View>
            <Image style={{height: 16, width: 8, resizeMode: 'contain'}} source={{uri: arrowRightUrl}}></Image>
          </ATouchable>
        </View>

        <View style={styles.list}>
          <TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={this.goSetting}>
            <View style={styles.itemL}>
              <Image style={{height: 30, width: 30, marginRight: 10}} source={{uri: payUrl}}></Image>
              <Text style={{fontSize: 16}}>设置</Text>
            </View>
            <Image style={{height: 16, width: 8, resizeMode: 'contain'}} source={{uri: arrowRightUrl}}></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.list}>
          <TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={this.goDemo}>
            <View style={styles.itemL}>
              <Image style={{height: 30, width: 30, marginRight: 10}} source={{uri: payUrl}}></Image>
              <Text style={{fontSize: 16}}>Demo</Text>
            </View>
            <Image style={{height: 16, width: 8, resizeMode: 'contain'}} source={{uri: arrowRightUrl}}></Image>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // height: 130,
    // borderBottomWidth: 1,
    backgroundColor: '#f0f0f0'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    // paddingHorizontal: 20,
    // paddingTop: 20,
    // paddingBottom: 40,
  },
  avatar: {
    height: 50,
    width: 50,
    marginRight: 10
  },
  name: {
    fontSize: 20,
  },
  wxid: {
    fontSize: 16,
    color: '#999'
  },

  list: {
    marginTop: 10,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f0f0',
    fontSize: 18
  },
  itemL: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

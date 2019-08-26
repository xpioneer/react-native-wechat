import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { ATouchable } from '../../components/touchable'
import { arrowRightUrl } from '../../config/global'

const fontSize16 = {fontSize: 16}

export default class Setting extends Component {

  need = false


  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('setting mounted', this.props)
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.list}>
          <ATouchable style={styles.item}>
            <Text style={fontSize16}>账号与安全</Text>
            <Image style={{height: 16, width: 8, resizeMode: 'contain'}} source={{uri: arrowRightUrl}}></Image>
          </ATouchable>
        </View>

        <View style={styles.list}>
          <ATouchable style={styles.item}>
            <Text style={fontSize16}>新消息通知</Text>
            <Image style={{height: 16, width: 8, resizeMode: 'contain'}} source={{uri: arrowRightUrl}}></Image>
          </ATouchable>
          <ATouchable style={styles.item}>
            <Text style={fontSize16}>通用</Text>
            <Image style={{height: 16, width: 8, resizeMode: 'contain'}} source={{uri: arrowRightUrl}}></Image>
          </ATouchable>
          <ATouchable style={styles.item}>
            <Text style={fontSize16}>帮助与反馈</Text>
            <Image style={{height: 16, width: 8, resizeMode: 'contain'}} source={{uri: arrowRightUrl}}></Image>
          </ATouchable>
          <ATouchable style={styles.item}>
            <Text style={fontSize16}>关于微信</Text>
            <Image style={{height: 16, width: 8, resizeMode: 'contain'}} source={{uri: arrowRightUrl}}></Image>
          </ATouchable>
        </View>

        <View style={styles.list}>
          <ATouchable style={{...styles.item, justifyContent: 'center'}}>
            <Text style={fontSize16}>退出登录</Text>
          </ATouchable>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  list: {
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f0f0'
  },
});

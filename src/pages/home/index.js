import React, { Component, useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import $http from '../../http/http'


export default class Home extends Component {

  data = this.props

  // static navigationOptions = (navigation) => {
  //   console.log(navigation, 'navigation', this)
  //   return {
  //     title: '微信(8)'
  //   }
  // };

  state = {
    count: 19,
    list: []
  }

  handleScrollEnd = (e) => {
    console.log(e)
  }

  componentDidMount() {
    // console.log(this)
    // $http.get('http://127.0.0.1:8020/api/test', {
    //   // callback: 'recommend'
    // }).then(res => {
    //   let _list = res.data;
    //   console.log(_list)
    //   this.setState({
    //     list: _list
    //   })
    //   console.log(res, '0000')
    // })
    const { count } = this.state
    const { setParams, state: {params: {title}} } = this.props.navigation
    setTimeout(() => {
      if(count) {
        setParams({title: title + `(${count})`})
      }
    }, 2000)
  }

  render() {
    const { list } = this.state
    return (
      <View style={styles.container}>
        <View style={{height: 128, paddingTop: 20, flex: 1}}>
          <ScrollView style={{flex: 1, flexDirection: 'column'}} scrollEnabled={true}>
            <View><Text>热门</Text></View>
            <View><Text>热门</Text></View>
            <View><Text>热门</Text></View>
            <View><Text>热门</Text></View>
            <View><Text>热门</Text></View>
          </ScrollView>
        </View>
        <ScrollView>
          <View style={styles.listWrap}>
            {
              list.map((item, index) => {
                return <View style={styles.item} key={item.id}>
                  <Image style={{width: 185, height: 185}} source={{uri: item.image}}/>
                  <Text numberOfLines={2}>{item.name}</Text>
                  <Text style={{paddingTop: 10}}>$89.99</Text>
                </View>
              })
            }
            
            <View>
              <Text>hello</Text>
              <Image style={{width: 185, height: 185}} source={{uri: 'https://img12.360buyimg.com/n2/s315x315_jfs/t1/30707/12/11351/470878/5cb45320Ec4526280/ca4d6058b09e241e.jpg'}}></Image>
              <Image style={{width: 185, height: 185}} source={{uri: 'https://img12.360buyimg.com/n2/s315x315_jfs/t1/30707/12/11351/470878/5cb45320Ec4526280/ca4d6058b09e241e.jpg'}}></Image>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    // flexWrap: 'wrap',
    // justifyContent: 'space-between'
  },
  listWrap: {
    flexDirection: 'row',
    // backgroundColor: '#f5f5f5',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  item: {
    height: 245,
    width: 185,
    // borderBottomWidth: 1,
    // borderBottomColor: 'red',
    marginBottom: 5,
    backgroundColor: '#fff'
  }
});

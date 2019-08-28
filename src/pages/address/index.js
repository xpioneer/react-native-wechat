import React, { Component } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Adress extends Component {

  need = false


  constructor(props) {
    super(props);
    const { CartStore, data } = this.props;
    // this.CartStore = CartStore;
    this.data = {
      name: 23, price: 233, count: 123,
      image: 'https://www.baidu.com/s?rsv_idx=1&wd=div&ie=utf-8&rsv_cq=%E5%88%A4%E6%96%ADdiv%E6%96%87%E5%AD%97%E6%9C%89%E5%87%A0%E8%A1%8C&rsv_dl=0_right_recommends_merge_28335&euri=6455528',
      isSelected: true,
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566477535845&di=e15904153172c362d4f43368be60fd57&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F27%2F20140927224808_MztTf.thumb.700_0.jpeg'
    };
    this.list = []
    const N = 5;
    for(let i = 0; i < N; i++){
      this.list.push({
        key: String(i),
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566477535845&di=e15904153172c362d4f43368be60fd57&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F27%2F20140927224808_MztTf.thumb.700_0.jpeg',
        name: '艾米丽' + parseInt(Math.random()*N)
      })
    }
    this.count = this.list.length
  }

  login = (e) => {
    console.log(this)
    if(this.need) {
      Actions.pop()
    }
  }

  componentDidMount() {
    this.need = this.props.needLogin
    console.log('address mounted', this.need)
  }

  render() {
    const { list, count } = this;

    return (
      <ScrollView style={styles.container}>
        {
          list.map((item) => {
            return <View style={styles.itemWrap} key={item.key}>
              <Image style={styles.img} source={{uri: item.avatar}}></Image>
              <View style={styles.label}><Text>{item.name}</Text></View>
            </View>
          })
        }
        <View style={styles.total}><Text style={styles.totalLabel}>{count}位联系人</Text></View>
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
    // justifyContent: 'center',
    // paddingTop: 150,
    paddingHorizontal: 15,
    // borderBottomWidth: 10,
    // borderBottomColor: 'red',
    backgroundColor: '#fff'
  },
  itemWrap: {
    flex: 1,
    // display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    height: 60,
  },
  img: {
    width:40,
    height: 40,
    marginRight: 10,
  },
  label: {
    height: '100%',
    flexGrow: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  name: {
    color: '#333',
    fontSize: 16,
  },

  total: {
    display: 'flex',
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalLabel: {
    color: '#aaa',
    fontSize: 16,
  }

});

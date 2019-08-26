import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Login extends Component {

  need = false


  constructor(props) {
    super(props);
    const { CartStore, data } = this.props;
    // this.CartStore = CartStore;
    this.data = {
      name: 23, price: 233, count: 123, image: 'https://www.baidu.com/s?rsv_idx=1&wd=div&ie=utf-8&rsv_cq=%E5%88%A4%E6%96%ADdiv%E6%96%87%E5%AD%97%E6%9C%89%E5%87%A0%E8%A1%8C&rsv_dl=0_right_recommends_merge_28335&euri=6455528', isSelected: true
    };
  }

  login = (e) => {
    console.log(this)
    if(this.need) {
      Actions.pop()
    }
  }

  componentDidMount() {
    this.need = this.props.needLogin
    console.log('login mounted', this.need)
  }

  render() {
    const { name, price, count, image, isSelected } = this.data;

    console.log(name, styles)

    return (
      <View style={styles.container}>
        
        <View style={styles.inputWrap}>
          <Text style={styles.label}>用户名</Text>
          <TextInput style={[styles.input, { color: '#555' }]}/>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.label}>密码</Text>
          <TextInput style={[styles.input, {  color: '#555' }]}/>
        </View>

        <View style={styles.btnWrap}>
          <Text style={styles.btn} onPress={this.login}>登录</Text>
        </View>
          
      </View>
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
    paddingTop: 150,
    paddingHorizontal: 60,
    // borderBottomWidth: 10,
    // borderBottomColor: 'red',
    backgroundColor: '#fff'
  },
  inputWrap: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    // width: 200,
    // margin: 'auto'
  },
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 16,
    width: 60
  },
  input: {
    flexGrow: 1,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  btnWrap: {
    marginTop: 40,
    height: 40,
    alignItems: 'center'
  },
  btn: {
    borderWidth: 1,
    borderColor: '#f77368',
    fontSize: 18,
    color: '#f77368',
    borderRadius: 20,
    width: 220,
    lineHeight:36,
    textAlign: 'center'
  },

  rightView: {
    flex: 1,
    height: 100
    // justifyContent: 'space-between'
  },
  topView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5
  },
  text: {
    color: '#000',
    fontSize: 15
  },
  bottomView: {
    flexDirection: 'row'
  },
  button: {
    paddingLeft: 30,
    paddingRight: 30
  }
});

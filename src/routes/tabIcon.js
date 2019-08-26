
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';


export const HomePic = (props) => {
  console.log(props.focused, '=======')
  return <Image style={{ width: 25, height: 25, resizeMode:'contain' }} source={require("../statics/home.png")} />
}
// export const UserPic = (props) => {
//   console.log(props, '+++++++')
//   return <Image style={{ width: 25, height: 25, resizeMode:'contain' }} source={require("../statics/user.png")} />
// }

export class UserPic extends Component {
  render() {
    console.log(this.props.focused, '+++++++')
    return <Image style={{ width: 25, height: 25, resizeMode:'contain' }} source={require("../statics/user.png")} />
  }
}

export default class TabIcon extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('home mounted', this.props)
  }

  render(){
    let selected=this.props.focused;
    let data={
      home:{
        title:"微信",
        icon:!selected?require("../statics/home.png"):require("../statics/homeHL.png")
      },
      address:{
        title:"通讯录",
        icon:!selected?require("../statics/home.png"):require("../statics/home.png")
      },
      discovery:{
        title:"发现",
        icon:!selected?require("../statics/home.png"):require("../statics/home.png")
      },
      mine:{
        title:"我的",
        icon:!selected?require("../statics/user.png"):require("../statics/userHL.png")
      }
    }
    let param=data[this.props.navigation.state.key];
    return  <View style={styles.tabbarContainer}>
      <Image style={{ width: 25, height: 25,resizeMode:'contain' }} source={param.icon} />
      {/* <Text style={[styles.tabbarItem,selected&&{color:'#F08519'}]}>{param.title}</Text> */}
    </View>
  }

}

const styles = StyleSheet.create({
  tabbarContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    width:Dimensions.get('window').width/4
  },
  tabbarItem:{  
    marginTop:5,    
    textAlign:"center"
  }
});
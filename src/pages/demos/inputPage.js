import React, {Fragment, Component, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import { ATouchable } from '../../components/touchable'
import { arrowRightUrl } from '../../config/global'

const fS16 = {fontSize: 16}
const fS18 = {fontSize: 18}


const InputPage =() => {

const [name, setName] = useState('')
const [desc, setDesc] = useState('')
console.log(this, 'render')
const submit = () => {
  console.log(this)
}
const clear = () => {
  setName('')
  setDesc('')
}

// useEffect(() => {

// }, [])

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">

          <View style={styles.wrap}>
            <View style={styles.item}>
              <Text style={[styles.text, fS16]}>输入：</Text>
              <TextInput style={styles.input} value={name} onChangeText={setName}></TextInput>
            </View>
            <View style={styles.item}>
              <Text style={[styles.text, fS16]}>描述：</Text>
              <TextInput multiline={true} numberOfLines={6} style={styles.textarea} value={desc} onChangeText={setDesc}></TextInput>
            </View>

            <View style={styles.item}>
              <ATouchable style={styles.btn} onPress={submit}><Text style={[{color: '#fff'}, fS16]}>提交</Text></ATouchable>
              <TouchableOpacity style={[styles.btn, {backgroundColor: '#ccc'}]} onPress={clear}><Text style={[{color: '#fff'}, fS16]}>清空</Text></TouchableOpacity>
            </View>
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
    // marginTop: 10,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  item: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 60,
    flexBasis: '25%',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    // textAlign: 'center'
  },
  text: {
    display: 'flex',
    flexBasis: 80,
    color: '#999',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#f00',
    fontSize: 16,
  },
  textarea: {
    flex: 1,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    fontSize: 16,
    height: 120,
    padding: 10
  },

  btn: {
    width: 120,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default InputPage;

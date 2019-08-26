import React from 'react'
import { TouchableOpacity } from 'react-native'
/**
 * 无透明效果的TouchableOpacity
 * @param {属性} props 
 */

export const ATouchable = props => <TouchableOpacity {...props} activeOpacity={0.6}>{props.children}</TouchableOpacity>
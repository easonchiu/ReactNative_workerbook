import style from './style'
import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

const Input = props => {
	return (
		<View style={[style.wrapper, props.style]}>
			<TextInput style={style.input} placeholder={props.placeholder} />
		</View>
	)
}

export default Input
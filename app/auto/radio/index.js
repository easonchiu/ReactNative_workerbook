import style from './style'
import React, { Component } from 'react'
import { View, Image } from 'react-native'

const Radio = props => {
	return (
		<View style={[style.wrapper, props.style]}>
			<Image style={[style.icon]} source={{uri: 'icon-radio'}} />
			<Image style={[style.icon, style.iconChecked]} source={{uri: 'icon-radio-checked'}} />
		</View>
	)
}

export default Radio
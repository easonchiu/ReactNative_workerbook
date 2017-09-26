import style from './style'
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Animated, Modal } from 'react-native'

import Spin from '../spin'

const Layout = (props) => {
	return (
		<View style={[style.wrapper, props.style]}>
			{props.children}
		</View>
	)
}

const LayoutHeader = (props) => {
	
	let title = props.title
	if (title && typeof title == 'string') {
		title = <Text style={style.headerTitle}>{props.title}</Text>
	}

	return (
		<View style={[style.header, props.style]}>
			<View style={style.headerInner}>
			{
				props.onBack ?
				<TouchableOpacity
					activeOpacity={0.5}
					style={style.headerBack}
					onPress={props.onBack}>
					<Image
						style={style.headerBackIcon}
						source={{uri: 'icon-back'}} />
				</TouchableOpacity> :
				null
			}
			{
				props.onClose ?
				<TouchableOpacity
					activeOpacity={0.5}
					style={style.headerClose}
					onPress={props.onClose}>
					<Image
						style={style.headerCloseIcon}
						source={{uri: 'icon-close'}} />
				</TouchableOpacity> :
				null
			}
			{
				title ?
				title :
				null
			}
			</View>
			{
				props.children
			}
			{
				props.hasShadow ?
				props.scrollY ?
				<Animated.Image
					style={[style.headerShadow, {
						opacity: props.scrollY.interpolate({
	                        inputRange: [0, 20],
	                        outputRange: [0, 1]
	                    })
					}]}
					source={{uri: 'shadow-bottom'}} /> :
				<Image style={style.headerShadow} source={{uri: 'shadow-bottom'}} /> :
				null
			}
		</View>
	)
}

const LayoutBody = (props) => {
	return (
		<View {...props} style={[style.body, props.style]}>
			{
				props.loading ?
				<Spin style={style.loading} /> :
				props.children
			}
		</View>
	)
}

const LayoutFooter = (props) => {
	return (
		<View style={[style.footer, props.style]}>
			{
				props.hasShadow ?
				<Image style={style.footerShadow} source={{uri: 'shadow-top'}} /> :
				null
			}
			{props.children}
		</View>
	)
}

Layout.Header = LayoutHeader
Layout.Body = LayoutBody
Layout.Footer = LayoutFooter
export default Layout
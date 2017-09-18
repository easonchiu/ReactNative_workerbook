import style from './style'
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Animated } from 'react-native'

const Layout = (props) => {
	return (
		<View style={[style.wrapper, props.style]}>
			{props.children}
		</View>
	)
}

const LayoutHeader = (props) => {
	return (
		<View style={[style.header, props.style]}>
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
				props.title ?
				<Text style={style.headerTitle}>{props.title}</Text> :
				null
			}
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
	if (props.scrollabled) {
		return (
			<ScrollView
				{...props}
				scrollEventThrottle={8}
				removeClippedSubviews={true}
				style={[style.scrollBody, props.scrollStyle]}
				contentContainerStyle={[style.scrollContainer, props.style]}>
				{props.children}
			</ScrollView>
		)
	}
	return (
		<View {...props} style={[style.body, props.style]}>
			{props.children}
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
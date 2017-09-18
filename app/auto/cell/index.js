import style from './style'
import React, { Component } from 'react'
import { View, TouchableHighlight } from 'react-native'

const Cell = props => {
	const children = []
	if (Array.isArray(props.children)) {
		const len = props.children.length
		props.children.forEach((res, i) => {
			children.push(res)
			if (len > i + 1) {
				children.push(<View key={`@cell-row-line-${i}`} style={style.line} />)
			}
		})
	} else {
		children.push(props.children)
	}
	return (
		<View style={[style.wrapper, props.style]}>
			{children}
		</View>
	)
}

const Row = props => {
	if (props.onClick) {
		return (
			<TouchableHighlight
				style={[style.row, props.style]}
				underlayColor={'rgb(252, 252, 252)'}
				onPress={props.onClick}>
				{props.children}
			</TouchableHighlight>
		)
	}
	return (
		<View style={[style.row, props.style]}>
			{props.children}
		</View>
	)
}

Cell.Row = Row

export default Cell
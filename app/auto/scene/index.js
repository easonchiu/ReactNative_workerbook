import style from './style'
import React, { Component } from 'react'
import { View } from 'react-native'


const Scene = props => {
	return (
		<View style={[style.scene, props.style]}>
			{props.children}
		</View>
	)
}

class StaticContainer extends Component {
	constructor(props) {
		super(props)
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !!nextProps.shouldUpdate
	}

	render() {
		const { children } = this.props
		return children ? React.Children.only(children) : null
	}
}

const SceneItem = props => {
	return (
		<View
			pointerEvents={props.active ? 'auto': 'none'}
			removeClippedSubviews={!props.active}
			style={[
				style.item,
				props.active ? null : style.hiddenItem,
				props.style	
			]}>
			<StaticContainer shouldUpdate={props.active}>
				{props.children}
			</StaticContainer>
		</View>
	)
}

Scene.Item = SceneItem

export default Scene
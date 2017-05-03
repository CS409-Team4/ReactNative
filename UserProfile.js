import React, { Component, PropTypes } from 'react';
import {
	View,
	Image,
	StyleSheet,
	Text,
} from 'react-native';

export default class Main extends Component {
	constructor(props) {
		super(props);
	}

	_navigate = (scene, name) => {
		this.props.navigator.push({
			name: scene,
			passProps: {
				name: name
			}
		})
	}

	render() {
		return (
			<View style={ styles.container }>
				<Text>USER PROFILE</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#455B66'
	},	
});
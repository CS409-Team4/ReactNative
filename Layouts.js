import React, { Component, PropTypes } from 'react';
import {
	View,
	StyleSheet,
	Text,
	ToolbarAndroid,
	TouchableHighlight,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import IuiTabBar from './IuiTabBar';
import { Col, Row, Grid } from 'react-native-grid-layout';

export default class Layouts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
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
				<ToolbarAndroid
					style={{ backgroundColor: '#151F2F', height: 50 }}
					title="React Native"
					navIcon={require('./img/ic_back.png')}
					onIconClicked={ () => this.props.navigator.pop() }>
				</ToolbarAndroid>
				<ScrollableTabView
					style={ styles.subcontainer }
					renderTabBar={() => <IuiTabBar />}
					tabBarUnderlineStyle={{ backgroundColor: '#455b66' }}
				>
					<View style={{ flex: 1 }}>
						<Text style={ styles.tabName }>{'Stack'}</Text>
						<View tabLabel='Stack' style={ styles.tabView }>
							<TouchableHighlight style={{ flex: 1 }}><View style={StyleSheet.flatten([styles.stackCard, {backgroundColor: '#fe8256', marginTop: 0}])}></View></TouchableHighlight>
							<TouchableHighlight style={{ flex: 1 }}><View style={StyleSheet.flatten([styles.stackCard, {backgroundColor: '#899bfe'}])}></View></TouchableHighlight>
							<TouchableHighlight style={{ flex: 1 }}><View style={StyleSheet.flatten([styles.stackCard, {backgroundColor: '#455b66'}])}></View></TouchableHighlight>
							<TouchableHighlight style={{ flex: 1 }}><View style={StyleSheet.flatten([styles.stackCard, {backgroundColor: '#fed03c'}])}></View></TouchableHighlight>
							<TouchableHighlight style={{ flex: 1 }}><View style={StyleSheet.flatten([styles.stackCard, {backgroundColor: '#3c5bfe'}])}></View></TouchableHighlight>
						</View>
					</View>
					
					<View style={{ flex: 1 }}>
						<Text style={ styles.tabName }>{'Grid'}</Text>
						<View tabLabel='Grid' style={ styles.tabView }>
							<Grid>
								<Row size={80} style={{ marginBottom: 5}}>
									<Col style={{ marginRight: 2.5}}>
										<Row size={50} style={StyleSheet.flatten([styles.blue, {marginBottom: 2.5}])}></Row>
										<Row size={25} style={StyleSheet.flatten([styles.red, {marginTop: 2.5, marginBottom: 2.5}])}></Row>
										<Row size={25} style={StyleSheet.flatten([styles.yellow, {marginTop: 2.5}])}></Row>
									</Col>
									<Col style={{ marginLeft: 2.5}}>
										<Row style={ styles.lightBlue }></Row>
									</Col>
								</Row>
								<Row size={20} style={ styles.lightGreen }></Row>
							</Grid>
						</View>
					</View>

					<View style={{ flex: 1 }}>
						<Text style={ styles.tabName }>{'Wrap'}</Text>
						<View tabLabel='Wrap' style={ styles.tabView }>
							<Grid style={{width: '90%'}}>
								<Row style={{ marginBottom: 5}}>
									<Col style={StyleSheet.flatten([styles.red, {marginRight: 2.5}])}></Col>
									<Col style={StyleSheet.flatten([styles.lightBlue, {marginLeft: 2.5}])}></Col>
								</Row>
								<Row style={{ marginBottom: 5}}>
									<Col size={66} style={StyleSheet.flatten([styles.lightGreen, {marginRight: 2.5}])}></Col>
									<Col size={34} style={StyleSheet.flatten([styles.yellow, {marginLeft: 2.5}])}></Col>
								</Row>
								<Row>
									<Col style={ styles.blue }></Col>
									<Col></Col>
								</Row>
							</Grid>
						</View>
					</View>

					<View style={{ flex: 1 }}>
						<Text style={ styles.tabName }>{'Dock'}</Text>
						<View tabLabel='Dock' style={ styles.tabView }>
							<Grid>
								<Col style={StyleSheet.flatten([styles.red, {width: 80, marginRight: 2.5}])}></Col>
								<Col style={{ marginLeft: 2.5 }}>
									<Row style={StyleSheet.flatten([styles.lightBlue, {height: 80, marginBottom: 2.5}])}></Row>
									<Row style={{ marginTop: 2.5 }}>
										<Col style={{ marginRight: 2.5 }}>
											<Row style={StyleSheet.flatten([styles.blue, {marginBottom: 2.5}])}></Row>
											<Row style={StyleSheet.flatten([styles.yellow, {height: 80, marginTop: 2.5}])}></Row>
										</Col>
										<Col style={StyleSheet.flatten([styles.lightGreen, {width: 80, marginLeft: 2.5}])}></Col>
									</Row>
								</Col>
							</Grid>
						</View>
					</View>

					<View style={{ flex: 1 }}>
						<Text style={ styles.tabName }>{'Absolute'}</Text>
						<View tabLabel='Absolute' style={ styles.tabView }>
							<TouchableHighlight style={{ flex: 1 }}><View style={StyleSheet.flatten([styles.red, {
								position: 'absolute',
								top: 50, left: 50,
								width: 100, height: 100}])}>
							</View></TouchableHighlight>
							<TouchableHighlight style={{ flex: 1 }}><View style={StyleSheet.flatten([styles.lightBlue, {
								position: 'absolute',
								top: 100, right: 50,
								width: 100, height: 270}])}>
							</View></TouchableHighlight>
							<TouchableHighlight style={{ flex: 1 }}><View style={StyleSheet.flatten([styles.lightGreen, {
								position: 'absolute',
								bottom: 80, left: 50,
								width: 200, height: 100}])}>
							</View></TouchableHighlight>
						</View>
					</View>
				</ScrollableTabView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#667296',
	},	
	subcontainer: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'white',
	},
	tabView: {
		flex: 1,
		marginTop: 5,
		marginBottom: 20,
		marginLeft: 10,
		marginRight: 10,
		alignItems: 'stretch',
	},
	tabName: {
		marginTop: 5,
		marginLeft: 10,
	},
	stackCard: {
		flex: 1,
		marginTop: 5, 
	},
	red: {
		backgroundColor: '#fe8256',
	},
	lightBlue: {
		backgroundColor: '#899bfe'
	},
	lightGreen: {
		backgroundColor: '#455b66'
	},
	yellow: {
		backgroundColor: '#fed03c'
	},
	blue: {
		backgroundColor: '#3c5bfe'
	},
});
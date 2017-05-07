import React, { Component, PropTypes } from 'react';
import {
	View,
	Image,
	StyleSheet,
	Text,
	ToolbarAndroid,
	ScrollView,
	TextInput,
	Switch,
	Button,
} from 'react-native';
import CheckBox from 'react-native-check-box';

export default class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'ILoveRN',
			email: 'team@mail.com',
			password: 'password',
			hidePassword: true,
			trueSwitchIsOn: true,
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

	onClick() {

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
				<View style={ styles.subcontainer }>
					<View style={ styles.formContent }>
						<View style={ styles.topBorder }></View>
						<ScrollView style={ styles.fieldsSection }>
							<View>
								<Text style={ styles.fieldTitle }>Username</Text>
								<TextInput
									style={ styles.field }
									onChangeText={(username) => this.setState({username})}
									value={this.state.username} />
							</View>
							<View>
								<Text style={ styles.fieldTitle }>Email</Text>
								<TextInput
									style={ styles.field }
									onChangeText={(email) => this.setState({email})}
									value={this.state.email} />
							</View>
							<View>
								<Text style={ styles.fieldTitle }>Password</Text>
								<TextInput
									style={ styles.field }
									onChangeText={(password) => this.setState({password})}
									value={this.state.password}
									secureTextEntry={this.state.hidePassword} />
							</View>
							<View style={{ flex: 1, flexDirection: 'row' }}>
								<CheckBox
									style={{width: 18, height: 18, marginTop: 8, marginRight: 10}}
									onClick={()=>{this.setState({ hidePassword: !this.state.hidePassword })}}
									checkedImage={<Image style={{width: 18, height: 18}} source={require('./img/checkbox_checked.png')}/>}
									unCheckedImage={<Image style={{width: 18, height: 18}} source={require('./img/checkbox_unchecked.png')}/>} />
								<Text style={ styles.fieldSwitchTitle }>Show password</Text>
							</View>
							<View>
								<Text style={ styles.fieldTitle }>Bio</Text>
								<TextInput style={ styles.field } placeholder="Add bio" />
							</View>
							<View style={{ flex: 1, flexDirection: 'row' }}>
								<Text style={ styles.fieldSwitchTitle }>Public profile</Text>
								<Switch 
									style={ styles.fieldSwitch }
									onTintColor='#BBE9FF'
									onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
									value={this.state.trueSwitchIsOn}
									thumbTintColor={this.state.trueSwitchIsOn? '#30BCFF' : 'white'} />
							</View>
						</ScrollView>
						<Button
							title="UPDATE"
							color='#30BCFF'
							style={ styles.update }
							onPress={() => {}} />
					</View>
					<Image
						source={require('./img/user.png')}
						style={ styles.profilePicture }>
					</Image>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#667296',
		flex: 1,
	},	
	subcontainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},
	formContent: {
		backgroundColor: 'white',
		flex: 1,
		alignSelf: 'stretch',
		marginTop: 60,
		marginLeft: 42,
		marginRight: 42,
		marginBottom: 30,
	},
	profilePicture: {
		width: 80,
		height: 80,
		marginTop: 20,
		borderRadius: 40,
		position: 'absolute',
	},
	topBorder: {
		height: 2,
		backgroundColor: '#899BFE',
		marginBottom: 40,
	},
	fieldsSection: {
		marginLeft: 16,
		marginRight: 16,
	},
	fieldTitle: {
		fontSize: 12,
		color: '#1E2D7E',
		marginTop: 6,
	},
	field: {
		fontSize: 12,
		marginTop: -4,
		marginLeft: -4,
	},
	fieldSwitchTitle: {
		flex: 1,
		fontSize: 12,
		marginTop: 6,
		alignSelf: 'center'
	},
	fieldSwitch: {
		flex: 1,
		marginTop: 6,
		alignSelf: 'flex-end'
	},
	update: {
		backgroundColor: '#30BCFF',
		fontSize: 12,
		alignSelf: 'stretch',
	},
});
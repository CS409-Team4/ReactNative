import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	ListView,
	Navigator,
	Image,
	StyleSheet,
	Dimensions,
	ToolbarAndroid,
	TouchableHighlight,
} from 'react-native';
import GridView from "react-native-easy-grid-view";

export default class Main extends Component {
	constructor(props) {
		super(props);
		const ds = new GridView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
	
		this.state = {
			dataSource: ds.cloneWithCells([
				{
          text: "Layouts",
          image: require('./img/screen_layouts.png')
        },
				{
          text: "User profile",
          image: require('./img/screen_user_profile.png')
        }
        , {
          text: "Conference agenda",
          image: require('./img/screen_conference_agenda.png')
        }, {
          text: "Item layouts",
          image: require('./img/screen_listview_layouts.png')
        }, {
          text: "Selection",
          image: require('./img/screen_listview_selection.png')
        }, {
          text: "Naver",
          image: require('./img/user.png')
        }
			], 2),
			cellWidth: 0,
			cellHeight: 0,
			layoutName: ""
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

	_onPressButton = (text) => {
		switch(text) {
			case "Layouts":
				this._navigate('Layouts', 'from home');
				break;
			case "User profile":
				this._navigate('UserProfile', 'from home');
				break;
			case "Conference agenda":
				this._navigate('ConferenceAgenda', 'from home');
				break;
			case "Item layouts":
				this._navigate('ItemLayouts', 'from home');
				break;
			case "Selection":
				this._navigate('Selection', 'from home');
				break;
			case "Naver":
				this._navigate('Naver', 'from home');
				break;
		}
	}

	_renderCell = (cell) => {
		/*this.setState({
			layoutName: cell.text
		});
*/
		return <View onLayout={event => {
			var width = (Dimensions.get('window').width - 20) / 2;
			var height = (Dimensions.get('window').width - 20) * 0.5 + 50;
			if (this.state.celldWidth != width) {
				this.setState({cellWidth: width})
			}
			if (this.state.cellHeight != height) {
				this.setState({cellHeight: height})
			}
		}}>
			<TouchableHighlight onPress={() => this._onPressButton(cell.text)}>
				<View
					style={{
						width: this.state.cellWidth,
						height: this.state.cellHeight,
						justifyContent: 'center',
						flex: 1,
						margin: 6,
						backgroundColor: 'white',
					}}>
						<Image source={cell.image}
							style={{
								flex: 1,
								width: this.state.cellWidth,
								resizeMode: 'cover'
							}}
						></Image>
						<Text style={styles.text}>{cell.text}</Text>
				</View>
			</TouchableHighlight>
		</View>
	}

	render() {
		return (
			<View style={ styles.container }>
				<ToolbarAndroid
					style={{ backgroundColor: '#151F2F', height: 80 }}
					title="React Native"
					navIcon={require('./img/ic_menu_main.png')}
				/>
				<GridView
					style={ styles.list }
					spacing={0}
					dataSource={this.state.dataSource}
					renderCell={this._renderCell.bind(this)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#455B66'
	},
	list: {
		marginTop: 8,
		backgroundColor: '#455B66'
	},
	text: {
		backgroundColor:'white',
		textAlign:'center',
		textAlignVertical: 'center',
		color:'#000',
		fontSize: 15,
		marginHorizontal: 0,
		marginVertical: 15,
	}
	
});
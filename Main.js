import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	ListView,
	Navigator,
	Image,
	StyleSheet,
	Dimensions,
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
          backgroundColor:'#0f0',
          image: require('./img/screen_layouts.png')
        },
				{
          text: "User Profile",
          backgroundColor:'#f00',
          image: require('./img/screen_user_profile.png')
        }
        , {
          text: "Conference agenda",
          backgroundColor:'#0f0',
          image: require('./img/screen_conference_agenda.png')
        }, {
          text: "Item layouts",
          backgroundColor:'#00f',
          image: require('./img/screen_listview_layouts.png')
        }, {
          text: "Selection",
          backgroundColor:'#f0f',
          image: require('./img/screen_listview_selection.png')
        }, {
          text: "Naver",
          backgroundColor:'#fff',
          image: require('./img/user.png')
        }
			], 2),
			cellWidth: 0,
			cellHeight: 0
		};
	}

	_renderCell = (cell) => {
		return <View onLayout={event => {
			//var width = event.nativeEvent.layout.width - 12;
			var width = (Dimensions.get('window').width - 20) / 2;
			var height = (Dimensions.get('window').width - 20) * 0.5 + 50;
			console.log("WIDTH: " + width);
			if (this.state.celldWidth != width) {
				this.setState({cellWidth: width})
			}
			if (this.state.cellHeight != height) {
				this.setState({cellHeight: height})
			}
		}}>
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
		</View>
	}

	render() {
		return (
			<View style={ styles.container }>
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
		marginTop: 88,
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
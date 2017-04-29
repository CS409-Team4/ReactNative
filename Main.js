import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	ListView,
	Navigator,
	Image,
	StyleSheet
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
			var width = event.nativeEvent.layout.width;
			if (this.state.celldWidth != width) {
				this.setState({cellWidth: width})
			}
			if (this.state.cellHeight != width) {
				this.setState({cellHeight: width})
			}
		}}>
			<View
				style={{
					width: this.state.cellWidth,
					height: this.state.cellHeight,
					justifyContent: 'center',
				}}>
					<Image source={cell.image}></Image>
					<Text style={{backgroundColor:'#0004',textAlign:'center',color:'#fff',fontSize:24}}>{cell.text}</Text>
			</View>
		</View>
	}

	render() {
		return (
			<View>
				<GridView
					style={ styles.list }
					spacing={8}
					dataSource={this.state.dataSource}
					renderCell={this._renderCell.bind(this)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	list: {
		padding: 16
	},
	item: {
		width: 150,
		height: 200,
		backgroundColor: 'red',
		alignItems: 'stretch',
		margin: 3
	}
});
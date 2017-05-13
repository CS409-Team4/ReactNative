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
	Dimensions,
	TouchableHighlight,
	ListView,
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import IuiTabBar from './IuiTabBar';
import SearchBar from 'react-native-material-design-searchbar';
import ConferenceAgendaItem from './ConferenceAgendaItem';

export default class ConferenceAgenda extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		const data = [
				{
					sessionTitle: "Smart Design for Smartphones",
					sessionRoom: "ROOM 2",
					sessionTime: "9:30 AM - 12:30 PM",
					fav: false,
				},
				{
					sessionTitle: "Build, Deploy, and Scale your Mobile Backend with Node.js and Modulus",
					sessionRoom: "ROOM 3",
					sessionTime: "9:30 AM - 12:30 PM",
					fav: false,
				},
				{
					sessionTitle: "NativeScript Deep Dive 2",
					sessionRoom: "ROOM 1",
					sessionTime: "1:30 PM - 4:30 PM",
					fav: true,
				},
				{
					sessionTitle: "Smart Design for Smartphones",
					sessionRoom: "ROOM 2",
					sessionTime: "1:30 PM - 4:30 PM",
					fav: false,
				},
				{
					sessionTitle: "Responsive Apps with Telerik DevCraft",
					sessionRoom: "ROOM 3",
					sessionTime: "1:30 PM - 4:30 PM",
					fav: false,
				}
			];
		this.state = {
			search: "",
			rawData: data,
			dataSource: ds.cloneWithRows(data),
			ds: ds,
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

	_renderRow = (rowData) => {
		return (
			<ConferenceAgendaItem
  			fav={rowData.fav}
  			sessionRoom={rowData.sessionRoom}
  			sessionTime={rowData.sessionTime}
  			sessionTitle={rowData.sessionTitle} >
  		</ConferenceAgendaItem>
		)
	}

	_onSearchChange = (searchText) => {
		this.setState({search: searchText});
		let filteredData = this.filterItems(searchText, this.state.rawData);
		this.setState({
			dataSource: this.state.ds.cloneWithRows(filteredData)
		});
	}

	filterItems(searchText, items) {
		return items.filter((el) => {
			console.log("El");
			console.log(el);
			return el.sessionTitle.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
		});
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
					renderTabBar={() => <DefaultTabBar />}
					tabBarActiveTextColor={'white'}
					tabBarInactiveTextColor={'white'}
					tabBarTextStyle={{ textAlign: 'center', textAlignVertical: 'center' }}
					tabBarBackgroundColor={'#4ac1fa'}
					tabBarUnderlineStyle={{ backgroundColor: '#FAC950' }}
				>
					<View tabLabel='MAY 3' style={{ flex: 1 }}>
						<SearchBar
							onSearchChange={(searchText) => this._onSearchChange(searchText)}
			        height={40}
			        placeholder={'Search'}
			        autoCorrect={false}
			        padding={5}
			        returnKeyType={'search'}
			        inputStyle={{
			        	backgroundColor: 'white',
			        	margin: 16, 
			        }}
			        inputProps={{
			        	defaultValue: this.state.search
			        }} />

				    <ListView
				    	dataSource={this.state.dataSource}
				    	renderRow={(rowData) => this._renderRow(rowData)} />
					</View>
					
					<View tabLabel='MAY 4' style={{ flex: 1 }}>
						<SearchBar
							onSearchChange={(searchText) => this._onSearchChange(searchText)}
			        height={40}
			        placeholder={'Search'}
			        autoCorrect={false}
			        padding={5}
			        returnKeyType={'search'}
			        inputStyle={{
			        	backgroundColor: 'white',
			        	margin: 16, 
			        }}
			        inputProps={{
			        	defaultValue: this.state.search
			        }} />

				    <ListView
				    	dataSource={this.state.dataSource}
				    	renderRow={(rowData) => this._renderRow(rowData)} />
					</View>

					<View tabLabel='MAY 5' style={{ flex: 1 }}>
						<SearchBar
							onSearchChange={(searchText) => this._onSearchChange(searchText)}
			        height={40}
			        placeholder={'Search'}
			        autoCorrect={false}
			        padding={5}
			        returnKeyType={'search'}
			        inputStyle={{
			        	backgroundColor: 'white',
			        	margin: 16, 
			        }}
			        inputProps={{
			        	defaultValue: this.state.search
			        }} />

				    <ListView
				    	dataSource={this.state.dataSource}
				    	renderRow={(rowData) => this._renderRow(rowData)} />	
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
		backgroundColor: '#667296',
	},

});
import React, { Component, PropTypes } from 'react';
import {
	View,
	Image,
	StyleSheet,
	Text,
	ToolbarAndroid,
	FlatList,
} from 'react-native';

class ListItem extends React.PureComponent {
	render() {
		return (
			<View style={ styles.item }>
				<View style={{ flex: 1, height: this.props.height, justifyContent: 'center' }}>
					<Image source={this.props.image} resizeMode='cover' style={{ flex: 1, width: null, height: null }} />
				</View>
				<View style={ styles.recipeContainer }>
					<Text style={ styles.recipeTitle }>{this.props.title}</Text>
					<Text style={ styles.recipeAuthor }>By {this.props.author}</Text>
				</View>
			</View>
		)
	}
}

export default class ItemLayouts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [
				{
					title: "Dried Meat with Spices",
					author: "Nice to Meat You",
					image: require('./img/paleo1.jpg'),
				},
				{
					title: "Golden Chicken",
					author: "Chicken's Heaven",
					image: require('./img/paleo2.jpg'),
				},
				{
					title: "Pork Steak with Vegetables",
					author: "Nice to Meat You",
					image: require('./img/paleo3.jpg'),
				},
				{
					title: "Lamb Cotlets",
					author: "Nice to Meat You",
					image: require('./img/paleo4.jpg'),
				},
				{
					title: "Salmon Steak",
					author: "Ron's Fishery",
					image: require('./img/paleo5.jpg'),
				},
				{
					title: "These Rolls..",
					author: "Le Bakery de Trevi",
					image: require('./img/dessert1.jpg'),
				},
				{
					title: "Chocolate Cake",
					author: "The Sweetest Thing",
					image: require('./img/dessert2.jpg'),
				},
				{
					title: "Rainbow Chocolate Pudding",
					author: "Sweet and Sweeter",
					image: require('./img/dessert3.jpg'),
				},
				{
					title: "Ice-cream Sandwich",
					author: "The Sweetest Thing",
					image: require('./img/dessert4.jpg'),
				},
			],
			isGrid: false,
			toolbarActions: [
				{title: 'SwitchView', icon: require('./img/ic_listview_layouts_wrap.png'), show: 'always' },
			],
		}
	}

	_navigate = (scene, name) => {
		this.props.navigator.push({
			name: scene,
			passProps: {
				name: name
			}
		})
	}

	switchView() {
		const actions = this.state.toolbarActions;
		if (this.state.isGrid) {
			actions[0].icon = require('./img/ic_listview_layouts_wrap.png')
		} else {
			actions[0].icon = require('./img/ic_list_view.png')
		}
		this.setState({
			isGrid: !this.state.isGrid,
			toolbarActions: actions,
		});
	}

	_onActionSelected = (position) => {
		if (position == 0) { // 'Switch view'
			this.switchView();
		}
	}

	render() {
		return (
			<View style={ styles.container }>
				<ToolbarAndroid
					style={{ backgroundColor: '#151F2F', height: 50, alignItems: "center" }}
					title="Item Layouts"
					titleColor="white"
					navIcon={require('./img/ic_back.png')}
					actions={this.state.toolbarActions}
					onActionSelected={this._onActionSelected}
					onIconClicked={ () => this.props.navigator.pop() }>
				</ToolbarAndroid>
				<FlatList
					style={{ flex: 1 }}
					horizontal={false}
					numColumns={ this.state.isGrid? 2 : 1}
					data={this.state.data}
					renderItem={({item}) => <ListItem height={ this.state.isGrid? 106 : 156 }
						image={item.image} title={item.title} author={item.author} />}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#667296',
	},	
	item: {
		flex: 1,
	},
	recipeContainer: {
		height: 54,
		backgroundColor: 'white',
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 16,
		paddingRight: 16,
	},
	recipeTitle: {
		fontSize: 16,
		color: '#455b66',
	},
	recipeAuthor: {
		fontSize: 11,
		color: '#455b66',
	},
});
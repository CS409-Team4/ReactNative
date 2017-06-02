import React, { Component, } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    ToolbarAndroid,
    FlatList,
    TouchableNativeFeedback,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
// var SortableListView = require('react-native-sortable-listview');
var ReorderListView = require('./ReorderListView');
class ListItem extends React.PureComponent {
    render() {
        return (
            <TouchableNativeFeedback
                onPress={ () => this.props.navigate('SelectionDetail',
                    {
                        toggleFav: () => this.props.toggleFav(),
                        deleteItem: () => this.props.deleteItem(),
                        title: this.props.item.title,
                        content: this.props.item.content,
                    })}
                onLongPress={ () => this.props.activateSelection() }
            >
                <View style={ styles.item }>
                    <View style={ styles.imageContainer }>
                        <Image source={ require('./img/ic_fav.png') }
                               style={{ margin: 5, opacity: this.props.item.fav ? 1 : 0 }}/>
                    </View>
                    <View style={ styles.textContainer }>
                        <Text style={ styles.title }>{this.props.item.title}</Text>
                        <Text style={ styles.content }>By {this.props.item.content}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

class ReorderListItem extends React.PureComponent {
    render() {
        return (
            <View style={ styles.item }>
                <TouchableWithoutFeedback
                    underlayColor={'#eee'}
                    style={ styles.reorderHandleContainer }
                    {...this.props.sortHandlers}
                >
                    <Image source={ require('./img/ic_reorder.png') }
                           style={{ margin: 5, }}/>
                </TouchableWithoutFeedback>
                <View style={ styles.imageContainer }>
                    <Image source={ require('./img/ic_fav.png') }
                           style={{ margin: 5, opacity: this.props.item.fav ? 1 : 0 }}/>
                </View>
                <View style={ styles.textContainer }>
                    <Text style={ styles.title }>{this.props.item.title}</Text>
                    <Text style={ styles.content }>By {this.props.item.content}</Text>
                </View>
            </View>
        )
    }
}

class SelectionListItem extends React.PureComponent {
    render() {
        return (
            <TouchableNativeFeedback
                onPress={ () => this.props.toggleSelection()}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    padding: 8,
                    backgroundColor: this.props.isSelected ? '#F3F5FC' : 'white',
                }}>
                    <View style={ styles.imageContainer }>
                        <Image source={ require('./img/ic_fav.png') }
                               style={{ margin: 5, opacity: this.props.item.fav ? 1 : 0 }}/>
                    </View>
                    <View style={ styles.textContainer }>
                        <Text style={ styles.title }>{this.props.item.title}</Text>
                        <Text style={ styles.content }>By {this.props.item.content}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

class RowComponent extends React.PureComponent {
    render() {
        return (
            <TouchableHighlight
                underlayColor={'#eee'}
                delayLongPress={500}
                style={{padding: 25, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}}
                {...this.props.sortHandlers}
            >
                <Text>{this.props.data.text}</Text>
            </TouchableHighlight>
        );
    }
}

export default class Selection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: "Master the Essentials of UI Test Automation: Chapter One",
                    content: "Chapter One: Introduction The goal of this series is to help you understand " +
                    "the right quetions to ask of you, your team and your organization. There won't be any " +
                    "Best Practices: there won't be any silver bullets.",
                    fav: true,
                },
                {
                    title: "Send Data to Apple Watch with Core Data and Telerik UI for iOS in Swift",
                    content: "The Apple Watch has been a long rumored device which finally appeared in September, " +
                    "followed by a Watch SDK, called WatchKit, in November.",
                    fav: true,
                },
                {
                    title: "6 Key Steps to Successful Agile Testing Projects",
                    content: "Application teams are continuously adopting agile software techniques as the principal " +
                    "method of building applications. Agile methodologies, such as Scrum, Extreme Programming, " +
                    "Feature-Driven Development and Test-Driven Development offer the ability to iteratively " +
                    "develop applications.",
                    fav: true,
                },
                {
                    title: "Increase Your Mobile App Engagement. Become Part of the Web of Apps.",
                    content: "Mobile developers are facing some severe limitations when it comes to app distribution: " +
                    "app content is almost invisible to browser search, app-to-app connections are scarce, and app " +
                    "updates need to go through a tedious re-submission process on the relevant marketplace.",
                    fav: true,
                }
            ],
            isReorderActive: false,
            isSelectionActive: false,
            toolbarActions: [
                {title: 'Reorder', icon: require('./img/ic_reorder_action_bar.png'), show: 'always'},
            ],
            selectedItems: [],
        }
    }

    _navigate = (scene, props) => {
        this.props.navigator.push({
            name: scene,
            passProps: props,
        })
    }

    toggleFav = (index) => {
        let dataCopy = this.state.data;
        dataCopy[index].fav = !dataCopy[index].fav;
        this.setState({
           data: dataCopy
        });
    }

    toggleMultiFavs = () => {
        let dataCopy = this.state.data;
        this.state.selectedItems.map((item) => {
            let idx = dataCopy.indexOf(item);
            item.fav = !item.fav;
            dataCopy[idx] = item;
        }, () => {
            this.setState({
                data: dataCopy,
            });
        })
        this.deactivate();
    }

    deleteItem = (index) => {
        let dataCopy = this.state.data;
        dataCopy.splice(index, 1);
        this.setState({
            data: dataCopy
        });
    }

    deleteMultiItems = () => {
        let dataCopy = this.state.data;
        this.state.selectedItems.map((item) => {
            let idx = dataCopy.indexOf(item);
            console.log("delete index: " + idx);
            if (idx > -1) dataCopy.splice(idx, 1);
        })
        this.setState({
            data: dataCopy,
        });
        this.deactivate();
    }

    _onActionSelected = (position) => {
        if (this.state.isSelectionActive) {
            if (position == 0) {
                this.toggleMultiFavs();
            } else if (position == 1) {
                this.deleteMultiItems();
            }

        } else {
            if (position == 0) {    // Reorder
                let taCopy = this.state.toolbarActions;
                taCopy.pop();
                this.setState({
                    isReorderActive: true,
                    toolbarActions: taCopy,
                })
            }
        }
    }

    _renderFavItem = (item, index) => {
        if (this.state.isReorderActive && item.fav) {
            return <ReorderListItem item={item}/>
        } else {
            if (item.fav) {
                return (
                    this.state.isSelectionActive ?
                        <SelectionListItem item={item}
                                           toggleFav={() => this.toggleFav(index)}
                                           deleteItem={() => this.deleteItem(index)}
                                           toggleSelection={() => this.toggleSelection(item, index)}
                                           isSelected={this.state.selectedItems.includes(item)}
                                           navigate={this._navigate}/>
                        :
                        <ListItem item={item}
                                         toggleFav={() => this.toggleFav(index)}
                                         deleteItem={() => this.deleteItem(index)}
                                         activateSelection={() => this.activateSelection(item)}
                                         navigate={this._navigate}/>);
            } else return <View></View>;
        }

    }

    deactivate = () => {
        if (this.state.isReorderActive) {
            let taCopy = this.state.toolbarActions;
            taCopy.push({title: 'Reorder', icon: require('./img/ic_reorder_action_bar.png'), show: 'always'});
            this.setState({
                isReorderActive: false,
                toolbarActions: taCopy,
            })
        } else if (this.state.isSelectionActive) {
            let taCopy = this.state.toolbarActions;
            taCopy.pop();
            taCopy.pop();
            taCopy.push({title: 'Reorder', icon: require('./img/ic_reorder_action_bar.png'), show: 'always'});
            this.setState({
                isSelectionActive: false,
                toolbarActions: taCopy,
                selectedItems: [],
            })
        }
    }

    activateSelection = (item) => {
        let selectedData = this.state.selectedItems;
        selectedData.push(item);
        console.log(selectedData);
        let taCopy = this.state.toolbarActions;
        taCopy.pop();
        taCopy.push(
            {title: 'Favorite', icon: require('./img/add_to_fav_icon.png'), show: 'always'},
            {title: 'Delete', icon: require('./img/delete_icon.png'), show: 'always'});
        this.setState({
            selectedItems: selectedData,
            isSelectionActive: true,
        })
    }

    toggleSelection = (item, index) => {
        let selectedData = this.state.selectedItems;
        console.log(selectedData);
        let sIndex = selectedData.indexOf(item);
        if (sIndex > -1) {
            selectedData.splice(sIndex, 1);
        } else {
            selectedData.push(item);
        }
        this.setState({
            selectedItems: selectedData,
        });
        console.log("Item: " + item);
        console.log("Item index: " + index);
        console.log("Selected item index: " + sIndex);
    }

    render() {
        let order = Object.keys(this.state.data);

        return (
            <View style={ styles.container }>
                <ToolbarAndroid
                    style={{
                        backgroundColor: this.state.isReorderActive || this.state.isSelectionActive ? '#30BCFF': '#151F2F',
                        height: 50 }}
                    title={this.state.isReorderActive ? "Reorder" :
                            this.state.isSelectionActive ? this.state.selectedItems.length.toString() :
                            "Selection"}
                    titleColor='white'
                    navIcon={require('./img/ic_back.png')}
                    actions={this.state.toolbarActions}
                    onActionSelected={this._onActionSelected}
                    onIconClicked={ () => this.state.isReorderActive || this.state.isSelectionActive ?
                        this.deactivate()
                        : this.props.navigator.pop() }>
                </ToolbarAndroid>
                <ScrollableTabView
                    style={ styles.subcontainer }
                    renderTabBar={() => <DefaultTabBar tabStyle={{ backgroundColor: '#4ac1fa',
                        opacity: this.state.isReorderActive || this.state.isSelectionActive ? 0.4 : 1}} />}
                    tabBarActiveTextColor={'white'}
                    tabBarInactiveTextColor={'white'}
                    tabBarTextStyle={{ textAlign: 'center', textAlignVertical: 'center', marginTop: 7}}
                    tabBarBackgroundColor={'white'}
                    tabBarUnderlineStyle={{ backgroundColor: '#151F2F',
                        opacity: this.state.isReorderActive || this.state.isSelectionActive ? 0.4 : 1}}
                >
                    <View tabLabel='All' style={{ flex: 1 }}>
                        {this.state.isReorderActive ?
                            <ReorderListView
                                style={{ flex: 1 }}
                                data={this.state.data}
                                order={order}
                                onRowMoved={ e => {
                                    order.splice(e.to, 0, order.splice(e.from, 1)[0]);
                                    this.state.data.splice(e.to, 0, this.state.data.splice(e.from, 1)[0]);
                                    this.forceUpdate();
                                }}
                                renderRow={row => <ReorderListItem item={row} />}
                            /> :
                            <FlatList
                                style={{flex: 1}}
                                horizontal={false}
                                data={this.state.data}
                                renderItem={({item, index}) =>
                                    this.state.isSelectionActive ?
                                        <SelectionListItem item={item}
                                                           toggleFav={() => this.toggleFav(index)}
                                                           deleteItem={() => this.deleteItem(index)}
                                                           toggleSelection={() => this.toggleSelection(item, index)}
                                                           isSelected={this.state.selectedItems.includes(item)}
                                                           navigate={this._navigate}/>
                                        :
                                        <ListItem item={item}
                                              toggleFav={() => this.toggleFav(index)}
                                              deleteItem={() => this.deleteItem(index)}
                                              activateSelection={ () => this.activateSelection(item) }
                                              navigate={this._navigate}/>
                                }
                            />
                        }
                    </View>
                    <View tabLabel='Favorites' style={{ flex: 1 }}>
                        {this.state.isReorderActive ?
                            <ReorderListView
                                style={{flex: 1}}
                                data={this.state.data}
                                order={order}
                                onRowMoved={ e => {
                                    order.splice(e.to, 0, order.splice(e.from, 1)[0]);
                                    this.state.data.splice(e.to, 0, this.state.data.splice(e.from, 1)[0]);
                                    this.forceUpdate();
                                }}
                                renderRow={(row, sectionID, rowID) => this._renderFavItem(row, rowID)}
                            /> :
                            <FlatList
                                style={{flex: 1}}
                                horizontal={false}
                                data={this.state.data}
                                renderItem={({item, index}) =>
                                    this._renderFavItem(item, index)
                                }
                            />
                        }
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    subcontainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    favIcon: {
        margin: 5,
    },
    textContainer: {
        flex: 10,
    },
    title: {
        fontSize: 18,
        color: '#455b66',
        marginLeft: 10,
        fontFamily: 'sans-serif',
    },
    content: {
        fontFamily: 'sans-serif',
        fontSize: 14,
        color: '#677881',
        marginTop: 4,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 4,
    },
    reorderHandleContainer: {
        alignSelf: 'center',
    },
});
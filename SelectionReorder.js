/**
 * Created by chocho on 5/25/17.
 */
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
} from 'react-native';

export default class SelectionReorder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toolbarActions: [
                {title: 'Menu', icon: require('./img/ic_menu_btn.png'), show: 'always'},
            ],
        }
    }

    _onActionSelected = (position) => {
        if (position == 0) {

        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <ToolbarAndroid
                    style={{ backgroundColor: '#151F2F', height: 50 }}
                    title="Reorder"
                    titleColor='white'
                    navIcon={require('./img/ic_back.png')}
                    actions={this.state.toolbarActions}
                    onActionSelected={this._onActionSelected}
                    onIconClicked={ () => this.props.navigator.pop() }>
                </ToolbarAndroid>
                <View style={ styles.subcontainer }>
                    <Text style={ styles.detailTitle } >{this.props.title}</Text>
                    <Text style={ styles.detailContent }>{this.props.content}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subcontainer: {
        backgroundColor: 'white',
    },
    detailTitle: {
        fontSize: 22,
        color: '#455b66',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
    },
    detailContent: {
        fontSize: 14,
        color: '#677881',
        marginTop: 15,
        marginLeft: 18,
        marginRight: 10,
    },
});
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

export default class Naver extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{ margin: 10 ,fontSize: 15, textAlign: 'right'}}>World</Text>
                </View>
            </DrawerLayoutAndroid>
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
/**
 * Created by chocho on 6/4/17.
 */
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

export default class SelectionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <ToolbarAndroid
                    style={{ backgroundColor: '#151F2F', height: 50 }}
                    title="About"
                    titleColor='white'
                    navIcon={require('./img/ic_back.png')}
                    onIconClicked={ () => this.props.navigator.pop() }>
                </ToolbarAndroid>
                <View style={ styles.subcontainer }>
                    <Text>React Native UI Guide App</Text>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
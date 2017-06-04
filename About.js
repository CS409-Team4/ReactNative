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
                    <Text style={ styles.title }>IUI x React Native</Text>
                    <Text style={ styles.description }>This project analyzes the UI performance and available functions
                        of Android, React Native, and NativeScript through comparison of quantitative UI testing
                        measures.</Text>
                    <Text style={ [styles.class, styles.rightInfo] }>CS409, SOC of KAIST</Text>
                    <Text style={ [styles.members, styles.rightInfo] }>Hyunsung Cho</Text>
                    <Text style={ [styles.members, styles.rightInfo] }>Subin Jeong</Text>
                    <Text style={ [styles.members, styles.rightInfo] }>Youngsoo Jang</Text>
                    <Text style={ [styles.semester, styles.rightInfo] }>Spring 2017</Text>
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
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 50,
        paddingBottom: 50,
    },
    title: {
        fontSize: 25,
    },
    description: {
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 40,
        fontSize: 13,
    },
    rightInfo: {
        textAlign: 'right'
    },
    class: {
        fontSize: 15,
        marginBottom: 5,
    },
    members: {
        fontSize: 12,
    },
    semester: {
        fontSize: 15,
        marginTop: 5,
    }

});
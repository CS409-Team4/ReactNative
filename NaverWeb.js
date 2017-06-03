/**
 * Created by chocho on 5/25/17.
 */
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
    WebView,
    TouchableWithoutFeedback,
    Image
} from 'react-native';

export default class NaverWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toolbarActions: [
                {title: 'Favorite', icon: require('./img/add_to_fav_icon.png'), show: 'always'},
                {title: 'Delete', icon: require('./img/delete_icon.png'), show: 'always'},
            ],
        }
    }

    _onActionSelected = (position) => {
        if (position == 0) {
            this.props.toggleFav();
            this.props.navigator.pop();
        } else if (position == 1) {
            this.props.deleteItem();
            this.props.navigator.pop();
        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <WebView
                    source={{ uri: this.props.sourceUri }}
                    style={{ flex: 1, }}
                />

                <TouchableWithoutFeedback
                    onPress={() => {
                        this.props.closeDrawer();
                        this.props.navigator.pop();
                    }}
                    style={{ flex: 1, margin: 20 }}
                >
                    <Image
                        style={{ margin: 20, width: 50, height: 50, position: 'absolute', bottom: 20, }}
                        source={ require('./img/icon_back.png') }
                    />
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
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
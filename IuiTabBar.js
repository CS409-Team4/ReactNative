import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Animated,
} from 'react-native';

export default class IuiTabBar extends Component {
	constructor(props) {
		super()
		this.unselectedImages = [
			require('./img/stack.png'), require('./img/grid.png'),
			require('./img/wrap.png'), require('./img/dock.png'),
			require('./img/absolute.png')]
		this.selectedImages = [
			require('./img/stack1.png'), require('./img/grid1.png'),
			require('./img/wrap1.png'), require('./img/dock1.png'),
			require('./img/absolute1.png')]

			this.state = {
				pressed: 0
			}
	}

	_onPress(i) {
		this.props.goToPage(i);
		this.setState({
			pressed: i
		})
	}

	render() {
		const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 4,
      backgroundColor: 'navy',
      bottom: 0,
    };

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [0,  containerWidth / numberOfTabs, ],
    });

    return <View style={ styles.tabs }>
      {this.props.tabs.map((tab, i) => { 
        return <TouchableOpacity key={tab} onPress={() => this._onPress(i)} style={styles.tab}>
          <Image
          	style={ styles.image }
          	source={(this.state.pressed == i)? this.selectedImages[i] : this.unselectedImages[i]}>
          </Image>
        </TouchableOpacity>;
      })}
      <Animated.View style={[tabUnderlineStyle, { left, }, this.props.underlineStyle, ]} />
    </View>;
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    paddingTop: 5,
  },
  tabs: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#31bcff',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});
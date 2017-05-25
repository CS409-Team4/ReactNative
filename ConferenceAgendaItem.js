import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
} from 'react-native';

export default class ConferenceAgendaItem extends Component {
	constructor(props) {
		super(props);
    this.state = {
      fav: props.fav
    }
  }

  updateFav = () => {
    this.setState({
      fav: !this.state.fav
    })
  }
  
	render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.state.fav && { backgroundColor: '#FFFFFF19'}]}
        onPress={ () => this.updateFav() }
      >
        <Image style={{width: 24, height: 24, marginRight: 26}} source={ this.state.fav ? require('./img/add_to_fav_1.png') : require('./img/add_to_fav.png')}/>        
        <View style={ styles.textContainer }>
          <View style={ styles.session }>
            <Text style={ styles.sessionTime } >{this.props.sessionTime}</Text>
            <Text style={ styles.sessionRoom }>{this.props.sessionRoom}</Text>
          </View>
          <Text style={ styles.sessionTitle }>{this.props.sessionTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({ 
  container: {
    padding: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  session: {
    flex: 1,
    flexDirection: 'row',
  },  
  sessionTime: {
    color: '#4ac1fa',
    fontSize: 12,
  },
  sessionRoom: {
    color: 'white',
    marginLeft: 4,
    fontSize: 12,
  },
  sessionTitle: {
    color: '#c3c3c3',
    fontSize: 20,
  },
});
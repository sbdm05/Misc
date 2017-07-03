import React, {Component} from 'react';
import ReactNative from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
const styles = require('../styles.js');
const firebase = require('firebase');
const { View, TouchableHighlight, Text } = ReactNative;



class WordItem extends Component {

constructor(props) {
    super(props);
    this.state={counter : 0};
}

onPressIcon(){
  this.setState({counter : this.state.counter +1});
  console.log(this.state.counter)
}


  render() {
const {english, english_erudite} = this.props.navigation.state.params;

   return (
      <TouchableHighlight>
        <View style={styles.li}>
          <Text style={styles.liText} >{english}</Text>
          <Text style={styles.liText} >{english_erudite}</Text>
          <Icon
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50'
            onPress={this.onPressIcon.bind(this)}
          />
          <Text>{this.state.counter} Like(s)</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default WordItem;

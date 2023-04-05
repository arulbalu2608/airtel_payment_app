import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles.js';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>recharge</Text>
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>
            enter airtel xstreamid or mobile number
          </Text>
        </View>
      </View>
    );
  }
}

export default Header;

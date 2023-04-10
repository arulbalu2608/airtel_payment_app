import React, {Component} from 'react';
import {Image, TextInput, View} from 'react-native';
import SearchIcon from '../../assets/search_icon.png';
import {styles} from './styles.js';

class SearchBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.props.handleSearch}
          value={this.props.search}
          placeholder="Search for a plan"
          placeholderTextColor="gray"
        />
        <Image source={SearchIcon} style={styles.iconStyle} />
      </View>
    );
  }
}

export default SearchBox;

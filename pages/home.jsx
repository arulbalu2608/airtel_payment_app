import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Header from '../Components/Header';
import filterIcon from '../assets/filter_line.png';
import SearchIcon from '../assets/search_icon.png';
import {styles} from './styles.js';
import Card from '../Components/Card';

class Home extends Component {
  constructor() {
    super();
    this.state = {search: ''};
  }

  handleSearch = text => {
    this.setState({
      search: text,
      tab: [
        {
          id: 1,
          label: 'money saver',
        },
        {
          id: 2,
          label: 'entertainment',
        },
        {
          id: 3,
          label: 'basic',
        },
      ],
      activeTab: 1,
    });
  };
  render() {
    return (
      <>
        <Header />
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <View
              style={{
                width: '80%',
                flex: 1,
                position: 'relative',
              }}>
              <TextInput
                style={styles.input}
                onChangeText={this.handleSearch}
                value={this.state.search}
                placeholder="Search for a plan"
                placeholderTextColor="gray"
              />
              <Image
                source={SearchIcon}
                style={{
                  width: 20,
                  height: 20,
                  position: 'absolute',
                  right: 20,
                  top: 10,
                }}
              />
            </View>

            <TouchableOpacity
              style={{
                width: '20%',
                alignItems: 'center',
              }}>
              <Image
                source={filterIcon}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.tabContainer}>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'gray',
                }}>
                money saver
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{
                  color: 'gray',
                  borderBottomWidth: 1,
                  borderBottomColor: 'red',
                }}>
                entertainment
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{
                  color: 'gray',
                }}>
                basic
              </Text>
            </TouchableOpacity>
          </View>

          <Card />
        </View>
      </>
    );
  }
}

export default Home;

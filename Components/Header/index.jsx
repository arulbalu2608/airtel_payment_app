import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import {styles} from './styles.js';

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      modalVisible: false,
      selectedContact: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>recharge</Text>
        <TouchableOpacity
          onPress={() =>
            this.setState({
              modalVisible: true,
            })
          }
          style={styles.contactContainer}>
          <Text style={styles.contactTitle}>
            enter airtel xstreamid or mobile number
          </Text>
          <Text style={styles.contactTitle}>{this.state.selectedContact}</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <FlatList
            data={this.props.contactList}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    selectedContact: item.number,
                    modalVisible: false,
                  });
                }}
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                }}>
                <Text style={{color: 'black'}}>{item.name}</Text>
                <Text style={{color: 'black'}}>{item.number}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item._id}
          />
        </Modal>
      </View>
    );
  }
}

export default Header;

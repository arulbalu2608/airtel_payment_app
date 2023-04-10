import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles.js';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          {this.props?.item?.isLastRecharge && (
            <Text style={styles.topContent}>Last Recharge</Text>
          )}
        </View>
        <View style={styles.cardBody}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              padding: 10,
            }}>
            <View>
              <Text
                style={{
                  color: 'black',
                }}>
                {`₹${this.props?.item?.finalPrice}`}
              </Text>
              <Text
                style={{
                  color: 'black',
                }}>
                unlimited
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                }}>
                {`${this.props?.item?.speed}Mbps`}
              </Text>
              <Text
                style={{
                  color: 'black',
                }}>
                Speed
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                }}>
                {`${this.props?.item?.validity} Month`}
              </Text>
              <Text
                style={{
                  color: 'black',
                }}>
                validity
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <View>
              <Text
                style={{
                  color: 'black',
                }}>
                Extreme Premium
              </Text>
            </View>

            <View>
              <Text
                style={{
                  color: 'black',
                }}>
                View Details
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Card;

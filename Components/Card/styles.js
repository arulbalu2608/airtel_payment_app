import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  topContent: {
    backgroundColor: 'gray',
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '40%',
    color: 'white',
  },
  cardBody: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

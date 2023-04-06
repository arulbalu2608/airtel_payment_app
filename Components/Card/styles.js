import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../helpers/colors';

export const styles = StyleSheet.create({
  container: {
    marginVertical: wp('5%'),
  },
  topContent: {
    backgroundColor: 'gray',
    padding: wp('2%'),
    borderTopRightRadius: wp('2%'),
    borderTopLeftRadius: wp('2%'),
    width: '40%',
    color: COLORS.WHITE,
  },
  cardBody: {
    backgroundColor: COLORS.WHITE,
    borderRadius: wp('2%'),
  },
});

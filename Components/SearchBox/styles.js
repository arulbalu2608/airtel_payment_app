import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../helpers/colors';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    flex: 1,
    position: 'relative',
  },
  input: {
    height: hp('6%'),
    borderWidth: 1,
    borderColor: COLORS.GRAY_62,
    borderWidth: 1,
    borderRadius: wp('2%'),
    padding: wp('2%'),
    color: COLORS.BLACK,
  },
  iconStyle: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 20,
    top: 10,
  },
});

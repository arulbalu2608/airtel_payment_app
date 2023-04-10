import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../helpers/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    padding: wp('10%'),
    backgroundColor: COLORS.BLACK,
  },
  title: {
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  contactContainer: {
    backgroundColor: COLORS.GRAY_62,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    borderRadius: 7,
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('1%'),
    marginVertical: wp('3%'),
  },
  contactTitle: {
    color: COLORS.WHITE,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 22,
  },
});

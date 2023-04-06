import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../helpers/colors';

export const styles = StyleSheet.create({
  container: {
    padding: wp('7%'),
    flex: 1,
    backgroundColor: COLORS.WHITE_FE,
    borderTopStartRadius: wp('5%'),
    borderTopEndRadius: wp('5%'),
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
  input: {
    height: hp('6%'),
    borderWidth: 1,
    borderColor: COLORS.GRAY_62,
    borderWidth: 1,
    borderRadius: wp('2%'),
    padding: wp('2%'),
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: wp('4%'),
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },

  activeTab: {
    color: 'black',
    fontWeight: 700,
  },
  tab: {
    color: COLORS.GRAY_62,
  },
});

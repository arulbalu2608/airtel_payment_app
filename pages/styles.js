import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    padding: wp('7%'),
    flex: 1,
    backgroundColor: '#edf5ff',
    borderTopStartRadius: wp('5%'),
    borderTopEndRadius: wp('5%'),
  },

  title: {
    color: '#ffffff',
    textAlign: 'center',
  },
  contactContainer: {
    backgroundColor: '#686262',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 7,
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('1%'),
    marginVertical: wp('3%'),
  },
  contactTitle: {
    color: '#ffffff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#686262',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
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
});

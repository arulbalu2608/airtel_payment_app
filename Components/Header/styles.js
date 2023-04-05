import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    padding: wp('10%'),
    backgroundColor: '#000000',
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
});

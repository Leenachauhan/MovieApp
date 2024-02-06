import {StyleSheet} from 'react-native';
import spacing from '../../../styles/spacing';
import theme from '../../../styles/theme';
const HEADER_HEIGHT = 100;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6fa',
  },
  headerStyle: {
    width: '100%',
    paddingHorizontal: spacing.x2,
    paddingVertical: spacing.y3,
    backgroundColor: 'white',
  },
  flatListWrapper: {
    marginTop: spacing.x3,
    backgroundColor: 'transparent',
    // marginBottom: 200,
  },
  movieDetailWrapper: {
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    width: '62%',
  },
  genreImageStyle: {
    width: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  searchImageStyle: {
    height: 120,
    width: 160,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  imageBackgroundStyle: {
    // width: '48%',
    height: 120,
    borderRadius: 10,
    // marginVertical: spacing.y1,
    // marginHorizontal: spacing.y1,
  },
  imageBackgroundStyle2: {
    justifyContent: 'flex-end',
    width: '48%',
    height: 120,
    borderRadius: 10,
    marginVertical: spacing.y1,
    marginHorizontal: spacing.y1,
  },
  imageTextstyle: {
    color: theme.colors.surface,
    padding: spacing.x2,
  },
  imageTextstyle2: {
    color: theme.colors.surface,
    padding: spacing.x2,
  },
  linearGradient: {
    height: 56,
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

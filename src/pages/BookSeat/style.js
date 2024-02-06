import {StyleSheet, Dimensions} from 'react-native';
import spacing from '../../styles/spacing';
import theme from '../../styles/theme';
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
    marginLeft: spacing.x2,
  },
  movieDetailWrapper: {
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    width: '62%',
  },
  genreTextStyle: {
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },
  genreButtonStyle: {
    height: spacing.height4,
    borderRadius: 10,
    marginRight: 8,
  },
  genreImageStyle: {
    width: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  HallImageWrapper: {
    marginTop: spacing.x6,
    height: 180,
    width: '100%',
  },
  searchImageStyle: {
    resizeMode: 'cover',
  },
  imageBackgroundStyle: {
    // width: '48%',
    height: 120,
    borderRadius: 10,
    // marginVertical: spacing.y1,
    // marginHorizontal: spacing.y1,
  },
  buttonWrapper: {
    width: '94%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.x1,
  },
  buttonStyle: {
    height: spacing.height6,
    width: '28%',
    borderRadius: 10,
    backgroundColor: '#A6A6A630',
  },
  buttonStyle2: {
    height: spacing.height6,
    width: '68%',
    borderRadius: 10,
    backgroundColor: theme.colors.accent,
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

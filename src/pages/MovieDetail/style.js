import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import theme from '../../styles/theme';
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
    backgroundColor: 'transparent',
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
  movieLogoStyle: {
    height: 40,
    width: 200,
    resizeMode: 'cover',
    // borderRadius: 10,
  },
  buttonStyle: {
    height: spacing.height6,
    width: 240,
    backgroundColor: 'white',
    borderRadius: 10,
    backgroundColor: theme.colors.accent,
    marginBottom: spacing.x1,
  },
  buttonStyle2: {
    height: spacing.height6,
    width: 240,
    backgroundColor: 'white',
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: theme.colors.accent,
  },
  genreTextStyle: {
    paddingHorizontal: 4,
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.colors.textLight,
  },
  genreButtonStyle: {
    height: spacing.height4,
    backgroundColor: 'red',
    borderRadius: 20,
    marginRight: 8,
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

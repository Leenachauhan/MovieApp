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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.accent,
    marginTop: spacing.y2,
    height: 160,
    width: 280,
    marginBottom: spacing.x2,
    // padding: spacing.x1,
  },
  searchImageStyle: {
    resizeMode: 'contain',
  },
  imageBackgroundStyle: {
    // width: '48%',
    height: 120,
    borderRadius: 10,
    // marginVertical: spacing.y1,
    // marginHorizontal: spacing.y1,
  },
  buttonStyle: {
    height: spacing.height6,
    width: Dimensions.get('window').width - 32,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: theme.colors.accent,
    marginBottom: spacing.x1,
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

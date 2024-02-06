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
    height: spacing.height7,
    paddingHorizontal: spacing.x2,
    paddingVertical: spacing.y3,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  flatListWrapper: {
    marginTop: spacing.x3,
    backgroundColor: 'transparent',
  },
  imageBackgroundWrapper: {
    width: '100%',
    marginVertical: 12,
  },
  imageBackgroundStyle: {
    flexDirection: 'column-reverse',
    height: 180,
    borderRadius: 10,
  },
  imageTextstyle: {
    color: theme.colors.surface,
    paddingHorizontal: spacing.x2,
  },
  linearGradient: {
    height: 80,
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {StyledComponentProps, makeStyles} from '@utils/style.util';
import {
  DODGER_BLUE_COLOR,
  DODGER_BLUE_OPACITY005_COLOR,
  WHITE_COLOR,
} from '@constants/colors';

const PRIMARY_COLOR_STYLES = StyleSheet.create({
  root: {backgroundColor: DODGER_BLUE_COLOR},
  title: {color: WHITE_COLOR},
});
const SECONDARY_COLOR_STYLES = StyleSheet.create({
  root: {backgroundColor: DODGER_BLUE_OPACITY005_COLOR},
  title: {color: DODGER_BLUE_COLOR},
});
const SMALL_SIZE_STYLES = StyleSheet.create({
  root: {paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8},
  title: {fontSize: 14},
});
const MEDIUM_SIZE_STYLES = StyleSheet.create({
  root: {paddingVertical: 16, paddingHorizontal: 32, borderRadius: 8},
  title: {fontSize: 16},
});
const LARGE_SIZE_STYLES = StyleSheet.create({
  root: {paddingVertical: 32, paddingHorizontal: 64, borderRadius: 8},
  title: {fontSize: 18},
});
const FULL_WIDTH_STYLES = StyleSheet.create({
  root: {width: '100%'},
});
const DISABLED_STYLES = StyleSheet.create({
  root: {opacity: 0.5},
});

type Props = {
  title: string;
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
} & TouchableOpacityProps &
  StyledComponentProps<typeof useStyles>;

const TextButton: React.FC<Props> = props => {
  const {color, size, fullWidth} = props;
  const colorStyles = useMemo(() => {
    switch (color) {
      case 'primary':
        return PRIMARY_COLOR_STYLES;
      case 'secondary':
        return SECONDARY_COLOR_STYLES;

      default:
        return PRIMARY_COLOR_STYLES;
    }
  }, [color]);
  const sizeStyles = useMemo(() => {
    switch (size) {
      case 'small':
        return SMALL_SIZE_STYLES;
      case 'medium':
        return MEDIUM_SIZE_STYLES;
      case 'large':
        return LARGE_SIZE_STYLES;

      default:
        return MEDIUM_SIZE_STYLES;
    }
  }, [size]);
  const fullWidthStyles = useMemo(
    () => (fullWidth ? FULL_WIDTH_STYLES : {}),
    [fullWidth],
  );
  const disabledStyles = useMemo(
    () => (props.disabled ? DISABLED_STYLES : {}),
    [props.disabled],
  );
  const styles = useStyles(
    colorStyles,
    sizeStyles,
    fullWidthStyles,
    disabledStyles,
    {root: props.style as any},
    props.styles,
  );

  return (
    <TouchableOpacity {...props} style={styles.root}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default TextButton;

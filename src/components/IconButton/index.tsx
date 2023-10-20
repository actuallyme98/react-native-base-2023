import React, {useMemo} from 'react';
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {StyledComponentProps, makeStyles} from '@utils/style.util';

const SMALL_SIZE_STYLES = StyleSheet.create({
  root: {width: 30, height: 30, borderRadius: 8},
  image: {},
});
const MEDIUM_SIZE_STYLES = StyleSheet.create({
  root: {width: 40, height: 40, borderRadius: 8},
  image: {},
});
const LARGE_SIZE_STYLES = StyleSheet.create({
  root: {width: 60, height: 60, borderRadius: 8},
  image: {},
});

type Props = {
  source: ImageSourcePropType;
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  imageProps?: ImageProps;
} & TouchableOpacityProps &
  StyledComponentProps<typeof useStyles>;

const IconButton: React.FC<Props> = props => {
  const {source, size} = props;
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
  const styles = useStyles(
    sizeStyles,
    {root: props.style as any},
    props.styles,
  );

  return (
    <TouchableOpacity style={styles.root} {...props}>
      <Image style={styles.image} source={source} />
    </TouchableOpacity>
  );
};

const useStyles = makeStyles({
  root: {justifyContent: 'center', alignItems: 'center'},
  image: {},
});

export default IconButton;

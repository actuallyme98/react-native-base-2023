import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {StyledComponentProps, makeStyles} from '@utils/style.util';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {SLATE_GREY_COLOR} from '@constants/colors';

export type CustomModalHeaderLeftProps = {} & TouchableOpacityProps &
  StyledComponentProps<typeof useStyles>;

const CustomModalHeaderLeft: React.FC<CustomModalHeaderLeftProps> = props => {
  const styles = useStyles(props.styles);
  const {...touchableOpacityProps} = props;

  return (
    <TouchableOpacity style={styles.root} {...touchableOpacityProps}>
      <AntDesignIcon name="left" size={20} color={SLATE_GREY_COLOR} />
    </TouchableOpacity>
  );
};

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: 14,
    top: 14,
    width: 30,
    height: 30,
    padding: 5,
  },
});

export default CustomModalHeaderLeft;

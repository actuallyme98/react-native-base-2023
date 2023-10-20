import React, {Ref, useCallback} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {StyledComponentProps, makeStyles} from '@utils/style.util';
import {Modalize} from 'react-native-modalize';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {SLATE_GREY_COLOR} from '@constants/colors';

type Props = {
  modalRef?: Ref<Modalize>;
} & TouchableOpacityProps &
  StyledComponentProps<typeof useStyles>;

const CustomModalHeaderRight: React.FC<Props> = props => {
  const styles = useStyles(props.styles);
  const {modalRef, ...touchableOpacityProps} = props;
  const onPress = useCallback(() => {
    if (modalRef) {
      (modalRef as any).current?.close();
    }
  }, [modalRef]);

  return (
    <TouchableOpacity
      style={styles.root}
      onPress={onPress}
      {...touchableOpacityProps}>
      <AntDesignIcon name="close" size={20} color={SLATE_GREY_COLOR} />
    </TouchableOpacity>
  );
};

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    right: 14,
    top: 14,
    width: 30,
    height: 30,
    padding: 5,
  },
});

export default CustomModalHeaderRight;

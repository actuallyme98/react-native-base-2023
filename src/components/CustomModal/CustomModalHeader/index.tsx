import React, {Ref} from 'react';
import {View} from 'react-native';
import {StyledComponentProps, makeStyles} from '@utils/style.util';
import CustomModalHeaderTitle from '../CustomModalHeaderTitle';
import CustomModalHeaderRight from '../CustomModalHeaderRight';
import {Modalize} from 'react-native-modalize';
import CustomModalHeaderLeft, {
  CustomModalHeaderLeftProps,
} from '../CustomModalHeaderLeft';

type Props = {
  modalRef?: Ref<Modalize>;
  title?: string;
  headerTitle?: React.ReactNode;
  headerRight?: React.ReactNode;
  headerRightShown?: boolean;
  headerLeft?: React.ReactNode;
  headerLeftShown?: boolean;
  headerLeftProps?: CustomModalHeaderLeftProps;
} & StyledComponentProps<typeof useStyles>;

const CustomModalHeader: React.FC<Props> = props => {
  const styles = useStyles(props.styles);
  const {
    modalRef,
    title,
    headerTitle,
    headerRight,
    headerRightShown = true,
    headerLeft,
    headerLeftShown = false,
    headerLeftProps,
  } = props;

  return (
    <View style={styles.root}>
      {headerTitle
        ? headerTitle
        : title && <CustomModalHeaderTitle title={title} />}
      {headerRight
        ? headerRight
        : headerRightShown && <CustomModalHeaderRight modalRef={modalRef} />}
      {headerLeft
        ? headerLeft
        : headerLeftShown && <CustomModalHeaderLeft {...headerLeftProps} />}
    </View>
  );
};

const useStyles = makeStyles({
  root: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});

export default CustomModalHeader;

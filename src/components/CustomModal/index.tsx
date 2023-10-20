import React, {forwardRef, Ref, useRef, useCallback} from 'react';
import {Modalize, ModalizeProps} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import CustomModalHeader from './CustomModalHeader';
import {SafeAreaView} from 'react-native';
import {CustomModalHeaderLeftProps} from './CustomModalHeaderLeft';

interface Props extends ModalizeProps {
  title?: string;
  headerShown?: boolean;
  headerTitle?: React.ReactNode;
  headerRight?: React.ReactNode;
  headerRightShown?: boolean;
  headerLeft?: React.ReactNode;
  headerLeftShown?: boolean;
  headerLeftProps?: CustomModalHeaderLeftProps;
}

const CustomModal = forwardRef((props: Props, ref: Ref<Modalize>) => {
  const {
    title,
    headerShown = true,
    headerTitle,
    headerRight,
    headerRightShown,
    headerLeft,
    headerLeftShown,
    headerLeftProps,
  } = props;

  return (
    <Portal>
      <Modalize
        ref={ref}
        HeaderComponent={
          headerShown && (
            <CustomModalHeader
              modalRef={ref}
              title={title}
              headerTitle={headerTitle}
              headerRight={headerRight}
              headerRightShown={headerRightShown}
              headerLeft={headerLeft}
              headerLeftShown={headerLeftShown}
              headerLeftProps={headerLeftProps}
            />
          )
        }
        {...props}
        children={<SafeAreaView>{props.children}</SafeAreaView>}
      />
    </Portal>
  );
});

export type CustomModalRefProps = {
  modalRef: Ref<Modalize>;
  openModal: () => void;
  closeModal: () => void;
};

export const useCustomModal = (): CustomModalRefProps => {
  const modalRef = useRef<Modalize>(null);
  const openModal = useCallback(() => {
    modalRef.current?.open();
  }, []);
  const closeModal = useCallback(() => {
    modalRef.current?.close();
  }, []);

  return {modalRef, openModal, closeModal};
};

export default CustomModal;

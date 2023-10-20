import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

// import {makeStyles} from '@utils/style.util';

const Drawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

// const useStyles = makeStyles({});

export default Drawer;

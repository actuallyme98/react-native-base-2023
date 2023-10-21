import React from 'react';

import {View} from 'react-native';
import {StyledComponentProps, makeStyles} from '@utils/style.util';

type Props = {} & StyledComponentProps<typeof useStyles>;

const Settings: React.FC<Props> = () => {
  return <View />;
};

export default Settings;

const useStyles = makeStyles({});

import React from 'react';

import {View} from 'react-native';
import {StyledComponentProps, makeStyles} from '@utils/style.util';

type Props = {} & StyledComponentProps<typeof useStyles>;

const Login: React.FC<Props> = () => {
  return <View />;
};

export default Login;

const useStyles = makeStyles({});

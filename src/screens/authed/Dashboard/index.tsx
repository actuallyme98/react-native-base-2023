import React from 'react';

import {View} from 'react-native';
import {StyledComponentProps, makeStyles} from '@utils/style.util';

type Props = {} & StyledComponentProps<typeof useStyles>;

const Dashboard: React.FC<Props> = () => {
  return <View />;
};

export default Dashboard;

const useStyles = makeStyles({});

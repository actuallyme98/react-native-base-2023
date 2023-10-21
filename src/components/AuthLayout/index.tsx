import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyledComponentProps, makeStyles} from '@utils/style.util';
import {ALICE_BLUE_COLOR} from '@constants/colors';

type Props = {} & StyledComponentProps<typeof useStyles>;

const AuthLayout: React.FC<Props & React.PropsWithChildren> = props => {
  const styles = useStyles(props.styles);

  return <SafeAreaView style={styles.root}>{props.children}</SafeAreaView>;
};

const useStyles = makeStyles({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: ALICE_BLUE_COLOR,
    paddingHorizontal: 22,
  },
});

export default AuthLayout;

import React from 'react';

import {View, Text, Image} from 'react-native';
import {StyledComponentProps, makeStyles} from '@utils/style.util';
import AuthLayout from '@components/AuthLayout';

import {DODGER_BLUE_COLOR} from '@constants/colors';
import {WALLET_LOGO} from '@assets/index';

type Props = {} & StyledComponentProps<typeof useStyles>;

const StartScreen: React.FC<Props> = props => {
  const styles = useStyles(props.styles);

  return (
    <AuthLayout>
      <View style={styles.content}>
        <Image
          source={WALLET_LOGO}
          resizeMode="contain"
          style={styles.logoImage}
        />
        <Text style={styles.title}>B.I Wallet</Text>
      </View>
    </AuthLayout>
  );
};

const useStyles = makeStyles({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  logoImage: {
    width: 148,
    height: 148,
  },
  title: {
    color: DODGER_BLUE_COLOR,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 24,
  },
});

export default StartScreen;

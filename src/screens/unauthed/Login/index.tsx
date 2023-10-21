import React, {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {View, TextInput, Text, Image} from 'react-native';
import {StyledComponentProps, makeStyles} from '@utils/style.util';
import CustomButton from '@components/TextButton';

import {useAppDispatch} from '@redux/store';
import {setIsAuthentication} from '@redux/slices/app.slice';

import {WHITE_COLOR, NIGHT_RIDER_OPACITY01_COLOR} from '@constants/colors';
import {WALLET_LOGO} from '@assets/index';

type Props = {} & StyledComponentProps<typeof useStyles>;

const Login: React.FC<Props> = props => {
  const [password, setPassword] = useState('');
  const {t} = useTranslation();
  const styles = useStyles(props.styles);
  const dispatch = useAppDispatch();

  const onChangePassword = useCallback(async (text: string) => {
    setPassword(text);
  }, []);

  const onUnlockWallet = useCallback(async () => {
    dispatch(setIsAuthentication(true));
  }, [dispatch]);

  return (
    <View style={styles.root}>
      <View style={styles.headingContainer}>
        <Image
          style={styles.logoIcon}
          resizeMode="contain"
          source={WALLET_LOGO}
        />
        <Text style={styles.heading}>{t('welcome_back')}</Text>
      </View>

      <View>
        <Text style={styles.label}>{t('password')}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
      </View>

      <CustomButton
        styles={{
          root: styles.unlockButton,
          title: styles.unlockText,
        }}
        onPress={onUnlockWallet}
        disabled={!password}
        title={t('unlock')}
        size="medium"
      />
    </View>
  );
};

const useStyles = makeStyles({
  root: {
    flex: 1,
    paddingVertical: 86,
    paddingHorizontal: 24,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    width: 128,
    height: 128,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    backgroundColor: WHITE_COLOR,
    width: '100%',
    height: 52,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderColor: NIGHT_RIDER_OPACITY01_COLOR,
    borderWidth: 1,
  },
  unlockButton: {
    borderRadius: 32,
    marginTop: 32,
  },
  unlockText: {
    textTransform: 'uppercase',
  },
});

export default Login;

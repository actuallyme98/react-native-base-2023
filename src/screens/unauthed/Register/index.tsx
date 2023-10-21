import React, {useCallback} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, TextInput, Image} from 'react-native';
import {StyledComponentProps, makeStyles} from '@utils/style.util';
import CustomButton from '@components/TextButton';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {FormValues, defaultFormValues, formSchema} from './form';

import {useAppDispatch} from '@redux/store';
import {setIsAuthentication} from '@redux/slices/app.slice';

import {
  ALICE_BLUE_COLOR,
  NIGHT_RIDER_COLOR,
  NIGHT_RIDER_OPACITY01_COLOR,
  WHITE_COLOR,
} from '@constants/colors';
import {WALLET_LOGO} from '@assets/index';

type Props = {} & StyledComponentProps<typeof useStyles>;

const Register: React.FC<Props> = props => {
  const styles = useStyles(props.styles);
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (data: FormValues) => {
      console.log('Form Data: ', data);
      dispatch(setIsAuthentication(true));
    },
    [dispatch],
  );

  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<FormValues>({
    defaultValues: defaultFormValues,
    mode: 'onBlur',
    resolver: yupResolver(formSchema),
  });

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.content}>
        <View style={styles.headingContainer}>
          <Image
            style={styles.logoIcon}
            resizeMode="contain"
            source={WALLET_LOGO}
          />
        </View>

        <Controller
          control={control}
          name="password"
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{...styles.inputWrapper, ...styles.pwInput}}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                value={value}
                autoFocus
                secureTextEntry
                onChangeText={onChange}
                onBlur={onBlur}
                style={styles.textInput}
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{...styles.inputWrapper, ...styles.confirmPwInput}}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <TextInput
                value={value}
                secureTextEntry
                onChangeText={onChange}
                onBlur={onBlur}
                style={styles.textInput}
              />
            </View>
          )}
        />
      </View>
      <CustomButton
        disabled={!isValid}
        title={'Create Wallet'}
        fullWidth
        onPress={handleSubmit(onSubmit)}
        style={styles.createNewBtn}
      />
    </SafeAreaView>
  );
};

const useStyles = makeStyles({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: ALICE_BLUE_COLOR,
    paddingHorizontal: 22,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  logoIcon: {
    width: 128,
    height: 128,
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 100,
  },
  inputWrapper: {
    width: '100%',
  },
  pwInput: {},
  confirmPwInput: {marginTop: 30},
  inputLabel: {
    color: NIGHT_RIDER_COLOR,
    fontSize: 16,
    fontWeight: '700',
  },
  textInput: {
    width: '100%',
    marginTop: 10,
    backgroundColor: WHITE_COLOR,
    height: 48,
    padding: 12,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: NIGHT_RIDER_OPACITY01_COLOR,
    fontSize: 14,
  },
  createNewBtn: {
    marginTop: 10,
  },
});

export default Register;

import React from 'react';

import {Text, View, TextInput, TextInputProps} from 'react-native';
import {StyledComponentProps, makeStyles} from '@utils/style.util';

import {
  NIGHT_RIDER_COLOR,
  WHITE_COLOR,
  NIGHT_RIDER_OPACITY01_COLOR,
  ALERT_COLOR,
} from '@constants/colors';

type Props = {
  label?: string;
  errorMessage?: string;
} & TextInputProps &
  StyledComponentProps<typeof useStyles>;

const TextFieldForm: React.FC<Props> = props => {
  const {label, errorMessage, ...rest} = props;
  const styles = useStyles(props.styles);

  return (
    <View style={styles.root}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput {...rest} style={styles.input} />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default TextFieldForm;

const useStyles = makeStyles({
  root: {},
  label: {
    color: NIGHT_RIDER_COLOR,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  input: {
    backgroundColor: WHITE_COLOR,
    height: 48,
    padding: 12,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: NIGHT_RIDER_OPACITY01_COLOR,
  },
  errorMessage: {
    marginTop: 8,
    color: ALERT_COLOR,
    fontWeight: '600',
  },
});

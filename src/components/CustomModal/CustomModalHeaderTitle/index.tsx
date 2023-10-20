import React, { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { StyledComponentProps, makeStyles } from '@utils/style.util';
import { NIGHT_RIDER_COLOR } from '@constants/colors';

type Props = {
  title: string;
} & PropsWithChildren &
  StyledComponentProps<typeof useStyles>;

const CustomModalHeaderTitle: React.FC<Props> = props => {
  const styles = useStyles(props.styles);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const useStyles = makeStyles({
  root: {},
  title: {
    fontSize: 17,
    color: NIGHT_RIDER_COLOR,
    fontWeight: 'bold',
  },
});

export default CustomModalHeaderTitle;

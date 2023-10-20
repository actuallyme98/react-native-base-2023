import lodash from 'lodash';
import {StyleSheet} from 'react-native';

export type StyledComponentProps<
  T extends (
    props: any,
  ) => StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
> = {
  styles?: Partial<ReturnType<T>>;
};

export function makeStyles<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(styles: T | StyleSheet.NamedStyles<T>) {
  const useStyles = (
    ...customStyles: Array<T | Partial<StyleSheet.NamedStyles<T>> | undefined>
  ) => {
    return lodash.merge({}, styles, ...customStyles) as T;
  };

  return useStyles;
}

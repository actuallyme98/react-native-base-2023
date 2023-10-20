import {USER_LANGUAGE} from '@constants/async-storage-key';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Callback,
  CallbackWithResult,
} from '@react-native-async-storage/async-storage/lib/typescript/types';

export const getUserLanguage = (callback?: CallbackWithResult<string>) =>
  AsyncStorage.getItem(USER_LANGUAGE, callback);
export const setUserLanguage = (value: string, callback?: Callback) =>
  AsyncStorage.setItem(USER_LANGUAGE, value, callback);
export const removeUserLanguage = (callback?: Callback) =>
  AsyncStorage.removeItem(USER_LANGUAGE, callback);

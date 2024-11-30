import {Picker} from '@react-native-picker/picker';
import {Controller} from 'react-hook-form';
import {StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  type: 'text' | 'dropdown' | 'password';
  control: any;
  name: string;
  placeholder: string;
  pickerItem?: {label: string; value: string}[];
  style?: StyleProp<TextStyle>;
  multiline?: boolean;
}

export function Input({control, name, placeholder, type, pickerItem, style, multiline}: Props) {
  return (
    <>
      {type === 'text' ? (
        <Controller
          control={control}
          name={name}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.label}>
              <TextInput
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline={multiline ? true : false}
                style={[styles.input, style]}
              />
              
            </View>
          )}
        />
      ) : (
        <>
          {type === 'password' ? (
            <Controller
              control={control}
              name={name}
              render={({field: {onChange, onBlur, value}}) => (
                <View style={styles.label}>
                  <TextInput
                    placeholder={placeholder}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={true}
                    style={styles.input}
                  />
                </View>
              )}
            />
          ) : (
            <Controller
              control={control}
              name={name}
              render={({field: {onChange, value}}) => (
                <View style={styles.label}>
                  <View style={styles.picker}>
                    <Picker selectedValue={value} onValueChange={onChange}>
                      <Picker.Item
                        label={placeholder}
                        value=""
                        enabled={false}
                        color="grey"
                      />
                      {pickerItem?.map((item, index) => (
                        <Picker.Item
                          key={index}
                          label={item.label}
                          value={item.value}
                        />
                      ))}
                    </Picker>
                  </View>
                </View>
              )}
            />
          )}
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    gap: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 15,
    fontWeight: 400,
  },
  picker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
  },
});

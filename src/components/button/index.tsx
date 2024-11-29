import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  type: 'primary' | 'secondary';
}

export function Button({title, onPress, type}: Props) {
  return (
    <>
      {type === 'primary' ? (
        <TouchableOpacity onPress={onPress} style={[styles.button, styles.btnPrimary]}>
          <Text style={styles.btnTextPrimary}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress} style={[styles.button, styles.btnSecondary]}>
          <Text style={styles.btnTextSecondary}>{title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPrimary: {
    backgroundColor: '#219ebc',
  },
  btnSecondary: {
    borderColor: '#219ebc',
    borderWidth: 1,
  },
  btnTextPrimary: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold',
  },
  btnTextSecondary: {
    color: '#219ebc',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold',
  },
});

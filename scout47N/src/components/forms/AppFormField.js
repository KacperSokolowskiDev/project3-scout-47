import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { useFormikContext } from 'formik';

// import TextInput from "../TextInput";
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, ...otherProps }) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <TextInput
        style={styles.container}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    marginVertical: 10,
    padding: 15,
    width: '85%',
  },
});

export default AppFormField;

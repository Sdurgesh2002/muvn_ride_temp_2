import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';

const EditableRow = ({
  value,
  label,
  placeholder,
  editable = false,
  onEditPress,
  onChangeText,
  error = '',
  style,
  ...props
}) => {
  const [isEditing, setIsEditing] = useState(editable);
  const inputRef = useRef(null);  // 👈 ref banaya

  const handleToggleEdit = () => {
    if (!isEditing) {
      setIsEditing(true);
      setTimeout(() => {
        inputRef.current?.focus();   // 👈 Edit dabate hi focus ho jaayega
      }, 100);
    } else {
      setIsEditing(false);
    }
    if (onEditPress) onEditPress();
  };

  return (
    <View style={[styles.container, style]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View style={styles.inputWrapper}>
        {isEditing ? (
          <TextInput
            ref={inputRef}   // 👈 yaha ref attach
            value={value}
            placeholder={placeholder || label}
            style={[styles.input, error && styles.inputError]}
            onChangeText={onChangeText}
            {...props}
          />
        ) : (
          <Text style={styles.value}>{value}</Text>
        )}

        <TouchableOpacity onPress={handleToggleEdit} style={styles.editBtn}>
          <Text style={styles.editText}>{isEditing ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    ...Typography.H3_Medium,
    color: Colors.primary,
    marginBottom: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.inputbox,
    borderRadius: 25,
    height: 56,
    paddingHorizontal: 18,
  },
  value: {
    ...Typography.H3_SBold,
    color: Colors.primary,
    flex: 1,
  },
  input: {
    flex: 1,
    color: Colors.primary,
    ...Typography.H3_SBold,
    backgroundColor: 'transparent',
    padding: 0,
  },
  inputError: {
    borderColor: 'red',
  },
  editBtn: {
    marginLeft: 12,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: Colors.textCta + '33',
  },
  editText: {
    color: Colors.textCta,
    ...Typography.H3_SBold,
  },
  error: {
    marginTop: 4,
    color: 'red',
    ...Typography.Body2,
  },
});

export default EditableRow;

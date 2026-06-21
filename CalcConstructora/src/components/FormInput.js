// src/components/FormInput.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Theme } from '../theme/theme';

export default function FormInput({ label, placeholder, value, onChangeText, keyboardType = "numeric" }) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#7F8C8D"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: '100%',
  },
  label: {
    fontSize: Theme.typography.fontSizeLabel,
    color: '#E5E5EA',
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    backgroundColor: Theme.colors.surfaceVariant,
    color: Theme.colors.text,
    height: 54,
    borderRadius: Theme.roundness.small,
    paddingHorizontal: 12,
    fontSize: Theme.typography.fontSizeMain,
    fontWeight: '600',
  },
});
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

import { styles } from './styles';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'


Ionicons.loadFont();


interface Props {
  name: string;
  remove: (name: string) => void;
  isChecked: boolean;
  onToggleCheck: (isChecked: boolean) => void;
  nameStyle: () => void;
}

export function Tecnologias({ name, remove, isChecked, onToggleCheck }: Props) {
  const [isNameStriked, setIsNameStriked] = React.useState(false);

  const handleToggleCheck = () => {
    onToggleCheck(!isChecked);
    setIsNameStriked(!isChecked);
  };
 

  const nameStyle = isNameStriked
    ? styles.strikedText
    : styles.normalText;

  return (
      <View style={styles.container}>
        <CheckBox
          checked={isChecked}
          onPress={handleToggleCheck}
          containerStyle={styles.check}
          checkedColor="#007aff"
        />
        <Text style={nameStyle}>{name}</Text>
        <Ionicons
          name="trash"
          size={20}
          color="red"
          onPress={() => remove(name)}
        />
      </View>
    );
  }
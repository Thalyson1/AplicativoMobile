import { View, Text, StyleSheet } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import React, { useState } from 'react';


import Ionicons from 'react-native-vector-icons/Ionicons'

Ionicons.loadFont();//Esse aqui


interface Props {
  name: string;
  remove: (name: string) => void;
  isChecked: boolean;
  onToggleCheck: (isChecked: boolean) => void;
}

export function Tecnologias({ name, remove, isChecked, onToggleCheck }: Props) {
  const [isNameStriked, setIsNameStriked] = useState(false);

  const handleToggleCheck = () => {
    onToggleCheck(!isChecked);
    setIsNameStriked(!isChecked);
  };

  const nameStyle = isNameStriked ? { textDecorationLine: 'line-through', color:'#808080'} : {textDecorationLine:undefined, color:'black'};


  return (
    <View style={styles.container}>
      
      <CheckBox
        checked={isChecked}
        onPress={handleToggleCheck}
        containerStyle={styles.check}
        checkedColor="#007aff"
      />
 
      
      <Text style={[styles.name, nameStyle]}>{name}</Text>
      
      
      <Ionicons 
        name="trash-outline" size={24} color="black" 
        onPress={() => remove(name)}
      />
    </View>
  );
}
import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView } from 'react-native';
import { Tecnologias } from '../../components/Tecnologias';
import { styles } from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons'



export function Home() {
  const [nameTecnologia, setnameTecnologia] = useState('');
  const [names, setNames] = useState([] as string[]);
  const [tecnologiaStates, settecnologiaStates] = useState<{ [key: string]: boolean }>({});
  const [concluidos, setConcluidos] = useState(0);


  const addTecnologia = () => {
    if (names.includes(nameTecnologia) || nameTecnologia === '') {
      Alert.alert('Error', 'Tecnologia já existente ou não digitado corretamente.');
    } else {
      setNames([...names, nameTecnologia]);
      settecnologiaStates({ ...tecnologiaStates, [nameTecnologia]: false });
    }
    setnameTecnologia('');
  };

  
  const removeTecnologia = (name: string) => {
    Alert.alert('Remove', `Deseja realmente remover ${name}`, [
      {
        text: 'sim',
        onPress: () => {
          const updatedNames = names.filter((tecnologias) => tecnologias !== name);
          setNames(updatedNames);
          const updatedStates = { ...tecnologiaStates };
          delete updatedStates[name];
          settecnologiaStates(updatedStates);
          const concludedCount = Object.values(updatedStates).filter(Boolean).length;
          setConcluidos(concludedCount);
        },
        style: 'destructive',
      },
      {
        text: 'não',
        style: 'cancel'
      },
    ]);
  };

  const handleToggleCheck = (tecnologiasName: string, isChecked: boolean) => {
    const updatedtecnologiaStates = { ...tecnologiaStates, [tecnologiasName]: isChecked };
    settecnologiaStates(updatedtecnologiaStates);
  
    const concludedCount = Object.values(updatedtecnologiaStates).filter(Boolean).length;
    setConcluidos(concludedCount);
  };

  
    

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tecnologias</Text>

      <View style={styles.containerRegistertecnologias}>
        <TextInput
          style={[styles.input, styles.inputFocused ? styles.inputFocused : null]}
          placeholder="Adicione uma nova tecnologia"
          placeholderTextColor="#a3a3a3"
          onChangeText={(text) => setnameTecnologia(text)}
          value={nameTecnologia}
        />
        <Ionicons 
          name="add-circle-outline"
          style={styles.addButton}
          onPress={addTecnologia}
        ></Ionicons>
      </View>



      <View style={styles.containerRegistertecnologias}>
        <Text style={styles.valoresTecnologias}>
          Criadas: {names.length}
        </Text>
        <Text style={[styles.valoresTecnologias, { textAlign: 'right' }]}>
          Concluídas: {concluidos}
        </Text>
      </View>




      <ScrollView style={styles.containerListTecnologias}>
        {names.length === 0 ? (
          <Text style={styles.listEmpty}>
            <Text style={styles.subTitleListTecnologias}>
              Você ainda não tem tecnologias cadastradas{'\n'}
            </Text>
            Crie tarefas e organize seus itens a fazer
          </Text>
        ) : (
          names.map((item) => (
            <Tecnologias
              key={item}
              name={item}
              remove={() => removeTecnologia(item)}
              isChecked={tecnologiaStates[item]}
              onToggleCheck={(isChecked) => handleToggleCheck(item, isChecked)} nameStyle={function (): void {
                throw new Error('Function not implemented.');
              } }  
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

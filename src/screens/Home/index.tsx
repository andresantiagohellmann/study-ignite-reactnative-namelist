import { useState } from "react";

import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(newParticipant)) {
      return Alert.alert(
        "João já está na lista",
        "Você não pode adicioná-lo novamente"
      );
    }

    setParticipants((prevStat) => [...prevStat, newParticipant]);
    setNewParticipant("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remover participante",
      `Tem certeza que deseja remover ${name}?`,
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            setParticipants((prevState) =>
              prevState.filter((participant) => participant !== name)
            );
            Alert.alert("Participante removido");
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setNewParticipant}
          value={newParticipant}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyList}>Nenhum participante adicionado</Text>
        }
      />
    </View>
  );
}

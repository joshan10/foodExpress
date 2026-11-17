import { Alert, FlatList, Pressable, StyleSheet, Text, TextInput , View } from "react-native";
import ButtonFlotante from "../src/components/ButtonFlotante";
import { AddIcons, BackIcons } from "../src/components/ui/Icons";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CardList from "../src/components/CardList";
import ModalForm from "../src/components/ModalForm";

export default function Empleado() {
  const [visibleModal, setVisibleModal] = useState(false);
  
    const [users, setUser] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
  
    // datos de cada input
  
    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [direccion, setDireccion] = useState("");
    const [celular, setCelular] = useState("");
    const [cargo, setCargo] = useState("");
    const [activo, setActivo] = useState("true");

  
    const resetForm = () => {
      setNombre("");
      setDocumento("");
      setDireccion("");
      setCelular("");
      setCargo("");
      setActivo("true");
      setSelectedIndex(null);
    };

    const openNewEmployeeModal = () => {
      resetForm();
      setVisibleModal(true);
    };

    const closeModal = () => {
      resetForm();
      setVisibleModal(false);
    };

    const editEmployee = (value, index) => {
      setNombre(value.nombre);
      setDocumento(value.documento);
      setDireccion(value.direccion);
      setCelular(value.celular);
      setCargo(value.cargo);
      setActivo(String(value.activo));
      setSelectedIndex(index);
      setVisibleModal(true);
    };

    const deleteEmployee = (index) => {
      Alert.alert("Eliminar empleado", "¿Deseas eliminar este empleado?", [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            const updatedUsers = users.filter((value, userIndex) => userIndex !== index);
            await AsyncStorage.setItem("@dataEmpleado", JSON.stringify(updatedUsers));
            setUser(updatedUsers);
          },
        },
      ]);
    };
  
    // funcion para guardar usuarios
  
    const saveEmployee = async () => {
      const employeeData = {
        nombre: nombre,
        documento: documento,
        direccion: direccion,
        celular: celular,
        cargo: cargo,
        activo: activo,
      };
      let updatedUsers;

      if (selectedIndex === null) {
        updatedUsers = [...users, employeeData];
      } else {
        updatedUsers = users.map((value, index) =>
          index === selectedIndex ? employeeData : value
        );
      }
  
      await AsyncStorage.setItem("@dataEmpleado", JSON.stringify(updatedUsers));
  
      setUser(updatedUsers);
      closeModal();
    };
  
    // funcion para obtener datos del async storage
  
    useEffect(() => {
  let isMounted = true;

  AsyncStorage.getItem("@dataEmpleado")
    .then((data) => {
      if (isMounted) {
        setUser(JSON.parse(data || "[]"));
      }
    })
    .catch((error) => console.error(error));

  return () => {
    isMounted = false;
  };
}, []);
  
    return (
      <>
        <View style={styles.listContainer}>
          <FlatList
              data={users}
              keyExtractor={(item, index) => `${item}-${index}`}
              ListEmptyComponent={
                <View style={styles.emptyBox}>
                  <Text style={styles.emptyTitle}>Aún no hay Empleados</Text>
                  <Text style={styles.emptyText}>
                    Pulsa el botón + para agregar tu primer Empleado.
                  </Text>
                </View>
              }
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <CardList
                  nombre={item.nombre}
                  documento={item.documento}
                  item={item}
                  onEdit={() => editEmployee(item, index)}
                  onDelete={() => deleteEmployee(index)}
                >
                  <Text style={styles.text}>Cargo: {item.cargo}</Text>
                  <Text style={styles.text}>Celular: {item.celular}</Text>
                  <Text style={styles.text}>Direccion: {item.direccion}</Text>
                </CardList>
              )}
          />
        </View>
  
        <ModalForm
          visible={visibleModal}
          onClose={closeModal}
          title={selectedIndex === null ? "Agrega Nuevos Empleados" : "Editar Empleado"}
        >
          <View style={styles.containerModal}>
            <Text style={styles.inputLabel}>Nombre</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              onChangeText={setNombre}
              value={nombre}
            />
            <Text style={styles.inputLabel}>Documento</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setDocumento}
              value={documento}
            />
            <Text style={styles.inputLabel}>Cargo</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              onChangeText={setCargo}
              value={cargo}
            />
            <Text style={styles.inputLabel}>Celular</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setCelular}
              value={celular}
            />
            <Text style={styles.inputLabel}>Direccion</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              onChangeText={setDireccion}
              value={direccion}
            />

            <Text style={styles.inputLabel}>Activo</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              maxLength={5}
              onChangeText={setActivo}
              value={activo}
            />

            <Pressable style={styles.buttonForm} onPress={saveEmployee}>
              <Text>{selectedIndex === null ? "Guardar" : "Actualizar"}</Text>
            </Pressable>
          </View>
        </ModalForm>
  
        <Link href="/" asChild>
          <ButtonFlotante icon={<BackIcons />} stylesProps={styles.stylesProps} />
        </Link>
        <ButtonFlotante icon={<AddIcons />} onPress={openNewEmployeeModal} />
      </>
    );
}


const styles = StyleSheet.create({
    stylesProps:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#040405',
        borderRadius:10,
        position:'absolute',
        bottom:30,
        left:30
    },
      listContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
      },
    containerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonForm: {
    backgroundColor: "#297fee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: "flex-start",
    marginLeft: 50,
  },

  emptyBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
})
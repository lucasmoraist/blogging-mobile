import {Image, Text, TouchableOpacity, View} from 'react-native';

export function Profile() {
  return (
    <View>
      <Text>Meu Perfil</Text>
      <View>
        <Image />
        <Text>Nome</Text>
      </View>

      {/*Só ira aparecer se o perfil for de professor*/}
      <View>
        <Image />
        <Text>Titulo</Text>
        <Text>Editar</Text>
        <Text>Excluir</Text>
      </View>

      {/*Só ira aparecer se o perfil for de professor*/}
      <View>
        <Text>Nome aluno</Text>
      </View>

      <TouchableOpacity>
        <Text>Excluir conta</Text>
      </TouchableOpacity>
    </View>
  );
}

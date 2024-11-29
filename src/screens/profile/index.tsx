import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getOneTeacher} from '../../service/teacher/getOneTeacher';
import {useEffect, useState} from 'react';
import {IPost} from '../../interface/post.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getOneStudent} from '../../service/student/getOneStudent';
import {FlatList} from 'react-native-gesture-handler';
import {RenderPosts} from './renderPosts';

const profileIcon = require('../../assets/profile.png');

interface Data {
  id: number;
  name: string;
  posts?: IPost[];
  school_subject?: string;
}

export function Profile() {
  const [profile, setProfile] = useState<Data>();
  const [role, setRole] = useState<string | null>();

  useEffect(() => {
    async function fetchData() {
      const role = await AsyncStorage.getItem('role');
      setRole(role);

      if (role === 'teacher') {
        const response = await getOneTeacher();

        setProfile(response);
      } else {
        const response = await getOneStudent();
        setProfile(response);
      }
    }
    fetchData();
  }, []);

  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.title}>Meu Perfil</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.person}>
          <Image source={profileIcon} />
          <View>
            <Text style={styles.name}>{profile?.name}</Text>
            <Text style={styles.schoolSubject}>{profile?.school_subject}</Text>
          </View>
        </View>

        {role === 'teacher' ? (
          <FlatList
            data={profile?.posts}
            renderItem={p => RenderPosts(p.item)}
          />
        ) : null}

        <TouchableOpacity>
          <Text>Excluir conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#219ebc',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    margin: 20,
  },
  person: {
    flexDirection: 'row',
    gap: 10,
  },
  name: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  schoolSubject: {
    fontSize: 16,
    lineHeight: 20,
    color: 'gray',
  },
});
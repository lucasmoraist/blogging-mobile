import {Image, StyleSheet, Text, View} from 'react-native';
import {getOneTeacher} from '../../api/teacher/getOneTeacher';
import {useEffect, useState} from 'react';
import {IPost} from '../../interface/post.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getOneStudent} from '../../api/student/getOneStudent';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {RenderPosts} from './renderPosts';

const profileIcon = require('../../assets/profile.png');

interface Data {
  id?: number;
  name: string;
  posts?: IPost[];
  school_subject?: string;
}

export function Profile() {
  const [profile, setProfile] = useState<Data>();
  const [role, setRole] = useState<string | null>();
  const [loaded, setLoaded] = useState(false);

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

    if (profile === undefined) {
      setLoaded(false);
    } else {
      setLoaded(true);
    }
  }, [profile]);

  if (!loaded) {
    return <View></View>;
  }

  const headerList = () => {
    return (
      <>
        <View style={styles.top}>
          <Text style={styles.title}>Meu Perfil</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.person}>
            <Image source={profileIcon} />
            <View>
              <Text style={styles.name}>{profile?.name}</Text>
              <Text style={styles.schoolSubject}>
                {profile?.school_subject}
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      {role === 'teacher' ? (
        <FlatList
          data={profile?.posts}
          renderItem={p => <RenderPosts item={p.item}/>}
          ListHeaderComponent={headerList}
        />
      ) : null}
    </>
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
    gap: 40,
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

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getOneTeacher} from '../../api/teacher/getOneTeacher';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getOneStudent} from '../../api/student/getOneStudent';
import {FlatList} from 'react-native-gesture-handler';
import {IProfile} from '../../interface/profile/profile.interface';
import {PostItem} from './types/renderPosts.interface';
import {RenderPosts} from './renderPosts';

const profileIcon = require('../../assets/profile.png');

export function Profile() {
  const [profile, setProfile] = useState<IProfile>();
  const [role, setRole] = useState<string | null>();
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState<PostItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const role = await AsyncStorage.getItem('role');
      setRole(role);

      if (role === 'teacher') {
        const response = await getOneTeacher();
        setProfile(response);
        setPosts(response.posts || []);
      } else {
        const response = await getOneStudent();
        setProfile(response);
      }

      setLoaded(true);
    }
    fetchData();
  }, []);

  if (!loaded) {
    return <View></View>;
  }

  const handleDeletePost = (id: string) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  };

  const handleDeleteProfile = async () => {
    const role = await AsyncStorage.getItem('role');

    if (role === 'teacher') {
      // delete teacher
      const teacher = await getOneTeacher();
    } else {
      // delete student
      const student = await getOneStudent();
    }
  };

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

  const footerList = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.textButton}>Excluir conta</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      {role === 'teacher' ? (
        <FlatList
          data={posts}
          renderItem={({item}) => (
            <RenderPosts item={item} onDelete={handleDeletePost} />
          )}
          ListHeaderComponent={headerList}
          ListFooterComponent={footerList}
        />
      ) : (
        <>
          <View style={styles.top}>
            <Text style={styles.title}>Meu Perfil</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.person}>
              <Image source={profileIcon} />
              <View style={styles.profile}>
                <Text style={styles.name}>{profile?.name}</Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.textButton}>Excluir conta</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
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
  profile: {
    justifyContent: 'center',
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
  footer: {
    margin: 20,
    alignItems: 'center',
  },
  deleteButton: {
    borderColor: '#e63946',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#e63946',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
});

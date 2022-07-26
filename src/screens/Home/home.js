import React, {useEffect, useState} from 'react';
import {FlatList, View, ActivityIndicator, StyleSheet} from 'react-native';

import NetworkLogger from 'react-native-network-logger';

import ScreenRoutes from '../../constants/screen';

import Images from '../../assets/image';

import ScreenWrapper from '../../components/screenWrapper';
import MovieCard from '../../components/movieCard/movieCard';
import {getListOfStarWarEpisode} from '../../services/starWar';

const Home = ({navigation}) => {
  const onPressedCategoryCard = filmInfo =>
    navigation.navigate(ScreenRoutes.MOVIE_DETAILS, filmInfo);

  const [isFetchingEpisodes, setFetchingEpisodes] = useState(true);
  const [isFetchingFail, setFetchingFail] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getListOfStarWarEpisode()
      .then(results => {
        setEpisodes(results);
      })
      .catch(() => {
        setFetchingFail(true);
      })
      .finally(() => {
        setFetchingEpisodes(false);
      });
  }, []);

  if (isFetchingEpisodes) {
    return (
      <ScreenWrapper>
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      </ScreenWrapper>
    );
  }

  if (isFetchingFail) {
    return (
      <ScreenWrapper>
        <View style={styles.container}>
          <NetworkLogger />
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={episodes}
        keyExtractor={item => item.episode_id}
        renderItem={({item}) => {
          return (
            <MovieCard
              onPress={() => onPressedCategoryCard(item)}
              title={item.title}
              image={Images[item.episode_id].image}
              color={Images[item.episode_id].color}
            />
          );
        }}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;

import React, {useEffect, useState} from 'react';
import {Text, ImageBackground, StyleSheet, View, FlatList} from 'react-native';

import ScreenWrapper from '../../components/screenWrapper';

import Images from '../../assets/image';

import {getIMDbRating} from '../../services/imdb';
import CharacterCard from '../../components/characterCard/characterCard';

const MovieDetails = props => {
  const {params} = props.route;
  const [imdbRating, setImdbRating] = useState('');
  const [isImdbFetching, setIsImdbFetching] = useState(true);

  useEffect(() => {
    const imdbId = Images[params.episode_id].id;
    getIMDbRating(imdbId)
      .then(imdbRating => {
        setImdbRating(imdbRating);
      })
      .catch(() => {
        setImdbRating(`Error while fetching Imdb rating`);
      })
      .finally(() => {
        setIsImdbFetching(false);
      });
  }, [params.episode_id]);

  return (
    <ScreenWrapper style={{paddingHorizontal: 0}}>
      <ImageBackground
        source={Images[params.episode_id].image}
        style={Style.backgroundImage}>
        <View style={Style.imdbWrapper}>
          {isImdbFetching ? (
            <Text style={{}}>Loading...</Text>
          ) : (
            <Text style={{}}>IMDb : {imdbRating}</Text>
          )}
        </View>
        <View style={Style.directedWrapper}>
          <Text style={Style.subtitle}>Directed by {params.director}</Text>
        </View>
      </ImageBackground>

      <View style={Style.titleWrapper}>
        <View>
          <Text style={Style.title}>{params.title}</Text>
          <Text style={Style.subtitle}>Released on {params.release_date}</Text>
        </View>
      </View>

      <Text style={Style.secondTitle}>List of Characters</Text>
      <FlatList
        style={Style.contentWrapper}
        showsHorizontalScrollIndicator={false}
        data={params.characters}
        keyExtractor={item => item}
        renderItem={({item, index}) => {
          return <CharacterCard key={index} url={item} />;
        }}
      />
    </ScreenWrapper>
  );
};

const Style = StyleSheet.create({
  backgroundImage: {
    position: 'relative',
    resizeMode: 'contain',
    overflow: 'hidden',
    flex: 0.5,
  },

  contentWrapper: {
    flex: 0.5,
  },

  titleWrapper: {
    padding: 16,
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  imdbWrapper: {
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    left: 10,
    bottom: 10,
    backgroundColor: 'yellow',
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
  },

  subtitle: {
    marginTop: 12,
    fontSize: 14,
    color: '#C8C8C8',
    fontFamily: 'ProximaNova-Regular',
  },

  directedWrapper: {
    padding: 4,
    position: 'absolute',
    left: 10,
    top: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },

  secondTitle: {
    padding: 12,
    color: 'white',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
});

export default MovieDetails;

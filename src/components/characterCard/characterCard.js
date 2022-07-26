import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getCharacterInfo} from '../../services/starWar';
import {getIdFromCharacterUrl} from '../../utils/string';

const CharacterCard = props => {
  const characterId = getIdFromCharacterUrl(props.url);

  const [characterInfo, setCharacterInfo] = useState({
    name: '',
    height: '',
    gender: '',
  });

  const [isCharacterInfoFetching, setIsCharacterInfoFetching] = useState(true);
  const [isCharacterInfoFetchingFail, setIsCharacterInfoFetchingFail] =
    useState(false);

  useEffect(() => {
    getCharacterInfo(characterId)
      .then(response => {
        setCharacterInfo({
          ...response,
        });
      })
      .catch(() => {
        setIsCharacterInfoFetchingFail(true);
      })
      .finally(() => {
        setIsCharacterInfoFetching(false);
      });
  }, [characterId]);

  if (isCharacterInfoFetchingFail) {
    return (
      <View style={Style.card}>
        <Text style={Style.title}>Error while fetching character Info</Text>
      </View>
    );
  }

  return (
    <View style={Style.card}>
      {isCharacterInfoFetching ? (
        <Text style={Style.title}>Loading...</Text>
      ) : (
        <Text style={Style.title}>{characterInfo.name}</Text>
      )}

      <View style={Style.subtitleWrapper}>
        <Text style={Style.subtitle}>
          Gender:{' '}
          {isCharacterInfoFetching ? 'Loading...' : characterInfo.gender}
        </Text>
        <Text style={Style.subtitle}>|</Text>
        <Text style={Style.subtitle}>
          Height:{' '}
          {isCharacterInfoFetching ? 'Loading...' : characterInfo.height}
        </Text>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: 8,
    height: 60,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    elevation: 5,
  },

  backgroundImage: {
    borderRadius: 10,
    resizeMode: 'contain',
    overflow: 'hidden',
    flex: 1,
  },

  overlay: {
    padding: 15,
    justifyContent: 'center',
    flex: 1,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    fontFamily: 'ProximaNova-Regular',
  },

  subtitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    marginHorizontal: 12,
    color: 'black',
    fontFamily: 'ProximaNova-Regular',
  },
});

export default CharacterCard;

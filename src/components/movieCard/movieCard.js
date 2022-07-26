import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';

const MovieCard = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={Style.container}
      android_ripple={{
        color: '#ccc',
      }}>
      <View style={Style.card}>
        <ImageBackground source={props.image} style={Style.backgroundImage}>
          <LinearGradient
            colors={[props.color, 'transparent']}
            start={{x: 0.25, y: 0.5}}
            end={{x: 1, y: 1}}
            style={Style.overlay}>
            <Text style={Style.title}>{props.title}</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

const Style = StyleSheet.create({
  container: {
    elevation: 5,
    marginBottom: 15,
    borderRadius: 10,
  },
  card: {
    height: 150,
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
    fontSize: 24,
    color: '#fffafa',
    fontFamily: 'ProximaNova-Regular',
  },
});

export default MovieCard;

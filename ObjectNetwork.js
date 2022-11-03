import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

const ObjectNetwork = () => {
  // 5.
  const [movie, setMovie] = useState({})

  // 1.
  const getMovie = async () => {

    // 4.
    try {
      const data = await axios.get("https://api.themoviedb.org/3/movie/663712?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US")
      console.log("++++++++++++++++++++++++++++", data.data)
      setMovie(data.data)
    } catch (e) {
      console.log(e)
    }

  }

  // 2.
  useEffect(() => {
    // 3.
    getMovie()

  }, [])


  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      paddingHorizontal: 15
    }}>
      <Text>{movie.title}</Text>
      <Text>{movie.overview}</Text>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={{
          width: 300,
          height: 300,
          marginTop: 20
        }} />
    </View>

  );
};

export default ObjectNetwork;
// 단축키 rsc functional type

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';


const App = () => {

  const [movies, setMovies] = useState([])

  // {} 상태, 함수, 변수, 상수 들을 설정해놓음

  const movieAdd = "https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1"


  // async 데이터 동기화 await 기다릴거다 
  const getData = async () => {
    // const data = await axios.get(movieAdd)
    // console.log(data.data.results.length)
    try {
      const data = await axios.get(movieAdd);
      console.log(data.data.results.length);
      setMovies(data.data.results);
    } catch (e) {
      console.log(e);
    }
  }


  // hook 함수 형태는 이렇게 생김
  // 무조건 자동실행하는 함수
  useEffect(() => {
    getData()

  }, [])



  return (

    <ScrollView>
      {/* <Text>{JSON.stringify(movies)}</Text> */}
      {/* <Text>{movies.length}</Text> */}
      {movies && movies.map(i => (
        <View style={{
          paddingTop: 15,
          paddingVertical: 10,
          paddingHorizontal: 15
        }}>
          <Text>{i.original_title}</Text>
          <Text>{i.overview}</Text>
          <Text>평점: {i.vote_average}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default App;
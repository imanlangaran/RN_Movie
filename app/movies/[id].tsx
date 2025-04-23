import { Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const movieDetail = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Movie Detail: {id}</Text>
    </View>
  )
}

export default movieDetail

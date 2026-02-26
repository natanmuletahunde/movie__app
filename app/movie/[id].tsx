import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MovieDeatiles = () => {
    const {id} = useLocalSearchParams();
  return (
    <View>
      <Text> {id}</Text>
    </View>
  )
}

export default MovieDeatiles

const styles = StyleSheet.create({})
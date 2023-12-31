import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';

const LoadingComponent = () => {
    const tw = useTailwind()
    return (
      <View style={tw('flex-1 items-center justify-center')}>
        <ActivityIndicator size={50} color="#f7691a"></ActivityIndicator>
      </View>
    )
}

export default LoadingComponent

const styles = StyleSheet.create({})
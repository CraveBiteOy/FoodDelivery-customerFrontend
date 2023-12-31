import { StyleSheet, Text, View, useWindowDimensions, Image, TouchableOpacity, ListRenderItem, FlatList, ScrollView } from 'react-native'
import React  , {useCallback, useEffect, useState, useRef, useMemo} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTailwind } from 'tailwind-rn';
import { DetailRestaurantNavigationProp } from '../screens/DetailRestaurant';
import { RESTAURANT } from '../model/index.d';
import { HOST_URL } from '../store/store';

const imageDefault = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80";

type HeaderProp = {
    restaurant: RESTAURANT,
    reviewExist: boolean,
    setAddReview: React.Dispatch<React.SetStateAction<boolean>>,
    showReviewForm: () => void
}

const DetailedRestaurantHeader = ({ restaurant, reviewExist, setAddReview, showReviewForm}: HeaderProp) => {
    const tw = useTailwind();
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const image = restaurant?.imageurl == null ? imageDefault : restaurant?.imageurl &&  restaurant?.imageurl?.startsWith("https") ? restaurant.imageurl : HOST_URL + "/api/images/image/" + restaurant.imageurl;

    const addReviewHandler = () => {
        setAddReview(true);
        showReviewForm();
    }

  return (
    <View>
       <View style={tw('relative')}>
            <Image source={{uri: image}} style={[tw('mb-2'), {height: height/3, width: width}]}></Image>
        </View>
        <View style={tw('px-4')}>
            <Text style={tw('text-3xl font-bold text-[#f7691a] my-2')}>{restaurant?.name}</Text>
            <Text style={tw('text-lg text-black')}>{restaurant?.address}, {restaurant?.city} </Text>
            <View style={tw('flex flex-row items-center justify-between mt-6 mb-2')}>
                <View style={tw('flex-row items-center justify-center')}>
                    <Entypo name={restaurant?.rating > 4 ?  "emoji-flirt" : (restaurant?.rating > 3) ? "emoji-happy" : restaurant?.rating > 2 ? "emoji-neutral" : "emoji-sad"} size={24} color="#f7691a"></Entypo>
                    <Text style={tw('mx-2 ml-6 text-lg text-black')}>{(Math.round(restaurant?.rating * 100  / 100).toFixed(2))}</Text>
                </View>
                {!reviewExist && (
                    <TouchableOpacity onPress={addReviewHandler} style={[{ height: 40, width: 40, zIndex: 10}, tw(' rounded-full items-center justify-center ml-8')]}>
                        <MaterialIcons name='rate-review' size={40} color="#f7691a"></MaterialIcons>
                    </TouchableOpacity> 
                )}
            </View>
            {restaurant?.estimatedTime && (
                <View style={tw('flex flex-row items-center justify-start my-2')}>
                    <Ionicons name='bicycle' size={26} color="#f7691a"></Ionicons>
                    <Text style={tw('mx-2 ml-6 text-lg text-black')}>Delivery in {restaurant?.estimatedTime - 5} - {restaurant?.estimatedTime + 5} minutes</Text>
                </View>
            )}
            {restaurant?.distance && (
                <View style={tw('flex flex-row items-center justify-start my-2 mb-4')}>
                    <FontAwesome name='location-arrow' size={26} color="#f7691a"></FontAwesome>
                    <Text style={tw('mx-2 ml-6 text-lg text-black')}>{restaurant?.distance.toFixed(2)} km</Text>
                </View>
            )}
        </View>
    </View>
  )
}

export default DetailedRestaurantHeader

const styles = StyleSheet.create({})
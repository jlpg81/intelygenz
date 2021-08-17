import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function NewsItem({article}) {
  const navigation = useNavigation();

  // console.log(article.title, article.authors[0].name);

  const handleNewsDetail = () => {
    navigation.navigate('NewsDetailPage', {article: article});
  };

  return (
    <View>
      <TouchableOpacity onPress={handleNewsDetail}>
        <Text>{article.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

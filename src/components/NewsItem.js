import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function NewsItem({article}) {
  const navigation = useNavigation();

  const handleNewsDetail = () => {
    navigation.navigate('NewsDetailPage', {article: article});
  };

  const getImage = () => {
    let array;
    let urls = [];
    const str = article.description;
    const rex = /<img[^>]+src="([^">]+)/g;

    while ((array = rex.exec(str))) {
      urls.push(array[1]);
    }
    let img = urls[0];
    img = img.split('//').pop();
    img = 'https://' + img;
    return img;
  };
  const image = getImage();

  const getDescription = () => {
    let array;
    let paragraphs = [];
    const str = article.description;
    const rex = /<p>(.*?)<\/p>/g;

    while ((array = rex.exec(str))) {
      paragraphs.push(array[1]);
    }
    let desc = paragraphs[0];
    if (desc == '') {
      desc = paragraphs[1];
    }
    return desc;
  };

  const description = getDescription();

  return (
    <View style={styles.NewsItemContainer}>
      <TouchableOpacity onPress={handleNewsDetail}>
        <Image source={{uri: image}} style={styles.newsImage} />
        <Text style={styles.newsTitle}>{article.title}</Text>
        <Text>{article.published}</Text>
        <Text numberOfLines={2}>{description}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  NewsItemContainer: {
    margin: 10,
  },
  newsTitle: {
    fontSize: 20,
  },
  newsImage: {
    width: 400,
    height: 200,
  },
});

import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NewsList from '../components/NewsList';

const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export default function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    return fetch('https://www.xatakandroid.com/tag/feeds/rss2.xml')
      .then(response => response.text())
      .then(async responseData => {
        const rss = await rssParser.parse(responseData);
        const res = [];
        for (const key in rss.items) {
          if (Object.hasOwnProperty.call(rss.items, key)) {
            const element = rss.items[key];
            res.push(element);
          }
        }
        // save to local storage
        storeData(res);
        setArticles(res);
      })
      .catch(async e => {
        //If fetching didnt work, fetch from local storage
        console.log(e);
        const savedData = await getData();
        setArticles(savedData);
      });
  };

  return (
    <View style={styles.HomePageContainer}>
      <ScrollView>
        <Text style={styles.title}>Intelygenz RSS</Text>
        <NewsList articles={articles} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  HomePageContainer: {},
  title: {
    fontSize: 30,
    alignSelf: 'center',
  },
});

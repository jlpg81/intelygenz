import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as rssParser from 'react-native-rss-parser';

import NewsList from '../components/NewsList';

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
        // console.log(rss.title);
        // console.log(rss.items.length);
        // console.log(rss.items[0]);
        const res = [];
        for (const key in rss.items) {
          if (Object.hasOwnProperty.call(rss.items, key)) {
            const element = rss.items[key];
            res.push(element);
          }
        }
        setArticles(res);
      })
      .catch(e => console.log('problem fetching'));
  };

  return (
    <View style={styles.HomePageContainer}>
      <NewsList articles={articles} />
    </View>
  );
}

const styles = StyleSheet.create({
  HomePageContainer: {},
});

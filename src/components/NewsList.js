import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import NewsItem from './NewsItem';

export default function NewsList({articles}) {
  return (
    <View>
      {articles?.map((article, key) => (
        <NewsItem key={key} article={article} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});

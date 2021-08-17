import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import HTMLView from 'react-native-htmlview';

function renderNode(node, index, siblings, parent, defaultRenderer) {
  if (node.name == 'img') {
    const a = node.attribs;
    console.log(a);
    return (
      <View
        key={index}
        style={{
          width: 400,
          alignItems: 'stretch',
          justifyContent: 'center',
          alignContent: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={{uri: a.src}}
          style={{
            height: 200,
            width: 200,
            justifyContent: 'center',
          }}
        />
      </View>
    );
  }
}

export default function NewsDetailPage(props) {
  //   console.log(props.route.params.article);
  //   console.log(article.title, article.authors[0].name);
  let text = props.route.params.article.description;
  text = text.replace(/\n/g, '');
  text = text.replace(/src="\/\//g, 'src="https://');
  console.log(text);
  return (
    <ScrollView>
      {/* <Text>{props.route.params.article.id}</Text> */}
      <Text>{props.route.params.article.title}</Text>
      <Text>{props.route.params.article.authors[0].name}</Text>
      <Text>{props.route.params.article.published}</Text>
      {/* <Text>{text}</Text> */}
      {/* <Image
        source={'https://i.blogs.es/fa39a9/greaders/1024_2000.jpg'}
        style={styles.img}
      /> */}
      <HTMLView value={text} stylesheet={styles} renderNode={renderNode} />
      {/* <HTMLView
        value={
          '<img src="https://static01.nyt.com/images/2017/06/01/world/01LondonUber4/01LondonUber4-superJumbo-v2.jpg">'
        }
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // img: {
  //   height: 100,
  //   width: 100,
  //   backgroundColor: 'red',
  // },
  // // Image: {
  // //   height: 100,
  // //   width: 100,
  // //   backgroundColor: 'red',
  // // },
});

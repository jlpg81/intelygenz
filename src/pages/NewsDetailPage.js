import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import HTMLView from 'react-native-htmlview';

function renderNode(node, index, siblings, parent, defaultRenderer) {
  if (node.name == 'img') {
    const a = node.attribs;
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
            width: 400,
            justifyContent: 'center',
          }}
        />
      </View>
    );
  }
}

export default function NewsDetailPage(props) {
  let text = props.route.params.article.description;
  text = text.replace(/\n/g, '');
  text = text.replace(/src="\/\//g, 'src="https://');
  const url = props.route.params.article.links[0].url;

  const handleOpenInBrowser = async () => {
    await Linking.openURL(url);
  };

  return (
    <ScrollView>
      <Text style={styles.title}>{props.route.params.article.title}</Text>
      <Text>{props.route.params.article.authors[0].name}</Text>
      <Text>{props.route.params.article.published}</Text>
      <TouchableOpacity
        style={styles.openBrowser}
        onPress={handleOpenInBrowser}>
        <Text>View in Browser</Text>
      </TouchableOpacity>

      <HTMLView value={text} stylesheet={styles} renderNode={renderNode} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  openBrowser: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
});

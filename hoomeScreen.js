import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button } from 'react-native';

export default function hoomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-03&sortBy=publishedAt&apiKey=325d44dde51646aab64261e82e3ddf6a'
    )
      .then((response) => response.json())
      .then((json) => setData(json.news))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 9, padding: 30 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={{ margin: 30 }}>
              <Button
                title={item.title}
                onPress={() =>
                  navigation.navigate('details', {
                    title: item.title,
                    description: item.description,
                    urlToImage: item.urlToImage,
                  })
                }
              />
            </View>
          )}
        />
      )}
    </View>
  );
}
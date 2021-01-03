import * as React from 'react';
import { Text, View} from 'react-native';


export default function DetailsScreen({route}) {

   const { title, description, urlToImage} = route.params;

  return (
    <View>
      <Text style={{fontSize: 32, marginBottom: 22}}>{JSON.stringify(title)}</Text>
      <Text style={{ flex: 2, fontSize: 14, alignItems: 'center', marginBottom: 30, justifyContent: 'center' }}>{JSON.stringify(description)}</Text>
      <Text style={{ flex: 2, fontSize: 14, alignItems: 'center', justifyContent: 'center', color:'red' }}>URL: {JSON.stringify(urlToImage)}</Text>
    </View>
  );
}
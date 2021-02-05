import * as React from 'react';
import { Text, StyleSheet, View, ScrollView} from 'react-native';
import BannerComponent from '../components/BannerComponent';


export default function(props:{navigation:any}){  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BannerComponent navigation={(props as any).navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

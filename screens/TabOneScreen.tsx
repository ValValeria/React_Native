import * as React from 'react';
import { Text, StyleSheet, View, ScrollView} from 'react-native';
import BannerComponent from '../components/BannerComponent';

export default class extends React.PureComponent {
  constructor(props: {} | Readonly<{}>){
    super(props);
    this.state = {};
  }

  render(): JSX.Element{
    return (
      <ScrollView contentContainerStyle={styles.container}>
           <BannerComponent navigation={(this.props as any).navigation}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import * as React from 'react';
import { FlatList, View } from 'react-native';
import {connect} from 'react-redux';
import { IResult, IStore, Post } from '../interfaces';
import {Card, Text} from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const mapSelectData: (state: { data: IStore }) => IResult = (state: any)=>({
     text: state.data.searchText,
     posts: state.data.posts
})

const RenderItem: (obj:{item: Post})=>JSX.Element = ({item})=>{
  return (
      <Card>
          <Card.Title>{item.title}</Card.Title>
          <Card.Image source={{uri: item.image}}/>
          <Card.FeaturedSubtitle>
              {item.author}
          </Card.FeaturedSubtitle>
      </Card>
  );
};

class SearchResultComponent extends React.PureComponent{
    constructor(props: {} | Readonly<{}> | IResult){
       super(props);
    }
    render(){
        return (
            <View>
               <SafeAreaView>
                   <FlatList
                   data = {(this.props as any).posts}
                   renderItem={RenderItem}
                   ListHeaderComponent={()=>{
                       return (
                           <Card>
                               <Card.Title>
                                   You are looking for {(this.props as any).text}
                               </Card.Title>
                           </Card>
                       )
                   }}
                   />
                </SafeAreaView>  
            </View>
        );
    }
}


export default connect(mapSelectData)(SearchResultComponent);
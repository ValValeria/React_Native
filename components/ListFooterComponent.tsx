import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { IStore } from '../interfaces';
import { fetchPhotoes } from '../store/actions';
import { changePageNum } from '../store/reducer';

function mapStateToProps(state: { data: IStore }) {
    return {
        count: state.data.posts.length
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        changePage() {
            dispatch(changePageNum())
        },
        fetch() {
            dispatch(fetchPhotoes())
        }
    };
}

class EmptyResultsComponent extends React.PureComponent {

    viewMore() {
        (this.props as any).changePage();
        (this.props as any).fetch();
    }

    render() {
        return (
            <View style={{flex: 1 ,alignItems:"center",justifyContent:"center"}}>
                <Text h4 style={{ textAlign: 'center', paddingTop: "1rem" }}>
                    You have viewed more than {(this.props as any).count}
                </Text>
                <Button
                    onPress={this.viewMore.bind(this)}
                    style={{margin: '0 auto',marginTop: "10px",width:"80%", minWidth:"150px"}}
                    title={"view more"}
                    type="outline"
                />
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmptyResultsComponent);
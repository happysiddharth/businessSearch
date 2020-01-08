import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultDetails from "../component/resultDetails";

const ResultsList = ({title,res,navigation})=>{
    if(!res){
        return null;
    }
    return <View style={style.container}>
        <Text style={style.title}>{title}</Text>
        <FlatList horizontal
                  data={res}
                  keyExtractor={result=>result.id}
                  renderItem={({item})=>{
                      return (
                          <TouchableOpacity onPress={()=>{
                              navigation.navigate('ResultsShow',{id:item.id})
                          }}>
                              <ResultDetails  result={item}/>
                          </TouchableOpacity>

                      );
                  }}
                  showsHorizontalScrollIndicator={false}
        />
    </View>
};
const style = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom: 5
    },
    container:{
        marginBottom:10
    }
});
export default withNavigation(ResultsList);
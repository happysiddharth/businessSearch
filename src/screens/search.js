import React  from 'react';
import { Text, StyleSheet,View ,TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';



const searchScreen = ({term,onTermChange,onTermSubmit})=>{


    return <View style={style.view_style}>
        <Feather name="search" style={style.icon}/>
        <TextInput style={style.textInput}
                   autoCapitalize="none"
                   autoCorrect={false}
                   placeholder="Search"
                   value={term}
                   onChangeText={newTerm=>onTermChange(newTerm)}
                   onEndEditing={onTermSubmit}
        />
    </View>
};
const style = StyleSheet.create({
    textInput:{
        fontSize: 30,
        flex:1
    },
    view_style:{
        flexDirection:"row",
        backgroundColor:"#F0EEEE",
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        marginTop:15
    },
    icon:{
        fontSize: 30,
        marginHorizontal: 3,
        fontWeight:'bold',
        alignSelf:'center'
    }
});
export default searchScreen;
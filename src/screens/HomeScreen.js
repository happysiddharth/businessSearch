import React,{useState,useEffect} from 'react';
import { Text, StyleSheet ,View,ScrollView} from 'react-native';
import Search from './search';
import useResults from "../hooks/useResults";
import ResultsList from "./result";

  const HomeScreen = () => {

  const [term,SetTerm] = useState('');
  const [error,searchApi,result]=useResults('');
  const filterResultByType=(price)=>{
    //price === '$ || '$$ || '$$$'
    return result.filter(result=>{
      return result.price == price;
    })

  };
  return <View style={{flex:1}} >
    <Search term={term}
            onTermChange={newTerm=>SetTerm(newTerm)}
            onTermSubmit={()=>searchApi(term)}
    />
    {error?<Text>{term}</Text>:null}
    <ScrollView>
    <ResultsList title="Cost efficient"
                 res={filterResultByType('$')}

    />
    <ResultsList title="Bit Pricer"
                 res={filterResultByType('$$')}

    />
    <ResultsList title="Big Spender"
                 res={filterResultByType('$$$')}

    />
    </ScrollView>
  </View>

};

const styles = StyleSheet.create({

});

export default HomeScreen;

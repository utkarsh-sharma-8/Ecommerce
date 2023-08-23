import React from 'react'
import { FlatList, Text, View } from 'react-native'

const Search=({data,input,setInput})=> {
    return (
      <View>
        <FlatList data={data} renderItem={({item})=>{
            if(input===""){
                return(
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )
            }
            if(item.name.toLowerCase().includes(input.toLowerCase())){
                return(
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )
            }
        }}/>
      </View>
    )
}


export default Search;

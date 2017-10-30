import React from 'react';
import {View, Text, Image, Button} from 'react-native';

const Banana = ({text}) => {
    
    let image = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      }
      return(
        <View style={styles.bananaStyle}>
          <Image source={image} style={{width: 193, height: 110}}/>
          <Text style={styles.textStyle}>{text}</Text>
          <Button title="hej Zaeem"/>
        </View>
      );
    };
    
    const styles = {
      bananaStyle: {
        marginTop: 30
      }, 
      textStyle: {
      fontSize: 50
    }
}

export default Banana;
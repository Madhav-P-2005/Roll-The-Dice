import React, { useState } from 'react';

import type { PropsWithChildren } from 'react';
// How to declare the type of a variable not always variables something other data types or other values or maybe a component is being declared this is where 

import {
  Image,
  ImageSourcePropType,   Pressable,   // 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback, { trigger } from 'react-native-haptic-feedback';

import DiceOne from '../assets/One.png'   // TypeScript Special Error :-   You need to declare these images as a module . To resolve create a new file  index.d.ts  . # Imported all these images into a Variable.
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour  from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'



// So when ever I create a dice component in thet I want to pass on images now you can directly pass on images as well but this is actually a better approach this is actually a error prone approach. 
type  DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType    // Strictly mentioned as image so accepts only Image type . 
}>

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


// Component here is Dice .
const Dice = ({imageUrl} : DiceProps) : React.JSX.Element =>{

    return(
      <View>
        <Image style={styles.diceImage} source={imageUrl}/>
      </View>
    )
}

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap = () =>{
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        break;
    }

    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger('impactLight', options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable>
        <Text onPress={rollDiceOnTap}  style={styles.rollDiceBtnText}> Roll the Dice </Text>
      </Pressable>
    </View>
  );
};

 


const styles = StyleSheet.create({
   container:{
    flex : 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FFF2F2',
   },

   diceContainer:{
    margin:12, 
   },

   diceImage:{
    width:200,
    height:200,
    marginBottom:34,
   },

   rollDiceBtnText:{
    paddingVertical:10,
    paddingHorizontal:40,
    borderWidth:2,
    borderRadius:8,
    borderColor:'#ESE0FF',
    fontSize: 16,
    color:'#8EA7E9',
    fontWeight:'900',
    textTransform:'uppercase',
   },
});

export default App;
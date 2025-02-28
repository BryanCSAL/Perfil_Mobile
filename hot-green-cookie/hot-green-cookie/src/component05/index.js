import { Text, View, Image } from 'react-native';
import {styles} from '../Styles/index'

function component05(){
  let img = 'https://www.landrin.com.br/upload/pragas_5_66_1538744895.jpg'

return(
  <View style={[styles.imagem]}>
    <Image 
      source={{ uri: img }}
      style={{ width: 200, height: 200}}
    />
  </View>
)}


export default component05;

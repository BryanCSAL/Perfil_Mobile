import { Text, View } from 'react-native';
import {styles} from '../Styles/index'

function component01(){
return(
  <View>

    <Text style={[styles.textoPrincipal]}>Dados Pessoais </Text>
    <Text style={[styles.textoSecundario]}> Bryan Lopes {'\n\n'}</Text>

  </View>
)}


export default component01;

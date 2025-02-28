import { Text, View } from 'react-native';
import {styles} from '../Styles/index'

function component04(){
return(
  <View>

    <Text style={[styles.textoPrincipal]}>Projetos </Text>
    <Text style={[styles.textoSecundario]}> ROBATA </Text>
    <Text style={[styles.textoSecundario]}> Gerenciador de Artigos </Text>
    <Text style={[styles.textoSecundario]}> Keylogger {'\n\n'}</Text>
  </View>
)}


export default component04;

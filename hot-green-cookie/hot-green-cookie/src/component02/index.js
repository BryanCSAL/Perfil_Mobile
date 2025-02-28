import { Text, View } from 'react-native';
import {styles} from '../Styles/index'

function component02(){
return(
  <View>

    <Text style={[styles.textoPrincipal]}>Formação </Text>
    <Text style={[styles.textoSecundario]}> Técnico em desenvolvimento de sistema (Completo)</Text>
    <Text style={[styles.textoSecundario]}> Análise e Desenvolvimento de Sistemas (Em Andamento) {'\n\n'}</Text>

  </View>
)}


export default component02;

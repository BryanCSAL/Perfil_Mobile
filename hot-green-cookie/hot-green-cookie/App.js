import { Text, View, Image } from 'react-native';
import DadosPessoais from './src/component01';
import Formacao from './src/component02';
import Experiencia from './src/component03';
import Projetos from './src/component04';
import Imagem from './src/component05';

function App(){
return(
  <View  style={{ marginTop: 50}}>

  <Imagem />
  <DadosPessoais />
  <Formacao />
  <Experiencia />
  <Projetos />


  </View>
)}


export default App

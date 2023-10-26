import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
  } from 'react-native';
  
  import {styles} from './styles';

  
  interface Props extends TouchableOpacityProps{
    title:string;
  }
  export function Button({title, ...rest}:Props){
    const backgroundColorButton = title ==='+'? '#1E6F9F': '#E23C44';
    
    return (
       <TouchableOpacity style={[styles.button,{backgroundColor:backgroundColorButton}]} {...rest}>
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    )
  }
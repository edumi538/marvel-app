import {ComponentText} from './Components/homeText';

export default function() {
  const objetoPropriedade = {
    texto: 'HOME PAGE',
  };

  return <ComponentText texto={objetoPropriedade.texto} />;
}

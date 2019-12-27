import {
  ON_MARVEL_CHAR_GET,
  ON_MARVEL_CHAR_GET_FAILED,
} from '../../Types/ActionTypes';
import {Alert} from 'react-native';
import md5 from 'js-md5';
import axios from 'axios';

const PUBLIC_KEY = '0a91ae0d737326d0980b58bd11529aff';
const PRIVATE_KEY = '97e6ba85c784f341cf968e222a0194b9551804e7';

export const getHeroes = () => {
  const timestamp = Number(new Date());
  const hash = md5.create();
  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

  return dispatch => {
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
      )
      .then(Response => {
        if (Response.status === 200) {
          dispatch(
            {
              type: ON_MARVEL_CHAR_GET,
              payload: Response.data.data.results,
            },
            console.tron.log(dispatch.payload),
          );
        } else {
          Alert.alert('Erro, Não foi possível fazer a captura dos dados');
          dispatch({
            type: ON_MARVEL_CHAR_GET_FAILED,
            payload: false,
          });
        }
      });
  };
};

export const clearHeroes = () => {
  return {
    type: ON_MARVEL_CHAR_GET,
    payload: [],
  };
};

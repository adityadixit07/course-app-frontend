import { server } from '../Store';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });
    const config={
      headers:{
        "Content-type":"application/json",
        // credentials:true
      }
    }
    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
        config,
    );
    console.log(data);
    dispatch({ type: 'loginSuccess', paylaod: data });
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'loginFail',
      paylaod:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

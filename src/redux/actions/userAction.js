import { server } from '../Store';
import axios from 'axios';

export const login =
  (email,password) =>
  async dispatch => {
    try {
      dispatch({ type: 'loginRequest' });
      const { data } = await axios.post(
        `${server}/login`,
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      console.log(data);
      dispatch({ type: 'loginSuccess', payload: data });
    } catch (error) {
      console.log(error); 
      // dispatch({ type: 'loginFail', payload: error.response?.data?.message });
      dispatch({ type: 'loginFail', payload: error.response.data.message });
    }
  };

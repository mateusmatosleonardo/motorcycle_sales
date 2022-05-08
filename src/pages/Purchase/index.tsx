import React, {useEffect} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {api} from '../../utils/api';
import {useRoute} from '@react-navigation/native';
import {theme} from '../../styles/theme';

const Purchase = () => {
  const route = useRoute();
  const {id} = route.params as {id: number};
  const [motorcycle, setMotorcycle] = React.useState({
    id: 0,
    price: 0,
  });
  const [loading, setLoading] = React.useState(true);
  const getData = React.useCallback(() => {
    api
      .get(`/motos?id=${id}`)
      .then(({data}) => {
        setMotorcycle(data[0]);
        setLoading(false);
      })
      .catch(err => console.log(err + 'Erro ao buscar dados'));
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.green} />
      ) : (
        <View>
          <Text style={{color: '#313030'}}>{motorcycle.price}</Text>
        </View>
      )}
    </>
  );
};

export default Purchase;

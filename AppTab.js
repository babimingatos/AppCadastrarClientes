import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AppFormCliente from './AppFormCliente';
import AppFormServico from './AppFormServico';

const {Navigator, Screen} = createBottomTabNavigator();


function AppTab(){
  return(
      <NavigationContainer>

        <Navigator tabBarOptions={{
          style:{
            elevation: 0,
            shadowOpacity: 0,
            height:60,
          },

          tabStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },

          labelStyle:{
            fontSize: 18,
            marginLeft: 10, 
          },

          inactiveBackgroundColor:'#9CE6DC',
          activeBackgroundColor:'#27E6AE',
          inactiveTintColor:'#696969',
          activeTintColor:'#000000',

        }}
        >

        <Screen name="Cliente" component={AppFormCliente}/>
        <Screen name="Serviço" component={AppFormServico}/>
        </Navigator>

      </NavigationContainer>

  );
}
export default AppTab;

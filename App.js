import React, { useState, useRef } from 'react';
import Constants from 'expo-constants';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

import {
  extendTheme,
  NativeBaseProvider,
  Select,
  CheckIcon,
  Center,
  Box,
  HStack,
  Text,
  Button,
} from 'native-base';

import AppBar from './components/AppBar';
import SelectComponent from './components/Select';

const newColorTheme = {
  brand: {
    100: '#EBF2FA',
    200: '#05668D',
    300: '#427AA1',
  },
  fonts: {
    inter: Inter_900Black,
  },
};
const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  const [result, setResult] = useState(0);

  const [uc, setUc] = useState(0);
  const [bes, setBes] = useState(0);
  const [yedi, setYedi] = useState(0);

  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  function hesapla(uc, bes, yedi) {
    // üçe bölümünden kalanı 70 ile ;
    // Beşe bölümünden kalanı 21 ile ;
    // Yediye bölümünden kalanı 15 ile çarpıyoruz :
    var sayi = 70 * uc + 21 * bes + 15 * yedi;
    //  105 üzerinden modunu alıyoruz :
    sayi %= 105;

    // Değerimizi state'e yansıtıyoruz :
    setResult(sayi);
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Center height="100%" width="100%" bg="brand.100">
        <AppBar />
        <Box
          bg="white"
          width="60%"
          height="40%"
          alignItems="center"
          justifyContent="center">
          <Text
            color="brand.200"
            fontSize="164"
            fontWeight="bold"
            fontFamily="inter">
            {result}
          </Text>
        </Box>
        <Box my={20}>
          <HStack space={3} justifyContent="center">
            <SelectComponent
              onValueChange={(itemValue) => setUc(itemValue)}
              selectedValue={uc}
              itemCount={3}
            />
            <SelectComponent
              onValueChange={(itemValue) => setBes(itemValue)}
              selectedValue={bes}
              itemCount={5}
            />
            <SelectComponent
              onValueChange={(itemValue) => setYedi(itemValue)}
              selectedValue={yedi}
              itemCount={7}
            />
          </HStack>
          <Button my={5} bg="brand.300" onPress={() => hesapla(uc, bes, yedi)}>
            Hesapla!
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

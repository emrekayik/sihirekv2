import { useState } from 'react';
import { StatusBar, Box, HStack, Text, IconButton, Modal, FormControl,Input,Button } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

function AppBar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="dark-content" />
      <Box safeAreaTop bg="" />
      <HStack py="45" alignItems="center" justifyContent="center">
        <HStack py="45" alignItems="flex-end" justifyContent="center">
          <Text color="brand.200" fontSize="48" fontWeight="bold">
            SihirEK
          </Text>
          <Text color="brand.200" fontSize="12" fontWeight="bold">
            v2.0
          </Text>
        </HStack>

        <IconButton
          variant="outline"
          _icon={{
            as: AntDesign,
            name: 'info',
          }}
          h="10"
          w="10"
          ml="10"
          onPress={() => setShowModal(true)}
        />
      </HStack>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Nasıl Kullanılır?</Modal.Header>
          <Modal.Body>
            <Text>Aklınızdan bir sayı tutun(0-100 arasında) ardından ekranın altındaki butonlara sırasıyla tuttuğunuz sayının 3’e, 5’e ve 7’ye bölümünden kalan sayıyı giriniz ve Hesapla! butonuna tıklayın ve sonucu görün!</Text>
          </Modal.Body>
          <Modal.Footer>
              <Button onPress={() => {
              setShowModal(false);
            }}
            bg="brand.300"
            >
                Anlaşıldı
              </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default AppBar;

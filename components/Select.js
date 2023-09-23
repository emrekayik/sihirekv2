import React, { useState } from 'react';
import { Select, CheckIcon } from 'native-base'; // UI kit kullanıyorsanız uygun kütüphaneyi ekleyin

function SelectComponent({ selectedValue, onValueChange, itemCount }) {
  const [service, setService] = useState(selectedValue);

  const renderItems = () => {
    const items = [];
    for (let i = 0; i < itemCount; i++) {
      const itemValue = i.toString();
      items.push(
        <Select.Item
          key={itemValue}
          label={itemValue}
          value={itemValue}
        />
      );
    }
    return items;
  };

  return (
    <Select
      selectedValue={service}
      accessibilityLabel={itemCount.toString()}
      placeholder={itemCount.toString()}
      placeholderTextColor="brand.100"
      _selectedItem={{
        bg: 'teal.100',
        centerIcon: <CheckIcon size="5" />,
      }}
      h="20"
      w="20"
      bg="#427AA1"
      color="brand.100"
      mt={1}
      onValueChange={(itemValue) => {
        setService(itemValue);
        onValueChange(itemValue);
      }}>
      {renderItems()}
    </Select>
  );
}
export default SelectComponent;

import React, { useState } from 'react';
import AddressBox from './AddressBox';

export const simple = () => {
  const [addressInfo, setAddressInfo] = useState();

  return <AddressBox onChange={(o) => console.log(o)} label="Street Address" />;
};

export default { title: 'Components/AddressBox' };

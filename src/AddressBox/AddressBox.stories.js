import React, { useState } from 'react'
import AddressBox from './AddressBox'

export const simple = () => {
  const [addressInfo, setAddressInfo] = useState()

  return <AddressBox />
}

export default { title: 'Components/AddressBox' }

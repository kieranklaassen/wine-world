import React, { useState } from 'react'
import AddressBox from './AddressBox'

export const simple = () => {
  const [addressInfo, setAddressInfo] = useState()

  return (
    <>
      <AddressBox
        label="Street Address"
        requireFullAddress
        onChange={a => setAddressInfo(a)}
        error={addressInfo && addressInfo.state != 'completed'}
        helperText={
          addressInfo &&
          (addressInfo.state == 'empty' ? 'This field is required' : 'Please enter a full address')
        }
      />
      {addressInfo && addressInfo.state}
    </>
  )
}

export default { title: 'Components/AddressBox' }

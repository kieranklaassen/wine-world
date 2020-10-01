import React, { useState } from 'react'
import AddressBox from './AddressBox'

export const simple = () => {
  const [addressInfo, setAddressInfo] = useState()

  return (
    <>
      <AddressBox label="Street Address" onChange={a => setAddressInfo(a)} />
      <pre>{JSON.stringify(addressInfo, 0, 2)}</pre>
    </>
  )
}

export const editExisting = () => {
  const [addressInfo, setAddressInfo] = useState()

  return (
    <>
      <AddressBox
        label="Street Address"
        onChange={a => setAddressInfo(a)}
        value="1 N State St, Chicago IL 60602"
      />
      <pre>{JSON.stringify(addressInfo, 0, 2)}</pre>
    </>
  )
}

export const required = () => {
  const [addressInfo, setAddressInfo] = useState()

  return (
    <>
      <AddressBox label="Street Address" onChange={a => setAddressInfo(a)} required />
      <pre>{JSON.stringify(addressInfo, 0, 2)}</pre>
    </>
  )
}

export const partialAddressAllowed = () => {
  const [addressInfo, setAddressInfo] = useState()

  return (
    <>
      <AddressBox label="Street Address" onChange={a => setAddressInfo(a)} required allowPartial />
      <pre>{JSON.stringify(addressInfo, 0, 2)}</pre>
    </>
  )
}

export default { title: 'Components/AddressBox' }

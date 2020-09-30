import { render } from '@redwoodjs/testing'

import AddressBox from './AddressBox'

describe('AddressBos', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddressBox apiKey="someKey" />)
    }).not.toThrow()
  })
})

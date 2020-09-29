import { render } from '@redwoodjs/testing'

import AddressForm from './AddressForm'

describe('AddressForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddressForm />)
    }).not.toThrow()
  })
})

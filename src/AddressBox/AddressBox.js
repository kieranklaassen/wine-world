import React from 'react'
import { useState } from 'react'
import usePlacesAutocomplete, { getDetails } from 'use-places-autocomplete'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { useScript } from 'use-script'

const AddressBox = ({ onChange }) => {
  useScript({
    src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places&callback=initMap`,
  })

  const {
    suggestions: { data },
    setValue,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
    callbackName: 'initMap',
  })

  const [selection, setSelection] = useState()

  async function handleSelect(_, newValue) {
    setSelection(newValue)
    typeof onChange === 'function' && onChange(await getDetails(newValue))
  }

  return (
    <div>
      <h2>{'AddressBox'}</h2>
      <Autocomplete
        options={data}
        filterOptions={(x) => x}
        getOptionLabel={(suggestion) => suggestion.description}
        onChange={handleSelect}
        onInputChange={(_, newInputValue) => setValue(newInputValue)}
        renderInput={(params) => (
          // TODO: This is where the design language gets applied
          <TextField {...params} label='Street Address' variant='outlined' />
        )}
        renderOption={(option) => (
          <>
            <strong>{option.structured_formatting.main_text}</strong>&nbsp;
            <em>{option.structured_formatting.secondary_text}</em>
          </>
        )}
      />
    </div>
  )
}

export default AddressBox

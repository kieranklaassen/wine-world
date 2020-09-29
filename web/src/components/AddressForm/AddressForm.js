import { useState } from 'react'
import usePlacesAutocomplete from 'use-places-autocomplete'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { useScript } from 'use-script'

const AddressForm = ({ apiKey, onChange }) => {
  useScript({
    src: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`,
  })
  const {
    value,
    suggestions: { data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
    callbackName: 'initMap',
  })

  const [selection, setSelection] = useState()

  const handleSelect = (_, newValue) => {
    setSelection(newValue)
    onChange && onChange()
  }

  console.log(selection)

  return (
    <div>
      <h2>{'AddressForm'}</h2>
      <Autocomplete
        options={data}
        filterOptions={(x) => x}
        getOptionLabel={(suggestion) => suggestion.description}
        onChange={handleSelect}
        onInputChange={(_, newInputValue) => setValue(newInputValue)}
        renderInput={(params) => (
          <TextField {...params} label="Street Address" variant="outlined" />
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

export default AddressForm

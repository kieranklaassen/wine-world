import React, { useState } from 'react'

import usePlacesAutocomplete, { getDetails } from 'use-places-autocomplete'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { useScript } from 'use-script'
import { camelCase } from 'camel-case'

/**
 * Auto-completing address box that requires the user to select an address from Google's Places API.
 * Assumes a suitable API key in the GOOGLE_API_KEY environment variable

 * @param {*} props
 * @param {*} props.onChange
 * @param {*} props.label
 * @param {*} props.requireFullAddress
 * @param {*} props.value
 */
const AddressBox = ({ onChange, requireFullAddress, value, ...props }) => {
  useScript({
    src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places&callback=initMap`
  })

  const [inputValue, setInputValue] = useState(value)

  const {
    suggestions: { data },
    setValue
  } = usePlacesAutocomplete({
    debounce: 300,
    callbackName: 'initMap'
  })

  /**
   * If user selects or unselects a suggested value, fetch and arrange details from Google, and fire onChange
   *
   * @param {*} newValue The selected suggestion as represented by usePlacesAutoComplete
   */
  async function handleSelect(_, newValue) {
    const details = newValue && (await getDetails(newValue))
    console.log(details)

    debugger
    const result = {
      state: details
        ? !requireFullAddress || ['premise', 'street_address'].some(t => details.types.includes(t))
          ? 'completed'
          : 'incomplete'
        : 'empty'
    }

    details &&
      details.address_components.forEach(addressComponent => {
        result[camelCase(addressComponent.types[0])] = addressComponent.long_name
      })

    typeof onChange === 'function' && onChange(result)
  }

  return (
    <Autocomplete
      openOnFocus={false}
      options={data}
      inputValue={inputValue}
      filterOptions={x => x}
      getOptionLabel={suggestion => suggestion.description}
      getOptionSelected={(option, value) => option.place_id == value.place_id}
      onChange={handleSelect}
      onInputChange={(_, newInputValue) => {
        // TODO: Figure out why usePlacesAutocomplete is trying to reset the inputValue to an empty string
        if (newInputValue || inputValue != value) {
          setValue(newInputValue)
          setInputValue(newInputValue)
        }
      }}
      renderInput={params => (
        // TODO: remove onMouseDownCapture once a fix for mui-org/material-ui#20286 (mouseDown event doesn't respect openOnFocus) is released
        <TextField
          {...params}
          {...props}
          variant="outlined"
          onMouseDownCapture={e => e.stopPropagation()}
        />
      )}
      renderOption={option => (
        <>
          <strong>{option.structured_formatting.main_text}</strong>&nbsp;
          <em>{option.structured_formatting.secondary_text}</em>
        </>
      )}
    />
  )
}

export default AddressBox

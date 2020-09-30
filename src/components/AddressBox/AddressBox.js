import React from 'react';
import { useState } from 'react';
import usePlacesAutocomplete, { getDetails } from 'use-places-autocomplete';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useScript } from 'use-script';
import { camelCase } from 'camel-case';

const AddressBox = ({ onChange, label, requireFullAddress }) => {
  useScript({
    src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places&callback=initMap`,
  });

  const {
    suggestions: { data },
    setValue,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
    callbackName: 'initMap',
  });

  async function handleSelect(_, newValue) {
    const details = newValue && (await getDetails(newValue));
    console.log(details);

    const result = {
      state: details ? 'completed' : 'empty',
    };

    details &&
      details.address_components.forEach((addressComponent) => {
        result[camelCase(addressComponent.types[0])] = addressComponent.long_name;
      });

    typeof onChange === 'function' && onChange(result);
  }

  return (
    <Autocomplete
      options={data}
      filterOptions={(x) => x}
      getOptionLabel={(suggestion) => suggestion.description}
      getOptionSelected={(option, value) => option.place_id == value.place_id}
      onChange={handleSelect}
      onInputChange={(_, newInputValue) => setValue(newInputValue)}
      renderInput={(params) => (
        // TODO: This is where the design language gets applied
        <TextField {...params} label={label} variant="outlined" />
      )}
      renderOption={(option) => (
        <>
          <strong>{option.structured_formatting.main_text}</strong>&nbsp;
          <em>{option.structured_formatting.secondary_text}</em>
        </>
      )}
    />
  );
};

export default AddressBox;

import React from "react"
import { FiltersStyle } from "./Filters.styles"
import { FiltersProps } from "./Filters.d"

import Checkbox from './../Checkbox';

const Filters: React.FC<FiltersProps> = ({

}) => (
  <FiltersStyle>
    <h2>Kategorie</h2>
      <Checkbox
        id="1"
        label="category"
        />
      <Checkbox
        id="2"
        label="category"
      />
      <Checkbox
          id="3"
         label="category"
        />
  </FiltersStyle>
)

export default Filters;
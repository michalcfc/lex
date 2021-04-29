import { useRouter } from 'next/router'
import { useState } from "react"
import { SearchProps } from "./Search.d"
import { 
    SearchStyle,
} from "./Search.styles";

import Input from "../Input"
import Autocomplates from "./components/Autocomplates"

import db from "../../api/db.json"

const ENTER = 13
const ARROW_UP = 40
const ARROW_DOWN = 38

const Search: React.FC<SearchProps> = () => {
    const router = useRouter()
    const [searchText, setSearchText] = useState('')
    const [autocompletes, setAutocompletes] = useState([])
    const [isAutocomplatesShow, setShowAutocomplates] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(0)

    const handleChange = (e) => {
        const products = db.products
        const searchText = e.target.value
        if (!searchText) {
            setSearchText('')
            setAutocompletes([]) 
        } 
        const filtered = products.filter(product => {
            return product.name
            .toLowerCase()
            .includes(searchText.toLowerCase())
           })
           setSearchText(searchText);
           setAutocompletes(filtered);
      } 

      const onKey = (e) => {
        if(
            e.keyCode === ARROW_UP){
            setSelectedProduct(selectedProduct+1)
        }
        else if (
            e.keyCode === ARROW_DOWN 
            && selectedProduct != 0) {
            setSelectedProduct(selectedProduct-1)
        }
      }

      const goToProduct = (e) => {
          if(e.keyCode === ENTER) {
            const product = autocompletes[selectedProduct]
            router.push(`/products/${product.name}`)
        }
      }

  return (
  <>
    <SearchStyle 
        onMouseEnter={() => setShowAutocomplates(true)}
        onMouseLeave={() => setShowAutocomplates(false)}
        >
        <Input 
            value={searchText}
            placeholder="Szukaj"
            label="Szukaj"
            onKeyUp={(e) => onKey(e)}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => goToProduct(e)}
        />
        {
            isAutocomplatesShow &&
            <Autocomplates 
                searchText={searchText}
                goToProduct={goToProduct}
                autocompletes={autocompletes}
                selectedProduct={selectedProduct}
            />
        }
    </SearchStyle>
  </>
  )
}

export default Search;
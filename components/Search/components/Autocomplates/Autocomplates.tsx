import Link from 'next/link'
import { 
    AutocomplatesStyle,
    AutocomplatesList,
    AutocomplatesText,
    AutocomplatesItem
     
} from "./Autocomplates.styles"

import { AutocomplatesProps } from "./Autocomplates.d"

const NO_PRODUCTS_TEXT = "No results. Try again."

const Autocomplates: React.FC<AutocomplatesProps> = ({
    searchText,
    goToProduct,
    autocompletes,
    selectedProduct,
}) => {
    return (
  <>
    <AutocomplatesStyle>
    {<AutocomplatesList>
        {searchText 
        && !autocompletes.length
        ? <AutocomplatesText>{NO_PRODUCTS_TEXT}</AutocomplatesText> 
        : searchText 
        && autocompletes.map((product, index) => {
            return (
                <div key={product.id}>
                    <Link href={`/products/${product.name}`}> 
                        <AutocomplatesItem 
                            test={index === selectedProduct}
                            
                        >
                                {product.name}
                        </AutocomplatesItem>
                    </Link>
                </div>
            )
        })}
        </AutocomplatesList>}
    </AutocomplatesStyle>
  </>
)
    }
export default Autocomplates;

import React from "react"

import {
} from "./CategoriesMenu.styles"

import MenuAside from "@components/CategoriesMenu/MenuAside";
import MenuAsideMobile from "@components/CategoriesMenu/MenuAsideMobile";

import {
    CategoriesMenuProps
} from "./CategoriesMenu.d"

import { useMobileDetect }  from "./../../utilis/api"

const CategoriesMenu: React.FC<CategoriesMenuProps> = ({
    isContent,
    categories,
    tag
}) => {

    const detectMobile = useMobileDetect()
    const isMobile = detectMobile.isMobile()
    const getCategories = categories()

    return (
      <>
          {isMobile && isContent
              ? <MenuAsideMobile
                  tag={tag}
                  categories={getCategories}
              />
              : <MenuAside
                  tag={tag}
                  categories={getCategories}
              />}
      </>
    )
}

export default CategoriesMenu
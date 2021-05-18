import React from "react";
import { ICategory, SetFieldValue } from "../../../models/advance-search.model";
import AdvancedFormGroup from "./AdvancedFormGroup";
import AdvancedCategoryCombo from "./AdvancedCategoryCombo";

interface IAdvancedCategoryProps {
  category: ICategory;
  handleChange: any;
  name: string;
  index: number;
  setFieldValue: SetFieldValue;
}

const AdvancedCategory = ({
  category,
  handleChange,
  name,
  index,
  setFieldValue,
}: IAdvancedCategoryProps) => {
  return (
    <AdvancedFormGroup
      groupName="Kategoria"
      handleChange={handleChange}
      items={category.subcategories}
      key={index}
      name={`${name}[${index}].subcategories`}
      setFieldValue={setFieldValue}
      showLabel
      categoryName={category.value}
    >
      <AdvancedCategoryCombo
        category={category}
        index={index}
        name={name}
        setFieldValue={setFieldValue}
      />
    </AdvancedFormGroup>
  );
};

export default AdvancedCategory;

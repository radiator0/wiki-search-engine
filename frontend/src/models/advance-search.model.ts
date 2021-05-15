import { FormikErrors } from "formik";

export type AND = true;

export type OR = false;

export interface IField {
  label?: string;
  value: string;
  includes: boolean;
}

export interface IFieldOperator {
  operator: AND | OR | null;
  field: IField;
}

export interface IEditDate {
  from: Date;
  to: Date;
}

export interface ICategory {
  value: string;
  operator: AND | OR | null;
  subcategories: IFieldOperator[];
}

export interface IAdvancedSearchForm {
  title?: IFieldOperator[];
  content?: IFieldOperator[];
  // editDate?: IEditDate,
  categories?: ICategory[];
}

export type SetFieldValue = (
  field: string,
  value: any,
  shouldValidate?: boolean | undefined
) => Promise<void> | Promise<FormikErrors<IAdvancedSearchForm>>;

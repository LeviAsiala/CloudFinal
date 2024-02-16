/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MajorsCreateFormInputValues = {
    Name?: string;
};
export declare type MajorsCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MajorsCreateFormOverridesProps = {
    MajorsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MajorsCreateFormProps = React.PropsWithChildren<{
    overrides?: MajorsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MajorsCreateFormInputValues) => MajorsCreateFormInputValues;
    onSuccess?: (fields: MajorsCreateFormInputValues) => void;
    onError?: (fields: MajorsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MajorsCreateFormInputValues) => MajorsCreateFormInputValues;
    onValidate?: MajorsCreateFormValidationValues;
} & React.CSSProperties>;
export default function MajorsCreateForm(props: MajorsCreateFormProps): React.ReactElement;

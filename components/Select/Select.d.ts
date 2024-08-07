import { default as React } from '../../../node_modules/react';
import { BaseStylesProps, SelectProps } from './interface';

declare const SelectBaseStyles: ({ size, noBorder }?: BaseStylesProps) => {
    readonly container: () => string;
    readonly control: () => string;
    readonly groupHeading: () => string;
    readonly indicatorSeparator: () => string;
    readonly clearIndicator: () => string;
    readonly dropdownIndicator: () => string;
    readonly multiValue: () => string;
    readonly multiValueRemove: () => string;
    readonly menu: () => string;
    readonly option: () => string;
};
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<never>>;
declare const CountrySelect: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<never>>;
declare const CurrenciesSelect: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<never>>;
declare const PhoneSelect: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<never>>;
export { Select, SelectBaseStyles, CountrySelect, CurrenciesSelect, PhoneSelect, };
//# sourceMappingURL=Select.d.ts.map
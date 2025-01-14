import { DateRange, PropsRange, PropsRangeRequired } from 'react-day-picker';

type DateRangePickerProps = Omit<PropsRange | PropsRangeRequired, "selected" | "onSelect" | "mode"> & {
    value?: DateRange | undefined;
    onChange?: (value: DateRange | undefined) => void;
    required?: boolean;
    fromDate?: Date;
    toDate?: Date;
    error?: boolean;
    dateFormat?: string | [string, string];
};
export declare const DateRangePicker: ({ value, onChange, required, fromDate, toDate, error, dateFormat, ...props }: DateRangePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DateRangePicker.d.ts.map
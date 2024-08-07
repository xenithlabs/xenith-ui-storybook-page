import { default as React } from '../../../node_modules/react';

declare const Timeline: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
    pointClassName?: string;
    disableVerticalLine?: boolean;
}
declare const TimelineItem: React.ForwardRefExoticComponent<TimelineItemProps & React.RefAttributes<HTMLDivElement>>;
declare const TimelineHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const TimelineTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface TimelineDateProps extends React.HTMLAttributes<HTMLDivElement> {
    date: string | Date;
    dateFormat?: string;
}
declare const TimelineDate: React.ForwardRefExoticComponent<TimelineDateProps & React.RefAttributes<HTMLDivElement>>;
declare const TimelineDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { Timeline, TimelineItem, TimelineHeader, TimelineTitle, TimelineDate, TimelineDescription, };
//# sourceMappingURL=Timeline.d.ts.map
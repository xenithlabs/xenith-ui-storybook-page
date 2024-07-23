import { PropsWithChildren } from '../../../node_modules/react';

interface PaginationContextType {
    page: number;
    pageSize: number;
    total: number;
}
interface PaginationNavigationContextType {
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}
declare const PaginationNavigationContextType: import('../../../node_modules/react').Context<PaginationNavigationContextType>;
interface PaginationProps extends PropsWithChildren, Partial<PaginationContextType>, Partial<PaginationNavigationContextType> {
}
export declare const Pagination: ({ children, total, page: pageProps, pageSize: pageSizeProps, onPageChange: onPageChangeProps, onPageSizeChange: onPageSizeChangeProps, }: PaginationProps) => import("react/jsx-runtime").JSX.Element;
export declare const PaginationPrev: () => import("react/jsx-runtime").JSX.Element;
export declare const PaginationTotal: () => import("react/jsx-runtime").JSX.Element;
export declare const PageinationSizeSetter: () => import("react/jsx-runtime").JSX.Element;
export declare const PagniationNext: () => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Pagination.d.ts.map
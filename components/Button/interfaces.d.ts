import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, ElementType, ReactNode } from '../../../node_modules/react';
import { buttonStyles } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
    icon?: ReactNode;
    iconOnly?: boolean;
    iconPosition?: "left" | "right";
    asChild?: boolean;
    loading?: boolean;
    innerComp?: ElementType;
    innerClassName?: string;
}
//# sourceMappingURL=interfaces.d.ts.map
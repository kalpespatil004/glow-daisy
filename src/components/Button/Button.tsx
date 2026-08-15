import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type RouterLinkProps = BaseProps & LinkProps & { to: string };

const classes = (variant: ButtonVariant, className = '') => `button button--${variant} ${className}`.trim();

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return <button className={classes(variant, className)} {...props}>{children}</button>;
}

export function ButtonLink({ children, variant = 'primary', className, to, ...props }: RouterLinkProps) {
  return <Link className={classes(variant, className)} to={to} {...props}>{children}</Link>;
}

export function ExternalButtonLink({ children, variant = 'primary', className, href, ...props }: AnchorProps) {
  return <a className={classes(variant, className)} href={href} {...props}>{children}</a>;
}

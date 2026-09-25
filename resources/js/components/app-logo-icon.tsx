import type { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon({
    className = '',
    ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src="/images/logo.png"
            alt="Eazy's Cars"
            className={`rounded-full object-cover shadow-sm ring-1 ring-[#d8ad55]/50 ${className}`}
            {...props}
        />
    );
}

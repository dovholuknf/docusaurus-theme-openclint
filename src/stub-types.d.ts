// Docusaurus core
declare module '@docusaurus/ErrorBoundary' {
    const ErrorBoundary: any;
    export default ErrorBoundary;
}

declare module '@docusaurus/useBaseUrl' {
    export default function useBaseUrl(path?: string): string;
}

declare module '@docusaurus/theme-common' {
    export const PageMetadata: any;
    export const ThemeClassNames: any;
}

declare module '@docusaurus/theme-common/internal' {
    export function useKeyboardNavigation(): void;
}

// Theme components
declare module '@theme/Layout' {
    const Layout: any;
    export default Layout;
}

declare module '@theme/Layout/Provider' {
    const LayoutProvider: any;
    export default LayoutProvider;
}

declare module '@theme/ErrorPageContent' {
    const ErrorPageContent: any;
    export default ErrorPageContent;
}

declare module '@theme/SkipToContent' {
    const SkipToContent: any;
    export default SkipToContent;
}

declare module '@theme/AnnouncementBar' {
    const AnnouncementBar: any;
    export default AnnouncementBar;
}

declare module '@theme/Navbar' {
    const Navbar: any;
    export default Navbar;
}

declare module '@theme/Footer' {
    const Footer: any;
    export default Footer;
}

// Styles
declare module '*.module.css' {
    const styles: { [className: string]: string };
    export default styles;
}

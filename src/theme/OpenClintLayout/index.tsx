import React, {JSX, ReactNode} from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {PageMetadata, ThemeClassNames} from '@docusaurus/theme-common';
import {useKeyboardNavigation} from '@docusaurus/theme-common/internal';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import ErrorPageContent from '@theme/ErrorPageContent';
import styles from './styles.module.css';

export type OpenClintLayoutProps = {
    children: ReactNode;
    noFooter?: boolean;
    className?: string;
    footerClassName?: string;
    title?: string;
    description?: string;
};

export function OpenClintLayout({
                                   children,
                                   noFooter,
                                   className,
                                   footerClassName,
                                   title,
                                   description,
                               }: OpenClintLayoutProps) {
    useKeyboardNavigation();
    return (
        <LayoutProvider>
            <PageMetadata title={title} description={description} />
            <SkipToContent />
            <AnnouncementBar />
            {/*<StarUs />*/}
            <Navbar />
            <div className={clsx(ThemeClassNames.wrapper.main, styles.ozLayoutMainWrapper, className)}>
                <ErrorBoundary fallback={(params: any) => <ErrorPageContent {...params} />}>
                    {children}
                </ErrorBoundary>
                {!noFooter && <Footer className={clsx(styles.ozLayoutFooter, footerClassName)} />}
            </div>
        </LayoutProvider>
    );
}

export default OpenClintLayout;

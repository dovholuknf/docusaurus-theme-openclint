import React from 'react';
// @ts-ignore
import {useKeyboardNavigation} from '@docusaurus/theme-common/internal';
import OpenClintLayout, {OpenClintLayoutProps} from "@theme/OpenClintLayout";

export function ThemeLayout(props: OpenClintLayoutProps) {
    useKeyboardNavigation();
    return (
        <OpenClintLayout {...props} />
    );
}

export default ThemeLayout;

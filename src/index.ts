import path from 'path';

export default function () {
  return {
    name: '@openclint/docusaurus-theme-openclint',
    getThemePath() {
      return path.resolve(__dirname, './theme');
    },
  };
}

export type { OpenClintLayoutProps } from './theme/OpenClintLayout';


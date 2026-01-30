import Theme from 'rspress/theme';
import { usePageData } from 'rspress/runtime';
import HomeLayout from './HomeLayout';

const { Layout: DefaultLayout } = Theme;

function Layout(props: any) {
  const pageData = usePageData();

  // 如果是首页，使用自定义布局
  if (pageData.page?.pageType === 'home') {
    return <HomeLayout />;
  }

  // 其他页面使用默认布局
  return <DefaultLayout {...props} />;
}

export default { ...Theme, Layout };
export * from 'rspress/theme';

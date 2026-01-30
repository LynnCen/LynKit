import Theme from 'rspress/theme';
import { usePageData } from 'rspress/runtime';
import HomeLayout from './HomeLayout';

const { Layout: DefaultLayout } = Theme;

function Layout(props: any) {
  const pageData = usePageData();

  if (pageData.page?.pageType === 'home') {
    return <HomeLayout />;
  }

  return <DefaultLayout {...props} />;
}

export default { ...Theme, Layout };
export * from 'rspress/theme';

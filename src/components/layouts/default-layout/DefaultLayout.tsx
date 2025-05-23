import { cx } from "@pandacss/css";

import { Background, Footer, Header } from "./components";
import type { DefaultLayoutProps } from "./types";
import { mainCss } from "./styles";

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className={cx('main-content', mainCss)}>
        <Background />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;

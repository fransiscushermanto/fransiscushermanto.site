'use client';

import { cx } from "@styled-system/css";

import { RouteEventProvider, useRouteEvent } from "./hooks";
import { Background, Footer, Header, Loading } from "./components";
import type { DefaultLayoutProps } from "./types";
import { mainCss } from "./styles";

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props;

  const routeEvent = useRouteEvent();

  return (
    <RouteEventProvider events={routeEvent}>
      <Header />
      <main className={cx("main-content", mainCss)}>
        <Loading />
        <Background />
        {children}
      </main>
      <Footer />
    </RouteEventProvider>
  );
};

export default DefaultLayout;

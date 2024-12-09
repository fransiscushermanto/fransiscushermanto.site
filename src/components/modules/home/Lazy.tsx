import dynamic from "next/dynamic";

const HomeLazy = dynamic(() => import(/* webpackChunkName: "home" */ "./Home"));

export default HomeLazy;

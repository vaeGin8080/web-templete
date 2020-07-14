import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import getPageTitle from "@/utils/get-page-title";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = []; // no redirect whitelist
const whiteName = [];
router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);
  next();

  // determine whether the user has logged in
  /*  const hasToken = store.getters.isLogin;
  console.log(hasToken);
  if (hasToken) {
    next();
  } else {
    if (
      whiteList.indexOf(to.path) !== -1 ||
      whiteName.indexOf(to.name) !== -1
    ) {
      next();
    } else {
      console.log("one else");
      Message.error("请登录");
      next(`/?redirect=${to.path}`);
      NProgress.done();
    }
  } */
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});

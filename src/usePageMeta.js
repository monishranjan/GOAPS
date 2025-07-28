// hooks/usePageMeta.js
import { useEffect } from "react";

const usePageMeta = (title, faviconPath) => {
  useEffect(() => {
    // Set the page title
    if (title) {
      document.title = title;
    }

    // Change the favicon
    if (faviconPath) {
      const link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href = faviconPath;
      document.getElementsByTagName("head")[0].appendChild(link);
    }
  }, [title, faviconPath]);
};

export default usePageMeta;

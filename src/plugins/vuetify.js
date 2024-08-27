// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as labsComponents from "vuetify/labs/components";

export default createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
  icons: {
    iconfont: "mdi",
  },
});

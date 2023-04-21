import type { Preview } from "@storybook/react";
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

// Object.defineProperties(NextImage,"default",{
//   configurable:true,
//   value:(props: any)=><OriginalNextImage {...props} unoptimized />
// });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

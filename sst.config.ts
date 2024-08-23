/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-v3-notes",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers:{
        aws:{profile: "sst-v3"}
      }
    };
  },
  async run() {
    await import("./infra/storage");
    await import("./infra/api");

  },
});

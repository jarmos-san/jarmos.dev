import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, test } from "vitest";

import { AppFooter } from "#components";

describe("components/AppFooter", () => {
  test.skip("hello world!", async () => {
    const wrapper = await mountSuspended(AppFooter);
    console.log(wrapper);
  });
});

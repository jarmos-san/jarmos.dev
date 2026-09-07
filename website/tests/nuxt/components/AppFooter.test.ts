import { AppFooter } from "#components";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, test } from "vitest";

describe("components/AppFooter", () => {
  test.skip("hello world!", async () => {
    const wrapper = await mountSuspended(AppFooter);
    console.log(wrapper);
  });
});

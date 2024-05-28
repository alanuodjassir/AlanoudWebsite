import React from "react";

import { Meta } from "@/components/Meta";
import { testUtils } from "@/utils";

describe("Meta", () => {
  test("should contain correct metadata", async () => {
    testUtils.renderWithCoilProvider(
      <Meta description="description" title="title" image="image" />,
    );

    expect(testUtils.getMeta("description")).toEqual("description");
    expect(testUtils.getMeta("twitter:description")).toEqual("description");
    expect(testUtils.getMeta("twitter:title")).toEqual("title");
    expect(testUtils.getMeta("og:title")).toEqual("title");
    expect(testUtils.getMeta("og:description")).toEqual("description");
    expect(testUtils.getMeta("og:image")).toEqual("https://alanoud.dev/static/a654b63461c1e58e4d6e1f7ad177f12d/39c14/photo.avif");
  });
});

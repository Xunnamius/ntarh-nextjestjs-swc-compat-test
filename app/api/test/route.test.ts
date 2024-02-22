import { testApiHandler } from "next-test-api-route-handler"; // Must always be first
import * as appHandler from "./route";

it("GET returns 200", async () => {
  await testApiHandler({
    appHandler,
    test: async ({ fetch }) => {
      const response = await fetch({ method: "GET" });
      const json = await response.json();
      expect(response.status).toBe(200);
      await expect(json).toStrictEqual({
        test: true,
      });
    },
  });
});

it("POST returns 200", async () => {
  await testApiHandler({
    appHandler,
    test: async ({ fetch }) => {
      const response = await fetch({
        method: "POST",
        headers: {
          "content-type": "application/json", // Must use correct content type
        },
        body: JSON.stringify({ name: "test" }),
      });
      const json = await response.json();
      expect(response.status).toBe(200);
      await expect(json).toStrictEqual({
        test: true,
      });
    },
  });
});

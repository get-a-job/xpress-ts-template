/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        testTimeout: 60_000,
        hookTimeout: 60_000,
        teardownTimeout: 60_000,
        environment: "node",
        include: ["src/**/*.test.ts"],
        coverage: {
            reporter: ["text", "json", "html"],
        },
    },
});

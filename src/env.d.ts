/// <reference types="@rsbuild/core/types" />
interface ImportMetaEnv {
  PUBLIC_API_URL: string;
  NODE_ENV: "development" | "production";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

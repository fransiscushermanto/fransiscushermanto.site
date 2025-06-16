import "dotenv/config";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    [process.env.GITHUB_GRAPHQL_API as string]: {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PAT}`,
        "User-Agent": "fransiscushermanto.site",
      },
    },
  },
  documents: ["./src/**/*.graphql", "./src/**/*.ts", "./src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/graphql/types/": {
      preset: "client",
      config: {
        useTypeImports: true,
      },
    },
  },
  overwrite: true,
};

export default config;

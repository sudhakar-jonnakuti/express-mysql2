const { build, analyzeMetafile } = require("esbuild");
const fs = require("node:fs");
const pkg = require("./package.json");

appBuild = async () => {
  try {
    const result = await build({
      entryPoints: ["src/**/*.ts"],
      outdir: "dist",
      minify: true,
      platform: "node",
      format: "cjs",
      treeShaking: true,
      bundle: true,
      metafile: true,
      external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})]
    });

    if (result.metafile) {
      fs.writeFileSync("./dist/metafile.json", JSON.stringify(result.metafile));
    }
    console.log("Build successful:", await analyzeMetafile(result.metafile));
    process.exit(0);
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
};

appBuild();

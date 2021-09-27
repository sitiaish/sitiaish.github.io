module.exports = {
  outputDir: "docs",
  publicPath:
  process.env.NODE_ENV === "production"
    ? "/"
    : "/",
  transpileDependencies: [
    'vuetify',
  ],
};
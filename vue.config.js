const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()],
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_variables.scss";
        @import "@/scss/_fonts.scss";
        @import "@/scss/_typography.scss";
        @import "@/scss/_common.scss";
        @import "@/scss/_layout.scss";
        @import "@/scss/_slider.scss";
        @import "@/scss/_navbar.scss";
        @import "@/scss/_buttons.scss";
        @import "@/scss/_sections.scss";
        @import "@/scss/_footer.scss";
        @import "@/scss/_modals.scss";
        @import "@/scss/_forms.scss";`,
      },
    },
  },
};

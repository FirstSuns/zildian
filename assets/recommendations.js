function initSimilarProductsRecommendation() {
  Tagalys.UIWidgets.Recommendations.init(
    "[data-recommendation='similar-products']",
    {
      recommendationId: "4f2751e73ec50bf82f5c",
      productId: '8217398804772',
      callbacks: {},
      templates: {}
    }
  );
}

function initCrossSellingProductsRecommendations() {
  Tagalys.UIWidgets.Recommendations.init(
    "[data-recommendation='cross-selling']",
    {
      recommendationId: "98c78f2192f7b6613b30",
      productId: '8217398804772',
      callbacks: {},
      templates: {}
    }
  );
}

onTagalysReady(function () {
  initSimilarProductsRecommendation();
  initCrossSellingProductsRecommendations();
});

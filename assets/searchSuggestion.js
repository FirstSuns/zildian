function initSearchSuggestions() {
  Tagalys.UIWidgets.SearchSuggestions.init("[data-search-input]", {
    searchResultsURL: "search.html",
    callbacks: {},
    templates: {}
  });
}
onTagalysReady(function () {
  initSearchSuggestions();
});

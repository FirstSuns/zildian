function initSearchSuggestions() {
  Tagalys.UIWidgets.SearchSuggestions.init("[data-search-input]", {
    searchResultsURL: "search.html",
    callbacks: {},
    templates: {}
  });
}

function initSearchResults() {
  Tagalys.UIWidgets.SearchResults.init("[data-search-results]", {
    callbacks: {},
    templates: {}
  });
}

onTagalysReady(function () {
  initSearchSuggestions();
  initSearchResults();
});

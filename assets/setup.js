function setConfiguration() {
  Tagalys.setConfiguration({
    api: {
      serverUrl: "https://api-r3.tagalys.com",
      credentials: {
        clientCode: "DBAB5FF469CD7750",
        apiKey: "94f819f38d41a4cb41c845fcad8e23e7",
      },
      storeId: "72979382564",
    },
    platform: "Shopify",
    locale: "en-US",
    currency: {
      displayFormatter: "{{currencyLabel}}{{value}}",
      code: "USD",
      label: "$",
      fractionalDigits: 2,
      forceFractionalDigits: true,
    },
    analyticsStorageConsentProvided: function(){
      // return true/false based on user's consent settings
      return false
    },
    track: true
  })
}

onTagalysReady(function() {
  setConfiguration();
})
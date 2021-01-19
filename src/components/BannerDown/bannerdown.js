import React from "react";
import { AdMobBanner } from "expo-ads-admob";

export default function BannerDOWN() {
  return (
    <AdMobBanner
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-2851827333967207/5443942333" // Test ID, Replace with your-admob-unit-id
      servePersonalizedAds // true or false
      onDidFailToReceiveAdWithError={this.bannerError}
    />
  );
}

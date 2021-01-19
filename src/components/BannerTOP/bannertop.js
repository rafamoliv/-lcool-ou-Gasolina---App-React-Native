import React from "react";
import { AdMobBanner } from "expo-ads-admob";

export default function BannerTOP() {
  return (
    <AdMobBanner
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-2851827333967207/9891928582" // Test ID, Replace with your-admob-unit-id
      servePersonalizedAds // true or false
      onDidFailToReceiveAdWithError={this.bannerError}
    />
  );
}

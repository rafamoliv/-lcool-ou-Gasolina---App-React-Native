import React from 'react';
import { AdMobBanner } from 'expo-ads-admob';

export default function BannerDOWN() {
    return (
        <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={this.bannerError} />
    )
}
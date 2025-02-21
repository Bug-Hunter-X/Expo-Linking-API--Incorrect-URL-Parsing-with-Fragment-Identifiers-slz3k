This bug occurs when using the Expo `Linking` API to handle deep links.  If the app is launched from a deep link that contains a fragment identifier ("#"), Expo may not correctly parse the URL, causing unexpected behavior. The deep link may appear truncated and the fragment data is lost. This is especially problematic when handling authentication flows where the fragment contains an access token or other sensitive information.
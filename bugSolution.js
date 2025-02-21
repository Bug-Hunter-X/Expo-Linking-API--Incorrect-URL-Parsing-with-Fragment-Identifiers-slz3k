To correctly parse URLs with fragments, you should manually extract the fragment from the URL string. Here's an example:

```javascript
import * as Linking from 'expo-linking';

async function handleDeepLink() {
  Linking.addEventListener('url', ({ url }) => {
    //Manually extract fragment
    const urlWithFragment = new URL(url);
    const fragment = urlWithFragment.hash.substring(1);
    //process the fragment
    console.log('Deep link with fragment:', url, 'Fragment: ', fragment);
  });

  const initialURL = await Linking.getInitialURL();
  if (initialURL) {
    const urlWithFragment = new URL(initialURL);
    const fragment = urlWithFragment.hash.substring(1);
    console.log('Initial URL with fragment:', initialURL, 'Fragment: ', fragment);
  }
}

export default handleDeepLink;
```
This solution ensures that the fragment part of the deep link is correctly retrieved and processed, preventing data loss.
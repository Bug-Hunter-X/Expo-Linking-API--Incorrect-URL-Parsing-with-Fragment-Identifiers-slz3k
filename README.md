# Expo Linking API Bug: Fragment Identifier Handling

This repository demonstrates a bug in the Expo `Linking` API where URLs containing fragment identifiers ("#") are not correctly parsed.  The issue leads to truncated URLs and loss of data contained within the fragment. This is particularly relevant for authentication flows or other scenarios where fragments are used to pass important data.

## Bug Reproduction

The `bug.js` file contains code that simulates this scenario. It registers a deep link and attempts to retrieve the URL when the app is launched through a deep link with a fragment.

## Solution

The `bugSolution.js` file provides a solution that involves manually parsing the URL to extract the fragment identifier. This ensures that no information is lost during the deep link handling process.

## Contributing

Contributions are welcome.  If you encounter similar issues or have suggestions for improvement, please submit a pull request.
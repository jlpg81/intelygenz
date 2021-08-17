# intelygenz project

To run (needs Android Emulator):

npm start

npm run android

Patterns used:

State pattern, because it is used by React in order to rerender the pages if the information changes. This is implemented by default by React Native.

Libraries used:

React Navigation: Required in order to change screens in an easy way.

RSS Parser: Used in order to transform the RSS feed into js objects that are easier to work with.

HTMLView: Used in order to transform basic HTML into content that can be directly displayed by React Native.

Async-Storage: Used to store in local storage the content of the rss feed, so we can review it when the app is offline.

# Lytchefootsch!

Dog walking app / trial run for React-native and life enhancement through collaboration.
- React-native
- React-native-webpack-server
- Babel

Requires:
- Xcode
- Node 4.x+

### Running the example app

Install the example app dependencies and start the server:

```
npm install
npm start
```

To run with hot reload:

```
npm run hot
```

- After webpack server is spooled up, open the Xcode project and build/run.
- Emulator will open in errored state; escape out of this state and CMD+D -> Debug in Chrome (or Safari)
- Hot reload only works with the web socket executor (hit CMD+D in the simulator) or the WebView executor (CMD+CTRL+Z -> Enable Safari Debugging). See [the explanatory note](https://github.com/mjohnston/react-native-webpack-server#hot-reload).

To build for release:

```
npm run bundle
```

Then uncomment the line in AppDelegate.m that loads the local `main.jsbundle`.

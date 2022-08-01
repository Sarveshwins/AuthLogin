# AuthLogin

This project aims at providing all social logins( like FaceBook, Google, Firebase and Apple) under single package.
# Login With FaceBook
## Setup FaceBook Developers Account
### Step 1: Start the registration process
While logged into your Facebook account, go to [https://developers.facebook.com/async/registration](https://developers.facebook.com/async/registration).

Alternatively, you can go to the [Meta for Developers](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=IN&destination=https%3A%2F%2Fdevelopers.facebook.com%2F&event_type=click&last_nav_impression_id=07Hwa00MwndMYD11B&max_percent_page_viewed=85&max_viewport_height_px=639&max_viewport_width_px=1233&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fdevelopment%2Fregister%2F&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fx%2Fajax%2Ffeedback%2F&region=apac&scrolled=true&session_id=116HQtHYwPIwXSjgx&site=developers) website and click Get Started.
## Installation

### 1. Install the library

using either Yarn:

```
yarn add react-native-social-login
```

or npm:

```
npm install --save react-native-social-login
```
### 2. Link

- **React Native 0.60+**


[CLI autolink feature](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md) links the module while building the app.

*Note* For `iOS` using `cocoapods`, run:

```bash
$ cd ios/ && pod install
```
### 3. Configure projects

#### 3.1 Android

Before you can run the project, follow the [Getting Started Guide](https://developers.facebook.com/docs/android/getting-started/) for Facebook Android SDK to set up a Facebook app. You can skip the build.gradle changes since that's taken care of by the rnpm link step above, but **make sure** you follow the rest of the steps such as updating `strings.xml` and `AndroidManifest.xml`.

#### 3.2 iOS

Follow ***steps 2, 3 and 4*** in the [Getting Started Guide](https://developers.facebook.com/docs/ios/use-cocoapods) for Facebook SDK for iOS. 
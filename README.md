# AuthLogin

This project aims at providing all social logins( like FaceBook, Google, Firebase and Apple) under single package.
# Login With FaceBook
## Setup FaceBook Developers Account 
### Step 1: Start the registration process
While logged into your Facebook account, go to [https://developers.facebook.com/async/registration](https://developers.facebook.com/async/registration).

Alternatively, you can go to the [Meta for Developers](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=IN&destination=https%3A%2F%2Fdevelopers.facebook.com%2F&event_type=click&last_nav_impression_id=07Hwa00MwndMYD11B&max_percent_page_viewed=85&max_viewport_height_px=639&max_viewport_width_px=1233&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fdevelopment%2Fregister%2F&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fx%2Fajax%2Ffeedback%2F&region=apac&scrolled=true&session_id=116HQtHYwPIwXSjgx&site=developers) website and click Get Started.

### Step 2: Agree to our Terms and Policies
Click **Next** to agree to our [Platform Terms](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=IN&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fterms&event_type=click&last_nav_impression_id=0IIsvdnfRXv1fikuU&max_percent_page_viewed=65&max_viewport_height_px=639&max_viewport_width_px=1233&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fdevelopment%2Fregister%2F&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fpagelet%2Fgeneric.php%2FDeveloperNotificationsPayloadPagelet%3Ffb_dtsg_ag%3D--sanitized--%26data%3D%257B%2522businessUserID%2522%253Anull%252C%2522cursor%2522%253Anull%252C%2522length%2522%253A15%252C%2522clientRequestID%2522%253A%2522js_1cm%2522%257D%26__usid%3D6-Trfxbid5gcyy2%253APrfxbia1xw9f33%253A0-Arfxazq17g1d9z-RV%253D6%253AF%253D%26jazoest%3D24838&region=apac&scrolled=true&session_id=116HQtHYwPIwXSjgx&site=developers) and [Developer Policies](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=IN&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdevpolicy&event_type=click&last_nav_impression_id=0IIsvdnfRXv1fikuU&max_percent_page_viewed=65&max_viewport_height_px=639&max_viewport_width_px=1233&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fdevelopment%2Fregister%2F&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fpagelet%2Fgeneric.php%2FDeveloperNotificationsPayloadPagelet%3Ffb_dtsg_ag%3D--sanitized--%26data%3D%257B%2522businessUserID%2522%253Anull%252C%2522cursor%2522%253Anull%252C%2522length%2522%253A15%252C%2522clientRequestID%2522%253A%2522js_1cm%2522%257D%26__usid%3D6-Trfxbid5gcyy2%253APrfxbia1xw9f33%253A0-Arfxazq17g1d9z-RV%253D6%253AF%253D%26jazoest%3D24838&region=apac&scrolled=true&session_id=116HQtHYwPIwXSjgx&site=developers).


### Step 3: Verify your account
A confirmation code will be sent to the phone number and email address that was provided in order to confirm that the user have access to them. The number and email will be used for important developer notifications of any changes that may impact to the app.


### Step 4: Select occupation
Select an occupation that most closely describes what you do for a living.

Now use the app Dashborad to create new app.
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
# AuthLogin

This project aims at providing all social logins( like FaceBook, Google, Firebase and Apple) under single package.
# Login With FaceBook
## Setup FaceBook Developers Account 

### Register Account
#### Step 1: Start the registration process
While logged into your Facebook account, go to [https://developers.facebook.com/async/registration](https://developers.facebook.com/async/registration).

Alternatively, you can go to the [Meta for Developers](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=IN&destination=https%3A%2F%2Fdevelopers.facebook.com%2F&event_type=click&last_nav_impression_id=07Hwa00MwndMYD11B&max_percent_page_viewed=85&max_viewport_height_px=639&max_viewport_width_px=1233&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fdevelopment%2Fregister%2F&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fx%2Fajax%2Ffeedback%2F&region=apac&scrolled=true&session_id=116HQtHYwPIwXSjgx&site=developers) website and click Get Started.

#### Step 2: Agree to our Terms and Policies
Click **Next** to agree to our [Platform Terms](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=IN&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fterms&event_type=click&last_nav_impression_id=0IIsvdnfRXv1fikuU&max_percent_page_viewed=65&max_viewport_height_px=639&max_viewport_width_px=1233&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fdevelopment%2Fregister%2F&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fpagelet%2Fgeneric.php%2FDeveloperNotificationsPayloadPagelet%3Ffb_dtsg_ag%3D--sanitized--%26data%3D%257B%2522businessUserID%2522%253Anull%252C%2522cursor%2522%253Anull%252C%2522length%2522%253A15%252C%2522clientRequestID%2522%253A%2522js_1cm%2522%257D%26__usid%3D6-Trfxbid5gcyy2%253APrfxbia1xw9f33%253A0-Arfxazq17g1d9z-RV%253D6%253AF%253D%26jazoest%3D24838&region=apac&scrolled=true&session_id=116HQtHYwPIwXSjgx&site=developers) and [Developer Policies](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=IN&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdevpolicy&event_type=click&last_nav_impression_id=0IIsvdnfRXv1fikuU&max_percent_page_viewed=65&max_viewport_height_px=639&max_viewport_width_px=1233&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fdevelopment%2Fregister%2F&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fpagelet%2Fgeneric.php%2FDeveloperNotificationsPayloadPagelet%3Ffb_dtsg_ag%3D--sanitized--%26data%3D%257B%2522businessUserID%2522%253Anull%252C%2522cursor%2522%253Anull%252C%2522length%2522%253A15%252C%2522clientRequestID%2522%253A%2522js_1cm%2522%257D%26__usid%3D6-Trfxbid5gcyy2%253APrfxbia1xw9f33%253A0-Arfxazq17g1d9z-RV%253D6%253AF%253D%26jazoest%3D24838&region=apac&scrolled=true&session_id=116HQtHYwPIwXSjgx&site=developers).


#### Step 3: Verify your account
A confirmation code will be sent to the phone number and email address that was provided in order to confirm that the user have access to them. The number and email will be used for important developer notifications of any changes that may impact to the app.


#### Step 4: Select occupation
Select an occupation that most closely describes what you do for a living.

Now use the app Dashborad to create new app.


### Create App

#### Step 1: Start the app creation process
If you just came from the registration flow, click the Create First App button.
Otherwise, go to the Apps panel and click Create App.

#### Step 2: Choose an app type
App type determines which products and APIs are available to your app. If you are more familiar with facebook products and APIs, refer to our [app types](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=IN&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fdevelopment%2Fcreate-an-app%2Fapp-dashboard%2Fapp-types&event_type=click&last_nav_impression_id=0E9etjj7qXy7uDoJp&max_percent_page_viewed=90&max_viewport_height_px=639&max_viewport_width_px=1233&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fdevelopment%2Fcreate-an-app&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Fpath1%3Ddevelopment%26path2%3Dcreate-an-app&region=apac&scrolled=true&session_id=116HQtHYwPIwXSjgx&site=developers) document to determine which app type is best suited for your app, then create a new app and choose an appropriate type. Choose ** None ** if just expoloring .

#### Step 3: Set your app name and email
Enter the name of your app and an email address where you want to recieve important developer notifications. The email address can be different from the email address associated with Facebook account, just make sure it's valid and that you monitor it, since all important developer notifications will be sent there.

Once completed the app creation flow your app will be loaded in the App Dashboard.

On successful creation of app you will have an app id like “964336743958925” . Keep it safe . It will be used in future

### Add Basic Information

Go to your facebook app dashboard settings[https://developers.facebook.com/apps/{app_id}/settings/basic/](https://developers.facebook.com/apps/{app_id}/settings/basic/)

Add “Contact Email, Privacy Policy Url, Category, App Icon, Business use” and then save

#### Add Platform IOS

Go to bottom of Basic Settings and add platform IOS . You have to add Bundle identifier of your app . You can find Bundle identifier in Xcode General Tab  like, “org.reactjs.native.example.FbSdkSample”

#### Add Platform ANDROID

You need to check “applicationId” of your android project which you can find in “android/app/build.gradle”

i ) Add “Google Play Package Name” : which is applicationId of android like my app have “com.fbsdksample”

ii ) Class Name : which will be for my app “com.fbsdksample.MainActivity” . Please Change according to your app id

Note : If popup comes for package name verification select “Use this package name”



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
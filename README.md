## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Clone the Repository

```
git clone https://github.com/opennetltd/games-aqa-framework.git
```

Install npm dependencies

```
npm install
```

Run following Command for Chrome Browser

```
npm run chromeWap:sportybet-uat --  --appName=redBlack 
npm run chromeWap:encore-uat --  --appName=redBlack 
```

Launch the virtual device with android version "11.0" and update the Device Name "Pixel XL"

Run following Command for virtual devices (Note: install appium and run the "appium" from command prompt and device details should be updated as required in capabilities.js>emulator-Wap)

```
npm run emulatorWap:sportybet-local --  --appName=redBlack 
OR
npm run emulatorWap:encore-local --  --appName=redBlack 
```

Run following Command for running the app on virtual devices (Note: install appium and run the "appium" from command prompt and device details should be updated as required in capabilities.js>emulator-App)

```
npm run emulatorApp:sportybet-local --  --appName=redBlack 
OR
npm run emulatorApp:encore-local --  --appName=redBlack 
```

Check the result screenshot in following folder (Please check argument list in package json for more details)

```
../report/{env}/{browserCapabilities}/reports-date-time/index.html
```

-- Note:

We can run this test in browserstack also with following command (We need to set the capabilities in capabilities.json for different devices)

```
 npm run browserStackWap:sportybet-uat --  --appName=redBlack 
 npm run browserStackWapParallel:sportybet-uat --  --appName=redBlack 
 npm run browserStackApp:sportybet-uat --  --appName=redBlack 
```

### Prerequisites

Install node version v18.16.1
Install npm version 8.19.4

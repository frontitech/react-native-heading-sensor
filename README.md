# react-native-heading-sensor

## TOC

- [Installation](#installation)
- [Linking](#linking)
- [Usage](#usage)

## Installation

Using npm:

```shell
npm install --save react-native-heading-sensor
```

or using yarn:

```shell
yarn add react-native-heading-sensor
```

## Linking (For React Native <= 0.59 only)

> ⚠️ React Native >= 0.60 skip this as auto-linking should work

### Auto

```shell
react-native link react-native-heading-sensor
```

For iOS via CocoaPods

```shell
cd ios
pod install
```

### Manual

<details>
    <summary>iOS (via CocoaPods)</summary>

Add the following lines to your build targets in your `Podfile`

```
pod 'RNDeviceHeading', :path => '../node_modules/react-native-heading-sensor'
```

Then run `pod install`

</details>

<details>
    <summary>iOS (without CocoaPods)</summary>

In XCode, in the project navigator:

1. Right click `Libraries`
2. `Add Files to [your project's name]`
3. Go to `node_modules` ➜ `react-native-heading-sensor`
4. Add the file `RNDeviceHeading.xcodeproj`
5. Add `libRNDeviceHeading.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
6. Run your project (`Cmd+R`)

</details>

<details>
    <summary>Android</summary>

1. Open up `android/app/src/main/java/[...]/MainActivity.java`

- Add `import com.reactlibrary.RNRNDeviceHeadingPackage;` to the imports at the top of the file
- Add `new RNDeviceHeadingPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':react-native-heading-sensor'
   project(':react-native-heading-sensor').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-heading-sensor/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     compile project(':react-native-heading-sensor')
   ```
   </details>

## Usage

```javascript
import React, { useState, useEffect } from 'react';
import RNDeviceHeading from 'react-native-heading-sensor';

...
  const degreesUpdateRate = 1; //number of degrees changed before callback is triggered
  const [{ deviceHeading }, setDeviceHeading] = useState(0);

  useEffect(() => {
    RNDeviceHeading.start(degreesUpdateRate, degree => {
      setDeviceHeading(degree);
    });

    return () => {
      RNDeviceHeading.stop();
    };
  }, []);
...

```

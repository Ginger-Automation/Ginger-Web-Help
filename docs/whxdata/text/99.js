rh._.exports({"0":[["Mobile Appium Agent"]],"1":[["\n  ","\n    "," ","\n    "," ","\n    "," Ginger Mobile Agent Configurations Steps","\n    "," ","\n    "," ","\n    ","Contents","\n    ","Description","\n    ","Pre-requisite","\n    ","Appium Server Installation","\n    ","\n      ","Install Components Needed for Android Devices Testing","\n      ","Install Components Needed for iOS Devices Testing","\n      ","Generic Appium Server Component Installation","\n      ","Start Appium Server","\n    ","\n    ","Testing Mobile Device Setup","\n    ","\n      ","Android Testing Mobile Device Setup","\n      ","iOS Testing Mobile Device Setup","\n    ","\n    ","Ginger Appium Agent Configuration","\n    ","\n      ","Add Mobile Target Application","\n      ","Add Appium Agent","\n      ","Configure Appium Agent Connection Details","\n      ","Configure Appium Agent Desired Capabilities","\n    ","\n    ","Ginger Appium Agent Usage","\n    ","\n      ","Start Appium Agent","\n      ","Ginger Mobile Window Way of Using","\n    ","\n    "," ","\n    "," ","\n    "," ","\n    ","\n      ‎","\n    "],["\n    ","        These steps will allow Ginger to run tests on a mobile device using ","Appium",".","\n    "],["\n    ","Appium server (see below steps for installing Appium server in case not exist)- Appium server should be accessible from the machine Ginger is running on.","\n    ","Android / iOS mobile device (see below steps for configuring the devices to work with Appium)","\n    "],["\n    "],["\n    ","Ginger is connecting to the tested mobile device via Appium server which must be installed (if not already exist) before starting the Ginger testing session. Appium server should be located on a machine and Port which is accessible from the machine Ginger is running on.","\n    ","Please follow the below steps for installing and running the Appium server.","\n    "],["\n    ","Please follow the steps in the link below for installing the components needed specifically for Android device testing:","\n    ","https://appium.io/docs/en/drivers/android-uiautomator2/index.html","\n    "],["\n    ","Please follow the steps in the link below for installing the components needed specifically for iOS device testing:","\n    ","https://appium.io/docs/en/drivers/ios-xcuitest-real-devices/","\n    "],["\n    ","Please follow the steps in the link below for installing the common components needed for the Appium server:","\n    ","https://appium.io/docs/en/about-appium/getting-started/#installation-via-desktop-app-download","\n    ","            it is recommended to install the “Desktop App” for easier usage.","\n    "],["\n    ","Please use the below link for getting to know Appium Desktop App and how to start it:","\n    ","https://github.com/appium/appium-desktop#appium-desktop","\n    "," ","\n    ","             ","  ","\n    ","            ","\n    ","\n      ‎","\n    "],["\n    ","The Android/iOS devices which will be tested needs to be connected via USB cable to the machine on which the Appium server is running. Please follow the below steps for configuring the devices as required by Appium.","\n    "],["\n    ","Please follow the steps on the link below for configuring the device for allowing Appium to successfully control it:","\n    ","https://appium.io/docs/en/drivers/android-uiautomator2/index.html#real-device-setup","\n    "],["\n    ","Please follow the steps on the link below for configuring the device for allowing Appium to successfully control it:","\n    ","https://appium.io/docs/en/drivers/ios-xcuitest-real-devices/","\n    "," ","\n    "],["\n    ","Appium Agent needs to be added to the Ginger solution for connecting to a specific application on a specific mobile device","\n    ","Appium server.","\n    ","Please follow the below steps for configuring the Appium Agent on Ginger.","\n    "],["\n    ","Before adding an Appium Agent the Solution should have a Mobile Target Application if it not having it so please follow the below steps for adding it:","\n    ","Open the Ginger Solution","\n    ","Click on “Configurations” “Target Applications”","\n    ","Click on the “Add” button and select Mobile platform application","\n    ","You can change the name of the application added to the grid","\n    ","Click on the “Save” button","\n    ","\n    "," ","\n    "],["\n    ","Appium Agent is required for configuring the connection to a specific Appium Server Specific mobile device  Specific tested the application on the device.","\n    ","Please follow the below steps for adding the Appium Agent to the Ginger solution:","\n    ","Go to “Configurations”  “Agents”","\n    ","Click on the “Add” button, “Add New Agent” wizard will be shown","\n    ","Click Next","\n    ","Set Name for the new Agent","\n    ","Select “Mobile” platform","\n    ","Select “Mobile Driver”","\n    ","Select “Appium” type of driver","\n    ","Click Finish","\n    ","The new Agent will be added to your Agents tree","\n    ","  ","\n    ","   ","\n    "," ","\n    "," ","\n    "," ","\n    "],["\n    ","Set below connection configurations on Mobile Agent edit page:","\n    ","Appium server- need to set the Appium server URL, in case using cloud device lab so need to get the Appium server URL to use from the provider.","\n    ","default Appium server URL structure is:","\n    ","http://<<AppiumServerIP>>:<<AppiumServerPort>>/wd/hub","\n    ","Load device window- set if to load the Ginger device view window which allows the user to view the connected device screenshot and interact with it using mouse and keyboard operations","\n    ","Auto-refresh mode- set the device screenshot refresh way of working:","\n    ","“Live”- screenshot will be refreshed automatically constantly","\n    ","“Post Operation”- screenshot will be refreshed automatically only post-operation like mouse click on the device screenshot or after mobile Action execution","\n    ","“Disabled”- no automatic screenshot refresh, user needs to refresh it manually when required","\n    ","Advanced:","\n    ","Proxy- set the full proxy URL (including port if needed) in case proxy is required for connecting the Appium server","\n    ","Load timeout (seconds)- set the timeout for the Appium server connection attempt","\n    ","   ","\n    "," ","\n    "],["\n    ","Desired Capabilities in Appium refer to the combination of key-value pairs encoded in a JSON object. These key-value pairs are defined by the QAs to request the Appium server for the desired test automation session.","\n    ","Please follow the below for configuring it:","\n    ","Platform- select the tested device platform “Android” or “iOS”","\n    ","Application type-","\n    ","“Native/Hybrid”- select it in case planning to test application installed on the device","\n    ","“Web” - select it in case planning to test web application loaded on the device browser (Chrome for Android and Safari for iOS)","\n    ","Capabilities- those are the actual key-value pairs which been sent to Appium as part of the connection, above “Platform” and “Application type” selection auto-generating the basic required capabilities to be set for establishing the connection to the required device and application type.","\n    ","\n    ","Users can override the default configured capabilities and add/remove capabilities as needed (or as required by the specific cloud device provider).","\n    ","For stopping the auto capabilities manipulation, uncheck the “Auto-update capabilities table” checkbox.","\n    ","Please find in the link below the full list of Appium supported capabilities:","\n    ","http://appium.io/docs/en/writing-running-appium/caps/","\n    ","\n    ","Android Device Basic Appium Desired Capabilities","\n    ","\n      ","\n        ","\n          ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Key","\n            ","\n            ","\n              ","Value","\n            ","\n            ","\n              ","Description","\n            ","\n          ","\n          ","\n            ","\n              ","“platformName”","\n            ","\n            ","\n              ","“Android”","\n            ","\n            ","\n              ","Specify the OS type of the device","\n            ","\n          ","\n          ","\n            ","\n              ","“automationName”","\n            ","\n            ","\n              ","“automationName”","\n            ","\n            ","\n              ","Specify the type of the Appium automation engine to use","\n            ","\n          ","\n          ","\n            ","\n              ","“deviceName”","\n            ","\n            ","\n              ","Sample: “Galaxy S20”","\n            ","\n            ","\n              ","Set the name of the device","\n            ","\n          ","\n          ","\n            ","\n              ","“udid”","\n            ","\n            ","\n              ","Sample: “RF8N21RGCBD”","\n            ","\n            ","\n              ","Set the ID of the device","\n            ","\n          ","\n          ","\n            ","\n              ","“appPackage”","\n            ","\n            ","\n              ","Sample:","\n              ","“com.android.settings”","\n              ","\n            ","\n            ","\n              ","[To be set only in case of Native/Hybrid application] Represents the Java package of the desired Android App to be tested","\n            ","\n          ","\n          ","\n            ","\n              ","“appActivity”","\n            ","\n            ","\n              ","Sample:","\n              ","“com.android.settings.Settings”","\n            ","\n            ","\n              ","[To be set only in case of Native/Hybrid application]","\n              ","Represents the name of the desired activity to be launched from the package. It needs to be preceded by a ‘.’","\n            ","\n          ","\n          ","\n            ","\n              ","“browserName”","\n            ","\n            ","\n              ","“Chrome”","\n            ","\n            ","\n              ","[To be set only in case of Web application]","\n              ","Represents the name of the mobile web browser to be automated.","\n            ","\n          ","\n        ","\n      ","\n    ","\n    ","\n    ","iOS Device Basic Appium Desired Capabilities","\n    ","\n      ","\n        ","\n          ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Key","\n            ","\n            ","\n              ","Value","\n            ","\n            ","\n              ","Description","\n            ","\n          ","\n          ","\n            ","\n              ","“platformName”","\n            ","\n            ","\n              ","“iOS”","\n            ","\n            ","\n              ","Specify the OS type of the device","\n            ","\n          ","\n          ","\n            ","\n              ","“automationName”","\n            ","\n            ","\n              ","“XCUITest”","\n            ","\n            ","\n              ","Specify the type of the Appium automation engine to use","\n            ","\n          ","\n          ","\n            ","\n              ","“deviceName”","\n            ","\n            ","\n              ","Sample: “Galaxy S20”","\n            ","\n            ","\n              ","Set the name of the device","\n            ","\n          ","\n          ","\n            ","\n              ","“udid”","\n            ","\n            ","\n              ","Sample: “00008020-001369913E93802E”","\n            ","\n            ","\n              ","Set the ID of the device","\n            ","\n          ","\n          ","\n            ","\n              ","“bundleId”","\n            ","\n            ","\n              ","Sample:","\n              ","“com.apple.Preferences”","\n              ","\n            ","\n            ","\n              ","[To be set only in case of Native/Hybrid application] Represents the ID of the desired iOS App to be tested","\n            ","\n          ","\n          ","\n            ","\n              ","“browserName”","\n            ","\n            ","\n              ","“Safari”","\n            ","\n            ","\n              ","[To be set only in case of Web application]","\n              ","Represents the name of the mobile web browser to be automated.","\n            ","\n          ","\n        ","\n      ","\n    ","\n    "," ","\n    ","           ","\n    "," ","\n    "],["\n    ","       Using the Appium agent user can connect to the mobile device and control it via mouse and keyboard events done on top of the             mobile device window and by running dedicated Ginger Actions.","\n    ","       See below how to start the Agent and how to control it.","\n    "],["\n    ","Follow below steps for starting the Appium Agent:","\n    ","Add Business Flow and add the Mobile target application to it","\n    ","Shift to Automate page for the specific Business Flow","\n    ","Select the added Appium Agent to be mapped to the Mobile Target Application","\n    ","Start the Agent by clicking on the “Start” button","\n    ","Mobile device window will launch (unless disabled on the Agent configurations) and show the device loading and then it screenshots","\n    "," ","\n    ","\n    "," ","\n    ","\n    "],["\n    "],["\n    ","Users can control the device via mouse and keyboard operation and by dedicated action, see below for full possible controls.","\n    ","\n    ","Ginger Mobile Window Configurations","\n    "," Changing Auto refresh mode:","\n    ","Click on the “Configurations” button","\n    ","Select the wanted mode:","\n    ","“Live”- screenshot will be refreshed automatically constantly","\n    ","“Post Operation”- screenshot will be refreshed automatically only post-operation like mouse click on the device screenshot or after mobile Action execution","\n    ","“Disabled”- no automatic screenshot refresh, user needs to refresh it manually when required","\n    ","Refresh waiting rate- impacting the waiting time between screenshots capturing, 10 will set it to maximum waiting time and 0 to no waiting at all","\n    ","\n    ","In case the “Live” option is not selected, the “Refresh” button will be presented for the manual refresh of the screenshot when needed","\n    "," ","\n    ","        ","\n    ","\n    "," ","\n    ","Control the device via mouse and keyboard","\n    ","Please find below the operations you can perform on the Ginger mobile device window:","\n    ","Click on any element that appears on the screenshot using mouse click","\n    ","Drag element by long mouse click and drag","\n    ","Swipe the screen by mouse click and drag from side to side","\n    ","Click on Home / Back / Menu buttons","\n    ","Change device orientation via the dedicated button","\n    ","Volume Up/Down via dedicated button","\n    ","Lock/Un-lock device via dedicated button (only on Android native)","\n    ","Enter text values to selected text boxes directly via the keyboard (only on Web applications)","\n    ","\n    "," ","\n    ","Control the device via Mobile Device Action","\n    ","By using the “Mobile Device Action” user can control the device or add device control actions to his automation flow, steps:","\n    ","Open the “Add Actions” panel","\n    ","Select “Actions Library”","\n    ","Select “Platform Actions”/ ”Mobile Device Action”","\n    ","Double click the Action for adding it to the selected Activity Actions list","\n    ","Double click the Action to get into it “Operation Settings”","\n    ","Select the operation to perform","\n    ","Click on “Run Action”","\n    ","The operation will be performed on the device and impact will be visible on the mobile device window","\n    ","\n    "," ","\n  ","\n\n"]],"2":[["    Description"],[" ","Pre-requisite"],[" "],["  ","Appium Server Installation"],["Testing Mobile Device Setup"],["  ","Ginger Appium Agent Configuration"],["      ","Ginger Appium Agent Usage"]],"3":[["  ","Install Components Needed for Android Devices Testing"],["  ","Install Components Needed for iOS Devices Testing"],["   ","Generic Appium Server Component Installation"],["    ","Start Appium Server"],["  ","Android Testing Mobile Device Setup"],["  ","iOS Testing Mobile Device Setup"],["  ","Add Mobile Target Application"],["     ","Add Appium Agent"],["    ","Configure Appium Agent Connection Details"],["    ","Configure Appium Agent Desired Capabilities"],["     ","Start Appium Agent"],[" "],["    ","Ginger Mobile Window Way of Using"]],"id":"99"})
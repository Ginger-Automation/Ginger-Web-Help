rh._.exports({"0":[[" ","Mobile Appium Agent"]],"2":[[" ","Ginger Mobile Agent Configurations Steps"],[" ","        These steps will allow Ginger to run tests on a mobile device using ","Appium","."],[" ","Appium server (see below steps for installing Appium server in case not exist)- Appium server should be accessible from the machine Ginger is running on."," ","Android / iOS mobile device (see below steps for configuring the devices to work with Appium)"],[" ","Ginger is connecting to the tested mobile device via Appium server which must be installed (if not already exist) before starting the Ginger testing session. Appium server should be located on a machine and Port which is accessible from the machine Ginger is running on."," ","\"Please refer to Appium official documents which having most updated details related to Appium pre-requisites, installation steps, configuration, etc.”"," ","Appium official Website link"," : ","https://appium.io/"],[" ","\"Please refer to Appium official documents which having most updated details related to Appium pre-requisites, installation steps, configuration, etc.”"," ","Appium official Website link"," : ","https://appium.io/"],[" ","\"Please refer to Appium official documents which having most updated details related to Appium pre-requisites, installation steps, configuration, etc.”"," ","Appium official Website link"," : ","https://appium.io/"],[" ","\"Please refer to Appium official documents which having most updated details related to Appium pre-requisites, installation steps, configuration, etc.”"," ","Appium official Website link"," : ","https://appium.io/"," ","            it is recommended to install the “Desktop App” for easier usage."],[" ","Please use the below link for getting to know Appium Desktop App and how to start it:"," ","Appium official Website link"," : ","https://appium.io/"," ","\n      ‎"],[" ","The Android/iOS devices which will be tested needs to be connected via USB cable to the machine on which the Appium server is running. Please follow the below steps for configuring the devices as required by Appium."],[" ","Please follow the steps on the link below for configuring the device for allowing Appium to successfully control it:"," ","https://appium.io/docs/en/drivers/android-uiautomator2/index.html#real-device-setup"],[" ","Please follow the steps on the link below for configuring the device for allowing Appium to successfully control it:"," ","https://appium.io/docs/en/drivers/ios-xcuitest-real-devices/"],[" ","Appium Agent needs to be added to the Ginger solution for connecting to a specific application on a specific mobile device"," ","Appium server."," ","Please follow the below steps for configuring the Appium Agent on Ginger."],[" "," Before adding an Appium Agent the Solution should have a Mobile Target Application, if it "," "," not having it ","so"," please follow below steps for adding it:"," "," Open the Ginger Solution"," ","Click on “","Configurations”","à"," “","Target Applications","”"," ","Click on ","“","Add","” button and select Mobile platform application"," ","You can change the name of the application added to the grid"," ","Click on “","Save","” button"],[" ","Appium Agent is required for configuring the connection to a specific Appium Server Specific mobile device  Specific tested the application on the device."," ","Please follow the below steps for adding the Appium Agent to the Ginger solution:"," ","Go to “Configurations”  “Agents”"," ","Click on the “Add” button, “Add New Agent” wizard will be shown"," ","Click Next"," ","Set Name for the new Agent"," ","Select “Mobile” platform"," ","Select “Mobile Driver”"," ","Select “Appium” type of driver"," ","Click Finish"," ","The new Agent will be added to your Agents tree"],[" ","Set below connection configurations on Mobile Agent edit page:"," ","Appium server","- need to set the Appium server URL, in case using cloud device lab so need to get the Appium server URL to use from the provider."," ","default Appium server URL structure is:"," ","http://<<AppiumServerIP>>:<<AppiumServerPort>>/wd/hub"," ","Load device window-"," set if to load the Ginger device view window which allows the user to view the connected device screenshot and interact with it using mouse and keyboard operations"," ","Auto-refresh mode","- set the device screenshot refresh way of working:"," ","“Live”- screenshot will be refreshed automatically constantly"," ","“Post Operation”- screenshot will be refreshed automatically only post-operation like mouse click on the device screenshot or after mobile Action execution"," ","“Disabled”- no automatic screenshot refresh, user needs to refresh it manually when required"," ","Advanced",":"," ","Proxy","- set the full proxy URL (including port if needed) in case proxy is required for connecting the Appium server"," ","Load timeout (seconds)","- set the timeout for the Appium server connection attempt"," ","To configure ","the ","agent’s connection details to work with a UFTM device, see “Ginger-UFT Help Document","”."],[" ","Desired Capabilities in Appium refer to the combination of key-value pairs encoded in a JSON object. These key-value pairs are defined by the QAs to request the Appium server for the desired test automation session."," ","Please follow the below for configuring it:"," ","Platform","- select the tested device platform “Android” or “iOS”"," ","Application type","-"," ","“Native/Hybrid”- select it in case planning to test application installed on the device"," ","“Web” - select it in case planning to test web application loaded on the device browser (Chrome for Android and Safari for iOS)"," ","Capabilities","- those are the actual key-value pairs which been sent to Appium as part of the connection, above “Platform” and “Application type” selection auto-generating the basic required capabilities to be set for establishing the connection to the required device and application type."," ","Users can override the default configured capabilities and add/remove capabilities as needed (or as required by the specific cloud device provider)."," ","For stopping the auto capabilities manipulation, uncheck the “Auto-update capabilities table” checkbox."," ","Please find in the link below the full list of Appium supported capabilities:"," ","http://appium.io/docs/en/writing-running-appium/caps/"," ","3.4.1 Android Device Basic Appium Desired Capabilities"," ","Key"," ","Value"," ","Description"," ","“platformName”"," ","“Android”"," ","Specify the OS type of the device"," ","“automationName”"," ","“automationName”"," ","Specify the type of the Appium automation engine to use"," ","“deviceName”"," ","Sample: “Galaxy S20”"," ","Set the name of the device"," ","“udid”"," ","Sample: “RF8N21RGCBD”"," ","Set the ID of the device"," ","“appPackage”"," ","Sample:"," ","“com.android.settings”"," ","[To be set only in case of Native/Hybrid application] Represents the Java package of the desired Android App to be tested"," ","“appActivity”"," ","Sample:"," ","“com.android.settings.Settings”"," ","[To be set only in case of Native/Hybrid application]"," ","Represents the name of the desired activity to be launched from the package. It needs to be preceded by a ‘.’"," ","“browserName”"," ","“Chrome”"," ","[To be set only in case of Web application]"," ","Represents the name of the mobile web browser to be automated."," ","3.4.2 iOS Device Basic Appium Desired Capabilities"," ","Key"," ","Value"," ","Description"," ","“platformName”"," ","“iOS”"," ","Specify the OS type of the device"," ","“automationName”"," ","“XCUITest”"," ","Specify the type of the Appium automation engine to use"," ","“deviceName”"," ","Sample: “Galaxy S20”"," ","Set the name of the device"," ","“udid”"," ","Sample: “00008020-001369913E93802E”"," ","Set the ID of the device"," ","“bundleId”"," ","Sample:"," ","“com.apple.Preferences”"," ","[To be set only in case of Native/Hybrid application] Represents the ID of the desired iOS App to be tested"," ","“browserName”"," ","“Safari”"," ","[To be set only in case of Web application]"," ","Represents the name of the mobile web browser to be automated."," ","To configure the agent’s capabilities to work with a UFTM device, see “Ginger-UFT Help Document”."],[" ","Using the Appium agent user can connect to the mobile device and control it via mouse and "," "," keyboard events done on top of the mobile device window and by running dedicated Ginger "," "," Actions."," ","See below how to start the Agent and how to control it. "],[" ","Follow below steps for starting the Appium Agent:"," ","Add"," Business Flow"," and add the Mobile target application to it"," ","Shift to"," Automate page"," for the specific Business Flow"," ","Select the added"," Appium Agent"," to be mapped to the Mobile Target Application"," ","Start the Agent by clicking on the “","Start","” button"," ","Mobile device window will launch"," (unless disabled on the Agent configurations) and show the device loading and then it screenshots"],[" ","Users can control the device via mouse and keyboard operation and by dedicated action, see below for full possible controls."," ","4.2.1. Ginger Mobile Window Configurations"," "," Changing ","Auto refresh mode",":"," ","Click on the “","Configurations","” button"," ","Select the wanted mode:"," ","“","Live","”- screenshot will be refreshed automatically constantly"," ","“Post ","Operation","”- screenshot will be refreshed automatically only post-operation like mouse click on the device screenshot or after mobile Action execution"," ","“","Disabled","”- no automatic screenshot refresh, user needs to refresh it manually when required"," ","Refresh waiting rate","- impacting the waiting time between screenshots capturing, 10 will set it to maximum waiting time and 0 to no waiting at all"," ","In case the “","Live","” option is not selected, the “","Refresh","” button will be presented for the manual refresh of the screenshot when needed"," ","4.2.2 Control the device via mouse and keyboard"," ","Please find below the operations you can perform on the Ginger mobile device window:"," ","Click ","on any element that appears on the screenshot using mouse click"," ","Drag ","element by long mouse click and drag"," ","Swipe ","the screen by mouse click and drag from side to side"," ","Click on ","Home ","/ Back / Menu"," buttons"," ","Change device ","orientation ","via the dedicated button"," ","Volume Up/Down"," via dedicated button"," ","Lock/Un-lock device"," via dedicated button (only on Android native)"," ","Enter text values"," to selected text boxes directly via the keyboard (only on Web applications)"," ","4.2.3 Control the device via Mobile Device Action"," ","By using the “Mobile Device Action” user can control the device or add device control actions to his automation flow, steps:"," ","Open the “","Add"," ","Actions","” panel"," ","Select “","Actions"," ","Library","”"," ","Select “","Platform"," ","Actions","”/ ”","Mobile Device ","Action","”"," ","Double click the Action for adding it to the selected Activity Actions list"," ","Double click the Action to get into it “","Operation"," ","Settings","”"," ","Select the operation to perform"," ","Click on “","Run"," ","Action","”"," ","The operation will be performed on the device and impact will be visible on the mobile device window"]],"3":[[" ","Description"],[" "," Pre-requisite"],[" "," 1. Appium Server Installation"],[" ","1.1 Install Components Needed for Android Devices Testing"],[" ","1.2 Install Components Needed for iOS Devices Testing"],[" ","1.3 Generic Appium Server Component Installation"],[" ","1.4 Start Appium Server"],[" ","2. Testing Mobile Device Setup"],[" ","2.1 Android Testing Mobile Device Setup"],[" ","2.2 iOS Testing Mobile Device Setup"],[" ","  3. Ginger Appium Agent Configuration"],[" ","  3.1 Add Mobile Target Application"],[" ","3.2 Add Appium Agent"],[" ","3.3 Configure Appium Agent Connection Details"],[" ","3.4 Configure Appium Agent Desired Capabilities"],[" "," 4. Ginger Appium Agent Usage"],[" ","4.1 Start Appium Agent"],[" ","    4.2 Ginger Mobile Window Way of Using"]],"id":"108"})
rh._.exports({"0":[["How to Automate Mobile Application"]],"1":[["\n  ","\n    "," ","\n    ","           "," How to Automate Mobile Application","\n    "," ","\n    "," ","\n    ","Contents","\n    ","Description","\n    ","Pre-requisite","\n    ","Start Mobile Agent","\n    ","Add Device Control Actions to Automation Flow","\n    ","Create Flow using Explorer","\n    ","\n      ","Launch Window Explorer","\n      ","Select Element via Screenshot","\n      ","Select Element via Page Source","\n      ","Select Element via Grid View","\n      ","Add Action for Selected Element","\n    ","\n    "," ","\n    "," ","\n    "," ","\n    ","\n      ‎","\n    "],["\n    ","This guide will explain how you can build automation flow for mobile applications using Ginger flow creation tools.","\n    "," ","\n    "],["\n    ","Configured Mobile Target Application","\n    ","Configured Business Flow which mapped to the Mobile Target Application","\n    ","Configured and working mobile Agent","\n    ","Mobile native/hybrid/web application to automate","\n    "],["\n    "],["\n    ","Follow below steps for starting the Mobile Agent:","\n    ","Add Business Flow and add the Mobile target application to it","\n    ","Shift to Automate page for the specific Business Flow","\n    ","Select the added Appium Agent to be mapped to the Mobile Target Application","\n    ","Start the Agent by clicking on the “Start” button","\n    ","Mobile device window will launch (unless disabled on the Agent configurations) and show the device loading and then it screenshots","\n    "," ","\n    ","\n    ","\n    "," ","\n    "," ","\n    "],["\n    ","By using the “Mobile Device Action” user can control the device or add device control actions to his automation flow, steps:","\n    ","Open the “Add Actions” panel","\n    ","Select “Actions Library”","\n    ","Select “Platform Actions”/ ”Mobile Device Action”","\n    ","Double click the Action for adding it to the selected Activity Actions list","\n    ","Double click the Action to get into it “Operation Settings”","\n    ","Select the operation to perform","\n    ","Click on “Run Action”","\n    ","The operation will be performed on the device and impact will be visible on the mobile device window","\n    ","\n    "," ","\n    "],["\n    ","The Explorer tool allows users to explore the current viewed mobile application page, select the element/control needed to be automated and attach proper action to it, by that, Action by Action, the user can build the automation flow.","\n    "," ","\n    "],["\n    ","Follow the below steps for opening the Explorer tool:","\n    ","\n      ","Make sure mobile Agent is started","\n      ","Reach to the mobile application page you want to automate","\n      ","Open the “Add Actions” panel","\n      ","Select the “Explorer” option","\n      ","Explorer tool will be opened inside the panel","\n    ","\n    ","\n    "," ","\n    ","\n    "," ","\n    "],["\n    ","The screenshot option is the easiest way to select an element to be automated, follow the below steps for using it:","\n    ","Make sure the page to automate is loaded on the device","\n    ","Refresh Explorer Screenshot by clicking on the “Refresh Page” button","\n    ","Click on the “Screenshot” tab","\n    ","Go over the screenshot image and Click on the element/control which you want to automate","\n    ","After few seconds the explorer will identify the element control which mouse was pointing on and the element details will be loaded into the “Selected Element” section","\n    ","Selected element also will be highlighted on the screenshot","\n    ","\n    "," ","\n    "],["\n    ","Page Source will show the XML (for native/hybrid apps) and HTML (for Web apps) which behind the currently loaded page on the device, the user can select an element by picking one of the nodes, steps:","\n    ","Make sure the page to automate is loaded on the device","\n    ","Refresh Explorer Screenshot by clicking on the “Refresh Page” button","\n    ","Click on the “Page Source” tab","\n    ","Review the loaded XML/HTML","\n    ","Select the node related to the control you want to automate","\n    ","Details of the selected control will be loaded into the “Selected Element” section","\n    "," ","\n    ","\n    "," ","\n    "],["\n    ","Grid View will show the list of elements/controls that exist on the loaded application page on the device for the user to select from, steps:","\n    ","Make sure the page to automate is loaded on the device","\n    ","Refresh Explorer Screenshot by clicking on the “Refresh Page” button","\n    ","Click on the “Grid View” tab","\n    ","Filter Elements window will be shown for the user to select the type of UI controls to filter by, user should select which type of controls he requires and click “Search” (it is recommended to use the filter for faster controls scanning process)","\n    ","All found elements/controls will be shown in a list","\n    ","Select the required element from the list","\n    ","The selected element details will be loaded into the “Selected Element” section","\n    "," ","\n    ","\n    "," ","\n    ","\n    "," ","\n    "],["\n    ","Once element/control was selected using the “Screenshot”/ “Page Source” / “Grid View” tools, all of its details will be shown in the “Selected Element” section.","\n    ","Element details will be:","\n    ","Properties- a collection of information details Ginger collected for the specifically selected element, like Type, size, location, etc.","\n    ","Locators- list of locators Ginger captured to be used for locating this element in flow execution time","\n    ","Action- will include the possible operations that can be performed on the selected element","\n    ","Steps for adding Action for the specifically selected element:","\n    ","Click on the Action tab","\n    ","Select/set the proper locator and value to be used","\n    ","Select the operation to be done","\n    ","In case relevant, set the value to be used","\n    ","Click on “Run” for testing the operation from the Explorer tool, the result of the execution will be shown on the “Execution Report” tab","\n    ","In case operation performed as expected, click on the “Add” button for adding the operation for the specifically selected element into the list of currently selected Activity","\n    "," ","\n    ","\n    "," ","\n    ","\n    "," ","\n    ","\n  ","\n\n"]],"2":[["Description"],["Pre-requisite"],[" "],["Start Mobile Agent"],["Add Device Control Actions to Automation Flow"],["Create Flow using Explorer"]],"3":[["Launch Window Explorer"],["Select Element via Screenshot"],["Select Element via Page Source"],["Select Element via Grid View"],["Add Action for Selected Element"]],"id":"72"})
rh._.exports({"0":[[" ","How to Automate Mobile Application"]],"2":[[" "," How to Automate Mobile Application"," ","Contents"," ","Description"," ","Pre-requisite"," ","Start Mobile Agent"," ","Ginger Mobile Window Way of Using"," ","Add Device Control Actions to Automation Flow"," ","Create Flow using Explorer"," ","Launch Window Explorer"," ","Select Element via Screenshot"," ","Select Element via Page Source"," ","Select Element via Grid View"," ","Add Action for Selected Element"],[" ","These ","guide"," will explain how you can build automation flow for mobile ","application"," using Ginger flow creation tools."],[" ","Configured Mobile Target Application"," ","Configured Business Flow which mapped to the Mobile Target Application"," ","Configured and working mobile Agent"," ","Mobile native/hybrid/web application to automate"],[" ","Using the Appium agent user can connect to the mobile device and control it via mouse and keyboard events done on top of the mobile device window and by running dedicated Ginger Actions."," ","See below how to start the Agent and how to control it."," ","Follow below steps for starting the Mobile Agent:"," ","Add Business Flow"," and add the Mobile target application to it"," ","Shift to"," ","Automate ","page"," ","for the specific Business Flow"," ","Select the added ","Appium Agent"," to be mapped to the Mobile Target Application"," ","Start the Agent by clicking on “","Start","” button"," ","Mobile device window will launch"," (unless disabled on the Agent configurations) and show the device loading and then it screenshots"],[" ","User"," can control the device via mouse and keyboard operation and by dedicated action, see below full possible controls."," "," 1.1.1 Ginger Mobile Window Configurations"," "," Changing ","Auto refresh mode",":"," ","Click on “","Configurations","” button"," ","Select the wanted mode:"," ","“","Live","”- screenshot will be refreshed automatically constantly"," ","“","Post Operation","”- screenshot will be refreshed automatically only post operation like mouse click on the device screenshot or after mobile Action execution"," ","“","Disabled","”- no automatic screenshot refresh, user needs to refresh it manually when required"," "," Refresh waiting rate","- impacting the waiting time between screenshots capturing, 10 will set"," "," it to maximum waiting time and 0 to no waiting at all"," ","In case “Live” option is not selected, “","Refresh","” button will be presented for manual refresh of the screenshot when needed"," ","1.1.2 Control the device via mouse and keyboard"," ","Please find below the operations you can perform on the Ginger mobile device window:"," ","Click"," ","on any element appears on the screen shot using mouse click"," ","Drag"," ","element by long mouse click and drag"," ","Swipe"," the screen by mouse click and drag from side to side"," ","Click on ","Home / Back / Menu"," buttons"," ","Change device ","orientation"," ","via dedicated button"," ","Volume Up/Down"," ","via dedicated button"," ","Lock/Un-lock"," device"," via dedicated button (only on Android native)"," ","Enter text values"," to selected text boxes directly via the keyboard (only on Web applications)"],[" ","Best practice for automating a Web Application is to create the flow on local browser (check “Page Object Model” for more information) and then execute it on Mobile Agent by choosing in the Agent’s page the Web:"," ","To automate a Native/Hybrid Application follow the steps below."," ","By using the “Mobile Device Action” user can control the device or add device control actions to his automation flow, steps:"," ","Open “","Add ","Actions","” panel"," ","Select “","Actions ","Library","”"," ","Select “","Platform ","Actions","”","/ ”","Mobile"," ","Device ","Action","”"," ","Double click the Action for adding it to the selected Activity Actions list"," ","Double click the Action to get into it “","Operation ","Settings","”"," ","Select the operation to perform"," ","Click on “","Run ","Action","”"," ","The operation will be performed on the device and impact will be visible on the mobile device window"],[" ","The ","Explorer tool allows user to explore the current viewed mobile application page, select the element/control needed to be automated and attach proper action to it, by that, Action by Action, the user can build the automation flow. "," ","3.2 Launch Window Explorer"," "," Follow below steps for opening Explorer tool:"," ","Make sure mobile Agent is started"," ","Reach to the mobile application page you want to automate"," ","Open “","Add ","Actions","” panel"," ","Select “","Explorer","” option"," ","Explorer tool will be opened inside the panel"," "," 3.3 Select Element via"," Screenshot"," "," Screenshot option is the ","easiest"," way to ","select element to be automate",", follow below steps ","for "," "," using it:"," ","Make sure the page to automate is loaded on the device"," ","Refresh Explorer Screenshot by clicking on the “Refresh Page” button"," ","Click on “","Screenshot","” tab"," ","Go over the screenshot image and ","C","lick"," on the element/control which you want to automate"," ","After few seconds the explorer will identify the element control which mouse was pointing on and the element details will be loaded into the “","Selected ","Element","” section"," ","Selected element also will be highlighted on the screenshot "],[" "," Page Source will show the XML (for native/hybrid apps) and HTML (for Web apps) which behind "," "," the current loaded page on the device, user is able to select an element by picking one of the "," "," nodes, steps:"," ","Make sure the page to automate is loaded on the device"," ","Refresh Explorer Screenshot by clicking on the “Refresh Page” button"," ","Click on “","Page ","Source","” tab"," ","Review the"," ","loaded XML/HTML"," ","Select the node"," which related to the control you want to automate"," ","Details of the selected control will be loaded into the “","Selected ","Element","” section"],[" "," Grid View will show list of elements/controls exist on the loaded application page on the "," "," device for the user to select from, steps:"," ","Make sure the page to automate is loaded on the device"," ","Refresh Explorer Screenshot by clicking on the “Refresh Page” button"," ","Click on “","Grid View","” tab"," ","Filter ","Elements"," window"," will be shown for the user to select the type of UI controls to filter ","by,"," user should select which type of controls he requires and click “","Search","” (it is recommended to use the filter for faster controls scanning process)"," ","All found elements/controls will be shown in a list"," ","Select the required element"," from the list"," ","The selected element details will be loaded into the “","Selected ","Element","” section"],[" "," Once element/control was selected using the “Screenshot”/ “Page Source” / “Grid View” tools, "," "," all of it details will be shown in the “Selected Element” section."," "," Element details will be:"," ","Properties","- collection of information details Ginger collected ","for the specific selected element, like Type, size, location, etc."," ","Locators","- list of locators Ginger captured to be used for locating this element in flow execution time"," ","Action","- will include the possible operations can be performed on the selected element"," "," Steps for adding Action for the specific selected element:"," ","Click on ","Action"," ","tab"," ","Select/set the proper locator and value"," to be used"," ","Select the operation"," to be done"," ","In case relevant, ","set the value"," to be used"," ","Click on “","Run","” for testing the operation from Explorer tool, result of the execution will be shown on “","Execution ","Report","” tab"," ","In case operation performed as expected, click on “","Add","” button for adding the operation for the ","specific"," selected element ","into the list of current selected Activity"]],"3":[[" ","Description"],[" ","Pr","e-requisite"],[" ","1. Start Mobile Agent"],[" ","1.1 Ginger Mobile Window Way of Using"],[" ","2. Add Device ","Control Actions to Automation Flow"],[" ","3. Create Flow using Explorer"],[" "," 3.4 Select Element via"," Page Source"],[" "," 3.5 Select Element via ","Grid View"],[" "," 3.6. Add Action for Selected Element"]],"id":"129"})
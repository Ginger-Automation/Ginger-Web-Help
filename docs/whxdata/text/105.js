rh._.exports({"0":[[" ","Browser Action"]],"1":[[" ","3) ","Switch to Shadow DOM"," ","(Operation Type: Switch To Shadow DOM)"],[" ","4. Switch to Default DOM"," ","(Operation Type: Switch To Default DOM)"]],"2":[[" ","Introduction "],[" ","How to Configure Action"," ","Pre-requisite"],[" ","Action Operation- Initialize Browser"],[" ","Action Operation- Handle Browser Alerts"],[" ","How to use Page Object Model for Goto URL Operation"," ","Open the Browser Action and select operation type as ‘Goto URL’."],[" ","Different 'Operation Type' of 'Browser Action':"," "," 1) Block URLs & Unblock URLs using 'Browser Action' in Ginger ","(Operation Type: Set Blocked Urls & Unblock Urls)"],[" "," 2) Ginger - Network Logs Filtering ","(","Operation Type: ","Start Monitoring Network Logs, ","Stop Monitoring Network Logs & Get Network Logs)"]],"3":[[" ","   Browser Action"],[" ","This action is used to handle Browser and Widgets."],[" ","A Solution should be created with Agent having Web, Java or PowerBuilder Platform."],[" ","Double click on the Business flow. In the Activity Actions, click on ‘Add New’ button"," ","In the ‘Platform Actions’ tab, select the ‘Browse Action’ then click on ‘Add Action’ button given in the below window"," ","Below screen should be displayed."," ","The ‘Operation Type’ have default option as ‘Initialize Browser’."," ","Click on Ok to add the action to the Activity Actions."," ","       User needs to use ‘Go to URL’ Operation type to launch a website."," ","The ‘Operation Type’ have the below options:-"," ","Close Window ------- Used to close a window"," ","Get Page Source -----– used to get source of a Web page"," ","Get Page URL ----- – used to get the url of the displayed page"," ","Initialize Browser --------used to initialize a browser"," ","(default selected)"," ","Inject JS ------ – used when we want to inject a different Java script on the web page"," ","Maximize Window -----– used to maximize the displayed window"," ","Switch Frame -------– used when we want to switch between frames on the displayed web page"," ","Switch to Default Frame --– used when the focus is required to shift to the default frame of the web page"," ","Switch to Default Window – the default window is the one which is performed in ‘GoTo URL’ action. Using this"," ","sub action switches the focus to this default window"," ","Switch to Parent Frame ---- - used to switch to the parent frame of the web page"," ","Switch Window -------- used to switch between different windows"," ","Run Action will perform the action in the Agent."],[" ","In the below screen, select the ‘Operation Type’ as per the browser alert required."," ","Below are the list of operation available:-"," ","Accept Message Box"," ","Dismiss Message Box"," ","Get Message Box Text"," ","Set Alert Box Text"],[" ","Select the ‘Page Object Model URL’ radio button"," ","Click on the pen icon and select the Page Object Model from the displayed tree."," ","Click on the Select button of the selection window."," ","The select Page Object Model is then displayed. User can modify the page object model if desired using the ‘View/Edit POM’ button as shown below."],[" ","Introduction"," ","There are use cases where while performing web application testing, some specific URLs need to be blocked in browser, so that unwanted environment specific content should be blocked and should not be rendered on web page. Earlier this was not possible to block some URLs through Ginger web driver, and as part of this feature its enabled."," ","Use Case – "," ","There was a requirement from one of the accounts to block browser from sending web request to some specific URL, so that contents on the web page are rendered correctly after reaching some point in web application flow in a web browser session. And if the web request is not blocked the web page would render the distorted content which is not readable at all. The web request content which needed to be blocked was also relevant, but it was for some specific location and from test environment that was not supposed to be requested. Selenium supports blocking multiple URLs or domains at a time in same browser session."," ","So below were the steps user had to follow to perform the testing:"," ","Launch the browser and visit the expected URL."," ","Perform login. "," ","Reach to specific web page in the flow (with distorted web page content)"," ","Block the required URL/URLs from using Dev tools manually. "," ","Manually refresh the web page."," ","Now user would see the web page content rendered properly."," "," 1. Block URLs can be given in Ginger Browser action (Operation Type: Set Blocked Urls)"," ","To block specific URLs following modifications can be done in existing business flow, after reaching to point in the flow."," ","Add another “Browser Action”"," ","Select Operation Type as “","Set Blocked Urls","”"," ","After selecting the operation type as above, Ginger asks for list of URLs to be blocked."," ","Multiple URLs can be specified using comma separated values."," ","It can accept the list of URLs as inline value or it can also accept through variable"," ","Once the URLs are specified and executing the action, Ginger adds the URLs to in Browser’s blocked URLs list "," ","This feature is supported only in Chromium based browsers i.e. Google Chrome and Microsoft Edge "," ","2. Unb","lock URLs ","(Operation Type: Unblock Urls)"," ","URLs can be unblocked easily using another newly added operation type in Browser action called “","Unblock"," Urls”",". This will Unblock all previously blocked URLs, blocked user “Set Blocked URLs” operation type."],[" ","Introduction",": Using Network logs, we can track all the requests and responses from browser to analyze them. To enhance this feature, we have added better filtering capability based on like comparison. User can monitor 'Specefic URLs' as well."," ","Please follow below steps to use Network Logs Feature:"," "," 1. Add Browser Action to '","Start Monitoring Network Logs'"," and give Filters as below"," "," Before you start your actual Browser related activities, please add the first action Start Network Monitoring logs.","\n            Please add a Browser Action and select Start Monitoring Network Logs in Operation type as shown in below Screenshot."," "," One can use hard coded value as filter or one can use Value Expression editor to populate the Filter value using different kind of variables available in Ginger, e.g., Business Flow Variable, Activity Variable, Global Variable, Environment Parameters."," "," e.g.,","\n            Here user wants to track the Network logs for URL containing c8ea6ef96f4556409674bd5dbb3ee472 ID"," "," URL:"," https://amdocsprodmain.service-now.com/one_portal?id=aop_sc_cat_item&sys_id=","c8ea6ef96f4556409674bd5dbb3ee472"," "," Filter:"," c8ea6ef96f4556409674bd5dbb3ee472"," "," 2. Use Get Network Logs action during runtime to fetch the Network logs processed till the time the action is executed"," ","Steps:"," "," a) Add Browser action and select Operation Type as Get Network Logs as shown in screenshot"," "," b) Add Browser action and select Operation Type as Get Network Logs as shown in screenshot"," ","3. Add Browser action and select Operation Type as Get Network Logs as shown in screenshot"," ","Add a browser action and select Stop Monitoring Network Logs operation type."],[" ","In order to Locate Element of a shadow DOM, you need to first switch to the required Shadow DOM, to do this you must use the ‘Switch To Shadow DOM’ operation."," "," In the locate By and Locate Value inputs enter the parent of the shadow root. "," "," For e.g., in the below page to switch to shadow DOM. The locate by and locate value of ‘smart-ui-menu’ tag should be entered."],[" ","In case you are inside a Shadow DOM and you need to move out of it to the Default DOM (which does not have any access to any shadow DOM present on the page), you must use the ‘Switch To Default DOM’ operation."]],"id":"105"})
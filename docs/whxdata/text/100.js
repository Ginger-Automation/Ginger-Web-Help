rh._.exports({"0":[["Page Objects Model"]],"1":[["\n  ","\n    "," ","\n    ","                    "," Page Objects Model","\n    "," ","\n    "," ","\n    ","Contents","\n    ","Introduction","\n    ","Page Objects Model Wizard","\n    ","\n      ","Automatic page learn","\n      ","Manual Page Objects Model creation","\n      ","Adding Unmapped Elements to Mapped Elements list and vice-versa","\n      ","Learn Only Mapped Elements","\n      ","Learning the Elements by Locator’s Priority","\n      ","Giving Dynamic value to a Locator of the Learned Element","\n    ","\n    ","Page Objects Model Edit Page","\n    ","\n      ","Page Objects Model General Details","\n      ","Screenshot Tab","\n      ","UI Elements Tab","\n      ","Update Elements","\n    ","\n    ","Page Objects Model Element’s Values","\n    ","Using Page Objects Model for Automate and Execute","\n    ","\n      ","Automate Using Page Objects Model","\n      ","Automate Using Page Objects Model with Values","\n    ","\n    "," ","\n    "," ","\n    "," ","\n    ","\n      ‎","\n    "],["\n    ","The purpose of this document is to provide a hands-on step by step user guide for Autopilot Page Objects Model feature and to provide a wide overview on all Page         Objects Model available functions.","\n    ","It is available for Web and Java Platforms.","\n    "," ","\n    "],["\n    ","      ","There are 2 ways to create a Page Objects Model, first is to create one manually and the second is to let the Ginger learn the Page you’d like to automate, both      ","\n    ","      creations are being done using the Page Objects Model Wizard.","\n    "," ","\n    "],["\n    ","Prerequisites:","\n    ","Solution with at least one Platform Target Application","\n    ","At least one platform agent (e.g. selenium chrome Agent for Web Platform)","\n    ","Site URL which you wish to learn.","\n    ","\n    ","Go to Resources tab à Applications Models à Page Objects Models.","\n    ","Click the Plus button.","\n    ","\n    "," ","\n    ","Add Page Objects Model Wizard is opened.","\n    ","Click Next Introduction page.","\n    ","Learning Configurations page:","\n    ","Select Target application ---for Web","\n    ","(If you don’t have any Web Platform Target Application in your solution, please close the wizard configure a new target application configure one agent, and start over from step 1).","\n    ","\n    "," ","\n    ","For Java Applications:-","\n    ","In order to use the Java agent in the Page Object Model screen, the Java agent needs to be attached to the Java application from the Business Flow tab as shown below.","\n    ","Run the Launch Java Application Action and attach the Java agent to the Java application.","\n    ","Either launch the application using this Action or attach the agent on already launched Java application.","\n    ","\n    "," ","\n    "," ","\n    ","In the Add POM wizard, select the Target application as MyJavaApp. The Java agent is automatically populated and is Green indicating that it is On.","\n    ","\n    "," ","\n    ","Learn Specific Frame (Java Driver):","\n    ","\n    ","Checked Learn Specific Frame, in order to learn specific frame of the selected window.","\n    ","\n    "," ","\n    ","Select Agent (If you don’t have an Agent in your solution, please close the wizard configure a new Selenium agent, and start over from step 1).","\n    ","After selecting the agent, the On/Off button will be enabled. Click it in order to turn on your agent.","\n    ","\n    ","Now go to the browser instance which been raised by Ginger and navigate to the page URL you would like to learn.","\n    ","\n    "," ","\n    ","When the Agent and its browser instance are opened, the list of Elements Types will be shown on the page.","\n    ","Here you can specify what types of element interesting you in order to create your automation.","\n    ","Once done selecting all desired elements click next.","\n    ","\n    "," ","\n    "," ","\n    ","Learned Object Mapping","\n    ","\n    ","When reaching to this page the learning process will be automatically started and the Ginger will start to learn all existing elements on the page you were navigated on the previous steps.","\n    ","Indication of the running process would be the spinning orange icon which becomes visible. Also, you will notice that the elements are being added to the mapped elements and unmapped elements grids.","\n    ","The mapping between them is done depending upon the types of elements you selected on the learning configuration page.","\n    ","\n    "," ","\n    ","Selecting any element on the grid will cause the details section to be opened and there you can find all the learned properties and locators of the selected element.","\n    ","\n    "," ","\n    ","If you wish to stop the learning process (reason can be Ginger already learned all relevant elements and there is no reason to continue or you simply want to change the page on the browser instance etc.) you can do it by clicking the stop button.","\n    ","\n    "," ","\n    ","After clicking the stop button, you will be able to restart the learning process by clicking Re-learn button","\n    ","\n    "," ","\n    ","Using the Spy:","\n    ","Click on the Spy button","\n    ","\n    "," ","\n    ","While the Spy is on move your mouse to the requested element on the page and click ctrl.","\n    ","\n      ","Element not found – re-try 2 or 3 times.","\n      ","An element found – the element will be focused on the elements grid","\n      ","An element found but does not exist on the Element Grid – you will get a button to add the found element to the grid.","\n    ","\n    ","\n    "," ","\n    ","Click Next.","\n    ","              General Details page:","\n    ","The general details page contains all details which been pulled for the page, here you","\n    ","can change the page name, URL, and screenshot.","\n    ","\n    "," ","\n    ","Click Finish – The Page Objects Model has been added to the Page Objects Model tree.","\n    "," ","\n    "],["\n    "," ","\n    ","Go to Resources tab à Application Models à Page Objects Models à and Click the Plus button.","\n    ","            ","\n    "," ","\n    ","Add Page Objects Model Wizard is opened.","\n    ","\n    ","Click Next Introduction page.","\n    ","Check the Manual Radio Button and click Next.","\n    ","\n    "," ","\n    ","Learned Object Mapping:","\n    ","Add Elements By clicking the Plus button","\n    ","\n    "," ","\n    ","Add Locators to your added elements","\n    ","\n    "," ","\n    ","General Details","\n    ","Add Name, Description (optional) and Page URL (optional)","\n    ","\n    "," ","\n    ","Browse and Image for your Page Objects Model (optional)","\n    ","Click Finish, the New Page Objects Model added to the tree.","\n    "," ","\n    "],["\n    "," ","\n    ","  ","          If an element is an unmapped list and the user desires to use it in the Actions then follow the below","\n    ","             steps.","\n    ","\n      ","            Go to the Unmapped Elements tab and select the element.","\n      ","            Click on the ‘Add Elements to mapped list’ button as shown below","\n    ","\n    ","\n    "," ","\n    "," ","The element will move to the Mapped Elements tab as shown below","\n    ","\n    "," ","\n    ","The same steps are to be performed while moving the elements from mapped to unmapped tab.","\n    "," ","\n    "," ","\n    "],["\n    ","             ","Users can choose an option to learn only mapped elements instead of learning all the elements of the page.","\n    ","             This reduces the learning time. This option is available by default.","\n    ","            The user has to uncheck the checkbox if unmapped elements are to be learned.","\n    ","           ","\n    "," ","\n    "," ","\n    "],["\n    ","   ","         Users can set the priority of locators of the elements of the page.","\n    ","            On the Learning Configurations page, expand the area ‘Learned Elements Locators Preferences’.","\n    ","           There are 4 options viz. ById, ByName, ByRelXPath & ByXpath.","\n    ","            The sequence of the priority can be changed by using the arrow buttons as indicated below.","\n    ","            In this screenshot, when any element will be used in an Action, the Locator used will be ‘ByID’.","\n    ","            ","\n    "," ","\n    "," ","\n    ","            ","Users can also change the Locator of a particular element after the page is learned.","\n    ","            For this, select the Page Object Model. Go to the UI Elements tab and select the desired element.","\n    ","            Expand the Details area. Select the desired locator and using the arrow buttons bring it to priority 1.","\n    ","             ","\n    "," ","\n    "," ","\n    "],["\n    "," ","\n    ","              A locator of a learned element can be given a customized value.","\n    ","             For this, select the Page Object Model and go to the UI Elements tab.","\n    ","             Select the desired Element and expand the Details area.","\n    ","             Go to the Locators tab and select the desired locator.","\n    ","             Copy-paste the locator.","\n    ","             The pasted locator can then be edited by either directly typing in the value field or by using the","\n    ","              value expression button ‘…’ as shown below.","\n    ","              ","\n    "," ","\n    "," ","\n    "],["\n    "," ","\n    ","Prerequisites:","\n    ","At least one Page Objects Model was created on the Page Objects Model tree.","\n    "," ","\n    "],["\n    ","Go to Resources tab à Application Models à Page Objects Models.","\n    ","Select the Page Objects Model on the tree.","\n    ","\n    "," ","\n    ","On the upper section of the screen, you can change the Page Objects Model name description and the Target Application.","\n    ","Select an Agent to work with and turn it on by clicking the Red button, if the selected Agent is already raised, the button will be automatically green,","\n    ","and no need to re-raise the Agent.","\n    ","\n    "," ","\n    ","By default, the agent will be opened with the specified Page Objects Model Page URL, whenever you need you can navigate to this URL by clicking the Arrow button.","\n    ","\n    "," ","\n    "," ","\n    "],["\n    ","                Changing the Screenshot can be done by Clicking the Take Screenshot button which will get a screenshot from the current page on the mapped Agent or by                   browsing Image from a local file.","\n    ","              ","\n    "," ","\n    "],["\n    ","The page is divided into two :","\n    ","Mapped elements – The elements which we will use to automate our page","\n    ","Unmapped elements – Repository of all unused elements on the page.","\n    ","\n    "," ","\n    ","        Clicking the signs icon will shift elements from one group to another","\n    "," ","\n    ","       ","\n    "," ","\n    "," ","\n    ","  Select any element will enable the properties and locators grids in the below section","\n    ","   ","\n    "," ","\n    "," ","\n    ","You can test a specific locator by clicking its play button or click the grid’s menu play button to check all locators, the locator","\n    ","statuses will be changed according to the test result.","\n    ","\n    "," ","\n    "," ","\n    ","You can test all elements by clicking the Test All Mapped Elements button, this operation will approve your flow will not going to fail because the element cannot be found on the page, here you will have the opportunity to be aware that an element cannot be found before your execution and fix it.","\n    ","If you switch to the unmapped element tab you the button will be changed to test all Unmapped elements.","\n    ","\n    "," ","\n    ","You can add a new locator by clicking the add button, or copy and paste an existing one and then modify it for your needs.","\n    ","\n    ","The Up and Down buttons will define the priority of the locators, the priority order will be taken into consideration while searching the locator of the page.","\n    ","If you would like to exclude locators from the list just Uncheck its Active field.","\n    "," ","\n    ","Note: In automating section explains that in run time all Active locators will be used till the element will be found.","\n    "," ","\n    ","You can highlight elements on the open instance of the Agent by clicking the Highlight button.","\n    ","\n    "," ","\n    ","Using the Spy:","\n    ","Click on the Spy button","\n    ","\n    "," ","\n    ","While the Spy is on move your mouse to the requested element on the page and click ctrl.","\n    ","Element not found – re-try 2 or 3 times.","\n    ","An element found – the element will be focused on the elements grid","\n    ","An element found but does not exist on the Element Grid – you will get a button to add the found element to the grid.","\n    ","\n    "," ","\n    "," ","\n    ","Notes:","\n    ","Most of the operations (Highlight, Test Elements/Locators, Spy, Go to Page URL, etc.) will work only if the Agent is Selected and turned on.","\n    ","Auto Learned elements cannot be modified or deleted as they take from the page and in order to maintain the page we should keep them as is, manually added elements can be modified and deleted to your need.","\n    "," ","\n    "],["\n    ","                If the elements of the learned page have been updated then the user can update the elements using the ‘Update Elements’ button","\n    ","1. Select the Page Object Model and go to the UI Elements tab.","\n    ","2. Turn On the Agent and go to the desired page in the agent.","\n    ","3. Click on the ‘Update Elements’ button","\n    ","\n    "," ","\n    "," ","\n    ","4. ‘POM Elements Wizard’ is displayed.","\n    ","Expand the ‘New Elements Learning Settings’ and the ‘Learned Elements Locators Preferences’","\n    ","areas to get the details of them.","\n    ","\n    "," ","\n    ","Users can make changes in these areas if desired.","\n    ","Click on the Next button.","\n    ","\n    "," ","\n    ","5. All the elements present on the page are compared with the latest status.","\n    ","In order to map the element which is new and cannot be mapped, Press “Next”","\n    ","\n    "," ","\n    ","               6. A new window “Map deleted element with the new element” is displayed. If there is no deleted element found on the page, then this grid will be empty.","\n    "," ","\n    ","Select the edit option to map the element with new elements found on the page.","\n    ","\n    "," ","\n    ","\n    "," ","\n    ","7. Once the new element got selected, the user can validate the properties and values of existing/deleted elements and newly added elements","\n    ","by selecting the “Compare” option.","\n    ","Also, the properties and locators of a deleted element will be replaced with new values and will avoid breaking the automation flow","\n    ","which was happening earlier.","\n    ","\n    "," ","\n    "," ","\n    ","\n    "," ","\n    ","  The updated elements will be displayed on the Elements Compare page.","\n    ","     The Comparison Status and Comparison Details fields will give the details of it.","\n    ","     As shown below, a green check means ‘Unchanged’. The description of the icon will be displayed in the tooltip when the mouse hovers over the icon.","\n    "," ","\n    "," ","\n    "],["\n    "," ","\n    ","             After the page is learned, select the Page Objects Model on the tree.","\n    ","             Go to the UI Elements tab.","\n    ","            As shown in the below screen, the Possible Values field is displayed.","\n    ","            The values are also populated from the page if any.","\n    ","           As shown in the below screenshot, the selected element has learned the possible values from the page.","\n    ","            ","\n    "," ","\n    ","           ","   Elements that can have values are only allowed eg. Text box, list, etc.","\n    ","             For all the other elements, a warning message is displayed","\n    ","              ","\n    "," ","\n    ","             To enter the values, click on the ‘…’ button near the possible values field on the require element","\n    ","            ","\n    "," ","\n    "," ","\n    ","            ","Click on the + button in the new window","\n    ","           ","\n    "," ","\n    ","           User can add multiple values here and set one of them as default and click on the Ok button.","\n    ","           User can also modify and delete the values from this window.","\n    ","             ","\n    "," ","\n    ","                ","The default value will be displayed with a * in the list","\n    ","              ","\n    "," ","\n    "," ","\n    "," ","\n    "],["\n    "],["\n    ","                   ","Go to Business Flows Tab à Select the desired Business Flow with Web/Java Platform as Target Application.","\n    ","Double click on the Business Flow.","\n    ","Select the desired Activity where you want to add the Action.","\n    ","Expand the Add Actions section","\n    ","\n    "," ","\n    "," ","\n    ","        S","elect UIElement Action and click on Add to Actions button to add it.","\n    ","           ","\n    "," ","\n    ","             ","Double click on the UI element action to open it in Edit mode.","\n    ","              Select “Page Object Model Element” as Locate By. Select your added Page Objects Model in the “Page Object Model”.","\n    ","              Select your desired element as “Model Element” and click on the ‘Select Element’ button.","\n    ","\n    "," ","\n    ","Select the Element Action from the list and populate the value if needed.","\n    "," ","\n    "," ","\n    ","             "," Click on Run Action.","\n    ","            ","\n    "," ","\n    "," ","\n    "],["\n    ","             ","Values can be added to Elements either from the Page Objects Model.","\n    ","             Selecting the required element from Page Objects Model as shown below and click on the Select Element button","\n    ","\n    "," ","\n    ","The default value will be populated as shown below. User can also modify this value by typing the desired value in this field.","\n    "," ","\n    "," ","\n  ","\n\n"]],"2":[[" ","Introduction"],[" ","Page Objects Model Wizard"],["Page Objects Model Edit Page"],["Page Objects Model Element’s Values"],["       ","Using Page Objects Model for Automate and Execute"]],"3":[["Automatic page learn"],["      ","Manual Page Objects Model creation"],["        ","Adding Unmapped Elements to Mapped Elements list and vice-versa"],["      ","Learn Only Mapped Elements"],["      ","Learning the Elements by Locator’s Priority"],["Giving Dynamic value to a Locator of the Learned Element"],["Page Objects Model General Details"],["Screenshot Tab"],["UI Elements Tab"],["Update Elements"],["          ","Automate Using Page Objects Model"],["        ","Automate Using Page Objects Model with Values"]],"id":"100"})
rh._.exports({"0":[[" ","How to use Java Driver & Widgets in Ginger"]],"1":[[" "," How to use Java Driver & Widgets in Ginger"," ","Contents"," ","Description"," ","Pre Requisites"," ","Configure solution to work with Java Driver"," ","Add Java Agent to the Solution"," ","Add Java to the target application"," ","Launch your Java application"," ","Verify activity target application"," ","Configure Java Launch application Action"," ","Working with Java Agent on Java Application."," ","Working with Window Explore"," ","Working with Spy"," ","Working with Widgets (Web Embedded)"," ","Appendix:"," ","Working with IFRAME (Widgets)"," ","Working With GTB and Java Driver"," ","Using Wait for Idle action on Java Application"," ","Using Smart Sync Action on Java Application"," ","Set Date of Birth on CRM screen using Java Driver"," ","\n      ‎"],[" ","These steps will explain how to work with Ginger Java Driver on any Java application OMS, CRM, Java, and widgets (Web embedded in "," ","java application)."," ","         Java Agent offers:"," ","                            Automate Java Application"," ","                            Automate Web Embedded Widgets"],[" ","Latest Ginger version."," ","JDK version 1.6_29 and up installed on the machine"],[" ","Right-click on Agents and Add a new Agent."," ","Add name and target platform type."],[" ","Click on the solution name."," ","Click on the business flow and verify that the target application is JavaApp."],[" ","While using the launch java application action you will fire your java application and attach the Agent to the application."],[" ","This action will enable you to:"," ","Launch java application and attach the agent for using java driver to automate your application."," ","Attach the agent to running the Java application."," ","launch your java application without attaching the agent (use if u are using other agents to automate your application)"," ","Add new action by clicking the add action button."," ","Move to the General action tab and select the “Launch Java application”."," ","Edit launch java application action."," ","Java Version Path – Used for selecting the path for JDK location, you can select the first option if the JDK is set in your ","environment variable or the second option if the JDK is located in a different location on the machine. In any case, JDK is a ","must to run this action."," ","Launch Java Application – check this option if you want both to launch the java application and attach the agent. You can also ","use this Action just for attaching the agent to an already running Java application by unchecking this section."," ","Java Application Path – Add the application location is you are using to run CRM, add the full domain location for the JNLP."," ","Use the “Add Parameter to Launch Application With” button if u need to launch your application with a parameter like a user name."," ","Wait for Java Application Window – Add the title of the window that you are expecting to be open once your application is ","launched and the time to wait for it (sec)."," ","Attach Ginger Java Agent – use this to attach the agent to the application, by default the location of the agent is located in the ","ginger folder. You can also change the port if 8888 is being used by a different program."," ","Notice:"," ","Java Launch Action need to be on Separate Activity it can’t be with Other"," ","Action, as u can see below activity 1 holed only one action in activity 2"," ","We will handle the Login window."],[" ","Window Explorer will enable you to identify objects on the screen, add locators (Xpath, id, etc.) for the object, and actions that can "," ","be done (set, get, validate, etc.)."," ","Once the application is up and running you can start the agent and Window Explore"," ","Start the Agent:"," ","Start the Window Explore:"," ","Once Window Explore is up select the application window title that needs to work on."," ","Add switch window action to set the focus on the window we want to work on, once you will click on this button “Switch Window” ","action will be added to the activity."," ","Once you add the switch window action u can Edit it and add “Sync Time” which means how much time"," ","To wait for the window to come up."," ","You can also switch the view from tree View to Grid View by clicking on this Button."],[" ","Click on the spy icon"," ","Once Clicked on the spy button move your cursor to the element you want and press on Ctrl,"," ","Once the element is found all details will be available."," ","For Example, if you want to work on the First Name text box:"," ","Text box we want to work on, move your cursor to First name, and press on Ctrl."," ","Actions – these are all the actions that available for this control Set, get, Validate, etc..."," ","Locators – this is how we are locating the element in this case we have ByName or by Xpath"," ","We recommend working with Xpath."," ","Value – value to set on the text box."," ","Playback – once setting the value you can test the action."," ","Add to Activity – Add this Action to the flow in Ginger."," ","This is the way we are working with all elements, Drop Down list radio Button Check box tables, etc."],[" ","Widgets are Web pages that Embedded in CRM \\OMS running on the JExplore process,"," ","We are handling it by injecting java scripts into the web page and that enables us to interact with the page."," ","Open window explores refresh the window list and select the window where the web Page is embedded."," ","Click on the switch window action and add it to the activity"," ","To get the elements to window explore we need to inject the JS into the page"," ","Click on Grid View."," ","In the search box type JE and find the Jexplorer object in the grid select locator as Xpath and"," ","Add the action to the activity"," ","Once Done with all activities above you can start working with the spy"," ","To add the actions."," ","Activity that works with widgets action should be in this order"],[" "," There are web pages that the content of the page is inside IFRAME so to handle that"," "," We need to add Switch Frame action."," ","Once we add the Switch window and JExplorer Actions we need to add the Switch Frame action"," ","This is how IFRAME activity IFRAME should be handled"],[" ","Use Different Ports, verify that you are not using the same port on GTB and Java Driver"," ","Check your GTB port in this case it is 9999"," ","So when you use launch java application action check that you are not using the same port"," ","On the java launch application action turn off the “show ginger Agent console” option."," ","Use different activities for java Driver and GTB"],[" ","Once we are adding Action like Click, we have the option to select wait for Idle,"," ","Wait for Idle Enable you to set the interval and timeout to check if the application is done with processing all events and idle to "," ","proceed with the next actions."],[" ","Smart Sync will help you sync between the Automation steps and the application"," ","We have 2 types:"," ","WaitUntilDisaper – set wait time and check until element disappears."," ","WaitUntilDisplay – set wait time and Check until an element is Displayed."," ","Click on Add new Action."," ","From the list of actions select “Smart Sync Action”"," ","Click on the window Explore Icon and Add your element"," ","Set the Action Type"," ","Set Wait time"],[" "," While setting and Date-type field on the CRM, we need to configure our Edit Java Element Action as per the highlighted fields shown in the "," "," screenshot below"]],"2":[[" ","Description"],[" ","Pre Requisites"],[" ","Configure solution to work with Java Driver"],[" ","Launch your Java application."],[" ","Working with Java Agent on Java Application"],[" ","Working with Widgets (Web Embedded)"],[" ","Appendix:"]],"3":[[" ","Add Java Agent to the Solution"],[" ","Add Java to the target application"],[" ","Verify activity target application"," ","Configure Java Launch application Action"],[" ","Working with Window Explore"],[" ","Working with Spy"],[" ","Working with IFRAME (Widgets)"],[" ","Working With GTB and Java Driver"],[" ","Using Wait for Idle action on Java Application"],[" ","Using Smart Sync Action on Java Application"],[" ","Set Date of Birth on CRM screen using Java Driver"]],"id":"101"})
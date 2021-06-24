rh._.exports({"0":[["How to use Java Driver & Widgets in Ginger"]],"1":[["\n  ","\n    "," ","\n    "," How to use Java Driver & Widgets in Ginger","\n    "," ","\n    "," ","\n    ","Contents","\n    ","Description","\n    ","Pre Requisites","\n    ","Configure solution to work with Java Driver","\n    ","\n      ","Add Java Agent to the Solution.","\n      ","Add Java to the target application","\n    ","\n    ","Launch your Java application.","\n    ","\n      ","Verify activity target application","\n      ","Configure Java Launch application Action","\n    ","\n    ","Working with Java Agent on Java Application.","\n    ","\n      ","Working with Window Explore","\n      ","Working with Spy","\n    ","\n    ","Working with Widgets (Web Embedded)","\n    ","Appendix:","\n    ","\n      ","Working with IFRAME (Widgets)","\n      ","Working With GTB and Java Driver","\n      ","Using Wait for Idle action on Java Application","\n      ","Using Smart Sync Action on Java Application","\n      ","Set Date of Birth on CRM screen using Java Driver","\n    ","\n    "," ","\n    "," ","\n    "," ","\n    ","\n      ‎","\n    "],["\n    ","        ","These steps will explain how to work with Ginger Java Driver on any Java application OMS, CRM, Java, and widgets (Web embedded in java                        application).","\n    ","         Java Agent offers:","\n    ","\n      ","                            Automate Java Application","\n      ","                            Automate Web Embedded Widgets","\n    ","\n    "],["\n    ","Latest Ginger version.","\n    ","JDK version 1.6_29 and up installed on the machine","\n    "],["\n    "],["\n    ","Right-click on Agents and Add a new Agent.","\n    ","\n    "," ","\n    ","Add name and target platform type.","\n    ","\n    "," ","\n    "," ","\n    "],["\n    "," ","\n    ","Click on the solution name.","\n    ","\n    "," ","\n    ","Click on the business flow and verify that the target application is JavaApp.","\n    ","\n    "," ","\n    "],["\n    ","While using the launch java application action you will fire your java application and attach the Agent to the application.","\n    "],["\n    "],["\n    ","\n    "," ","\n    "," ","\n    "],["\n    ","This action will enable you to:","\n    ","Launch java application and attach the agent for using java driver to automate your application.","\n    ","Attach the agent to running the Java application.","\n    ","launch your java application without attaching the agent (use if u are using other agents to automate your application)","\n    ","\n    ","Add new action by clicking the add action button.","\n    ","Move to the General action tab and select the “Launch Java application”.","\n    ","\n    "," ","\n    ","Edit launch java application action.","\n    ","\n    "," ","\n    ","Java Version Path – Used for selecting the path for JDK location, you can select the first option if the JDK is set in your environment variable or the second option if the JDK is located in a different location on the machine. In any case, JDK is a must to run this action.","\n    ","Launch Java Application – check this option if you want both to launch the java application and attach the agent. You can also use this Action just for attaching the agent to an already running Java application by unchecking this section.","\n    ","Java Application Path – Add the application location is you are using to run CRM, add the full domain location for the JNLP.","\n    ","Use the “Add Parameter to Launch Application With” button if u need to launch your application with a parameter like a user name.","\n    "," ","\n    ","\n    "," ","\n    ","Wait for Java Application Window – Add the title of the window that you are expecting to be open once your application is launched and the time to wait for it (sec).","\n    ","Attach Ginger Java Agent – use this to attach the agent to the application, by default the location of the agent is located in the ginger folder. You can also change the port if 8888 is being used by a different program.","\n    ","Notice:","\n    ","Java Launch Action need to be on Separate Activity it can’t be with Other","\n    ","Action, as u can see below activity 1 holed only one action in activity 2","\n    ","\n    ","We will handle the Login window.","\n    ","\n    "," ","\n    "," ","\n    "],["\n    "],["\n    ","Window Explorer will enable you to identify objects on the screen, add locators (Xpath, id, etc.) for the object, and actions that can be done (set, get, validate, etc.).","\n    ","Once the application is up and running you can start the agent and Window Explore","\n    ","Start the Agent:","\n    ","\n    "," ","\n    ","Start the Window Explore:","\n    ","\n    "," ","\n    "," ","\n    ","Once Window Explore is up select the application window title that needs to work on.","\n    ","\n    "," ","\n    ","Add switch window action to set the focus on the window we want to work on, once you will click on this button “Switch Window” action will be added to the activity.","\n    ","\n    "," ","\n    ","Once you add the switch window action u can Edit it and add “Sync Time” which means how much time","\n    ","To wait for the window to come up.","\n    "," ","\n    ","\n    "," ","\n    ","You can also switch the view from tree View to Grid View by clicking on this Button.","\n    "," ","\n    ","\n    "," ","\n    "," ","\n    "," ","\n    "],["\n    ","Click on the spy icon","\n    "," ","\n    ","\n    "," ","\n    ","Once Clicked on the spy button move your cursor to the element you want and press on Ctrl,","\n    ","Once the element is found all details will be available.","\n    ","For Example, if you want to work on the First Name text box:","\n    ","\n    "," ","\n    ","Text box we want to work on, move your cursor to First name, and press on Ctrl.","\n    ","Actions – these are all the actions that available for this control Set, get, Validate, etc...","\n    ","Locators – this is how we are locating the element in this case we have ByName or by Xpath","\n    ","We recommend working with Xpath.","\n    ","Value – value to set on the text box.","\n    ","Playback – once setting the value you can test the action.","\n    ","Add to Activity – Add this Action to the flow in Ginger.","\n    ","This is the way we are working with all elements, Drop Down list radio Button Check box tables, etc.","\n    "," ","\n    "," ","\n    "],["\n    ","Widgets are Web pages that Embedded in CRM \\OMS running on the JExplore process,","\n    ","We are handling it by injecting java scripts into the web page and that enables us to interact with the page.","\n    ","\n    ","Open window explores refresh the window list and select the window where the web Page is embedded.","\n    "," ","\n    ","\n    "," ","\n    ","Click on the switch window action and add it to the activity","\n    ","\n    "," ","\n    ","To get the elements to window explore we need to inject the JS into the page","\n    ","Click on Grid View.","\n    ","\n    "," ","\n    ","In the search box type JE and find the Jexplorer object in the grid select locator as Xpath and","\n    ","Add the action to the activity","\n    ","\n    ","Once Done with all activities above you can start working with the spy","\n    ","To add the actions.","\n    "," ","\n    ","\n    "," ","\n    ","Activity that works with widgets action should be in this order","\n    ","\n    "," ","\n    "],["\n    "],["\n    "," There are web pages that the content of the page is inside IFRAME so to handle that","\n    "," We need to add Switch Frame action.","\n    ","Once we add the Switch window and JExplorer Actions we need to add the Switch Frame action","\n    "," ","\n    ","\n    "," ","\n    ","This is how IFRAME activity IFRAME should be handled","\n    ","\n    "," ","\n    "," ","\n    "],["\n    ","Use Different Ports, verify that you are not using the same port on GTB and Java Driver","\n    ","Check your GTB port in this case it is 9999","\n    "," ","\n    ","\n    "," ","\n    ","So when you use launch java application action check that you are not using the same port","\n    ","\n    ","\n    ","\n    ","On the java launch application action turn off the “show ginger Agent console” option.","\n    ","\n    ","\n    ","\n    ","Use different activities for java Driver and GTB","\n    "," ","\n    "," ","\n    "],["\n    ","Once we are adding Action like Click, we have the option to select wait for Idle,","\n    ","Wait for Idle Enable you to set the interval and timeout to check if the application is done with processing all events and idle to proceed with the next actions.","\n    ","\n    "," ","\n    "," ","\n    "],["\n    ","Smart Sync will help you sync between the Automation steps and the application","\n    ","We have 2 types:","\n    ","WaitUntilDisaper – set wait time and check until element disappears.","\n    ","WaitUntilDisplay – set wait time and Check until an element is Displayed.","\n    ","\n    ","Click on Add new Action.","\n    ","From the list of actions select “Smart Sync Action”","\n    ","\n    "," ","\n    ","Click on the window Explore Icon and Add your element","\n    ","Set the Action Type.","\n    ","Set Wait time.","\n    "," ","\n    ","\n    "," ","\n    "," ","\n    "],["\n    "," ","\n    "," While setting and Date-type field on the CRM, we need to configure our Edit Java Element Action as per the highlighted fields shown in the ","\n    "," screenshot below","\n    "," ","\n    ","              ","\n    "," ","\n    "," ","\n    "," ","\n    "," ","\n    "," ","\n    "," ","\n    "," ","\n    "," ","\n    "," ","\n  ","\n\n"]],"2":[["Description"],["Pre Requisites"],["Configure solution to work with Java Driver"],["Launch your Java application."],["Working with Java Agent on Java Application"],["Working with Widgets (Web Embedded)"],["Appendix:"]],"3":[["Add Java Agent to the Solution"],["Add Java to the target application."],[" "],["Verify activity target application"],["Configure Java Launch application Action"],["Working with Window Explore"],["Working with Spy"],["Working with IFRAME (Widgets)"],["Working With GTB and Java Driver"],["Using Wait for Idle action on Java Application"],["Using Smart Sync Action on Java Application"],["Set Date of Birth on CRM screen using Java Driver"]],"id":"80"})
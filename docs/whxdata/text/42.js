rh._.exports({"0":[["Ginger End to End Flow- Do it Yourself"]],"1":[["\n  ","\n    "," ","\n    ","Ginger End to End - Do it Yourself","\n    "," ","\n    "," ","\n    ","            ","Objective:","\n    ","This exercise will help you automate a small flow using GINGER.","\n    ","Here we will see the steps on how we automate the flow of launching URL ","http://abeat.amdocs.com"," and logging in with some credentials.","\n    ","Also, we will understand customizing the execution report as per our requirement.","\n    "," ","\n    ","           To create a solution click on the drop-down as shown below and select the ‘Create New Solution’ option.","\n    "," ","\n    ","\n    "," ","\n    "," ","\n    ","In the pop window, enter the name of the solution (as shown below) browse to the location of the folder where you wish to save your solution.","\n    "," ","\n    ","\n    "," ","\n    ","Since we are automating a website flow select the application as “MywebApp” and platform as “WEB”. With a click on create, a solution is created successfully.","\n    "," ","\n    ","           This will load the solution as shown below.","\n    ","\n    "," ","\n    "," ","\n    ","           Go to the Configurations tab and click on Agents.","\n    ","In the left panel, the agent is automatically created for the “MyWebApp”.","\n    ","The default driver for the WebApp application is Internet Explorer “SeleniumIE” and the driver type can be changed if needed using the dropdown.","\n    "," ","\n    ","\n    "," ","\n    ","           Once the solution and agent are created, double click on the Business flow and it will take you to the automation area.","\n    ","In this window, you will see various sections like Activities Group, Activity-Variables and Actions.","\n    ","By default, Activity1 is added as shown below.","\n    ","\n    "," ","\n    "," ","\n    ","           Go back to the Business Flow by clicking the back arrow at the left top corner.","\n    ","Click on the Variables tab, Business Flow variables are added here.","\n    ","Click on the + sign to create a new variable that can be used in all the Activities within the Business Flow.","\n    ","\n    "," ","\n    ","Here we will use the variable to give the name of the website which we intend to open as part of our automation flow.","\n    ","Select the variable type from the list shown like in our case the website name will be a variable string as highlighted in the list below. Click on Add Variable.","\n    ","\n    "," ","\n    ","Variables get added.","\n    ","\n    "," ","\n    ","Double click on it to open it on the Edit page.","\n    ","Enter the name as “Website” and the string value as ","http://abeat.amdocs.com"," since this is the URL we will open as part of automation as shown below.","\n    ","\n    "," ","\n    ","             Now we need to add action using the + sign in the action section. Actions are executables on various platforms.","\n    ","First, double-click on the Business Flow to go to the Automate tab.","\n    ","Then click on the + button as shown below.","\n    ","\n    "," ","\n    ","Click on the Actions Library as shown below","\n    ","\n    "," ","\n    ","Platform-specific actions are displayed here. Since we have chosen a platform as a website, web-related actions will be displayed.","\n    ","General Actions are not platform-specific.","\n    ","Since we want to launch a website in this URL, we will select “Browser Action” and click on the arrow button as shown below.","\n    ","\n    "," ","\n    ","Double click on the added action to open it in edit mode.","\n    ","Select the ‘Operation Type’ as ‘Goto URL’","\n    ","\n    "," ","\n    ","Since we have assigned the website name in a variable we will browse that variable name in the URL textbox. For this click on the “…” button near the URL textbox as shown below.","\n    ","Double click the ‘Website’ variable on the left pane. The variable gets added in the editor area and clicks the Ok button of the ‘Value Expression Editor’ window and the Action window.","\n    ","\n    "," ","\n    ","           Now run the action by clicking on RUN ACTION and the agent will automatically be launched.","\n    ","\n      ‎","\n    ","And you will see the URL opened as below.","\n    ","\n    "," ","\n    ","           To record a particular flow, expand the Record area by clicking on the Record as shown below.","\n    ","\n    "," ","\n    ","Click on the Record button as shown below","\n    ","\n    "," ","\n    ","Now go back to the browser window and enter the credentials as shown below","\n    ","\n    "," ","\n    ","Stop the recording once the flow to be captured is done by clicking on the Stop button.","\n    ","\n    "," ","\n    ","Once the recording is completed, one can also see the set of recorded actions in the activity action tab.","\n    ","\n    "," ","\n    ","One can change the name of the action by double-clicking on the action and giving a relevant name as below.","\n    ","\n    "," ","\n    ","Also, put some wait time between actions wherever necessary in the wait text box as shown in the screenshot above.","\n    ","\n    "," ","\n    ","           Now to create a run set, go to the RUN tab.","\n    ","\n    "," ","\n    ","Click on the + button as shown by the arrow below to add the required Business Flows.","\n    ","In the displayed window, select the Business Flow and click on the Select button.","\n    ","\n    "," ","\n    "," ","\n    ","The Activities & Actions in the Business Flow get added to the Run set.","\n    ","\n    "," ","\n    ","Now go to the Operations tab in the Run set","\n    ","Here you can send the report that will be sent once the execution is completed.","\n    "," ","\n    ","\n    "," ","\n    ","Once the report is configured save the run set.","\n    ","\n    "," ","\n    ","To run the run set, click on the RUN button as shown below.","\n    ","\n    "," ","\n    ","One can see the progress of the execution by the status displayed at the corner of the business flows, activities and actions as shown below.","\n    ","\n    "," ","\n    ","Once the execution is complete a mail is sent showing the outcome of passed and failed test cases like below. It also shows the run set details with the execution start and ends time.","\n    ","There is also a zipped HTML with the mail containing the HTML report with all the details like below.","\n    ","\n  ","\n\n"]],"id":"42"})
rh._.exports({"0":[[" ","Ginger - OTOMA Integration"]],"1":[[" ","Ginger",": Ginger is code less Automation Application. Ginger supports automation of multiple platforms like Web, Web services (API), Java, Unix,  Windows, Power Builder, Mainframe, DOS & Mobile."," ","OTOMA",": OTOMA is Model Based Testing (MBT) application. OTOMA is used to create ","Use Case"," - design of test case (using imported shared repository activities of Ginger in OTOMA) & create and execute ","Test Suite"," (Test Suite can contain one or more use cases)"," ","Note:"," ","To implement this Enterprise Feature in your project, please contact Ginger Team Focal or you can send email to ","ginger@amdocs.com"],[" ","Please see below steps diagram and details:"," ","Note:"," ","All DB configuration (Ginger Parser & OTOMA) & OTOMA application setup will be handled by Ginger Support Team."," ","(In below diagram step#3 & step#5 will be handled by Ginger Support Team)"," ","Ginger MBT (OTOMA) Terminilogy Description: "," ","Please refer below table to see the Ginger and OTOMA (MBT) Terminology."," ","You can refer below link as well for the same more detail to change the Ginger settings to MBT."," ","https://ginger-automation.github.io/Ginger-Web-Help/assets/Ginger_By_Amdocs/Ginger_User_Settings/Ginger_User_Settings.htm?rhsearch=MBT&rhhlterm=mbt"," ","#"," ","Ginger Entity"," ","MBT (OTOMA) Entity"," ","1"," ","Business Flow"," ","Use Case"," ","2"," ","Business Flows"," ","Use Cases"," ","3"," ","Activities Group"," ","Sub Process"," ","4"," ","Activities Groups"," ","Sub Processes"," ","5"," ","Activity"," ","Interface"," ","6"," ","Activities"," ","Interfaces"," ","7"," ","Variable"," ","Element"," ","8"," ","Variables"," ","Elements"," ","9"," ","ALM"," ","ALM"," ","10"," ","Target Application"," ","System "," ","or "," ","Participating System"],[" ","Steps",":"," ","Step 1",". Open Ginger and create a solution (Web, WebServices etc. ) and do followings and Save all changes:"," ","a",". Create Activities (and use activity variables only if required) and publish these actvities (and publish variables)"," "," 1)"," Add ","Web Activities"," (Target Appliction:  MyWebApp) and ","Activity variable ","and ","Publish ","all of these activities and activity variable as follows:"," ","2)"," ","Add ","WebServices Activities"," (Target Appliction:  MyWebServicesApp) based on your requirement and Publish all of these activities as follows:"," ","Note",":  '","Consumer Application'"," concept is being used in case of ","'WebServices' (API)"," target application."],[" ","                          Consumer Application concept is being used in case of ","'WebService' (API)"," target application."," ","Target Application"," ","is where action needs to be performed"," ","Consumer Application"," is the system which is going to consume or call the target application."," ","                          Example 1",": Let say user is defining in Ginger as follows:"," ","                                  Target Application"," :  System 'A' (WebServices)"," ","                                  Consumer ",":  System 'B' (Web)"," ","                                  It means :","  System 'B' is consuming System 'A' "," i.e."," "," user is working on "," ","                                 System 'B' and System 'B' is calling System 'A' API"," ","Example 2",": ","User is working on CRM and any action of CRM is Calling OMS API (requesting any data from OMS), in this case unser need to define in Ginger as follows: "," ","Target Application"," is '","OMS","'"," ","Consumer ","is '","CRM","'"," ","It means",":  "," ","                                                   CRM ---- Send Request---->  OMS  (","OMS Recieves request)"," ","OMS ---- Send Response ---> CRM  ","(","OMS Recieves response)"," ","Now",", Add WebServices Activity and assign Consumer form dropdown (as shown in below screenshots) and Publish the same"," ","ized Ex"," ","ecution Logge"," ","b",". Add all required activities into Shared Repository"," ","r Settings’ configuration"," ","c",". Publish all required Agents & Environment "," ","d",". Configure the 'Repots - Centralized Execution Logger Settings’. Enter End Point URL of ","your respective project"," ","e",". ","(","Optional ","Step)"," Configure the ALM connection deatils or settings (according to your project ALMs)"," ","Step 2",". Uplaod or push your solution to the GIT "," ","Step 3",". Share your GIT Repo URL, Login Name and Password Token with Ginger Support Team for the DB configurations "," ","Step 4",". Login to OTOMA UI and Create a new release "," ","       a) Go to Setup --> Create new release "," ","b)"," "," Fill all relevents filed's value and click on 'Next' button"," ","       c) Select the 'Create an empty release' option and clcik on 'Create' button"," ","Step 5. a )","Please share the Release Name, Git Repository URL, Git User Name & Passowrd (Access Token) with Ginger Support Team for DB configurations"," ","b) (Optional Step)"," Also share ALM Config fileds details (if ALM needs to be configured) with Ginger Support Team for DB configurations"," ","Step 6. ","  Login to OTOMA GUI and do the followings: "," ","        a) Import Topolgy into OTOMA: ","This step will import all published shared activities (or interfaces) of Ginger (along with all published activity variables (or Elements)) into OTOMA"," ","               1. Go to Setup --> Topology"," ","               2. Click on Import Toplogy option"," ","               3. Select '","IMPORT FROM EXTERNAL SOURCE' (Ginger) option and click on 'IMPORT' button"," ","               4. Topology will be imported successfully ","and click on 'OK' button"," ","               5. Validate Topology deatils"," ","                          a) All Targeet Applications, Published Shared Activities (Interfaces) along with published variables should be avaialble"," ","                          b) Traget Application will have request and response links (if any available in activities)"," ","                                  Click on 2nd activity to check the varaiable (element)"," ","        b) Add Release under Environment: ","This step enables in which ENV test suite will be executed"," ","               1. Go to Setup --> Test Environment"," ","               2. Select published envrionment name and click on Edit icon "," ","               3. Enter Release Name and click on Save icon"," ","        c) Create Use Cases and Validate use cases: ","This step allows user to create Use Cases (Scenarios or Flows) in OTOMA using all imported shared activities"," ","               1. Go to Requirements --> Design "," ","               2. Design Page will be opened"," ","               3. Click '+' icon --> Create New Use-Case"," ","               4. Enter required deatils (Use Case Name etc) and click on 'Submit' button"," ","               5. Below Design Screen (use case widgets screen) will be opened"," ","               6. Create Use Case using avaiable widgets according to your scenario or flow"," ","a)"," To Create ","Web Use Case"," following as follows:"," ","                                   1.  Select 'Participating System' widget and drag into right side Edit section"," ","                                   2.  Select 'MyWebApp' target system and click on 'Apply' button"," ","                                   3.  Select 'Start Event' widget and drag inside 'MyWebApp' participating system and enter the name of event"," ","                                   4.  Now select 'User Task' widget and drag inside 'MyWebApp' participating system "," ","                                   5.  Select 'Activity' (Interface) according to your flow or need and click on 'Apply' button"," ","                                   6.  Enter name of this widget"," ","                                   7.  Add more activities and interface as per your scenarios in same manner"," ","                                   8.  Select 'End Event' widget and drag inside 'MyWebApp' participating system at last (after all widgets) and enter the name of event"," ","                                          And ","select 'Typ'e of End Event as 'Termination'"," ","                                   9.  Create links among all widgets (sequence of flow) - Hover on widget then arrow icons will be displayed. Select and dgar the same towards next widget to create link"," ","Note",":  Above Digram Explains: There is a Web Target Application (MyWebApp). This contains 2 activities (interface) - 'Launch Browser' & 'Login into Application'. "," ","                                               In this sequnce of flow is flow will start and then first 'Launch Browser' Activity will be excuted, then 'Login into Application' activity will be executed then flow will be End (teminated)."," ","                                   10.  Click on 'Save' icon and click on 'Validate' button to validate or publish use case (Validation means - To check whether all widgets and links are drwan preperly) and validate use case is getting published successfully."," ","                                           After published successfully remove the notification pop-up."," ","Note",": User can Edit the use case if required using 'Edit' button. After Edit please validate the use again (Do not forrget to validate use case after Edit)."," ","   b)"," To Create ","WebService Use Case"," following as follows:"," ","                                   1. Select 'Participating System' widget and drag into right side Edit section for Consumer Application (MyWebAPP)"," ","                                   2. Select  'MyWebApp' target system and click on 'Apply' button"," ","                                   3. Select 'Participating System' widget and drag into right side Edit section for Target Application (MyWebServicesAPP)"," ","                                   4. Select  'MyWebServicesApp' target system and click on 'Apply' button"," ","                                   5. Select 'Start Event' widget and drag inside Consumer application - 'MyWebServiceApp' participating system and enter the name of event"," ","                                   6. Select 'Task' widget and drag inside 'MyWebApp' participating system and enter the name of event also select Type 'SendTask'"," ","                                   7.   Select 'Task' widget and drag inside 'MyWebServicesApp' participating system and enter the name of event also select Type 'RecieveTask'"," ","                                   8.   Connect link between 'Send Request' & 'Recieve Request' widgets, Select Message Interface and clcik on 'Apply' button"," ","                                   9.   Select 'Task' widget and drag inside 'MyWebServicesApp' participating system and enter the name of event also select Type 'SendTask'"," ","                                   10.   Select 'Task' widget and drag inside 'MyWebApp' participating system and enter the name of event also select Type 'RecieveTask'"," ","                                   11.   Connect link between 'Send Reposne' & 'Recieve Response' widgets, Select Message Interface and clcik on 'Apply' button"," ","                                   12.  Select 'End Event' widget and drag inside 'MyWebApp' participating system at last (after all widgets) and enter the name of event"," ","                                          And ","select 'Typ'e of End Event as 'Termination'"," ","                                   13.  Create links among widgets (sequence of flow) as mentioned below"," ","                                   14.  Click on 'Save' icon and click on 'Validate' button to validate or publish use case (Validation means - To check whether all widgets and links are drwan preperly) and validate use case is getting published successfully."," ","                                           After published successfully remove the notification pop-up."," ","        d) Create Test Suites and Execute:  ","This step allows user to create Test Suites (Test Suite is collection of Use Cases) & Execute the Test Suite"," ","               1. Go to Testing --> Dashboard "," ","               2. Click on 'CREATE TEST SUITE' button "," ","               3. Enter details (Suite Name,  select Test environment etc.) and click on 'SCOPE' button"," ","               4. Enter details (Suite Name,  select Test environment etc.) and clcik on 'Scope' button"," ","               1. Go to Requirements --> Design "," ","               1. Go to Requirements --> Design "," ","               1. Go to Requirements --> Design "]],"2":[[" ","Ginger - OTOMA Integration"]],"3":[[" ","Introduction"],[" ","Ginger - OTOMA E2E Integration & Test Execution from OTOMA"]],"4":[[" ","1. Ginger - OTOMA Integration configuration & Test Suite Execution Overview"],[" ","2. Use Case Creation & Test Suite Execution"]],"5":[[" ","                       Target Application (Called System) & Consumer Application (Calling System): "]],"id":"116"})
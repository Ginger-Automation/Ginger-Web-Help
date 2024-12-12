rh._.exports({"0":[[" ","Ginger - OTOMA Integration"]],"1":[[" ","Ginger",": Ginger is code less Automation Application. Ginger supports automation of multiple platforms like Web, Web services (API), Java, Unix,  Windows, Power Builder, Mainframe, DOS & Mobile."," ","OTOMA",": OTOMA is Model Based Testing (MBT) application. OTOMA is used to create ","Use Case"," - design of test case (using imported shared repository activities of Ginger in OTOMA) & create and execute ","Test Suite"," (Test Suite can contain one or more use cases)"," ","Note:"," ","To implement this Enterprise Feature in your project, please contact Ginger Team Focal or you can send email to ","ginger@amdocs.com"],[" ","Please see below steps diagram and details:"," ","Note:"," ","All DB configuration (Ginger Parser & OTOMA) & OTOMA application setup will be handled by Ginger Support Team."," ","(In below diagram step#3 & step#5 will be handled by Ginger Support Team)"," ","Ginger MBT (OTOMA) Terminology Description: "," ","Please refer below table to see the Ginger and OTOMA (MBT) Terminology."," ","You can refer below link as well for the same more detail to change the Ginger settings to MBT."," ","https://ginger-automation.github.io/Ginger-Web-Help/assets/Ginger_By_Amdocs/Ginger_User_Settings/Ginger_User_Settings.htm?rhsearch=MBT&rhhlterm=mbt"," ","#"," ","Ginger Entity"," ","MBT (OTOMA) Entity"," ","1"," ","Business Flow"," ","Use Case"," ","2"," ","Business Flows"," ","Use Cases"," ","3"," ","Activities Group"," ","Sub Process"," ","4"," ","Activities Groups"," ","Sub Processes"," ","5"," ","Activity"," ","Interface"," ","6"," ","Activities"," ","Interfaces"," ","7"," ","Variable"," ","Element"," ","8"," ","Variables"," ","Elements"," ","9"," ","ALM"," ","ALM"," ","10"," ","Target Application"," ","System "," ","or "," ","Participating System"],[" ","**   ","Key Points to remember before following below mentioned"," ","Steps",":"," ","1. D","uring creation of Ginger Solution - Please take care of all below points:"," ","1. ","All Ginger Solution ","Activities ","must be ","standalone ","(","independent ","activities)"," ","     2. OTOMA does not support 'Inter Activity Flow control'. ","Do not use any inter activity flow controls."," ","       (Ex: Do not use Flow control like Go to Activity, Go to Activity by Name, Call Shared Repositry Activity etc.)"," ","Note",": User ","can ","use ","only '","Go to Action' ","Flow Control."," ","     3."," ","OTOMA supports only Activity Variables ","(Activity Input Variables & Activity Output Variables). Hence        Please use only Activity Variables.  ","Do not use"," Business Flow Variables or Global Variables in your solution"," ","     4. ","Please do not forget to mark activity variables either input or output. "," ","          Do not mark input and output together. "," ","     5",". All ","Variables ","which needs to be exposed to OTOMA - ","N","eed to be marked as Publish"," (please refer below mentioned Steps to mark Variables as Publish)"," ","     6. ","All ","activities ","which needs to be exposed to OTOMA - ","Need to be marked as 'Publish' and '","Mandatory","' also need to be put into 'Shared Repository' ","(please refer below mentioned Steps to mark activities as Publish and add to shared repository) "," ","     7",". All ","Agents ","which needs to be exposed to OTOMA - ","N","eed to be marked as Publish"," (please refer below mentioned Steps to mark Agents as Publish)"," ","     8. ","All ","Environemnts ","which needs to be exposed to OTOMA - ","Need to be marked as 'Publish'","(please refer below mentioned Steps to mark Environement as Publish)"," ","     9",". Please ","configure Reports's End Point URL"," in Ginger Solution (please refer below mentioned Steps to configure Report's End Point URL)"," ","2. Users need to share below details with 'Ginger Support Team' for the DB configurations"," ","    (For Ginger OTOMA DB Configurations)",": "," ","       1. GIT Repository URL"," ","       2. GIT Branch Name,"," ","       3. GIT Login User Name"," ","       4. GIT Access Token (Password Access Token)"," ","       5. Ginger Solution Encryption Key"," ","       6. OTOMA Release Name"," ","Steps",":"," ","Step 1","."," Open Ginger and create a solution (Web, WebServices etc. ) and do followings and Save all changes:"," ","a",". Create Activities (and use activity variables only if required) and publish these activities (and publish variables)"," "," 1)"," Add ","Web Activities"," (Target application:  MyWebApp) and mark them '","Mandatory","' and '","Publish' ","all of these activities. Also add ","activity variables"," (if required) and mark them '","Publish'","."," ","Please mark Activities 'Mandatory' and 'Publish' and mark 'activity variable' 'Publish' as follows:"," ","2)"," ","Add ","WebServices Activities"," (Target Application:  MyWebServicesApp) based on your requirement and mark  all these activities 'Publish' and 'Mandatory' as follows:"," ","Note",":  '","Consumer Application'"," concept is being used in case of ","'WebServices' (API)"," target application."],[" ","                          Consumer Application concept is being used in case of ","'WebService' (API)"," target application."," ","Target Application"," ","is where action needs to be performed"," ","Consumer Application"," is the system which is going to consume or call the target application."," ","                          Example 1",": Let say user is defining in Ginger as follows:"," ","                                  Target Application"," :  System 'A' (WebServices)"," ","                                  Consumer ",":  System 'B' (Web)"," ","                                  It means :","  System 'B' is consuming System 'A' "," i.e."," "," user is working on "," ","                                 System 'B' and System 'B' is calling System 'A' API"," ","Example 2",": ","User is working on CRM and any action of CRM is Calling OMS API (requesting any data from OMS), in this case user need to define in Ginger as follows: "," ","Target Application"," is '","OMS","'"," ","Consumer ","is '","CRM","'"," ","It means",":  "," ","                                                   CRM ---- Send Request---->  OMS  (","OMS receives request)"," ","OMS ---- Send Response ---> CRM  ","(","CRM ","receives ","response)"," ","Now",", Add WebServices Activity and assign Consumer form drop-down (as shown in below screenshots) and Publish the same"," ","Ex"," ","b",". Add all required activities into Shared Repository"," ","r Settings’ configuration"," ","c",". Publish all required Agents & Environment "," ","d",". Configure the 'Reports - Centralized Execution Logger Settings’. Enter Reports's 'End Point URL' of ","your respective project"," ","           (Go to Configuration --> Reports --> Execution Logger Configuration --> Expand Centralized Execution Logger Settings --> Select option Yes and configure End Point URL )"," ","e",". ","(","Optional ","Step)"," Configure the ALM connection details or settings (according to your project ALMs)"," ","Step 2",". ","Upload or push your solution to the GIT "," ","Step 3","."," Please Share below details with Ginger Support Team for the DB configurations "," ","      1. GIT Repository URL"," ","      2. GIT Branch Name,"," ","      3. GIT Login User Name"," ","      4. GIT Access Token (Password Access Token)"," ","      5. Ginger Solution Encryption Key"," ","      6. OTOMA Release Name"," ","Step 4","."," Login to OTOMA UI and Create a new release "," ","       a) Go to Setup --> Create new release "," ","b)"," "," Fill all relevant filed's value and click on 'Next' button"," ","       c) Select the 'Create an empty release' option and click on 'Create' button"," ","Step 5."," a) ","Please Share below details with Ginger Support Team for the DB configurations "," ","      1. GIT Repository URL"," ","      2. GIT Branch Name,"," ","      3. GIT Login User Name"," ","      4. GIT Access Token (Password Access Token)"," ","      5. Ginger Solution Encryption Key"," ","      6. OTOMA Release Name"," ","b) (Optional Step)"," Also share ALM Config fields details (if ALM needs to be configured) with Ginger Support Team for DB configurations"," ","Step 6. "," "," Login to OTOMA GUI and do the followings: "," ","        a) Import Topology into OTOMA: ","This step will import all published shared activities (or interfaces) of Ginger (along with all published activity variables (or Elements)) into OTOMA"," ","               1. Go to Setup --> Topology"," ","               2. Click on 'Import topology' option"," ","               3. Select '","IMPORT FROM EXTERNAL SOURCE' (Ginger) option and click on 'IMPORT' button"," ","               4. Topology will be imported successfully ","and click on 'OK' button"," ","               5. Validate Topology details"," ","                          a) All Target Applications, Published Shared Activities (Interfaces) along with published variables should be available"," ","                          b) Target Application will have request and response links (if any available in activities)"," ","                                  Click on 2nd activity to check the variable (element)"," ","        b) Add Release under Environment: ","This step enables in which ENV test suite will be executed"," ","               1. Go to Setup --> Test Environment"," ","               2. Select published environment name and click on Edit icon "," ","               3. Enter Release Name and click on Save icon"," ","        c) Create Use Cases and Validate use cases: ","This step allows user to create Use Cases (Scenarios or Flows) in OTOMA using all imported shared activities"," ","               1. Go to Requirements --> Design "," ","               2. Design Page will be opened"," ","               3. Click '+' icon --> Create New Use-Case"," ","               4. Enter required details (Use Case Name etc) and click on 'Submit' button"," ","               5. Below Design Screen (use case widgets screen) will be opened"," ","               6. Create Use Case using available widgets according to your scenario or flow"," ","a)"," To Create ","Web Use Case"," following as follows:"," ","                                   1.  Select 'Participating System' widget and drag into right side Edit section"," ","                                   2.  Select 'MyWebApp' target system and click on 'Apply' button"," ","                                   3.  Select 'Start Event' widget and drag inside 'MyWebApp' participating system and enter the name of event"," ","                                   4.  Now select 'User Task' widget and drag inside 'MyWebApp' participating system "," ","                                   5.  Select 'Activity' (Interface) according to your flow or need and click on 'Apply' button"," ","                                   6.  Enter name of this widget"," ","                                   7.  Add more activities and interface as per your scenarios in same manner"," ","                                   8.  Select 'End Event' widget and drag inside 'MyWebApp' participating system at last (after all widgets) and enter the name of event"," ","                                          And ","select 'Type' of End Event as 'Termination'"," ","                                   9.  Create links among all widgets (sequence of flow) - Hover on widget then arrow icons will be displayed. Select and drag the same towards next widget to create link"," ","Note",":  Above diagram Explains: There is a Web Target Application (MyWebApp). This contains 2 activities (interface) - 'Launch Browser' & 'Login into Application'. "," ","                                               In this sequence of flow is flow will start and then first 'Launch Browser' Activity will be executed, then 'Login into Application' activity will be executed then flow will be End (terminated)."," ","                                   10.  Click on 'Save' icon and click on 'Validate' button to validate or publish use case (Validation means - To check whether all widgets and links are drawn properly) and validate use case is getting published successfully."," ","                                           After published successfully remove the notification pop-up."," ","Note",": User can Edit the use case if required using 'Edit' button. After Edit please validate the use again (Do not forget to validate use case after Edit)."," ","   b)"," To Create ","WebService Use Case"," following as follows:"," ","                                   1. Select 'Participating System' widget and drag into right side Edit section for Consumer Application (MyWebAPP)"," ","                                   2. Select  'MyWebApp' target system and click on 'Apply' button"," ","                                   3. Select 'Participating System' widget and drag into right side Edit section for Target Application (MyWebServicesAPP)"," ","                                   4. Select  'MyWebServicesApp' target system and click on 'Apply' button"," ","                                   5. Select 'Start Event' widget and drag inside Consumer application - 'MyWebServiceApp' participating system and enter the name of event"," ","                                   6. Select 'Task' widget and drag inside 'MyWebApp' participating system and enter the name of event also select Type 'SendTask'"," ","                                   7.   Select 'Task' widget and drag inside 'MyWebServicesApp' participating system and enter the name of event also select Type 'ReceiveTask'"," ","                                   8.   Connect link between 'Send Request' & 'Recieve Request' widgets, Select Message Interface and click on 'Apply' button"," ","                                   9.   Select 'Task' widget and drag inside 'MyWebServicesApp' participating system and enter the name of event also select Type 'SendTask'"," ","                                   10.   Select 'Task' widget and drag inside 'MyWebApp' participating system and enter the name of event also select Type 'ReceiveTask'"," ","                                   11.   Connect link between 'Send Response' & 'Receive Response' widgets, Select Message Interface and click on 'Apply' button"," ","                                   12.  Select 'End Event' widget and drag inside 'MyWebApp' participating system at last (after all widgets) and enter the name of event"," ","                                          And ","select 'Type' of End Event as 'Termination'"," ","                                   13.  Create links among widgets (sequence of flow) as mentioned below"," ","                                   14.  Click on 'Save' icon and click on 'Validate' button to validate or publish use case (Validation means - To check whether all widgets and links are drawn properly) and validate use case is getting published successfully."," ","                                           After published successfully remove the notification pop-up."," ","        d) Create Test Suites and Execute:  ","This step allows user to create Test Suites (Test Suite is collection of Use Cases) & Execute the Test Suite"," ","               1. Go to Testing --> Dashboard "," ","               2. Click on 'CREATE TEST SUITE' button "," ","               3. Enter details (Suite Name, select Test environment etc.) and click on 'SCOPE' button"," ","               4. Select Use Cases which you want to add in this Test Suite and click on 'FILTER' button  "," ","               5. Validate selected use case and count and clcik on 'CREATE' button "," ","               6. Validate Test Suite is created"," ","               7. Click on 'EXECUTE' button to execute the Test Suite "," ","               8. Select Agent and click on 'EXECUTE' button  "," ","               9. ","Execution ","would be triggered and status will be updated in OTOMA GUI once execution is completed"],[" ","To migrate existing Ginger 'Activity Group' to Otoma, user need to first  'Export Activity Group' from Ginger (as ‘Export to BPMN file’) and then import this BPMN file into OTOMA (using 'Import BPMN' option)."," ","Export Activity Group",":"," User can go to the ‘Shared Reposioty --> Activities Groups’ page. Right click on the Activity Group that user wants to migrate to Otoma and click on ‘Export’ and then ‘Export to BPMN file’."," ","Clcik on 'Ok' button"," ","BPMN file will be exported to the documents folder (","Documents --> BPMN ","folder). Please see screenshots below just for refrence. "," ","Import BPMN:"," ","Go to Otoma and open 'Design' tab (","Requirements --> Design","). Click the plus icon and then select ‘Import BPMN’."," ","For import, select the BPMN file that was exported in the previous step. After that the BPMN file (of Activity Group) will be imported in Otoma (as Sub Process)."],[" ","To migrate existing Ginger 'Business Flow' to Otoma, user need to first  'Export Business Flow' from Ginger (as ‘Export as Otoma Use Case Zip file’) and then import this zip file into OTOMA (using 'Import Release' option)."," ","Export Business Flow",":"," User can go to the ‘Business Flows’ page from the top menu bar. Right click on the Business flow that you want to migrate to Otoma and click on ‘Export’ and then ‘Export as Otoma Use Case Zip file’."," ","             If your business flow contains some activities or activity groups which are not part of Shared Repository, then you would be presented with a popup like below."," ","                If you click on ‘Yes’, then you will be presented with a wizard to add all the necessary entities to Shared Repository."," ","After adding them to Shared Repository, a zip file will be exported to the documents folder (","Documents --> BPMN ","folder). Please see screenshots below just for refrence. "," ","Import Use Case:"," ","Go to Otoma and open 'Design' tab (","Requirements --> Design","). Click the plus icon and then select ‘Import Release’."," ","For import, select the zip file that was exported in the previous step. After that the use case will be imported in Otoma."," ","(Note: Here 'Business Flow' will be imported as 'Use Case' and 'Activity Groups' of respective buisness flow will be imported as 'Sub-Processes')."," ","Use Case: "," ","Sub-Process:"]],"2":[[" ","Ginger - OTOMA Integration"]],"3":[[" ","Introduction"],[" ","Ginger - OTOMA E2E Integration & Test Execution from OTOMA"," ","  1. Ginger - OTOMA Integration configuration & Test Suite Execution Overview"],[" "," 2. GINGER Solution and OTOMA Release, Topology, Use Case, Test Suite Creation & Execution"],[" ","Target Application (Called System) & Consumer Application (Calling System): "],[" ","Migrate existing Ginger 'Activity Group' &  'Business Flow' to Otoma"," "," 1. Migrate existing Ginger 'Activity Group' to Otoma (as Sub-Process)"],[" "," 2. Migrate existing Ginger 'Business Flow' to Otoma (as Use Case)"]],"id":"132"})
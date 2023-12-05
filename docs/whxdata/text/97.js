rh._.exports({"0":[[" ","Ginger - OTOMA Integration"]],"1":[[" ","Ginger",": Ginger is code less Automation Application. Ginger supports automation of multiple platforms like Web, Web services (API), Java, Unix,  Windows, Power Builder, Mainframe, DOS & Mobile."," ","OTOMA",": OTOMA is Model Based Testing (MBT) application. OTOMA is used to create ","Use Case"," - design of test case (using imported shared repository activities of Ginger in OTOMA) & create and execute ","Test Suite"," (Test Suite can contain one or more use cases)"," ","Note:"," ","To implement this Enterprise Feature in your project, please contact Ginger Team Focal or you can send email to ","ginger@amdocs.com"],[" ","Please see below steps diagram and details:"," ","Note:"," ","All DB configuration (Ginger Parser & OTOMA) & OTOMA application setup will be handled by Ginger Support Team."," ","(In below diagram step#3 & step#5 will be handled by Ginger Support Team)"," ","Ginger MBT (OTOMA) Terminilogy Description: "," ","Please refer below table to see the Ginger and OTOMA (MBT) Terminology."," ","You can refer below link as well for the same more detail to change the Ginger settings to MBT."," ","https://ginger-automation.github.io/Ginger-Web-Help/assets/Ginger_By_Amdocs/Ginger_User_Settings/Ginger_User_Settings.htm?rhsearch=MBT&rhhlterm=mbt"," ","#"," ","Ginger Entity"," ","MBT (OTOMA) Entity"," ","1"," ","Business Flow"," ","Use Case"," ","2"," ","Business Flows"," ","Use Cases"," ","3"," ","Activities Group"," ","Sub Process"," ","4"," ","Activities Groups"," ","Sub Processes"," ","5"," ","Activity"," ","Interface"," ","6"," ","Activities"," ","Interfaces"," ","7"," ","Variable"," ","Element"," ","8"," ","Variables"," ","Elements"," ","9"," ","ALM"," ","ALM"," ","10"," ","Target Application"," ","System "," ","or "," ","Participating System"],[" ","Steps",":"," ","Step 1",". Open Ginger and create a solution (Web, WebServices etc. ) and do followings and Save all changes:"," ","a",". Create Activities (and use activity variables only if required) and publish these actvities (and publish variables)"," ","ntraliz","ed Ex"," ","ecution Logge"," ","b",". Add activities into Shared Repository"," ","r Settings’ configuration"," ","c",". Publish Agents & Environment "," ","d",". Configure the 'Repots - Centralized Execution Logger Settings’. Enter End Point URL of ","your respective project"," ","Step 2",". Uplaod or push your solution to the GIT "," ","Step 3",". Share your GIT Repo URL, Login Name and Password Token with Ginger Support Team for the DB configurations "," ","Step 4",". Login to OTOMA UI and Create a new release "," ","(Go to Setup --> Create new release) "," ","Fill all relevents filed's value and click on 'Next' button"," ","Select the 'Create an empty release' option and clcik on 'Create' button"," ","Step 5. ","Please share the Release Name with Ginger Support Team for DB configurations"," ","Step 6. ","  Login to OTOMA GUI and do the followings: "," ","  a. Import Topolgy into OTOMA: ","This step will import all published shared activities (or interfaces) of Ginger (along with all published activity variables (or Elements)) into OTOMA"," ","  b."],[" ","Note: Consumer Application"," concept is being used in case of ","'WebService' (API)"," target application."],[" ","Consumer Application concept is being used in case of ","'WebService' (API)"," target application."," ","Target Application"," ","is where action needs to be performed"," ","Consumer Application"," is the system which is going to consume or call the target application."," ","Example 1",": Let say user is defining in Ginger as follows:"," ","    Target Application"," :  System 'A' (WebServices)"," ","    Consumer ",":  System 'B' (Web)"," ","    It means :","  System 'B' is consuming System 'A' "," i.e."," "," user is working on "," ","    System 'B' and System 'B' is calling System 'A' API"," ","Example 2",": ","User is working on CRM and any action of CRM is Calling OMS API (requesting any data from OMS), in this case unser need to define in Ginger as follows: "," ","Target Application"," is '","OMS","'"," ","Consumer ","is '","CRM","'"," ","It means",":  "," ","                 CRM ---- Send Request---->  OMS"," ","OMS ---- Recieve Response ---> CRM"]],"2":[[" ","Ginger - OTOMA Integration"]],"3":[[" ","Introduction"],[" ","Ginger - OTOMA E2E Integration & Test Execution from OTOMA"]],"4":[[" ","1. Ginger - OTOMA Integration configuration & Test Suite Execution Overview"],[" ","2. Use Case Creation & Test Suite Execution"],[" ","3. Web Services (API) Application Use Case creation & Test Suite Execution"]],"5":[[" ","Target Application (Called System) & Consumer Application (Calling System)"],[" ","Web Services (API) Application Use Case creation & Test Suite Execution"]],"id":"97"})
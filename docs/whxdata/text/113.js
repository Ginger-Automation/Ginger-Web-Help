rh._.exports({"0":[[" ","Ginger QC ALM Integration"]],"1":[[" ","Ginger QC ALM Integration"]],"2":[[" ","Ginger comes with seamless integration with Microfocus ALM Octane, and this document comes to explain how to use the integration functionalities."," ","Current supported functionalities are:"," ","Import Octane Test Suite into Ginger and automatically converting it to Ginger Business flow which will be ready to be automated or even execute in case it’s TC’s were already automated before by Ginger"," ","Export Ginger Business Flow to Octane - each one of the Business Flow Activities Group will be export to Octane Application Module as Manual Test Case item and a Test Suite item will be created in ALM Application Module containing all the relevant Octane Test Cases which were exported"," ","Export imported Ginger Business flow execution details back to Octane and reflect the execution status in the matching Octane Test Suit Run status"],[" ","To set ALM connecting details in a Ginger application please follow below steps"," ","Click on the ‘Share Operations’ button."," ","Select “ALM Connection Settings”"," ","Select ALM type – QC using the radio buttons"," ","Populate the ALM server URL and your ALM user name and password and click on “Get Projects Details”"," ","If connection details are correct, projects details will be received, select project and click “Save Project Mapping”"," ","Registering ALM Client"," ","From ALM version 11 the ALM Client needs to be registered on your machine for allowing it to be connected with Ginger"," ","Launch IE as Administrator"," ","Go to ","http://<<ALM_URL>>/qcbin"," ","Click on the “Add-Ins Page” link"," ","On the next page, click on “HP ALM Client Registration”"," ","On the next page click on “Register HP ALM Client”"," ","Note: All Ginger – ALM interaction will try to use saved ALM configuration in Ginger, If in any case the saved configurations are incorrect or Ginger could not establish the connection to ALM, the “ALM Connection Settings” page will be shown and the user will need to enter/re-enter ALM configurations and test them before continuing."],[" ","Ginger allows configuring the ALM Test Case and Test Set items fields’ value to be updated when doing export from Ginger to ALM."," ","    For configuring the items fields values:"," ","Click on the “ALM Items Fields Configuration” button from the “Share Options” menu."," ","Click on the “Refresh” button (near the search) to refresh ALM Items Fields Configurations from ALM."," ","Select a value from the list or set the value (in case of the free text field) in the “Selected Value” column"," ","Click on the Mandatory column to sort by Mandatory values so that you do not miss any mandatory fields."," ","Click on the “Save” button to save the configurations."],[" ","Ginger support importing ALM Test Set which was created manually in ALM or automatically by the Design Console (ATS) application and converting it into "," "," Ginger Test Set which will be ready to be automated or execute (assuming automation was already created for its TC’s)."," ","For performing ALM Test Set import please follow the below steps:"," ","Open the Ginger Solution tab which loaded with your Ginger Solution"," ","Right-click on the Business Flows node in the Automate tab and select “Import” ->“Import ALM Test Set”"," ","‎Ginger will use the current ALM Settings that have been saved in step (Connect Ginger to QC) and try to import using saved ALM settings."," ","According to ALM type, Window with the connected ALM project Test Lab tree, or in a list for RQM ALM, will be loaded. Select the ALM Test Set you want to import and click on the “Import Selected” button."," ","Note: (In QC ALM) User can import all ALM Test Set’s which placed in a specific ALM Test Lab folder by selecting the folder name and clicking on “Import Selected”"," ","For QC ALM – As shown above, after clicking on the ALM Test Set the window right panel will show:"," ","How many ALM TC’s exists in the selected ALM Test Set"," ","The execution status of the ALM Test Set TC’s"," ","Indication if the ALM Test Set was already imported in the current Solution and if yes then to which Ginger Test Set it mapped"," ","Click on “Import Selected”"," ","The ALM Test Set will be imported and converted into a Ginger Test Set with the same name under the Ginger Test Sets folder you selected to import to in step 2"," ","After the Test set is imported, below is the screen on how it looks in Ginger."],[" ","Ginger allows exporting a Ginger Business Flow to ALM."," ","Export Activities Groups to ALM Test Cases"," ","Each one of the exported Business Flow Activities Groups will be exported to an ALM Test Case item in ALM Test Plan."," ","Export Business Flow to ALM Test Set  "," ","QC ALM Export - Test Set item will be created in QC ALM Test Lab into the user-selected folder."," ","All of the created ALM Test Cases from step 1 will be added to the Business Flow to represent the execution flow"," ","Right-click the Business Flows to export and select the “Export to ALM” option. It will export the selected Business Flow to the ALM"," ","To export multiple flows,"," Right-click the Business Flows folder and select the “Export All to ALM” optionto export all business flows under that folder"," ","‎In case not all of the exported Business Flow Activities Groups were exported before to ALM:"," ","ALM Test Plan browser window will be shown and you will need to select to which ALM Test Plan folder the Activities Groups will be exported as ALM Test Cases"," ","Select a folder and click on the “Select Folder” button",". ","All Activities Groups which were not exported before will be exported into the selected folder as ALM Test Cases"," ","For each Activities Group the details which will be exported are:"," ","Activities Group Name"," ","For each Activity in the Activities Group an ALM Step item will be created containing the:"," ","Activity Name"," ","Activity Description"," ","Activity list of Variables Names"," ","Activity list of Actions Description"," ","Activity Expected"," ","ALM Test Plan will be shown for selecting the folder to export the Business Flow."," ","Select the desired folder"," ","Click the check box if you want to create a new folder by the Business Flow name."," ","Click on the “Select Folder” button"," ","The window will be displayed to select the ALM Test Lab folder."," ","A successful message is displayed."," ","Refresh the ALM. A new Test Set will be created with the Business Flow name and all the matching Test Cases for the Business Flow Activities Groups will be added into it Execution Flow"," ","In case running from Automate tab, you will be asked to save the Business Flow for saving the links to the ALM items (Test Cases & Test Set)"],[" ","In case the executed Ginger Business Flow was originally imported from ALM Test Set or it was exported to ALM Test Set then the user can export the execution results to ALM"," ","Exporting execution results to ALM from Automate tab"," ","Load the relevant Ginger Business Flow into Automate tab"," ","Run the Ginger Test Set in “Run Flow” mode "," ","Once execution is done the user will get the “Test Set Execution Summary” window with a summary of the execution results."," ","For exporting the results to ALM user can click on “Export Execution Details”"," ","‎Note: Ginger will use saved ALM Configurations saved on step 3 to decide to which ALM to export to."," ","Exporting execution results to ALM from Runset tab"," ","Open Run tab"," ","Add Ginger Set and drag & drop Ginger Business Flows to it"," ","Click on the Run Set Configurations button"," ","Add new “Add Publish to ALM” Run set Action"," ","Click on the Run button"," ","Execution details will be exported to ALM according to Run Set configurations."," ","Note:"," ","Each Ginger Activity execution status will be exported as the matching ALM TC Step Run Status"," ","According to the selected “Run At” configuration:"," ","‎“During Execution” – will export a business flow execution results to ALM after each business flow run."," ","‎“Execution End” – will export all business flows execution results only after all business flows are finished in that “Ginger” run."," ","The ","ALM"," ","TC"," Run status will be set based on the calculation of all of the matching Ginger Test Case Steps execution status: if all Ginger Steps Passed then the ","TC"," status will be ","“Passed”"," if one failed then the ","TC"," status will be ","“Failed”"," if partial passed and rest didn’t execute then the status will be set to ","“Not"," ","Completed”"," otherwise it will be set to “No ","Run”"],[" ","Pre-Requisite:"," ","ALM QC version 12 or above supports Automatic defect opening in QC for failed test cases"," ","The ALM Connection settings are already provided to Ginger from the ALM drop down menu. ‘Use Rest API’ checkbox must be checked."," ","The Business Flow is already exported to ALM."," ","Setting the ALM Defect’s Profiles"," ","        To have an automated defect’s opening or to make a “manual” opening via ginger much faster,"," defects field’s values (from ALM) should be pre-selected."," ","        For this purpose a screen, “ALM Defect’s Profiles” is available under the ALM drop-down of Solution tab"," ","At the top part of a screen will be presented a list of existed Defect’s Profiles – in a grid form. At the grid’s toolbox will be presented next buttons/controls:"," ","Create/Edit a Profile"," ","Delete a Profile"," ","Search Profile by Name/Description"," ","The grid will show the list of profiles and contain below columns"," ","Name"," ","Description"," ","ALM Type"," ","Is Default – a column that will be single-selectable per all values in the rows"," ","Once Profile created/selected – Profile’s Fields grid became enabled and populated by fields and their values. Those fields/values will be retrieved from the ALM by the new REST API.","Profile’s Fields grid will have below columns:"," ","Filed Name"," ","Mandatory – can be sorted by clicking on it"," ","Selected Values – dropdown with current field’s values list. The value that presented will be the selected one for this profile"," ","Deselecting (selecting other) of a Profile will be not available till all mandatory field values will not be selected (value deferent than “N/A”)."," ","‎Closing of a current window also will be not available till all mandatory field values will not be selected. A warning message will be popped in case that is not expected."," ","Closing of a current window will be not available till at least one Profile will be created/exist. A warning message will be popped in case that is not expected."," ","How to automate the opening of Defects?"," ","In the Run tab, click on “RunSet” and open the desired run set. Operations and click the button to add the operation “Automated ALM Defect’s Opening”."," ","This operation can be added only when at least one “Defect’s Profiles” exists. A warning message will be popped in case that is no “Defect’s Profiles” are existing yet."," ","To use the operation’s functionality, the operation should be added to the “RunSet Operations” list (as usual operation’s behavior)."," ","New Operation will have next options which the user can select from:"," ","Run at"," ","“Execution End” – defects will be opened after execution’s end"," ","“During Execution” – defects will be during execution – in real-time"," ","Condition"," ","“Always Run”"," ","Defect’s Opening Mode – radio buttons list"," ","“Open Defects For All Failures” – selecting this option will cause a creation of defects in ALM for all failures that happened during the execution"," ","“Open Defects For Failures that marked at Action’s Flow Control” – selecting this option will creations of defects in ALM for failures that have the predefined condition at Action’s Flow Control"," ","For the above purpose for Action’s flow control will be added new action, called “Set Failure to be Auto-Opened Defect”. "," ","If this action will be with the condition ","“Action Failed” and action will fail – this will cause a defect opening by the current operation"," ","How to view opened automated defects?"," ","Go to the Runset tab and click on the “ALM Defect’s Opening” tab."," ","This tab presents all the failures that happened during the execution - with all relevant data and screenshots."," ","Till the execution’s end, this tab is disabled. Once execution finished the tab became enabled."," ","In case of operation “Automated ALM Defect’s Opening” was in use during the last execution (or it’s not the first iteration of defect’s “manual” opening) column “ALM’s defect ID” will be populated per concerted issue. ALM Defect ID will be saved per action at the “RunSet” object"," ","In the above grid at the right corner, click on the “Open Selected as Defects at ALM” button."," ","This button is enabled only if at least one issue in a grid has no defect for itself."," ","Once clicked – this will open for selected issues defects in ALM."," ","If ALM connectivity is not working correctly – a warning message will be popped and action will be aborted. Otherwise, defects will be opened in ALM with values per field as at currently selected “Defect’s Profile”."," ","The defect will be opened in a below-described way (the same way is relevant for the opening of defects with operation “Automated ALM Defect’s Opening”):"," ","Naming convention: <<BusinessFlow>>_<<Activity>>_<<Action>>_”Failed”"," ","Defect description - should copy the steps of the test that was run. Example:"," ","BusinessFlow Name (failed)"," ","Activity Group Name"," ","Activity Group Name (failed)"," ","Activity"," ","Activity (failed)"," ","Action"," ","Action (failed)"," ","Variables of failed entities (of all levels) also will be added to the description"," ","Defect’s Attachment - screenshot will be attached to the defect, showing the error."],[" ","Once the user has imported ALM Test (to a Business Flow) or exported Ginger Business Flow to ALM he can automate the Ginger Activities Group andadds them to the Ginger Solution repository so they will be reused the next time those ALM TC’s will be used in other Tests that will be imported to Ginger"," ","For automating an ALM TC & add it to the Ginger repository please follow below steps:"," ","Import ALM Test Set into Ginger"," ","Double click on it to go to the “Automate” tab"," ","Record or manually add the automation Actions for the relevant ALM TC Steps matching Ginger Steps"," ","Test and make sure the Ginger Steps have been executed as expected."," ","Mark the “Automation Status” of the automated Ginger Steps to “Automated” in all the Activities of the Business Flow."," ","This makes the Business Flow fully automated"," ","Add the Activity Group (Test Case in ALM) to the Solution Shared Repository by:"," ","Go to the Automate tab by double-clicking on the Business Flow"," ","Click on the “…” near the Activity Group"," ","Select the “Add Activities Group to Shared Repository” option"," ","All the details in it get added to the Solution Shared Repository"," ","Note: In case the Ginger Test Case or one of its Ginger Steps already exists in the Repository the user will be asked if he wants to overwrite the existing one."," ","                                  8.   The Shared repository wizard is displayed. Click on the Next button, verify the details and then click on the Finish button."," "," 9.  You can view it under the Resources-> Shared Repository tab."," ","Note: For reflecting the automated TC’s in the Design Console (ATS) application the user will need to Check-In the automated items                       (Ginger ","Test Cases & Ginger Steps) to the Source Control (SVN)."]],"3":[[" ","Connect Ginger to QC"],[" ","Configure ALM Items Fields"],[" ","Import ALM Test Set to Ginger"],[" ","Export Business Flow to ALM"],[" ","Export Execution Results to ALM"],[" "," Automatically open defects in QC from Ginger"],[" ","Automate ALM TC & Add it to Ginger Repository"]],"id":"113"})
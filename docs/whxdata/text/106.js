rh._.exports({"0":[[" ","Ginger Jira ALM Integration"]],"1":[[" ","Ginger Jira ALM Integration"]],"2":[[" ","Ginger comes with seamless integration with Microfocus ALM Octane, and this document comes to explain how to use the integration functionalities."," ","Current supported functionalities are:"," ","Import Octane Test Suite into Ginger and automatically converting it to Ginger Business flow which will be ready to be automated or even execute in case it’s TC’s were already automated before by Ginger"," ","Export Ginger Business Flow to Octane - each one of the Business Flow Activities Group will be export to Octane Application Module as Manual Test Case item and a Test Suite item will be created in ALM Application Module containing all the relevant Octane Test Cases which were exported"," ","Export imported Ginger Business flow execution details back to Octane and reflect the execution status in the matching Octane Test Suit Run status"],[" ","Ensure ","'Show enterprise feature'"," is selected & saved in Ginger under 'Users Settings option'"],[" ","   To set ALM connecting details in the Ginger application please follow below steps:"," ","Click on the ‘Share Operations’ button."," ","Select “ALM Connection Settings”"," ","Set Jira Connection Package"," ","For working with Jira you will need to load the relevant Jira zip settings file according to the next steps:"," ","Download the relevant Jira settings zip file from the Ginger support site."," ","Click on the “Replace” button and choose your downloaded zip file."," ","Enter Server URL, Username and Password then click on the “Change Server Details” Button."," ","Click on “Get Project Details “"," ","Choose your domain and project and save your connection settings."," ","Note: All Ginger – ALM interaction will try to use saved ALM configuration in Ginger, If in any case the saved configurations are incorrect or Ginger could not establish the connection to ALM, the “ALM Connection Settings” page will be shown and the user will need to enter/re-enter ALM configurations and test them before continuing."],[" ","      For configuring the items fields values:"," ","Click on the “ALM Items Fields Configuration” button from the “Share Options” menu."," ","Click on the “Refresh” button (near the search) to refresh ALM Items Fields Configurations from ALM."," ","Select a value from the list or set the value (in case of the free text field) in the “Selected Value” column"," ","Click on the Mandatory column to sort by Mandatory values so that you do not miss any mandatory fields."," ","Click on the “Save” button to save the configurations."],[" ","       For performing ALM Test Set import please follow the below steps:"," ","Open the Ginger Solution tab which loaded with your Ginger Solution"," ","Right-click on the Business Flows node in the Automate tab and select “Import” ->“Import ALM Test Set”"," ","‎Ginger will use the current ALM Settings try to import using saved ALM settings."," ","Jira Test Set Explorer window gets displayed with the connected ALM project list. Select the ALM Test Set you want to import and click on ","Import TestSet icon"," ","The ALM Test Set will be imported and converted into a Ginger Test Set with the same name under the Ginger Test Sets folder."," ","After the Test set is imported, below is the screen on how it looks in Ginger."],[" "," Ginger allows exporting a Ginger Business Flow to ALM."," ","Export Activities Groups to ALM Test Cases- each one of the exported Business Flow Activities Groups will be exported to an ALM Test Case item in ALM Test Plan."," ","All of the created ALM Test Cases from step 1 will be added to the Business Flow to represent the execution flow"," ","Right-click the Business Flows to export and select the “Export to ALM” option. It will export the selected Business Flow to the ALM"," ","Right-click the Business Flows to export and select the “Export All to ALM” option. It will export all the Business Flows of the solution to the ALM."," ","After exported then a successful message is displayed."," ","Refresh the ALM. Users will able to the exported item in the ALM"],[" ","In case the executed Ginger Business Flow was originally imported from ALM Test Set or it was exported to ALM Test Set then the user can export the execution results to ALM."," ","Exporting execution results to ALM from Automate tab"," ","Load the relevant Ginger Business Flow into Automate tab"," ","Run the Ginger Test Set in “Run Flow” mode"," ","Once execution is done the user will get the “Test Set Execution Summary” window with a summary of the execution results."," ","For exporting the results to ALM user can click on “Export Execution Details”","‎"," ","Exporting execution results to ALM from Automate tab"," ","Open Run Set tab"," ","Add Ginger Set and drag & drop Ginger Business Flows to it"," ","Click on the Run Set Configurations button"," ","Add new “Add Publish Execution Result to ALM Operation” Run set Action"," ","Click on the Run button"," ","Execution details will be exported to ALM according to Run Set configurations"],[" ","Pre-Requisite:"," ","ALM QC version 12 or above supports Automatic defect opening in QC for failed test cases"," ","The ALM Connection settings are already provided to Ginger from the ALM drop down menu. ‘Use Rest API’ checkbox must be checked."," ","The Business Flow is already exported to ALM."," ","Setting the ALM Defect’s Profiles"," ","        To have an automated defect’s opening or to make a “manual” opening via ginger much faster,"," defects field’s values (from ALM) should be pre-selected."," ","        For this purpose a screen, “ALM Defect’s Profiles” is available under the ALM drop-down of Solution tab"," ","At the top part of a screen will be presented a list of existed Defect’s Profiles – in a grid form. At the grid’s toolbox will be presented next buttons/controls:"," ","Create/Edit a Profile"," ","Delete a Profile"," ","Search Profile by Name/Description"," ","The grid will show the list of profiles and contain below columns"," ","Name"," ","Description"," ","ALM Type"," ","Is Default – a column that will be single-selectable per all values in the rows"," ","Once Profile created/selected – Profile’s Fields grid became enabled and populated by fields and their values. Those fields/values will be retrieved from the ALM by the new REST API.","Profile’s Fields grid will have below columns:"," ","Filed Name"," ","Mandatory – can be sorted by clicking on it"," ","Selected Values – dropdown with current field’s values list. The value that presented will be the selected one for this profile"," ","Deselecting (selecting other) of a Profile will be not available till all mandatory field values will not be selected (value deferent than “N/A”)."," ","‎Closing of a current window also will be not available till all mandatory field values will not be selected. A warning message will be popped in case that is not expected."," ","Closing of a current window will be not available till at least one Profile will be created/exist. A warning message will be popped in case that is not expected."," ","How to automate the opening of Defects?"," ","In the Run tab, click on “RunSet” and open the desired run set. Operations and click the button to add the operation “Automated ALM Defect’s Opening”."," ","This operation can be added only when at least one “Defect’s Profiles” exists. A warning message will be popped in case that is no “Defect’s Profiles” are existing yet."," ","To use the operation’s functionality, the operation should be added to the “RunSet Operations” list (as usual operation’s behavior)."," ","New Operation will have next options which the user can select from:"," ","Run at"," ","“Execution End” – defects will be opened after execution’s end"," ","“During Execution” – defects will be during execution – in real-time"," ","Condition"," ","“Always Run”"," ","Defect’s Opening Mode – radio buttons list"," ","“Open Defects For All Failures” – selecting this option will cause a creation of defects in ALM for all failures that happened during the execution"," ","“Open Defects For Failures that marked at Action’s Flow Control” – selecting this option will creations of defects in ALM for failures that have the predefined condition at Action’s Flow Control"," ","For the above purpose for Action’s flow control will be added new action, called “Set Failure to be Auto-Opened Defect”. "," ","If this action will be with the condition ","“Action Failed” and action will fail – this will cause a defect opening by the current operation"," ","How to view opened automated defects?"," ","Go to the Runset tab and click on the “ALM Defect’s Opening” tab."," ","This tab presents all the failures that happened during the execution - with all relevant data and screenshots."," ","Till the execution’s end, this tab is disabled. Once execution finished the tab became enabled."," ","In case of operation “Automated ALM Defect’s Opening” was in use during the last execution (or it’s not the first iteration of defect’s “manual” opening) column “ALM’s defect ID” will be populated per concerted issue. ALM Defect ID will be saved per action at the “RunSet” object"," ","In the above grid at the right corner, click on the “Open Selected as Defects at ALM” button."," ","This button is enabled only if at least one issue in a grid has no defect for itself."," ","Once clicked – this will open for selected issues defects in ALM."," ","If ALM connectivity is not working correctly – a warning message will be popped and action will be aborted. Otherwise, defects will be opened in ALM with values per field as at currently selected “Defect’s Profile”."," ","The defect will be opened in a below-described way (the same way is relevant for the opening of defects with operation “Automated ALM Defect’s Opening”):"," ","Naming convention: <<BusinessFlow>>_<<Activity>>_<<Action>>_”Failed”"," ","Defect description - should copy the steps of the test that was run. Example:"," ","BusinessFlow Name (failed)"," ","Activity Group Name"," ","Activity Group Name (failed)"," ","Activity"," ","Activity (failed)"," ","Action"," ","Action (failed)"," ","Variables of failed entities (of all levels) also will be added to the description"," ","Defect’s Attachment - screenshot will be attached to the defect, showing the error."],[" ","Once the user has imported ALM Test (to a Business Flow) or exported Ginger Business Flow to ALM he can automate the Ginger Activities Group andadds them to the Ginger Solution repository so they will be reused the next time those ALM TC’s will be used in other Tests that will be imported to Ginger"," ","For automating an ALM TC & add it to the Ginger repository please follow below steps:"," ","Import ALM Test Set into Ginger"," ","Double click on it to go to the “Automate” tab"," ","Record or manually add the automation Actions for the relevant ALM TC Steps matching Ginger Steps"," ","Test and make sure the Ginger Steps have been executed as expected."," ","Mark the “Automation Status” of the automated Ginger Steps to “Automated” in all the Activities of the Business Flow."," ","This makes the Business Flow fully automated"," ","Add the Activity Group (Test Case in ALM) to the Solution Shared Repository by:"," ","Go to the Automate tab by double-clicking on the Business Flow"," ","Click on the “…” near the Activity Group"," ","Select the “Add Activities Group to Shared Repository” option"," ","All the details in it get added to the Solution Shared Repository"," ","Note: In case the Ginger Test Case or one of its Ginger Steps already exists in the Repository the user will be asked if he wants to overwrite the existing one."," ","                                  8.   The Shared repository wizard is displayed. Click on the Next button, verify the details and then click on the Finish button."," "," 9.  You can view it under the Resources-> Shared Repository tab."," ","Note: For reflecting the automated TC’s in the Design Console (ATS) application the user will need to Check-In the automated items                       (Ginger ","Test Cases & Ginger Steps) to the Source Control (SVN)."]],"3":[[" "," Pre-requisite"],[" ","Connect Ginger to JIRA"],[" ","Configure ALM Items Fields"],[" ","Import ALM Test Set to Ginger"],[" ","Export Business Flow to ALM"],[" ","Export Execution Results to ALM"],[" "," Automatically open defects in Jira from Ginger"],[" ","Automate ALM TC & Add it to Ginger Repository"]],"id":"106"})
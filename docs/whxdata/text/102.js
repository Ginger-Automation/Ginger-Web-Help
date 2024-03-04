rh._.exports({"0":[[" ","Ginger RQM ALM Integration"]],"1":[[" ","Ginger comes with seamless integration with RQM, and this document comes to explain how to use the integration functionalities."," ","Current supported functionalities are:"," ","Import RQM Test Plan into Ginger and automatically converting it to Ginger Business flow which will be ready to be automated or even execute in case it’s TC’s were already automated before by Ginger"," ","Export Ginger Business Flow to RQM - each one of the Business Flow Activities Group will be export to Octane Application Module as Test Case item and Test Script Item will be created in ALM Application Module containing all the relevant Test Cases which were exported"," ","Export imported Ginger Business flow execution details back to RQM and reflect the execution status in the matching Test Case Execution Record."],[" ","Ensure ","'Show enterprise feature'"," is selected & saved in Ginger under 'Users Settings option'"],[" ","To set"," ALM"," connecting details in the Ginger application please follow below steps:"," ","Click on the ‘Share Operations’ button."," ","Select “ALM Connection Settings”"," ","Select ALM type – RQM using the radio buttons"," ","Populate the ALM server URL and your ALM user name and password and click on “Get Projects Details”"," ","If connection details are correct, projects details will be received, select project and click “Save Project Mapping”"," ","Note",": All Ginger – ","ALM"," interaction will try to use saved ","ALM"," configuration in Ginger, If in any case the saved configurations are incorrect or Ginger could not establish a connection to"," ALM",", the “","ALM"," Connection Settings” page will be shown and the user will need to enter/re-enter configurations and test them before continuing."],[" ","Ginger allows configuring the ","ALM"," Test Case and Test Set items fields’ value to be updated when doing export from Ginger to ","ALM"," ","       For configuring the items fields values:"," ","Click on the “ALM Items Fields Configuration” button from the “Share Options” menu."," ","Click on the “Refresh” button (near the search) to refresh ALM Items Fields Configurations from ALM."," ","Select a value from the list or set the value (in case of the free text field) in the “Selected Value” column"," ","Click on the Mandatory column to sort by Mandatory values so that you do not miss any mandatory fields."," ","Click on the “Save” button to save the configurations."," ","Import ALM Test Set to Ginger"," ","Ginger support importing ","ALM"," Test Set which was created manually in ","ALM"," or automatically by the Design Console (ATS) application and converting it into    Ginger Test Set which will be ready to be automated or execute (assuming automation was already created for its TC’s)."," ","For performing ","ALM"," Test Set import please follow the below steps:"," ","Open the Ginger Solution tab which loaded with your Ginger Solution"," ","Right-click on the Business Flows node in the Automate tab and select “Import” "," ","->“Import ALM Test Set”"," ","According to ALM type, Window with the connected ALM project Test Lab tree will be loaded. Select the ALM Test Set you want to import and click on the “Import Selected” button."," ","After click on import it will show the Import Review Window from that window, we can select the which Test Script need to import on which Test Case"," ","The ALM Test Set will be imported and converted into a Ginger Test Set with the same."," ","After the Test set is imported, below is the screen on how it looks in Ginger."," ","Export Business Flow to ALM "," ","Ginger allows exporting a Ginger Business Flow to ALM"," ","Right-click the Business Flows to export and select the “Export to ","ALM","” option. It will export the selected Business Flow to the ","ALM"," ","Right-click the Business Flows to export and select the “Export All to ALM” option. It will export all the Business Flows of the solution to the ALM."," ","After exported then a Successful message is displayed"," ","Refresh the ALM. Users will able to the exported item in the ALM"," ","Export Execution Results to ALM "," ","In case the executed Ginger Business Flow was originally imported from ALM Test Set or it was exported to ALM Test Set then the user can export the execution results to ALM"," ","     Exporting execution results to ALM from Automate tab"," ","Load the relevant Ginger Business Flow into Automate tab"," ","Run the Ginger Test Set in “Run Flow” mode."," ","Once execution is done the user will get the “Test Set Execution Summary” window with a summary of the execution results."," ","For exporting the results to ALM user can click on “Export Execution Details”"," "," Exporting execution results to ALM from Runset tab"," ","Open Run Set tab"," ","Add Ginger Set and drag & drop Ginger Business Flows to it"," ","Click on the Run Set Configurations button"," ","Add new “Add Publish Execution Result to ","ALM"," Operation” Run set Action"," ","Click on the Run button"," ","Execution details will be exported to ","ALM"," according to Run Set configurations"]],"2":[[" ","Ginger RQM ALM Integration"]],"3":[[" ","Introduction"],[" "," Pre-requisite"],[" ","Connect Ginger To RQM"],[" ","Configure ALM Items Fields"]],"id":"102"})
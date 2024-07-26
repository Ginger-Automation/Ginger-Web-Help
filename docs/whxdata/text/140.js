rh._.exports({"0":[[" ","Application Models- API Models"]],"2":[[" ","Application Models- API Models"," ","Introduction"," ","Auto Pilot is a new machine-learning-based testing automation functionality.","\n            It reduces automatic test flows creation time and helps improve our customers’ quality and time to market."," ","Auto Pilot functionalities enable automatic modeling/learning of application capabilities in 4 model areas – front-end (UI), middle layer (APIs), back-end processes and database."," ","Auto Pilot automatically learns & stores all relevant definitions and capabilities for subsequent automation and reuse in progression automation, users can easily create automated test flows and reduce the efforts of future automation maintenance."," ","Creating new API Model"," ","Under the Resources tab, click on the API Model link. Under the Applications Models tab, click on the API Models link as shown below to get the API Model panel."," ","Click on the Add button as shown below"],[" ","In the below window, enter the API URL in the URL text field. Click on the ","‘Load’"," button to get the API loaded. A message is displayed “The file is Loaded successfully”"," ","The preview button is displayed after the API gets loaded. Click on it to get the Preview of the API. Click on the Next button"," ","The XML name, description & Request body is displayed"," ","           As shown below 4 APIs are read from the WSDL.  ","Select the desired API and Click on the Next button"," ","The Sample Request Files if any can be added from the ‘Learn Optional Parameters Values’ tab"," ","           The parameter values from the sample files will be stored as optional values in the API Models"," ","              Click on the ‘Next’ button"," ","The Target application needs to be selected here and it is important while using API Model Action. ","Click on the ‘Finish’ button"," ","The APIs get added as shown below"],[" ","In the below API model wizard, select the API Type as ‘JSON Templates’ and add the files using the ‘+’ button in the Request Templates section"," ","Multiple JSON files can be added to the wizard. Click on the Next button"," ","In the below screen, the user can select the desired API using the ‘Selected’ check box. Description can also be entered."," ","                Click on the Next button"," ","In the below screen, the user can add sample JSON files if required using the ‘+; button. The values from the sample files will be considered optional values. Click on the Next button"," ","As shown below select the desired target application, in this case, it's ‘MyWebServciesApp’. The user can add Tag if required. The tags are populated as per Tags created on the Solution tree node under the Solution tab.  Click on the Finish button"," ","The API will be added as shown below"," ","As shown below, parameters from the JSON file are added under the Model Parameters tab. The values of the parameters from the same file are added as optional values."," ","Output value if any will be displayed under the Output Values Template."],[" ","In the below API model wizard, select the API Type as ‘Swagger (Open API) document’ and provide URL or File of Swagger"," (v2 &v3)","."," ","          Note: Ginger support ","Swagger 2.0 and Swagger Open API 3.0 ","(YAML and JSON)"," both."," ","JSON:"," ","OR "," ","YAML:"," ","Click on the Load button, only after which the Next button will be enabled. Click on the Next button"," ","As shown below, the list of APIs with descriptions from the document is displayed. The user can de-select an  API as per requirement. Click on the Next button"," ","As shown below, the user can add sample request files if required by clicking on the + button. The values from the sample file will be considered optional values."," Click on the Next button."," ","As shown below, select the Target application as ‘MyWebServicesApp’. A tag can also be added. Tags added in the Solution tab will be displayed here for selection."," ","Click on the Finish button."," ","As shown below, all the APIs will be added under the API Model tree"],[" ","In the below API model wizard, select the API Type as ‘XML template's and add the files using the ‘+’ button in the Request Templates section. Multiple XML files can be added to the wizard. Click on the Next button."," ","As shown in the below screen, the user can select the desired API using the ‘Selected’ check box. Description can also be entered."," ","          Click on the Next button"," ","As shown below, the user can add sample XML files if required using the ‘+; button. The values from the sample files will be considered optional values. Click on the Next button."," ","As shown below select the desired target application, in this case, it's ‘MyWebServciesApp’. User can add Tags if required. The tags are "," ","         populated as per Tags created on the Solution tree node under the Solution tab.  Click on the Finish button"," ","The API will be added as shown below"," ","  As shown below, parameters from the XML file are added under the Model Parameters tab. The values of the parameters from the same file "," ","           are added as optional values."," ","           Output value if any will be displayed under the Output Values Template."],[" ","  This feature is used when there are already APIs added in the solution and the user wants to know if anything is changed in these APIs."," ","In the API Model Import wizard, after adding the URL/file in the API’s Import Source tab, click on the Next button."," ","                           On the Select APIs tab, there is a Compare APIs button.  Click on the button to start the comparison process."," ","Once the process is finished, we get the Comparison results as below"," ","Comparison Results comprise of,"," ","The Learned API (Name),"," ","The Matching API Model (","If any match is found/exist in the solution",")"," ","The Comparison Status ","(Showing Comparison results with the matching API)"," ","The Comparison Operations ","(operation based on comparison for User)"," ","Compare & Merge ","(Intuitive window that displays Existing and Matching API Model side by side)"],[" "," A new Folder “Data Sources” is now available in All Ginger Solutions. To work with Data Source you can use one of the below options;"," ","Comparison Status and Default Operations"," ","    : Add new, it states no matching API was found in the solution","."," ","Default Operation",": “","Add New","”"," ",": Matching API is found which has been modified (in case, any of the fields in the existing API is updated like, Headers, Request Type, HTTP Version, etc.)"," ","Default Operation",": “","Replace Existing with New”"," ",": Matching API found with no modifications "," ","Default Operation",": “","Do Not Add”"," ","                Comparison Operations"," "," We have various operations available to handle the APIs import mechanism based on comparison as;"," ","Add New",": ","Adds a new API Model to the solution with this operation as default."," ","Do Not Add New",": ","The API with default operation won’t be added once the wizard is finished."," ","Replace Existing with New",": ","The API will replace the existing API Model (one mentioned in the Matching API Column) in the solution."," ","Merge Changes",": ","A new API Model (Merged API Model) will be created with Existing Or Learned API as the Base model and further user-based inputs/updates, will replace the existing API Model (one mentioned in the Matching API Column) in the solution."," ","                  Compare and Merge"," ","Side by Side Comparison window would display the Learned (new) and the Existing (Matching) API Models."," ","     Further, provide the user a feature to make a new API Model with merged properties of both Learned and Existing/Matching API Model."],[" ","After the API is added, its configuration can be updated."," ","The API type is by default as SOAP."," ","API Type can be “REST”. The end URL is displayed."," ","The Request Type has the default option as “GET”"," ","The Endpoint URL and Soap Action are displayed."," ","Network Credentials can be default and custom. "," ","                        or the custom, we have to manually provide the Endpoint URL user, password and domain."," ","Request Body:   ","This can be provided either using the Free Text or using an existing file using “From File”."," ","Security Configurations:-"," ","SSL Certificates can be either All Certificates or Custom."," "," All Certificates:-"," ","Custom:-"," ","The Security Types can the following types:-"," ","Authorization can be None or of basic type."],[" ","Note",": For Global Parameters refer to the document ‘","Application Models- Global Parameters","‘"," ","The Model Parameters tab displays the parameter given in the API."," ","The description can be given for the parameter."," ","To give value for the parameter, click on the button as shown below."," ","              The below screen is displayed. Click on the + button to add the values."," ","               The displayed window also displays an option of default."],[" ","       If an API Model has response parameters then it will be shown in the ","‘Output Values Templates’"," tab"," ","        As shown below, the API Model has output parameters."," ","Expected Values"," ","       The expected values can be added to the parameter by using the ‘…’ button under the Expected Value column."," ","        These values will then be matched with the actual values when the API Model Action is run. The Action will then be marked as pass or fail accordingly. "," ","Store to"," ","       If required, the output values can be stored into a variable by simply selecting the desired variable from the drop-down as shown below."," ","       The variables can be created in the Automate tab and Solution tab for Global variables."," ","Output Template API used in API Action"," ","       This is how the API Action looks before running it. (API in the below screenshot is different from the ones shown above)"," "," After running the Action, the below results would be populated in the Output Templates."],[" ","Select the desired API and go to the Model Parameters tab."," ","Click on the ","‘Import Optional Values For Parameters’"," button."],[" ","Select the ","‘Source Type’"," as Excel."," ","Click on the Browse button and select the path of the excel file."," ","Click on the Template button. This will open the file with a sheet by name same as the API model name. The sheet will have the format in which the values need to be entered."," ","Enter the values in the given format. Eg. as shown below values in a row no. 2 are entered manually. Row no. 1 was the heading provided in the template."," ","           Note:- The parameter name is case sensitive. Hence only the exact matched parameters will be added."," ","5. ","If the Template button was clicked and entries were created in the new sheet then the user has to ","browse the file again to get the latest                            sheet"," ","                 Select the template Sheet from the drop-down "," ","6. ‘Select Row(s) Where’"," field is displayed. The user can give any condition if required in this field"," ","  If a user wants to filter a field that has space in its name then use the below format:-"," ","      Name in square brackets "," ","        [Name]"," ","7. Click on the ","‘View All Data’"," button to view the content in the sheet. Click on the ","‘View Filtered "," ","    Data’ ","button to view the data that is filtered after applying the given condition."," ","    Click on the Next button once parameters are viewed"," ","   8.  The below screen is displayed which will display the list of available parameters that can be added                                                                               "," ","         Select the desired parameters and click on the Finish button."," ","9. Click on the Ok button of the message box"," ","10. As shown below all the optional values from the Excel file get added to the respective parameter names"],[" ","In the ‘Source Type’ select the Database option."," ","There are 2 options, Oracle and MSAccess."," ","For Oracle Database, enter the connection string, user id and password. Click on the Connect button."," ","          The free SQL field is populated once the connection is successful."," ","           Enter the desired query in it and click on the Next button."," ","           Examples of Oracle string:-"," ","                         TNS\\Host\\File Path :"," ","                         Data S","ource=(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=<<hostname>>)(PORT=<<port>>)) (CONNECT_DATA="," ","                         (sid=<<sid>>)));User Id=<<username>>;Password=<<password>>; "," ","The result of the query is displayed. The fields are displayed and not the values stored in the fields. Click on the Finish button to add the values"," ","It will display a message giving the number of parameters updated"," ","Export optional values to an Excel file"," ","Select the desired API and go to the Model Parameters tab."," "," Click on the ","‘Export Parameters to Excel File’"," button"," ","A message is displayed on successful export"," "," The file is opened by clicking the Ok button of the above message."," ","            This file is stored in the Documents folder of the local PC."],[" ","Select the desired API and go to the Model Parameters tab."," ","Click on the ","‘Export Parameters to DataSource’"," button."," ","Data Source tables are displayed in tree format. Parameters can be exported to the only customized table and hence only the customized table in the data source is displayed in the window."," ","           Click on the desired table and then click on the Select button.         "," ","A message is displayed on successful export."," "," Go to Resources-> Data Sources. Right-click on the GingerDataSource node and select the refresh button. The exported data is displayed after the refresh is done."],[" ","Pre-requisite:-"," ","                 The Activity where this Action will be added should have a Target application as MyWebServicesApp."," "," In the Automate tab, click the + button in the ‘Activity-Actions’ section to get the below window. Select the ‘Web API Model Action’ and click the ","‘Add Action’ button."," ","A new screen is displayed showing the list of APIs that were added in the Resources tab."," ","           Select the desired API and click on the Select button."," "," The below API Models screen will display the API. More APIs can be added using the + button. Click on the enabled Next button\\"," "," The API Parameters Consolidation screen will display the parameter details in the API. “Selected Value” drop-down can be used to change the value if required."," ","            Or the user can use the Value expression (…) button to choose another value."," ","            Click on the Finish button."," ","The API Action gets added to the solution"],[" ","Pre-requisite:-"," The Activity where this Action will be added should have a Target application as MyWebServicesApp."," ","In the Automate tab, click the + button in the ‘Activity-Actions’ section to get the below window."," ","Click on the API Models button to get the APIs."," ","Drag & drop the desired API "," ","API Model Wizard is displayed. Click on the Next button"," ","Enter the values for the parameters and click on the Finish button"," ","The Web API Model Action is added."],[" ","Click on the Run button of the API Model Action. As shown below the action has passed."," ","If the parameters have multiple values, then the user can change the selected value at Run time using the drop-down as shown below"," ","                 In order to preview the full raw request, press on the button “View Raw Request Preview”"],[" ","After running the WebAPI Action, you can see the raw output at the “Output Values” tab in 2 different ways:"," ","In the Output Values table, where the raw response is parsed and also populated with the full raw request:"," ","By pressing the “View Raw Output Values” button:"," ","                The button will open a pop-up window with the raw output values. "," ","                You can see here the full raw request that was sent by Ginger, and the full raw response sent by the API server."," ","                    In Execution Report tab, you will be able to see the final result of the WebAPI Action:"," ","                  If the Execution Status is “Failed” you will be able to see the reason at the “Error Details”:"],[" ","Go to the Automate tab after the API models are added from the Resources tab."," ","Click the + button in the ‘Activity-Actions’ section to get the below window."," ","Click on the Applications Models and then click on the API Models button to get the APIs."," ","Right-click on the desired API Model to get the edit options"],[" ","     If a Business Flow has Legacy Actions of a web-services target application, they can be converted to the API Models Actions."," ","Go to the API Models tab under the Resources tab. Right-click on the API Models node."," ","            Go to API Model & select Convert Webservices Actions"," ","Convert Web services Actions wizard is displayed. Click on the Next button"," ","It displays the Business Flow that has the Legacy web-services Actions along with the number of actions in it. Click on the Next button."," ","User can parameterize or configure validations if required. Click on the Next button"," ","The conversion status is displayed. Click on the Finish button."," ","The API Models are added."," ","Go to the Automate tab. The Legacy actions are disabled and new API Model actions are added and active."]],"3":[[" ","Import WSDL Document"],[" ","Import from JSON file"],[" ","Import Swagger file"],[" ","Import from XML"],[" ","API Models Comparison Tool Overview"],[" ","Exploring Comparison Tool’s Features"],[" ","API Configurations (SOAP/REST)"],[" ","Model Parameters and its values"],[" "," Output Values Templates"],[" ","Import optional values from Paramerts"],[" ","Import optional values from an Excel file"],[" ","Import optional values from Database"],[" ","Export optional values to Data Source"],[" ","Use API Model in the Action"],[" ","Creating Action using API Models"],[" ","Executing API Action"],[" ","Action Execution Results"],[" ","Edit API Models from Automate Tab"],[" ","Convert Legacy web services action into API Model Actions"]],"id":"140"})
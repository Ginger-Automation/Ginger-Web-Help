rh._.exports({"0":[[" ","Global Parameters"]],"2":[[" ","Global Parameters"],[" ","Global parameters are used in Auto Pilot- Application Model Actions. They are introduced so that parameters can be used across all the Application Models in a solution."],[" ","How to Add a global parameter?"," ","Go to the Resources tab and click on the ","‘Application Models’",". "," ","Then click on the ","‘Models Global Parameters’"," link as shown below."," ","Click on the Add button as shown below"," ","A new window is displayed where the user needs to enter the desired global parameter name and click on the Ok button."," ","As shown below global Parameter ‘GP1’ is added to the grid. The user can then enter its description in the grid."," ","How to Delete global parameter?"," ","A single"," ","parameter can be deleted using the ‘-‘ button as shown below"," ","All the parameters can be deleted using the ‘Delete All’ button as shown below."],[" ","Global parameters can have 2 values viz Optional and Current."," "," The difference between the two is that the optional value is static and does not change even after the API Action is run.  "," ","The Current value is can either be given manually or can be updated during the execution."],[" ","Click on the button near the Optional Values as shown below."," ","Click on the + button in the new window as shown below."," ","An entry will be added to the grid. Enter a value in it and click on the Ok button of the window."," ","Users can add multiple such values. Users can also make the added value as default by selecting the ","‘Default’"," radio button. "," ","The values will be displayed as shown below."],[" ","From the Global Parameter tab:-"," ","Enter the current value in the text box as shown below."," ","From the Action:-"," ","Run the Action once so that values are populated in the Output values tab. "," ","Click on the ‘Store To’ dropdown."," ","Select the ApplicationModelParameter option."," ","Click on the ‘{NewGlobalParameter}’  drop down to select the desired parameter."," ","Dropdown is displayed only when there are multiple global parameters added from the ‘Global Parameter’ tab."," ","Click on the Ok button of the Action edit window."," ","When this action is running, the selected global parameter is updated with the output value and will be its current value."," ","As shown in the below example, the Actual value “4.0.30319” will be stored in the global parameter GP1 which will be its current value."],[" ","Select the ","‘Source Type’"," as Excel."," ","Click on the Browse button and select the path of the excel file."," ","Click on the Template button. This will open the file with a sheet by name same as the API model name. "," ","The sheet will have the format in which the values need to be entered."," ","Enter the values in the given format. Eg. as shown below values in a row no. 2 are entered manually. Row no. 1 was the heading provided in the "," ","template."," ","Note:- The parameter name is case sensitive. Hence only the exact matched parameters will be added."," ","If the Template button was clicked and entries were created in the new sheet then the user has to","browse the file again to get the latest sheet."," ","      Select the template Sheet from the drop-down "," ","‘Select Row(s) Where’"," field is displayed. The user can give any condition if required in this field."," ","    If a user wants to filter a field that has space in its name then use the below format:-"," ","      Name in square brackets."," ","        [Name]"," "," Click on the ","‘View All Data’"," button to view the content in the sheet. "," ","Click on the ","‘View Filtered ","Data’ ","button to view the data that is filtered after applying the given condition."," ","    Click on the Next button once parameters are viewed."," ","      The below screen is displayed which will display the list of available parameters that can be added.                                                                                                                                                                    "," ","         Select the desired parameters and click on the Finish button."," ","Click on the Ok button of the message box."," ","As shown below all the optional values from the Excel file get added to the respective parameter names."],[" ","In the ‘Source Type’ select the Database option."," ","There are 2 options, Oracle and MSAccess."," ","For Oracle Database, enter the connection string, user id and password. Click on the Connect button."],[" ","Go to ","Resources-> Applications Models-> Models Global Parameters"," tab."," ","Click on the ","‘Export Parameters to Excel File’"," button."," ","A message is displayed on successful export."," "," The file is opened by clicking the Ok button of the above message."," "," This file is stored in the Documents folder of the local PC."],[" "," Go to ","Resources-> Applications Models-> Models Global Parameters"," tab "," "," Click on the ","‘Export Parameters to DataSource’"," button."," ","Data Source tables are displayed in tree format. Parameters values can be exported to the only customized table and hence only the customized table in the data source is displayed in the window."," ","  Click on the desired table and then click on the Select button."," ","A message is displayed on successful export."," ","Go to Resources-> Data Sources. Right-click on the GingerDataSource node and select the refresh button. "," ","Or right-click on the Customized table node and select the refresh button."," ","The exported data is displayed after the refresh is done."],[" ","The global parameters can be used in all the API models viz. JSON Template, Swagger, WSDL, XML Template."," ","Select the API and click on the Model Parameters tab. Click on the button as shown be below to expand the Global Parameter."," ","Click on the Add new button"," ","Select the desired global parameter and click on the Ok button of the window."," ","The parameter from the Global Parameter tab is linked here in the API model."," ","The default value can be set from the list of available optional values. Click on the ‘…’ button as shown below."," ","In the new window, click on the default radio button of the desired parameter."," "," Save the updates by right-clicking on the API and selecting the save option."],[" ","For adding a new API Action follow the below steps:-"," ","In the Automate tab, select an Activity with Target application as ‘MyWebServicesApp’. "," ","Click on the Add Action button and select the Web API Model action."," ","Select the desired API having the global parameter and click on the Select button."," ","The below screen is displayed giving the API details. Click on the Next button."," ","As shown in the below screen, the global parameter is also displayed. Click on the Finish button."," ","The Action gets added to the grid."," ","When the global parameter is added to an API model which is already used in an Action then follow the below steps."," ","Refer to the “Auto-Pilot- Application Models” document on how to create the API Action."," ","Open an existing API Action in edit mode by double-clicking on it. The below message is displayed. Click on the Ok button."," ","The added global parameter should be displayed in the API Model Parameters list as shown below."],[" ","                    The ","“Current Value” of a global parameter is the value that will be set for the VE expression in run "," ","                   time."," ","                  Th","e global parameter can be used in other actions also using the Value Expression window."," ","                  In any Action click on the ‘…’ as shown below. "," ","                In the Value Expression window, the global parameters are displayed in the left panel. Select the desired and "," ","                 double click on it to get it into the editor pane."]],"3":[[" ","Introduction"],[" ","How to configure Global parameters?"],[" "," How to assign value to the Global Parameter?"],[" ","How to use Global Parameters in different models?"],[" ","How to use Global Parameters?"],[" ","How to use Global Parameter in Value Expression?"]],"4":[[" ","How to assign Optional values?"],[" ","How to assign Current value?"],[" ","How to import optional values from an Excel file?"],[" ","How to import optional values from Database?"],[" "," How to Export optional values to an Excel File?"],[" ","How to Export optional values to Data Source?"],[" ","How to use Global Parameter in API Action?"]],"id":"135"})
rh._.exports({"0":[["Global Parameters"]],"1":[["\n  "," ","\n  ","\n  ","Global Parameters","\n  ","                                                                                                                                                                                                                                           ","\n  ","        ","\n  ","\n  "," ","\n  ","Contents","\n                    ","\n                  ","\n  ","Introduction",". 2","\n  ","How to configure Global parameters?",". 2","\n  ","How to assign value to the Global Parameter?",". 3","\n  ","\n    ","How to assign Optional values?",". 3","\n    ","How to assign Current value?",". 3","\n  ","\n  ","How to use Global Parameters in different models?",". 3","\n  ","How to use Global Parameters?",". 3","\n  ","\n    ","How to use Global Parameter in API Action?",". 3","\n    ","How to use Global Parameter in Value Expression?","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  ","                                              ","\n  ","Introduction","\n  ","Global parameters are used in Auto Pilot- Application Model Actions. They are introduced so that parameters can be used across all the Application Models in a solution.","\n  "," ","\n  "," ","\n  ","How to configure Global parameters?","\n  ","\n    ","How to Add a global parameter?","\n  ","\n  ","\n    ","Go to the Resources tab and click on the ","‘Application Models’",". ","\n  ","\n  ","Then click on the ","‘Models Global Parameters’"," link as shown below.","\n  ","\n  ","                  ","\n  ","         ","\n  ","\n  ","\n    ","Click on the Add button as shown below","\n  ","\n  ","\n  ","                   ","\n  ","\n  ","\n    ","A new window is displayed where the user needs to enter the desired global parameter name and click on the Ok button.","\n  ","\n  ","\n  ","                   ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    ","As shown below global Parameter ‘GP1’ is added to the grid. The user can then enter its description in the grid.","\n  ","\n  ","\n  ","               ","\n  ","\n  ","\n    ","How to Delete global parameter?","\n  ","\n  ","A single"," ","parameter can be deleted using the ‘-‘ button as shown below","\n  "," ","\n  "," ","\n  ","\n  ","\n  ","All the parameters can be deleted using the ‘Delete All’ button as shown below.","\n  ","\n  ","\n  ","\n  ","\n  "," ","\n  "," How to assign value to the Global Parameter?","\n  ","\n  "," ","Global parameters can have 2 values viz Optional and Current.","\n  "," The difference between the two is that the optional value is static and does not change even after the API Action is run.  ","\n  ","The Current value is can either be given manually or can be updated during the execution.","\n  "," ","\n  ","How to assign Optional values?"," ","\n  ","\n  ","\n    ","Click on the button near the Optional Values as shown below.","\n  ","\n  ","    ","\n  ","\n  ","\n  ","\n    ","Click on the + button in the new window as shown below.","\n  ","\n  ","  ","\n  ","\n  ","\n  ","\n    ","An entry will be added to the grid. Enter a value in it and click on the Ok button of the window.","\n  ","\n  ","  ","\n  ","\n  ","\n  ","\n  ","\n    ","Users can add multiple such values. Users can also make the added value as default by selecting the ","‘Default’"," radio button. ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    ","The values will be displayed as shown below.","\n  ","\n  ","\n  ","  ","\n  "," ","\n  ","\n    ","How to assign Current value?"," ","\n  ","\n  ","         ","\n  ","\n    ","From the Global Parameter tab:-","\n  ","\n  ","Enter the current value in the text box as shown below.","\n  "," ","\n  ","\n  ","                ","\n  ","          ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    ","From the Action:-","\n  ","\n  ","\n    ","Run the Action once so that values are populated in the Output values tab. ","\n  ","\n  ","Click on the ‘Store To’ dropdown.","\n  ","    ","\n  ","\n  ","\n    ","Select the ApplicationModelParameter option.","\n  ","\n  ","\n  ","   ","\n  ","\n  ","\n    ","Click on the ‘{NewGlobalParameter}’  drop down to select the desired parameter.","\n  ","\n  ","Dropdown is displayed only when there are multiple global parameters added from the ‘Global Parameter’ tab.","\n  ","Click on the Ok button of the Action edit window.","\n  ","   ","\n  ","\n  ","\n    ","When this action is running, the selected global parameter is updated with the output value and will be its current value.","\n  ","\n  ","\n  ","\n  ","As shown in the below example, the Actual value “4.0.30319” will be stored in the global parameter GP1 which will be its current value.","\n  ","   ","\n  "," ","\n  "," ","\n  ","\n  ","\n  ","\n    ","How to import optional values from an Excel file?","\n    "," ","\n  ","\n  ","\n    ","Select the ","‘Source Type’"," as Excel.","\n    ","Click on the Browse button and select the path of the excel file.","\n    ","Click on the Template button. This will open the file with a sheet by name same as the API model name. ","\n    ","The sheet will have the format in which the values need to be entered.","\n  ","\n  ","\n  ","      "," ","\n  ","\n  ","\n  ","\n  "," ","\n  ","Enter the values in the given format. Eg. as shown below values in a row no. 2 are entered manually. Row no. 1 was the heading provided in the ","\n  ","template.","\n  ","\n  ","Note:- The parameter name is case sensitive. Hence only the exact matched parameters will be added.","\n  ","\n  ","              ","\n  ","           ","\n  "," ","\n  ","\n  ","If the Template button was clicked and entries were created in the new sheet then the user has to","browse the file again to get the latest sheet.","\n  ","      Select the template Sheet from the drop-down ","\n  ","         "," ","\n  ","\n  ","\n  ","\n  ","\n  ","‘Select Row(s) Where’"," field is displayed. The user can give any condition if required in this field.","\n  ","\n  ","       ","\n  "," ","\n  ","\n  ","    If a user wants to filter a field that has space in its name then use the below format:-","\n  ","      Name in square brackets.","\n  ","        [Name]","\n  ","\n  ","        ","\n  "," ","\n  ","\n  "," Click on the ","‘View All Data’"," button to view the content in the sheet. ","\n  ","Click on the ","‘View Filtered ","Data’ ","button to view the data that is filtered after applying the given condition.","\n  ","    Click on the Next button once parameters are viewed.","\n  ","\n  ","       ","\n  "," ","\n  ","\n  ","      The below screen is displayed which will display the list of available parameters that can be added.                                                                                                                                                                    ","\n  ","         Select the desired parameters and click on the Finish button.","\n  ","         ","   ","\n  ","\n  "," ","\n  ","Click on the Ok button of the message box.","\n  ","     ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","As shown below all the optional values from the Excel file get added to the respective parameter names.","\n  ","       ","\n  ","\n  ","\n  ","\n    "," ","\n    ","How to import optional values from Database?","\n  ","\n  ","\n  ","\n    ","In the ‘Source Type’ select the Database option.","\n  ","\n  ","There are 2 options, Oracle and MSAccess.","\n  ","\n  ","\n  ","\n  ","\n  ","\n    ","For Oracle Database, enter the connection string, user id and password. Click on the Connect button.","\n  ","\n  ","\n  ","\n  ","\n    "," ","\n    "," ","\n  ","\n  "," How to Export optional values to an Excel File?","\n  ","\n  ","\n    "," ","Go to ","Resources-> Applications Models-> Models Global Parameters"," tab.","\n    "," ","Click on the ","‘Export Parameters to Excel File’"," button.","\n  ","\n  ","\n  ","        ","\n  ","\n  ","\n    "," ","A message is displayed on successful export.","\n  ","\n  ","            ","\n  ","\n  ","\n    "," The file is opened by clicking the Ok button of the above message.","\n  ","\n  "," This file is stored in the Documents folder of the local PC.","\n  ","\n  ","  ","\n  ","\n  ","\n  ","\n  ","\n  "," ","\n  ","How to Export optional values to Data Source?","\n  ","\n  ","\n    "," Go to ","Resources-> Applications Models-> Models Global Parameters"," tab ","\n    "," Click on the ","‘Export Parameters to DataSource’"," button.","\n  ","\n  ","     ","\n  ","                     ","\n  ","\n  ","\n    "," ","Data Source tables are displayed in tree format. Parameters values can be exported to the only customized table and hence only the customized table in the data source is displayed in the window.","\n  ","\n  ","  Click on the desired table and then click on the Select button.","\n  ","\n  ","   ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    "," ","A message is displayed on successful export.","\n  ","\n  ","\n  ","    ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    "," ","Go to Resources-> Data Sources. Right-click on the GingerDataSource node and select the refresh button. ","\n  ","\n  ","Or right-click on the Customized table node and select the refresh button.","\n  ","The exported data is displayed after the refresh is done.","\n  ","\n  "," ","\n  "," ","\n  ","How to use Global Parameters in different models?","\n  ","   ","\n  ","The global parameters can be used in all the API models viz. JSON Template, Swagger, WSDL, XML Template.","\n  ","\n  ","\n    ","Select the API and click on the Model Parameters tab. Click on the button as shown be below to expand the Global Parameter.","\n  ","\n  ","\n  ","\n  ","\n    ","Click on the Add new button","\n  ","\n  ","\n  ","\n  ","\n  ","\n    ","Select the desired global parameter and click on the Ok button of the window.","\n  ","\n  ","\n  "," ","\n  ","\n  ","The parameter from the Global Parameter tab is linked here in the API model.","\n  ","\n  ","\n  ","\n  ","\n    ","The default value can be set from the list of available optional values. Click on the ‘…’ button as shown below.","\n  ","\n  ","In the new window, click on the default radio button of the desired parameter.","\n  ","\n  ","\n  ","\n  ","\n  ","\n    "," Save the updates by right-clicking on the API and selecting the save option.","\n  ","\n  "," ","\n  "," ","\n  ","\n  "," ","How to use Global Parameters?","\n  ","\n  ","\n    "," ","\n    ","How to use Global Parameter in API Action?","\n  ","\n  ","\n  ","\n    ","For adding a new API Action follow the below steps:-","\n  ","\n  ","\n    ","In the Automate tab, select an Activity with Target application as ‘MyWebServicesApp’. ","\n  ","\n  ","Click on the Add Action button and select the Web API Model action.","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    ","Select the desired API having the global parameter and click on the Select button.","\n  ","\n  ","\n  ","\n  ","\n    ","The below screen is displayed giving the API details. Click on the Next button.","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    ","As shown in the below screen, the global parameter is also displayed. Click on the Finish button.","\n  ","\n  ","\n  ","\n  ","\n    ","The Action gets added to the grid.","\n  ","\n  ","\n  ","\n  ","\n  ","\n    ","When the global parameter is added to an API model which is already used in an Action then follow the below steps.","\n  ","\n  ","Refer to the “Auto-Pilot- Application Models” document on how to create the API Action.","\n  ","\n  ","Open an existing API Action in edit mode by double-clicking on it. The below message is displayed. Click on the Ok button.","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","The added global parameter should be displayed in the API Model Parameters list as shown below.","\n  ","\n  ","\n  ","\n  ","\n    "," ","\n    ","How to use Global Parameter in Value Expression?","\n  ","\n  ","\n  ","                    The ","“Current Value” of a global parameter is the value that will be set for the VE expression in run ","\n  ","                   time.","\n  ","                  Th","e global parameter can be used in other actions also using the Value Expression window.","\n  ","                  In any Action click on the ‘…’ as shown below. ","\n  ","\n  ","                    ","\n  ","\n  ","                In the Value Expression window, the global parameters are displayed in the left panel. Select the desired and ","\n  ","                 double click on it to get it into the editor pane.","\n  ","                ","\n  ","\n  ","\n  ","\n  ","                      ","\n  ","\n  ","\n  ","\n  ","\n\n"]],"id":"110"})
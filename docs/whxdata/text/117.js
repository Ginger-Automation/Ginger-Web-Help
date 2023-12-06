rh._.exports({"0":[[" ","Data Source"]],"1":[[" ","Purpose"],[" ","Add Ginger Data Source to Solution"],[" ","LiteDB Data Source"],[" ","Exploring Ginger Data Source Options"],[" ","Types of Data Source Tables"],[" ","Ginger Data Source Table Options"],[" ","Data Source Config Page"],[" ","Export/ Import to Excel"],[" ","Ginger Data Source Action"]],"2":[[" ","Add New Ginger Data Source"],[" ","Create New Solution"],[" ","Data Source Manipulation Options"],[" ","Ginger KEY VALUE"],[" ","CUSTOMIZED"],[" ","Data Source Table Manipulation Options"],[" ","Data Source Config – Value Expression"],[" ","  Data Source Config – Output Grid"],[" ","  Data Source Config Page – Configuration"],[" ","Export Data Source to Excel"],[" ","Export Table to Excel (Customized or Key table)"],[" ","Import Data Source from Excel"],[" ","Action Configurations"]],"3":[[" ","Data Source"," ","Contents"," ","Purpose"," ","Add Ginger Data Source to Solution"," ","Add New Ginger Data Source"," ","Create New Solution"," ","Exploring Ginger Data Source Options"," ","Data Source Manipulation Options"," ","Types of Data Source Tables"," ","Ginger KEY VALUE"," ","CUSTOMIZED"," ","Ginger Data Source Table Options"," ","Data Source Table Manipulation Options"," ","Data Source Config Page"," ","Data Source Config – Value Expression"," ","Data Source Config – Output Grid"," ","Data Source Config Page – Configuration"," ","Export/ Import to Excel"," ","Export Data Source to Excel"," ","Export Table to Excel (Customized or Key table)"," ","Import Data Source from Excel"," ","Ginger Data Source Action"," ","Action Configurations"," ","\n      ‎"],[" "," The purpose of Adding Data Source to the solution is to Read/Write Data from a common place for all Business Flows/Activities/Actions."," "," There are 2 types of Data Sources available GingerDataSource & LiteDB."],[" "," A new Folder “Data Sources” is now available in All Ginger Solutions. To work with Data Source you can use ","one of the below options;"],[" ","Go to Resources-> Data Sources tab."," ","Right-click on the “Data Sources” node and select “Add Data Source” from the Pop Up Menu."," ","Currently, the only supported Data Source Type is “MS Access”. Add the Data Source Name and the Path of the external MDB File. "," ","Click OK"],[" ","           Default Ginger Data Source will be added to every new solution with the Name “GingerDataSource”."," ","The MDB file for the Data Source will be copied to the Data Sources Folder of the Solution in the File System."],[" ","             It is a simple and fast NoSQL database"," ","Create a new LiteDB Datasource"," ","Click on Add New Item"," ","On the Config Data Source Page:"," ","Select New -> Datasource Type – LiteDataBase -> Give a Name ->Click on OK."],[" ","After adding the Data Source to the solution you can expand the Data Source Folder to see the various Data Source options."],[" ","We have various options available to work and manipulate data in the Data Source. All the below manipulation options can be found in:"," ","Pop up Menu by doing Right Click on the Data Sources node."," ","Data Source Page Toolbar"," ","Explorer Toolbar"],[" ","There are 2 options available viz. Customized table and Key-Value Table."," ","Add Customized Table to the Data Source."," ","                      Select the Customized table option."," ","                      Enter the Table Name."," ","Refresh"," ","Refresh the data of all the Tables of the Data Source. It will discard all local changes and get the data from the Data Source File."," ","Commit all"," ","Save all Local changes of all the Tables in the Current Data Source to the Database (MDB File)."," ","Duplicate"," ","This will duplicate the selected data source, the user can give a new name to the duplicated data source."," ","Rename"," ","Rename the Data Source."," ","Delete"," ","Delete the Data Source."," ","Export and Import are covered in section - ","Export/Import to Excel"],[" "," Two types of Data Source Tables can be used to transfer Data from one Business Flow/Activity/Action to another."," ","Ginger Key-Value(Recommended)"," ","Customized"," ","                You will find one table of each type added by default after Creating a New Solution."],[" ","Ginger Key-Value Table Saves the data and In Key Name/Key-Value Pair. Each Key Name should be Unique so it can be later read by another Action. Below are columns found in the Key-Value Table:"," ","GINGER_ID- Unique ID to refer to the Row in Table. Auto Populated(Read-Only)"," ","GINGERKEY_NAME – Name of the KEY to being referred to store Data Like (CUSTOMER_ID, CUST_NAME, etc.)"," ","GINGERKEY_VALUE – Value if the Key. Can be read/write from the Ginger Actions."," ","GINGER_LAST_UPDATE_DATETIME- The last time when the Row was updated. Auto Populated(Read-Only)"," ","GINGER_LAST_UPDATED_BY- NTNET of the User who updated the Value of the Row. Auto Populated(Read-Only)"],[" ","If you want to use Data in the customized format, you can use the Customized Data Table Type. Below are the default columns added while creating a new Customized Table."," ","GINGER_ID - Unique ID to refer to the Row in Table. Auto Populated(Read-Only)"," ","GINGER_USED – This can be used to check if the Current Row’s Data is used or Note. We will also have the option in the Value Expression to Mark Row as Done after reading/writing data to the row. It will set value Done in the GINGER_USED Column"," ","GINGER_LAST_UPDATE_DATETIME- The last time when the Row was updated. Auto Populated(Read-Only)"," ","GINGER_LAST_UPDATED_BY- NTNET of the User who updated the Value of the Row. Auto Populated(Read-Only)"],[" ","After adding the Data Source to the solution you can expand the Data Source Folder to see the various Data Source options."],[" ","We have various options available to work and manipulate data in the Data Source. All the below manipulation options can be found in:"," ","Data Source Table Menu."," ","Data Source Table Page Toolbar"," ","Explorer Toolbar"],[" ","Save Al Local changes of the Table to Database (MDB File)."],[" ","Rename the Table."],[" ","Refresh the Table data in the Data Source Table Data Grid. It will discard all local changes."],[" ","Create a copy of the Current Table. (Not available in Data Source Table Page toolbar)"],[" ","Delete Current Table."],[" ","Add a new Column to the table. It will save all local changes. (Only available in Data Source Table Page toolbar)"],[" ","Remove Column from the table. (Only available in Data Source Table Page toolbar)"," ","Export and Import are covered in section - ","Export/Import to Excel"],[" ","Data Source Config Page will be used to read/write from Data Source Tables. We can open Data Source Config Page from below:"," ","Value Expression Editor Page (For Input Data)"," ","Output Grid (To Save Data in Data Table)"],[" ","Value Expression can be now used to read from Data Source and use it as input data for Action. You will find the Data Source Hierarchy in Value Expression Component Tree."," ","You can double-click on the Data Source Table Item to open Data Source Config Page."],[" ","If you want to store the output of the Action to Data Source Table. You can do that by clicking on the Store to Data source button from the output grid as shown below."," ","It will open the Data Source Config Page."],[" ","Data Source Config Page will allow us to point to a cell in the table which should to which user want to read/write the data in Data Table."," ","                   Data Source Config Page is divided into below 4 Sections:"],[" ","This section contains the list of the available Data Sources of the Solution and its corresponding Data Table Names."," ","You can always change the selected Data Source Name/Table Name in the Data Source configuration page to choose where you want to read/write the data."],[" ","This section will show the actual table data after expanding the section. It will need to be reloaded after you change the data Source Table from the Data Source Table Details Section."," ","After Expanding the Table data Section you will see the Table Data as below."],[" ","Table Cell Identifier section will allow us to point to a particular cell in the Data table where we want to read/write the data."," ","The Configurations options will be different for different Table Types. We will discuss both configurations below."],[" ","To identify the cell where you want to read/write the data, you just need to select the Key Name from Key Name Combo list in the Table Cell Identifier Section."],[" ","There are multiple identifiers available to identify the cell from the customized Table."," ","By Selected Cell- This option will be enabled only after loading the Table data section."," ","          You can just select the cell from the table data section to identify the cell."," ","By Query – If you want to identify the cell by writing a query."," ","      There are readymade Operators given to create the query."," ","Customized – You can identify the cell by providing the Column and Row identifier."," ","Column – You can choose the name of the column from the Column Drop Down."," ","Row – We have 3 options available to specify the row."," ","Row Number – Specify the row number in the row number drop down as shown below."," ","Next Available Row – It will select the first row where Ginger_Used Column value is Null."," ","      P.S. - This option will be shown only in a customized table having a GINGER_USED column."," ","Where – You can provide the condition to identify the row from the Table."],[" ","You can check this check box if you want to update the GINGER_USED column as “Done” after reading/writing data from the Table Cell."," ","P.S. - This option will be shown only in a customized table having a GINGER_USED column."],[" ","This section is a read-only Auto Populated section. It will show the Value expression which is getting generated by selecting the different options to identify the cell."," ","The Value Expression created will be using the below keywords:"," ","DS Name – Name of the Data Source"," ","DST – Name of the Data Source Table"," ","KEY – Key Name from the Ginger KEY Name Table"," ","MASD – Y/N, if you want to mark the row as Done/Not."," ","IDEN – Identifier"," ","Query – Identify by Query"," ","Cust – If your identifier is Customized"," ","QUERY – The query by which cell will be executed to get the Table Cell."," ","ICOLVAL – The Value of the column Name for Customized Identifier."," ","GROW – Row Identifier."," ","RowNum – To identify Row by Row Number"," ","NxtAvail – To get Next Available Row"," ","Where – To get Row with the Condition"," ","ROWNUM – Value of the Row Number."," ","WCOLVAL – Value of Column in where clause."," ","WOPR – Operation for where Column value."," ","WROWVAL – Value of the column cell in where clause."],[" "," Right-click on the Data Source and select the option to Export to Excel as shown below."," "," Select the File name and click on the ok button. (User needs to first create an empty Excel file to use it)."," ","The Excel file will have a separate sheet for every table with the Table name as the sheet name."],[" ","Select the Export to Excel option by right-clicking on the desired table."," ","Select the File and the sheet where you want to export and click on the Ok button to export the data."],[" ","Right-click on the Data Source and select the Import from Excel option"," ","In the Wizard window, click on the Next button after the Information of Data source is displayed."," ","        Then select the desired Excel file and click on the Next button."," ","Select the desired Sheet in the file"," ","When the user selects ‘Sheet as the first row as column name’ then the same column name is given to the column in the table. "," ","Field 1 etc is not added in the Table."," ","Columns without the ‘Sheet as the first row as column name’ option"," ","Columns with the ‘Sheet as the first row as column name’ option"," ","When ‘Is the Model Parameter File’ is selected then the first column of the sheet is taken as the fields of the table and the rest are considered as their values."," "," The data from the Excel file is displayed"," ","  Users can filter the desired data if required."," ","              Use the ‘Select Row(s) Where’ filed to enter the filter and view it using the ‘View Filtered Data’ button."," ","             If the column has space in it then use square brackets eg. [Parameter Name]=’ ABC’"," ","The Imported Table is given the name of the sheet in the file."],[" ","Ginger Data Source Action will be used to Get/Set/Mark Row As Done in the Data Source Table. It can be added from the General Actions tab in Add Action Window."],[" ","After loading the Edit Action Screen for Data Source Action you will need to populate the Action Type Configuration Section to:"],[" ","You can choose either of the options depending upon your requirement"," ","Get Value"," ","Set Value"," ","Mark As Done"," ","  Identify the Data Cell which needs to be manipulated."," ","  This will be done similarly to in Data Source Config Page. Please refer to that section above."],[" ","Datasource action is the same for all data sources. Except By Query option in DataSource action."," ","By Query :"," ","To run the data source action by query option, you have to write a query in LiteDB syntax."]],"4":[[" ","Add New Table"],[" ","Commit"],[" ","Rename"],[" ","Refresh"],[" ","Duplicate"],[" ","Delete"],[" ","Add Column"],[" ","Remove Column"],[" ","Data Source Table Details Section"],[" ","Table Data Section"],[" ","          Table Cell Identifier Section"],[" ","               Value Expression"],[" ","             Choose the Action to want to perform"],[" ","           Lite DB Action Configuration"]],"5":[[" ","Table Cell Identifier – Ginger Key-Value Table"],[" ","  Table Cell Identifier – Customized Table"],[" ","Mark Row As Done"]],"id":"117"})
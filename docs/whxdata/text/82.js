rh._.exports({"0":[[" ","Excel Action"]],"1":[[" ","\n      ‎"," ","Introduction "],[" ","How to Configure Action"]],"2":[[" "," Excel Action"," ","Contents"," ","Introduction"," ","How to Configure Action"," ","Pre-requisite"," ","Action Operation"],[" ","Excel Action is used to read/write data in an Excel file. The data in excel can be used during the creation of a customer where a lot of details are entered in the form like the name, address, DOB, etc."],[" ","               Excel file is created having Columns and data in it."," ","              The column name should be given in braces eg. [customer type]"],[" ","Read Excel"," ","1) Double click on the Business flow. Click on the ‘+’ icon"," ","            2) On the Action Library screen go to the ‘General Actions’ tab and double click on the ‘Excel Action’"," ","3) Excel Action will be added under the Activity as shown below"," ","4) Double click on it to see the below screen and then go to the ‘Operation Settings’ tab. Enter the condition in"," ","the Value field"," ","5) Select the file using the Browse button. From the ‘Sheet Name’ drop-down, select the desired sheet."," ","Clicking on the ‘View All Data’ button will display the contents in the sheet."," ","If a user wants to use a filter whose name has space in it, then use the below format: -"," ","The name should be in square brackets: -"," ","[Paramter Name] =’<ID>’"," ","6) Enter condition in ‘Select Row(s) Where:’ field E.g., param11=10 or param12=12"," ","‘Primary Key column:’ should be given."," ","Open the Value Expression Editor (button next to Select row(s) Where) as shown to frame a needed condition using the various expression components."," ","Once done click on OK."," ","Now click on the ‘View Filtered Data’ button will give the result obtained from the ‘Select Row(s) Where:’ condition."," ","7) Run Action will read the content as per the given condition."," ","             8) Clicking on the ‘Ok’ button of the above screen will add the Action"," ","Write Excel"," ","To create a Write action on excel, it is first required to Read the Excel. Please follow the Read Excel steps given above."," ","Select the Excel Action as ‘Write Data’ from the dropdown."," ","The ‘Data to Write:’ is used to write the data. Multiple columns can be written using “,” separator."," ","If the excel column’s name has space in it then use square brackets E.g. [customer name] =’Daniel’."," "," The Run Action will write the data in excel which can also be viewed using the ‘View Filtered Data’ button"]],"3":[[" ","Pre-requisite"],[" ","Action Operation"]],"id":"82"})
rh._.exports({"0":[["Excel Action"]],"1":[["\n  ","\n    "," ","\n    "," Excel Action","\n    "," ","\n    "," ","\n    ","Contents","\n    ","Introduction","\n    ","How to Configure Action","\n    ","\n      ","Pre-requisite","\n      ","Action Operation","\n    ","\n    "," ","\n    "],["\n    "],["\n    ","Excel Action is used to read/write data in an Excel file. The data in excel can be used during the creation of a customer where a lot of details are entered in the form like the name, address, DOB, etc.","\n    ","\n    ","\n    "],["\n    "],["\n    ","               Excel file is created having Columns and data in it.","\n    ","              The column name should be given in braces eg. [customer type]","\n    ","\n    ","\n    "],["\n    ","Read Excel","\n    ","\n    ","1) Double click on the Business flow. Click on the ‘+’ icon","\n    ","\n    ","\n    ","\n    ","            2) On the Action Library screen go to the ‘General Actions’ tab and double click on the ‘Excel Action’","\n    ","            ","\n    ","\n    ","3) Excel Action will be added under the Activity as shown below","\n    ","\n    ","\n    ","\n    ","4) Double click on it to see the below screen and then go to the ‘Operation Settings’ tab. Enter the condition in","\n    ","the Value field","\n    ","\n    ","\n    ","5) Select the file using the Browse button. From the ‘Sheet Name’ drop-down, select the desired sheet.","\n    ","Clicking on the ‘View All Data’ button will display the contents in the sheet.","\n    ","\n    ","\n    ","\n    ","If a user wants to use a filter whose name has space in it, then use the below format: -","\n    ","\n    ","The name should be in square brackets: -","\n    ","[Paramter Name] =’<ID>’","\n    ","\n    ","\n    ","\n    ","6) Enter condition in ‘Select Row(s) Where:’ field E.g., param11=10 or param12=12","\n    ","‘Primary Key column:’ should be given.","\n    ","Open the Value Expression Editor (button next to Select row(s) Where) as shown to frame a needed condition using the various expression components.","\n    ","Once done click on OK.","\n    ","\n    ","\n    ","\n    ","Now click on the ‘View Filtered Data’ button will give the result obtained from the ‘Select Row(s) Where:’ condition.","\n    ","\n    ","\n    ","\n    ","7) Run Action will read the content as per the given condition.","\n    ","\n    ","             8) Clicking on the ‘Ok’ button of the above screen will add the Action","\n    ","\n    ","\n    ","\n    ","      ","Write Excel","\n    ","\n    ","To create a Write action on excel, it is first required to Read the Excel. Please follow the Read Excel steps given above.","\n    ","\n    ","Select the Excel Action as ‘Write Data’ from the dropdown.","\n    ","\n    ","\n    ","\n    ","The ‘Data to Write:’ is used to write the data. Multiple columns can be written using “,” separator.","\n    ","\n    ","If the excel column’s name has space in it then use square brackets E.g. [customer name] =’Daniel’.","\n    ","\n    ","\n    ","\n    ","\n    "," The Run Action will write the data in excel which can also be viewed using the ‘View Filtered Data’ button","\n    ","\n    ","\n    "," ","\n  ","\n\n"]],"2":[["\n      ‎"],["Introduction "],["How to Configure Action"]],"3":[["Pre-requisite"],["Action Operation"]],"id":"67"})
rh._.exports({"0":[[" ","Value Expression Types Overview"]],"1":[[" ","\n      ‎"," ","Data"," ","Variables"," ","Global Variables"],[" ","Business Flow Variables"],[" ","Environments"],[" ","Models Global Parameters"],[" ","Data Sources"],[" ","Machine Details"],[" ","Date Time Functions"],[" ","Functions"],[" ","Data Validation"," ","Math"],[" ","String"],[" ","Output Values"],[" ","Data Operations"," ","List"],[" ","Regular Expression"],[" ","Math"],[" ","General Functions"],[" ","Flow Details"," ","Solution"],[" ","Environment"],[" ","Runset"],[" ","Runner"],[" ","Business Flow"],[" ","Activity Group"],[" ","Activity"],[" ","Action"]],"2":[[" ","                 Value Expression Types Overview"," ","Contents"," ","Data"," ","Variables"," ","Global Variables"," ","Business Flow Variables"," ","Activity Variables"," ","Environments"," ","Models Global Parameters"," ","Data Sources"," ","Machine Details"," ","Date Time Functions"," ","Functions"," ","Data Validation"," ","Math"," ","String"," ","Output Values"," ","Data Operations"," ","List"," ","Regular Expression"," ","String"," ","Math"," ","General Functions"," ","Flow Details"," ","Solution"," ","Environment"," ","Runset"," ","Runner"," ","Business Flow"," ","Activity Group"," ","Activity"," ","Action"],[" ","           The Global String Variables from the Resources tab are displayed in this section"," ","As shown below, double-click on the variable to add it to the editor area."," ","Clicking on the Calculate Expression button displays the current value of the variable in the Value Calculated section."],[" ","The Business Flow Variables can be added from the section shown below and these are displayed in the Value Expression section."," ","             As shown below, double-click on the variable to add it to the editor area."," ","            Click on the Calculate Expression button to display the current value of the variable."," ","Activity Variables"," ","The Activity Variables can be added from the section shown below and these are displayed in the Value Expression section."," ","            As shown below, double-click on the variable to add it to the editor area."," ","             Click on the Calculate Expression button to display the current value of the variable."],[" ","The environments and the parameters in it can also be used in the Value Expression."," ","To view this section, go to the Resources->Environments tab."," ","We can add multiple applications by clicking on the ‘+’ button as shown below."," ","             Add others details in the application."," ","           Select desired application to add parameters."," ","Double click on the Environments to expand and add the desired parameter to the editor area by double-clicking on it."],[" ","           These parameters come from the Models Global Parameters section under the Resources-> Applications Models area."," ","          Click on Add Items to add the parameters and enter details."," ","          Double click on the Models Global Parameters to expand and add the desired parameter to the editor area by double-clicking on it."],[" ","Expand the Data Sources by double-clicking on it then click on the DefaultDataSources then you can see the tables in it."," ","MyKeyValueDataTable"," ","To add value to the table, go to the Resources --> Data Sources."," ","Select MyKeyValueDataTable from Data Sources and click on the ‘+’ button to add table data."," ","Enter details in the table."," ","In Value Expression editor, select Data Sources --> DefaultDataSources --> Double click on the MyKeyValuedataTable."," ","The Key table will be displayed for selection."," ","The Table data displays all the values in the table so that the user does not have to go to the Data source to see the Table Data."," ","Select Key Name from the drop-down to select the value."," ","Once the Key name is selected, the user can click the ‘Calculate Expression’ as shown below to check the value in it."," ","MyCustomizedDataTable"," ","To add value to the table, go to the Resources --> Data Sources."," ","Select MyCustomizedDataTable from Data Sources and click on the ‘+’ button to add table data."," ","Enter details in the table."," ","In Value Expression Editor, select Data Sources --> DefaultDataSources --> Double click on the MyCustomizedDataTable."," ","The Key table will be displayed for selection."," ","The Table Data displays the content in the table."," ","As shown below, Table Cell Identifier can be ‘By Selected Cell’, ‘By Query’ or ‘Customized’"," ","For customized, the user can select the column name from the drop-down."," ","The row can be selected by ‘Row Number’, ‘Next Available Row’ (this is mainly used to add values in the table)"," ","Or the Where clause."," ","In the Where Clause, the user can add the desired Column, Operator, and Value. Click on the OK button."," ","Click on the ‘Calculate Expression’ button to give the value that will be evaluated and used when the Action will be run."],[" ","Current Username"," ","This fetches the username that is currently login in the Ginger. This function is available under Machine Details in Expression. On clicking the ‘Calculate Expression’ button as shown by the arrow below, displays the username in the ‘Calculated Value Expression:’ field."," ","Current Machine Name"," ","This displays the current machine name. On clicking the ‘Calculate Expression’ button as shown by the arrow below, displays the username in the ‘Calculated Value Expression:’ field."],[" ","Get Current Time"," ","             It gives the current date and time of the system."," ","Get Current TimeStamp"," ","           It gives the current date and time of the system in Unix format."," ","Tomorrow"," "," It gives tomorrow’s date and time from the system."," ","‘Calculate Expression’ button as shown by the arrow below, displays tomorrow’s date and time in ‘Calculated Value Expression:’ which is used during execution."," ","Current Time Hour"," ","             It gives the current hour of the time from the system."," ","‘Calculate Expression’ button as shown by the arrow below, displays the current hour in ‘Calculated Value Expression:’ which is used during execution."," ","Current Time Minutes"," ","             It gives the current minutes of the time from the system."," ","‘Calculate Expression’ button as shown by the arrow below, displays the current minutes up to 5 decimals in ‘Calculated Value Expression:’ which is used during execution."," ","Current Time Seconds"," ","            It gives the current seconds of the time from the system."," ","‘Calculate Expression’ button as shown by the arrow below, displays the current seconds in ‘Calculated Value Expression:’ which is used during execution."," ","Current Time Hour (0# format)"," ","            It gives the current Hour of the time in the standard format."," ","‘Calculate Expression’ button as shown by the arrow below, displays the current hours in ‘Calculated Value Expression:’ which is used during execution."," ","Current Time Minute (0# format)"," ","             It gives the current Minutes of the time in the standard format."," ","‘Calculate Expression’ button as shown by the arrow below, displays the current minutes in ‘Calculated Value Expression:’ which is used during execution."," ","Current Time Second (0# format)"," ","              It gives the current Seconds of the time in the standard format."," ","‘Calculate Expression’ button as shown by the arrow below, displays the current second in ‘Calculated Value Expression:’ which is used during execution."," ","Current Month (0# format)"," ","              It gives the current Month from the system in the standard format."," ","‘Calculate Expression’ button as shown by the arrow below, displays the current month in ‘Calculated Value Expression:’ which is used during execution."," ","Current Day (0# format)"," ","             It gives the current Day from the system in the standard format."," ","‘Calculate Expression’ button as shown by the arrow below, displays the current day in ‘Calculated Value Expression:’ which is used during execution."," ","Current Year (#### format)"," ","             It gives the current Year in YYYY format."," ","‘Calculate Expression’ button as shown by the arrow below, displays the current year in ‘Calculated Value Expression:’ which is used during execution."," ","Current Year (## format)"," ","             It gives the current Year in YY format."," ","‘Calculate Expression’ button as shown by the arrow below, displays the current year in ‘Calculated Value Expression:’ which is used during execution."," ","Current Month Date + 3 Days"," ","It adds 3 days to the current date in DDMMYYYY format."," ","‘Calculate Expression’ button as shown by the arrow below, displays the calculated value in ‘Calculated Value Expression:’ which is used during execution."," ","Current Date -1 month"," ","             It gives the date in the previous month with respect to the current date in DDMMYYYY format."," ","‘Calculate Expression’ button as shown by the arrow below, displays the calculated value in ‘Calculated Value Expression:’ which is used during execution."," ","Current Month -1 (MM format)"," ","             It gives the date in the previous month for the current date in the standard format."," ","‘Calculate Expression’ button as shown by the arrow below, displays the calculated value in ‘Calculated Value Expression:’ which is used during execution."," ","Current Day of Week (Name)"," ","            It gives the current day by name."," ","‘Calculate Expression’ button as shown by the arrow below, displays the day in ‘Calculated Value Expression:’ which is used during execution."," ","Current Unix timestamp"," ","             It gives the current date and time of the system in Unix format."," ","Current UTC time stamp"," ","            It gives the current date and time of the system in UTC format."],[" ","Get ","GUID"," ","              It gives GUID values that can be used during runtime."],[" ","Comparison"," ","             This expression is used to compare the two values. If the one value matches with another string, then it shows true otherwise calculated value "," "," will be false."," ","AND"," ","            This expression is used to determine all the conditions in the expression are True. If both the conditions are true, then it shows true otherwise calculated value "," "," will be false."," "," OR"," ","              This expression is used to determine if any conditions in the expression are True. If anyone the condition is true, then it shows true otherwise calculated value                 will be false."],[" ","     Comparison"," ","           This expression is used to compare the two strings. If the one string matches with another string, then it shows true otherwise calculated value will be false."," ","Contains"," ","This expression is used to give a Text Contains value as a True or False. If the Contains value matches with the expression, then it shows true otherwise calculated value will be false."," ","Start With"," ","This expression is used to give a Start With value as a True or False. If the Start With value matches with the start value of the expression, then it shows true otherwise calculated value will be false."," ","Ends"," With"," ","           This expression is used to give an Ends With value as a True or False. If the Ends With value matches with the end value of the expression, then it shows true     "," ","          otherwise calculated value will be false."," ","AND"," ","  This expression is used to determine all the conditions in the string are True."," ","  In the below example expression will return True if “b” is present in the given string “ABC” AND if 7 is smaller than 10."," ","OR"," ","This expression is used to determine if any conditions in the string are True."," ","In the below example expression will return True if “b” is present in the given string “ABC” OR if 7 is smaller than 10."],[" ","These are mostly used in the Output Values tab of Action."," ","The Action is passed or failed depending on the condition that is passed or failed on execution."," ","Actual Contains String ‘ABC’"," ","This expression is used to give a String Contains value as a True or False. If the expression string has a contains string value, then the Calculated Value will be true otherwise it will be false."," ","In the below example, the expression string is \"SDGFABCHGJ\" and Contains string is “ABC.” The expression string contains “ABC” in it, so the calculated value is true."," ","Actual start with ‘ABC’"," ","This expression is used to check a string starts with the given StartsWith string. If the expression string starts with the given substring, then the Calculated Value is true otherwise it will be false."," ","In the below example, the expression string is \"ABCDEFGH\" and the StartsWith string is “ABC.” The expression string starts with “ABC”, so the calculated value is true."," ","The actual String Length is 5 chars"," ","This expression is used to check a string length. If the expression string word length matches with the given length value, then the Calculated Value is true otherwise it will be false."," ","In the below example, the expression string is \"abcde\" and the length value is “5.” Expression string length matches with the given length, so the calculated value is true."," ","Actual SubString from char in position 2 length 3 is ‘ABC’"," ","This expression is used to check the character position and length of the string. If in the expression string, character positions and length match with the given string value, then the Calculated Value is true otherwise it will be false."," ","In the below example, the expression string is \" agABCghjjbv \" Position of the character is 2 and the length is 3. The given string is “ABC.” Expression string position and length matches with the given string, so the calculated value is true."," ","Actual to Upper Case = ‘ABC’"," ","This expression is used to convert a given string in the Upper Case."],[" ","Choose a val from list"," ","This expression is used to choose a value from the list based upon the index."," ","Concatenate list with delimiter"," ","This expression is used to concatenate the list with the delimiter."],[" ","Extract Initial Digits"," ","It helps to extract initial digits from a string of digits. Given below {2} is the desired number of initial digits. It will extract the initial 2 digits from the string."," ","‘Calculate Expression’ button as shown by the arrow below, displays the digits in ‘Calculated Value Expression:’ which is used during execution."," ","Extract Last Digits"," ","It helps to extract the last digits from a string of digits. Given below {2} is the desired number of last digits. It will extract the last 2 digits from the string."," ","‘Calculate Expression’ button as shown by the arrow below, displays the digits in ‘Calculated Value Expression:’ which is used during execution."," ","Extract Number From Text"," ","It helps to extract numbers from a string."," ","‘Calculate Expression’ button as shown by the arrow below, displays the digits in ‘Calculated Value Expression:’ which is used during execution."," ","Remove Characters From Numbers"," ","It helps to remove characters from a string."," "," ‘Calculate Expression’ button as shown by the arrow below, displays the digits in ‘Calculated  Value Expression:’ which is used during execution."," ","String"," ","These functions are ready to use Data Validation and Data Operations functions. Below is the list and its usages: -"," ","Replace Text"," ","A string “abc” get replaced with either a variable or some text to get the desired result."," ","Get String Length"," ","This expression is used to calculate the length of the string. An Expression “Abc” has 3 characters, so it displays 3 in the Calculate Value Expression field."," "," Get Substring"," ","   Get Substring will extract the characters from a string, between two specified indices, and returns the new substring."," ","  An expression contains “Abcdefgh” string. Substring (1,3) will return “bcd” from starting index 1 (base 0) till index 3.          "," "," Trim whitespace"," ","         It discards the whitespace that occurs in the given string. The string can be either a variable or a text field copied from some page."," ","         E.g., the below variable contains spaces before the string starts."," ","       The spaces can be removed using the Trim function as shown below."," ","       Double click on the “Trim whitespace” function."," ","       Replace the “hello” in the displayed expression {CS Exp=@\"hel lo\".Replace(@\" \",@\"\")} with the variable as shown in the screenshot."," ","       On clicking the ‘Calculate Expression’ button as shown by the arrow below, displays the value in the ‘Value Calculated:’ field which is used at run time."," "," Trim whitespace & Line breaks"," "," It discards the whitespace and line breaks that occur in the given string. A string can be either a variable or a text field copied from some page."," ","Get Inner String Index"," ","It gives the number at which a given string begins in the main string."],[" ","Add"," ","It helps to use mathematical calculation."," ","‘Calculate Expression’ button as shown by the arrow below, displays the calculated value in ‘Calculated Value Expression:’ which is used during execution."],[" ","           Following are the general functions."," ","Generate HashCode"," ","This expression is used to generate hash code for the given string","."," ","Get Hashed Data Byte string"," ","This expression is used to generate hashed data byte string for the given string."," ","Encrypt to Base 64"," ","This expression is used to encrypt the given string to base 64."," ","Decrypt to Base 64"," ","This expression is used to decrypt the encrypted string."," ","Replace special chars by another"," ","This expression is used to replace a special character with another."," ","In the following example “(double inverted comma) from the string will replace by _."],[" ","Solution Name"," ","This expression is used to get the solution name."," ","Update Value Expression:"," ","Update VE is used to update the field in the expression."," ","Click on the field name as shown by the arrow below then the Alternative Field section will get open."," ","Users can select another field from the Select Alternative Field section and click on the Update VE button."," ","The field name of the expression gets updated with the selected field. Click on the ‘Calculate Expression’ button to display the calculated value."],[" ","Environment Name"," ","This expression is used to get the current environment name."],[" ","Runset Name"," ","This expression is used to get the current runset name. This expression will work only from the runner."],[" ","Runner Name"," ","This expression is used to get the current runner's name. This expression will work only from the runner."],[" ","Business Flow Name"," ","This expression is used to get the current Business Flow name."," ","Previous Business Flow Name"," ","This expression is used to get the current runner's name. This expression will work only from the runner."," ","Previous Business Flow Status"," ","This expression is used to get previous business flow status. This expression will work only from the runner."," ","Last Failed Business Flow Status"," ","This expression is used to give the last failed business flow name. This expression will work only from the runner."],[" ","Activity Group Name"," ","This expression is used to display the current activity group name."," ","A New Group is created with Login Error handler activity to handle the error of the other activity."," ","Error Handler Origin Activity Group Name"," ","This expression is used to give error handler origin activity group name. This expression will work only if the error handler activity is created."],[" ","Activity Name"," ","This expression is used to display the current activity name."," ","Previous Activity Status"," ","This expression is used to display previous activity status."," ","Previous Activity Duration"," ","This expression is used to display previous activity duration."," ","Last Failed Activity Name"," ","This expression is used to display the last failed activity name."," ","Error Handler Origin Activity Name"," ","This expression is used to give the error handler origin activity name. This expression will work only if the error handler activity is created."],[" ","Action Name"," ","This expression is used to get the action name."," ","Previous Action Name"," ","This expression is used to get the previous action name."," ","Previous Action Extra Info"," ","This expression is used to get previous action details."," ","Last Failed Action Name"," ","This expression is used to get the last failed action name."," ","Error Handler Origin Action Name"," ","This expression is used to give the error handler origin action name. This expression will work only if the error handler activity is created."," ","Error Handler Origin Action Error"," ","This expression is used to give error handler origin action error. This expression will work only if the error handler activity is created."," ","Error Handler Origin Action Error Extra Info"," ","This expression is used to give error handler origin action error extra info. This expression will work only if the error handler activity is created."]],"id":"122"})
rh._.exports({"0":[["Value Expression Types Overview"]],"1":[["\n  ","\n    "," ","\n    ","Value Expression Types Overview","\n    "," ","\n    "," ","\n    ","Contents","\n    ","1. Data","\n    ","1.1. Variables","\n    ","1.1.1. Global Variables","\n    ","1.1.2. Business Flow Variables","\n    ","1.1.3 Activity Variables","\n    ","1.2. Environments","\n    ","1.3. Models Global Parameters","\n    ","1.4. Data Sources","\n    ","1.5. Machine Details","\n    ","1.6. Date Time Functions","\n    ","1.7. Functions","\n    ","2. Data Validation","\n    ","2.1. Math","\n    ","2.2. String","\n    ","2.3. Output Values","\n    ","3. Data Operations","\n    ","3.1. List","\n    ","3.2. Regular Expression","\n    ","3.3. String","\n    ","3.4. Math","\n    ","3.5. General Functions","\n    ","4. Flow Details","\n    ","4.1. Solution","\n    ","4.2. Environment","\n    ","4.3. Runset","\n    ","4.4. Runner","\n    ","4.5. Business Flow","\n    ","4.6. Activity Group","\n    ","4.7. Activity","\n    ","4.8. Action","\n    "," ","\n    "],["\n    "],["\n    "],["\n    "],["\n    ","The Global String Variables from the Resources tab are displayed in this section","\n    ","\n    "," ","\n    "," ","\n    ","As shown below, double-click on the variable to add it to the editor area.","\n    ","Clicking on the Calculate Expression button displays the current value of the variable in the Value Calculated section.","\n    ","\n    "],["\n    ","The Business Flow Variables can be added from the section shown below and these are displayed in the Value Expression section.","\n    ","\n    "," ","\n    ","As shown below, double-click on the variable to add it to the editor area.","\n    ","Click on the Calculate Expression button to display the current value of the variable.","\n    ","\n    "," ","\n    "," ","\n    ","Activity Variables","\n    ","The Activity Variables can be added from the section shown below and these are displayed in the Value Expression section.","\n    ","\n    "," ","\n    ","As shown below, double-click on the variable to add it to the editor area.","\n    ","Click on the Calculate Expression button to display the current value of the variable.","\n    ","\n    "," ","\n    "," ","\n    "],["\n    "," ","\n    ","The environments and the parameters in it can also be used in the Value Expression.","\n    ","To view this section, go to the Resources->Environments tab.","\n    "," ","\n    ","We can add multiple applications by clicking on the ‘+’ button as shown below.","\n    ","\n    ","Add others details in the application.","\n    ","\n    "," ","\n    ","Select desired application to add parameters.","\n    ","\n    "," ","\n    "," ","\n    ","Double click on the Environments to expand and add the desired parameter to the editor area by double-clicking on it.","\n    ","\n    "," ","\n    "," ","\n    "],["\n    ","These parameters come from the Models Global Parameters section under the Resources-> Applications Models area.","\n    ","\n    "," ","\n    ","Click on Add Items to add the parameters and enter details.","\n    ","\n    "," ","\n    ","Double click on the Models Global Parameters to expand and add the desired parameter to the editor area by double-clicking on it.","\n    ","\n    "," ","\n    "," ","\n    "],["\n    ","Expand the Data Sources by double-clicking on it then click on the DefaultDataSources then you can see the tables in it.","\n    ","\n    "," ","\n    "," ","\n    ","MyKeyValueDataTable","\n    "," ","\n    ","To add value to the table, go to the Resources --> Data Sources.","\n    ","Select MyKeyValueDataTable from Data Sources and click on the ‘+’ button to add table data.","\n    "," ","\n    ","\n    ","Enter details in the table.","\n    ","\n    "," ","\n    ","In Value Expression editor, select Data Sources --> DefaultDataSources --> Double click on the MyKeyValuedataTable.","\n    ","The Key table will be displayed for selection.","\n    "," ","\n    ","The Table data displays all the values in the table so that the user does not have to go to the Data source to see the Table Data.","\n    ","Select Key Name from the drop-down to select the value.","\n    ","\n    "," ","\n    "," ","\n    "," ","\n    ","Once the Key name is selected, the user can click the ‘Calculate Expression’ as shown below to check the value in it.","\n    ","\n    "," ","\n    ","MyCustomizedDataTable","\n    "," ","\n    ","To add value to the table, go to the Resources --> Data Sources.","\n    ","Select MyCustomizedDataTable from Data Sources and click on the ‘+’ button to add table data.","\n    "," ","\n    ","\n    ","Enter details in the table.","\n    ","\n    ","In Value Expression Editor, select Data Sources --> DefaultDataSources --> Double click on the MyCustomizedDataTable.","\n    ","The Key table will be displayed for selection.","\n    "," ","\n    ","The Table Data displays the content in the table.","\n    ","As shown below, Table Cell Identifier can be ‘By Selected Cell’, ‘By Query’ or ‘Customized’","\n    "," ","\n    ","For customized, the user can select the column name from the drop-down.","\n    ","The row can be selected by ‘Row Number’, ‘Next Available Row’ (this is mainly used to add values in the table)","\n    ","Or the Where clause.","\n    ","\n    "," ","\n    "," ","\n    ","In the Where Clause, the user can add the desired Column, Operator, and Value. Click on the OK button.","\n    ","\n    "," ","\n    "," ","\n    ","Click on the ‘Calculate Expression’ button to give the value that will be evaluated and used when the Action will be run.","\n    ","\n    "," ","\n    "],["\n    ","Current Username","\n    ","This fetches the username that is currently login in the Ginger. This function is available under Machine Details in Expression. On clicking the ‘Calculate Expression’ button as shown by the arrow below, displays the username in the ‘Calculated Value Expression:’ field.","\n    ","\n    "," ","\n    ","Current Machine Name","\n    ","This displays the current machine name. On clicking the ‘Calculate Expression’ button as shown by the arrow below, displays the username in the ‘Calculated Value Expression:’ field.","\n    ","\n    "," ","\n    "],["\n    ","Get Current Time","\n    ","It gives the current date and time of the system.","\n    ","\n    "," ","\n    "," ","\n    ","Get Current TimeStamp","\n    ","It gives the current date and time of the system in Unix format.","\n    ","\n    "," ","\n    ","Tomorrow","\n    ","It gives tomorrow’s date and time from the system.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays tomorrow’s date and time in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    "," ","\n    ","Current Time Hour","\n    ","It gives the current hour of the time from the system.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the current hour in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    "," ","\n    ","Current Time Minutes","\n    ","It gives the current minutes of the time from the system.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the current minutes up to 5 decimals in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    ","Current Time Seconds","\n    ","It gives the current seconds of the time from the system.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the current seconds in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    "," ","\n    ","Current Time Hour (0# format)","\n    ","It gives the current Hour of the time in the standard format.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the current hours in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    "," ","\n    "," ","\n    ","Current Time Minute (0# format)","\n    ","It gives the current Minutes of the time in the standard format.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the current minutes in ‘Calculated Value Expression:’ which is used during execution.","\n    "," ","\n    ","\n    "," ","\n    "," ","\n    "," ","\n    ","Current Time Second (0# format)","\n    ","It gives the current Seconds of the time in the standard format.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the current second in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    "," ","\n    "," ","\n    ","Current Month (0# format)","\n    ","It gives the current Month from the system in the standard format.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the current month in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    "," ","\n    ","Current Day (0# format)","\n    ","It gives the current Day from the system in the standard format.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the current day in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    "," ","\n    "," ","\n    ","Current Year (#### format)","\n    ","It gives the current Year in YYYY format.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the current year in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    "," ","\n    ","Current Year (## format)","\n    ","It gives the current Year in YY format.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the current year in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    "," ","\n    ","Current Month Date + 3 Days","\n    ","It adds 3 days to the current date in DDMMYYYY format.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the calculated value in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    "," ","\n    "," ","\n    ","Current Date -1 month","\n    ","It gives the date in the previous month with respect to the current date in DDMMYYYY format.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the calculated value in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    ","Current Month -1 (MM format)","\n    ","It gives the date in the previous month for the current date in the standard format.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the calculated value in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    ","Current Day of Week (Name)","\n    ","It gives the current day by name.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the day in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    ","Current Unix timestamp","\n    ","It gives the current date and time of the system in Unix format.","\n    ","\n    "," ","\n    ","Current UTC time stamp","\n    ","It gives the current date and time of the system in UTC format.","\n    ","\n    "," ","\n    "],["\n    ","Get ","GUID","\n    ","It gives GUID values that can be used during runtime.","\n    ","\n    "," ","\n    "],["\n    "],["\n    ","Comparison","\n    ","This expression is used to compare the two values. If the one value matches with another string, then it shows true otherwise calculated value will be false.","\n    ","\n    "," ","\n    ","AND","\n    ","This expression is used to determine all the conditions in the expression are True. If both the conditions are true, then it shows true otherwise calculated value will be false.","\n    "," ","\n    ","\n    "," ","\n    ","OR","\n    ","This expression is used to determine if any conditions in the expression are True. If anyone the condition is true, then it shows true otherwise calculated value will be false.","\n    "," ","\n    ","\n    "," ","\n    "," ","\n    "],["\n    ","Comparison","\n    ","This expression is used to compare the two strings. If the one string matches with another string, then it shows true otherwise calculated value will be false.","\n    ","\n    "," ","\n    ","Contains","\n    ","This expression is used to give a Text Contains value as a True or False. If the Contains value matches with the expression, then it shows true otherwise calculated value will be false. ","\n    "," ","\n    "," ","\n    ","Start With","\n    ","This expression is used to give a Start With value as a True or False. If the Start With value matches with the start value of the expression, then it shows true otherwise calculated value will be false.","\n    ","\n    "," ","\n    "," ","\n    ","Ends"," With","\n    ","This expression is used to give an Ends With value as a True or False. If the Ends With value matches with the end value of the expression, then it shows true otherwise calculated value will be false.","\n    ","\n    "," ","\n    ","AND","\n    ","This expression is used to determine all the conditions in the string are True.","\n    ","In the below example expression will return True if “b” is present in the given string “ABC” AND if 7 is smaller than 10.","\n    ","\n    "," ","\n    ","OR","\n    ","This expression is used to determine if any conditions in the string are True.","\n    ","In the below example expression will return True if “b” is present in the given string “ABC” OR if 7 is smaller than 10.","\n    ","\n    "," ","\n    "],["\n    ","These are mostly used in the Output Values tab of Action.","\n    ","\n    "," ","\n    ","The Action is passed or failed depending on the condition that is passed or failed on execution.","\n    ","\n    "," ","\n    ","Actual Contains String ‘ABC’","\n    ","This expression is used to give a String Contains value as a True or False. If the expression string has a contains string value, then the Calculated Value will be true otherwise it will be false.","\n    ","In the below example, the expression string is \"SDGFABCHGJ\" and Contains string is “ABC.” The expression string contains “ABC” in it, so the calculated value is true.","\n    "," ","\n    ","\n    "," ","\n    ","Actual start with ‘ABC’","\n    ","This expression is used to check a string starts with the given StartsWith string. If the expression string starts with the given substring, then the Calculated Value is true otherwise it will be false.","\n    ","In the below example, the expression string is \"ABCDEFGH\" and the StartsWith string is “ABC.” The expression string starts with “ABC”, so the calculated value is true.","\n    ","\n    "," ","\n    ","The actual String Length is 5 chars","\n    ","This expression is used to check a string length. If the expression string word length matches with the given length value, then the Calculated Value is true otherwise it will be false.","\n    ","In the below example, the expression string is \"abcde\" and the length value is “5.” Expression string length matches with the given length, so the calculated value is true.","\n    ","\n    "," ","\n    ","Actual SubString from char in position 2 length 3 is ‘ABC’","\n    ","This expression is used to check the character position and length of the string. If in the expression string, character positions and length match with the given string value, then the Calculated Value is true otherwise it will be false.","\n    ","In the below example, the expression string is \" agABCghjjbv \" Position of the character is 2 and the length is 3. The given string is “ABC.” Expression string position and length matches with the given string, so the calculated value is true.","\n    ","\n    "," ","\n    ","Actual to Upper Case = ‘ABC’","\n    ","This expression is used to convert a given string in the Upper Case.","\n    ","\n    "],["\n    "],["\n    ","Choose a val from list","\n    ","This expression is used to choose a value from the list based upon the index.","\n    ","\n    "," ","\n    "," ","\n    ","Concatenate list with delimiter","\n    ","This expression is used to concatenate the list with the delimiter.","\n    ","\n    "," ","\n    "],["\n    ","Extract Initial Digits","\n    ","It helps to extract initial digits from a string of digits. Given below {2} is the desired number of initial digits. It will extract the initial 2 digits from the string.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the digits in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    "," ","\n    ","Extract Last Digits","\n    ","It helps to extract the last digits from a string of digits. Given below {2} is the desired number of last digits. It will extract the last 2 digits from the string.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the digits in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    "," ","\n    ","Extract Number From Text","\n    ","It helps to extract numbers from a string.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the digits in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    "," ","\n    "," ","\n    ","Remove Characters From Numbers","\n    ","It helps to remove characters from a string.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the digits in ‘Calculated  Value Expression:’ which is used during execution.","\n    ","\n    "," ","\n    "," ","\n    "],["\n    ","These functions are ready to use Data Validation and Data Operations functions. Below is the list and its usages: -","\n    ","Replace Text","\n    ","A string “abc” get replaced with either a variable or some text to get the desired result.","\n    ","\n    "," ","\n    ","Get String Length","\n    ","This expression is used to calculate the length of the string. An Expression “Abc” has 3 characters, so it displays 3 in the Calculate Value Expression field.","\n    "," ","\n    ","\n    "," ","\n    ","Get Substring","\n    ","Get Substring will extract the characters from a string, between two specified indices, and returns the new substring.","\n    ","An expression contains “Abcdefgh” string. Substring (1,3) will return “bcd” from starting index 1 (base 0) till index 3.      ","\n    "," ","\n    ","Trim whitespace","\n    ","It discards the whitespace that occurs in the given string. The string can be either a variable or a text field copied from some page.","\n    ","E.g., the below variable contains spaces before the string starts.","\n    ","\n    "," ","\n    ","The spaces can be removed using the Trim function as shown below.","\n    ","Double click on the “Trim whitespace” function.","\n    ","Replace the “hello” in the displayed expression {CS Exp=@\"hel lo\".Replace(@\" \",@\"\")} with the variable as shown in the screenshot.","\n    ","On clicking the ‘Calculate Expression’ button as shown by the arrow below, displays the value in the ‘Value Calculated:’ field which is used at run time.","\n    ","\n    "," ","\n    ","Trim whitespace & Line breaks","\n    ","It discards the whitespace and line breaks that occur in the given string. A string can be either a variable or a text field copied from some page.","\n    ","   ","\n    "," ","\n    ","Get Inner String Index","\n    ","It gives the number at which a given string begins in the main string.","\n    ","\n    "," ","\n    "],["\n    ","Add","\n    ","It helps to use mathematical calculation.","\n    ","‘Calculate Expression’ button as shown by the arrow below, displays the calculated value in ‘Calculated Value Expression:’ which is used during execution.","\n    ","\n    "],["\n    "],["\n    ","Following are the general functions.","\n    ","\n    "," ","\n    ","Generate HashCode","\n    ","This expression is used to generate hash code for the given string.","\n    ","\n    "," ","\n    ","Get Hashed Data Byte string","\n    ","This expression is used to generate hashed data byte string for the given string.","\n    "," ","\n    ","Encrypt to Base 64","\n    ","This expression is used to encrypt the given string to base 64.","\n    "," ","\n    ","\n    "," ","\n    ","Decrypt to Base 64","\n    ","This expression is used to decrypt the encrypted string.","\n    "," ","\n    ","\n    "," ","\n    ","Replace special chars by another","\n    ","This expression is used to replace a special character with another.","\n    ","In the following example “(double inverted comma) from the string will replace by _.","\n    ","\n    "," ","\n    "],["\n    "],["\n    ","Solution Name","\n    ","This expression is used to get the solution name.","\n    "," ","\n    ","\n    "," ","\n    ","Update Value Expression:","\n    ","Update VE is used to update the field in the expression.","\n    ","Click on the field name as shown by the arrow below then the Alternative Field section will get open.","\n    ","\n    "," ","\n    ","Users can select another field from the Select Alternative Field section and click on the Update VE button.","\n    ","\n    "," ","\n    ","The field name of the expression gets updated with the selected field. Click on the ‘Calculate Expression’ button to display the calculated value.","\n    ","\n    "," ","\n    "],["\n    ","Environment Name","\n    ","This expression is used to get the current environment name.","\n    ","\n    "," ","\n    "],["\n    ","Runset Name","\n    ","This expression is used to get the current runset name. This expression will work only from the runner.","\n    ","\n    "," ","\n    "],["\n    ","Runner Name","\n    ","This expression is used to get the current runner's name. This expression will work only from the runner.","\n    ","\n    "," ","\n    "," ","\n    "],["\n    ","Business Flow Name","\n    ","This expression is used to get the current Business Flow name.","\n    ","\n    "," ","\n    ","Previous Business Flow Name","\n    ","This expression is used to get the current runner's name. This expression will work only from the runner.","\n    ","\n    "," ","\n    ","Previous Business Flow Status","\n    ","This expression is used to get previous business flow status. This expression will work only from the runner.","\n    ","\n    "," ","\n    ","Last Failed Business Flow Status","\n    ","This expression is used to give the last failed business flow name. This expression will work only from the runner.","\n    ","\n    "," ","\n    "],["\n    ","Activity Group Name","\n    ","This expression is used to display the current activity group name.","\n    ","\n    "," ","\n    ","A New Group is created with Login Error handler activity to handle the error of the other activity.","\n    ","\n    "," ","\n    "," ","\n    ","Error Handler Origin Activity Group Name","\n    ","This expression is used to give error handler origin activity group name. This expression will work only if the error handler activity is created.","\n    ","\n    "," ","\n    "],["\n    ","Activity Name","\n    ","This expression is used to display the current activity name.","\n    ","\n    "," ","\n    ","Previous Activity Status","\n    ","This expression is used to display previous activity status.","\n    ","\n    "," ","\n    ","Previous Activity Duration","\n    ","This expression is used to display previous activity duration.","\n    ","\n    "," ","\n    ","Last Failed Activity Name","\n    ","This expression is used to display the last failed activity name.","\n    ","\n    "," ","\n    ","Error Handler Origin Activity Name","\n    ","This expression is used to give the error handler origin activity name. This expression will work only if the error handler activity is created.","\n    ","\n    "," ","\n    "],["\n    ","Action Name","\n    ","This expression is used to get the action name.","\n    ","\n    "," ","\n    ","Previous Action Name","\n    ","This expression is used to get the previous action name.","\n    ","\n    "," ","\n    ","Previous Action Extra Info","\n    ","This expression is used to get previous action details.","\n    ","\n    "," ","\n    ","Last Failed Action Name","\n    ","This expression is used to get the last failed action name.","\n    ","\n    "," ","\n    ","Error Handler Origin Action Name","\n    ","This expression is used to give the error handler origin action name. This expression will work only if the error handler activity is created.","\n    ","\n    "," ","\n    ","Error Handler Origin Action Error","\n    ","This expression is used to give error handler origin action error. This expression will work only if the error handler activity is created.","\n    ","\n    "," ","\n    ","Error Handler Origin Action Error Extra Info","\n    ","This expression is used to give error handler origin action error extra info. This expression will work only if the error handler activity is created.","\n    ","\n    "," ","\n  ","\n\n"]],"2":[["\n      ‎"],["Data"],["Variables"],["Global Variables"],["Business Flow Variables"],["Environments"],["Models Global Parameters"],["Data Sources"],["Machine Details"],["Date Time Functions"],["Functions"],["Data Validation"],["Math"],["String"],["Output Values"],["Data Operations"],["List"],["Regular Expression"],["String"],["Math"],[" "],["General Functions"],["Flow Details"],["Solution"],["Environment"],["Runset"],["Runner"],["Business Flow"],["Activity Group"],["Activity"],["Action"]],"id":"101"})
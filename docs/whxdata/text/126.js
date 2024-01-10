rh._.exports({"0":[[" ","Variable Type Overview"]],"1":[[" ","Variable Types Overview"," ","Contents"," ","Variable Types Overview",".. ","2"," ","Global Variables",". ","2"," ","Business Flow Variables",". ","2"," ","Activity Variables",". ","3"," ","Dynamic Variables",". ","3"," ","Variable Selection List",". ","4"," ","Variable Password String",". ","6"," ","Variable Random String",". ","8"," ","Variable Sequence",". ","9"," ","Variable String",". ","11"," ","Variable List",". ","13"," ","Variable Random Number",". ","14"," ","Variable Timer",". ","16"," ","How to use Variable Timer",". ","18"," "," V","ariable Number"," ","Variable Date and Time"," ","Variable Types Overview"," ","There are multiple types of variables depending upon the scope of the variable and the data type it can store. "," ","All the Data types are available for all the scopes."," ","Global Variables"," ","Global Variables are accessible to all the Business Flows in the Solution."," ","                      They are created from the below screen. "," ","                      Click on the Resources -> Global Variables tab -> Add Item button."," ","                       Select the type of the variable and add it to the solution."," ","Business Flow Variables"," ","Business Flow Variables are accessible to all the Activities of the selected Business Flow. It is not available to other Business Flows in the "," ","Solution."," ","                   It can be added using 2 ways viz. From the Business Flows tab and the Automation area of the "," ","                   Business Flows tab as shown below."," ","Activity Variables"," ","Activity Variables are accessible only to the specific Activity. It is not available to other Business Flows or other Activities in the "," ","Solution."," ","             It can be added as shown below from the Automation area of the Business Flows tab as shown below."," ","Dynamic Variables"," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select the Variable Dynamic option. This variable can store Dynamic types of data."," ","Enter the Name and description. "," ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)"," ","‘Value Expression’ ","is the area where a value is entered for the variable. Another variable can also be used to set the value using the ‘…’ button next to it."," ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows."," ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated."," ","‘Publish value’"," will display the value from the linked variable."," ","‘Formula’"," is not populated for Dynamic variable."," ","Click on the Ok button to add the variable."," ","Variable Selection List"," "," Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select the Variable Select List option. "," "," Enter the Name and description. "," ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)"," ","‘Selected Value’ ","is the area where the value is selected using the drop-down."," ","                 The values are added using the ","‘Add New’ ","button as shown below."," ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows."," ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated."," ","‘Publish value’"," will display the value from the linked variable."," ","‘Formula’"," is populated as the List of Options added."," ","‘Current Value’"," is the selected value."," ","Click on the Ok button to add the variable."," ","Variable Password String"," "," Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Password String. This variable stores the password in an encrypted format."," ","Enter the Name and description. "," ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)"," ","A value should be entered in ","‘Password Value’","."," ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows."," ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated."," ","‘Publish value’"," will display the value from the linked variable."," ","‘Formula’"," is populated as the List of Options added."," ","‘Current Value’"," is the selected value."," ","Clicking on the Ok button adds the variable and the value is encrypted."," ","Variable Random String"," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Password String. This variable generates a random string during execution."," ","Enter the Name and description. "," ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)"," ","Give the Min and Max Length of the string."," ","A string can be ‘Digits Only’ or alphabets. For alphabets, there is an option for ‘Lowercase’ and ‘Uppercase’."," ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows."," ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated."," ","‘Publish value’"," will display the value from the linked variable."," ","‘Formula’"," is populated as per the given lengths."," ","‘Current Value’"," is the selected value."," ","Click on the ","‘Generate Auto value’"," button. This will populate the ","‘Current value’"," of the variable."," ","Click on the Ok button to add the variable."," ","Variable Sequence"," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Sequence. This variable is used when a sequence is required."," ","Enter the Name and description. "," ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)"," ","Give the Min and Max Value of the sequence."," "," ‘Interval’ is the constant difference that is required between 2 sequences."," ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows."," ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated."," ","‘Publish value’"," will display the value from the linked variable."," ","‘Formula’"," is populated as per the given lengths and intervals."," ","‘Current Value’"," is the selected value."," ","Click on the ","‘Generate Auto value’"," button. This will generate the next sequence and populate it in the ","‘Current value’","."," ","‘Reset Value’"," will reset the ","‘Current value’"," to the ","‘Min value’","."," ","Click on the Ok button to add the variable."," ","Variable String"," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Sequence. This variable is used when a sequence is required."," ","Enter the Name and description. "," ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)"," "," ‘Initial String Value’ is the value that is set initially."," ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows."," ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated."," ","‘Publish value’"," will display the value from the linked variable."," ","‘Formula’"," is populated as the initial string."," ","‘Current Value’"," is the string given."," ","Click on the Ok button to add the variable."," ","Variable List"," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Sequence. This variable is "," ","used when a ","sequence is required."," ","Enter the Name and description. "," ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)"," ","‘List Values’"," is the area where the list is entered.  Every value should be entered on a new line."," ","‘Random Order’","  is used when a random value needs to be selected from the list."," ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows."," ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated."," ","‘Publish value’"," will display the value from the linked variable."," ","‘Formula’"," is populated as the given list."," ","‘Current Value’"," is the first string from the list."," ","Click on the Ok button to add the variable."," ","‘Generate Auto Value’"," will display the next value from the list to the ‘","Current Value’",". If the ","‘Random Order’ ","button is checked then it will take any random value from the list."," ","Variable Random Number"," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Sequence. This variable is used "," ","when a ","sequence is required."," ","Enter the Name and description. "," ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)"," "," Enter the required ","‘Min  Value’"," and ","‘Max Value’","."," ","‘Integer’","  is used when an integer is required. Without these decimals, up to 28 digits are generated."," ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows."," ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated."," ","‘Publish value’"," will display the value from the linked variable."," ","‘Formula’"," is populated as the min and max value with interval."," ","‘Current Value’","  initially is the min value."," ","Click on the Ok button to add the variable."," ","‘Generate Auto Value’"," will display the random value in the list to the ‘","Current Value’",".  "," ","Variable Timer"," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Timer. This variable is used when a timer is required to be set during the execution."," ","Enter the Name and description. "," ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)"," "," Select the Timer unit. By default, seconds are displayed. Hours, milliseconds, and minutes are the other options."," ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows."," ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated."," ","‘Publish value’"," will display the value from the linked variable."," ","Click on the Ok button when done."," ","How to use Variable Timer"," "," Click on the ‘Add New’ button in the Activity Actions section."," ","In the Add Action window, select the ‘","Set Variable Action’ ","and click on Add Action button."," ","Select the variable in the Variable Name dropdown. The variable type is automatically populated depending on the variable used. "," ","Select value from the ‘","Select Variable Value Operation Type’ ","dropdown."," ","Users can start, stop, continue or reset the timer."," ","Click on Ok to add the action."," ","When the Action is run, the Timer is started for the Start timer operation type."," ","The timer is shown running in the current value field of the Timer variable."," ","Variable Number"," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Number. This variable is used when an integer or decimal is required."," "," Enter the Name and description. "," ","‘Initial String Value’ is the value that is set initially."," ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows."," ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated."," ","‘Publish value’"," will display the value from the linked variable."," ","Number type Configuration is used to select the type and range (minimum and maximum value) of the number "," ","‘Formula’"," is populated as the initial string."," ","‘Current Value’"," is the number given."," ","Click on the Ok button to add the variable."," ","Variable Date and Time"," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Date and Time. This variable is used when a date and time are required."," ","Enter the Name and description. "," ","‘Initial Date and Time’ is the value that is set initially."," ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows."," ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated."," ","‘Publish value’"," will display the value from the linked variable."," ","Date time Configuration is used to set the type, date format, and range (minimum and maximum Date)"," ","‘Formula’"," is populated as the initial string."," ","‘Current Value’"," is the date and time given."," ","Click on the Ok button to add the variable."]],"id":"126"})
rh._.exports({"0":[["Variable Type Overview"]],"1":[["\n  "," ","\n  "," ","\n  ","Variable Types Overview","\n  ","\n  ","                                                                                  ","\n  "," ","\n  "," ","\n  ","Contents","\n                      ","\n                    ","\n  ","Variable Types Overview",".. ","2","\n  ","\n    ","Global Variables",". ","2","\n    ","Business Flow Variables",". ","2","\n    ","Activity Variables",". ","3","\n    ","Dynamic Variables",". ","3","\n    ","Variable Selection List",". ","4","\n    ","Variable Password String",". ","6","\n    ","Variable Random String",". ","8","\n    ","Variable Sequence",". ","9","\n    ","Variable String",". ","11","\n    ","Variable List",". ","13","\n    ","Variable Random Number",". ","14","\n    ","Variable Timer",". ","16","\n      ","\n        ","How to use Variable Timer",". ","18","\n      ","\n    ","\n    "," V","ariable Number","\n    "," ","Variable Date and Time","\n  ","\n  ","\n  ","                ","\n  ","\n  ","\n  "," ","\n  ","Variable Types Overview","\n  ","There are multiple types of variables depending upon the scope of the variable and the data type it can store. ","\n  ","All the Data types are available for all the scopes.","\n  ","\n  "," ","Global Variables","\n  ","Global Variables are accessible to all the Business Flows in the Solution.","\n  ","                      They are created from the below screen. ","\n  ","                      Click on the Resources -> Global Variables tab -> Add Item button.","\n  ","                       Select the type of the variable and add it to the solution.","\n  ","                       ","\n  ","\n  ","                          ","\n  ","\n    "," ","Business Flow Variables","\n  ","\n  ","Business Flow Variables are accessible to all the Activities of the selected Business Flow. It is not available to other Business Flows in the ","\n  ","Solution.","\n  ","                   It can be added using 2 ways viz. From the Business Flows tab and the Automation area of the ","\n  ","                   Business Flows tab as shown below.","\n  ","                                                   ","\n  ","\n  ","                     ","\n  "," ","\n  ","\n  ","\n  ","\n  ","                      ","\n  ","\n  ","\n  ","\n  ","\n    "," ","Activity Variables","\n  ","\n  ","Activity Variables are accessible only to the specific Activity. It is not available to other Business Flows or other Activities in the ","\n  ","Solution.","\n  ","             It can be added as shown below from the Automation area of the Business Flows tab as shown below.","\n  ","\n  ","                     ","\n  ","\n  ","\n  ","\n    "," ","Dynamic Variables","\n    "," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select the Variable Dynamic option. This variable can store Dynamic types of data.","\n  ","\n  ","                           ","   ","\n  ","\n  ","\n    "," ","Enter the Name and description. ","\n  ","\n  ","\n    ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)","\n    ","‘Value Expression’ ","is the area where a value is entered for the variable. Another variable can also be used to set the value using the ‘…’ button next to it.","\n  ","\n  ","\n    ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows.","\n  ","\n  ","\n    ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated.","\n    ","‘Publish value’"," will display the value from the linked variable.","\n    ","‘Formula’"," is not populated for Dynamic variable.","\n    ","Click on the Ok button to add the variable.","\n  ","\n  ","\n  ","\n  ","\n  ","\n    ","        ","\n    "," ","\n    "," ","Variable Selection List","\n    "," Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select the Variable Select List option. ","\n  ","\n  ","                          ","              ","\n  ","                     ","\n  ","\n  ","\n    "," "," Enter the Name and description. ","\n  ","\n  ","\n    ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)","\n    ","‘Selected Value’ ","is the area where the value is selected using the drop-down.","\n  ","\n  ","                 The values are added using the ","‘Add New’ ","button as shown below.","\n  ","\n    ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows.","\n  ","\n  ","\n  ","\n    ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated.","\n    ","‘Publish value’"," will display the value from the linked variable.","\n    ","‘Formula’"," is populated as the List of Options added.","\n    ","‘Current Value’"," is the selected value.","\n    ","Click on the Ok button to add the variable.","\n  ","\n  ","\n  ","                          ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    "," ","Variable Password String","\n    "," Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Password String. This variable stores the password in an encrypted format.","\n  ","\n  ","                           ","\n  ","\n  ","\n    "," ","Enter the Name and description. ","\n  ","\n  ","\n    ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)","\n    ","A value should be entered in ","‘Password Value’",".","\n  ","\n  ","\n    ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows.","\n  ","\n  ","\n    ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated.","\n    ","‘Publish value’"," will display the value from the linked variable.","\n    ","‘Formula’"," is populated as the List of Options added.","\n    ","‘Current Value’"," is the selected value.","\n    ","Clicking on the Ok button adds the variable and the value is encrypted.","\n  ","\n  ","\n  ","       ","\n  ","\n    "," ","Variable Random String","\n    "," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Password String. This variable generates a random string during execution.","\n  ","\n  ","     ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    "," ","Enter the Name and description. ","\n  ","\n  ","\n    ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)","\n    ","Give the Min and Max Length of the string.","\n    ","A string can be ‘Digits Only’ or alphabets. For alphabets, there is an option for ‘Lowercase’ and ‘Uppercase’.","\n    ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows.","\n    ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated.","\n    ","‘Publish value’"," will display the value from the linked variable.","\n    ","‘Formula’"," is populated as per the given lengths.","\n    ","‘Current Value’"," is the selected value.","\n    ","Click on the ","‘Generate Auto value’"," button. This will populate the ","‘Current value’"," of the variable.","\n    ","Click on the Ok button to add the variable.","\n  ","\n  ","              ","\n  ","                       ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    "," ","Variable Sequence","\n    "," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Sequence. This variable is used when a sequence is required.","\n  ","\n  ","                         ","\n  ","\n    "," ","Enter the Name and description. ","\n  ","\n  ","\n    ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)","\n    ","Give the Min and Max Value of the sequence.","\n    "," ‘Interval’ is the constant difference that is required between 2 sequences.","\n    ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows.","\n    ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated.","\n    ","‘Publish value’"," will display the value from the linked variable.","\n    ","‘Formula’"," is populated as per the given lengths and intervals.","\n    ","‘Current Value’"," is the selected value.","\n    ","Click on the ","‘Generate Auto value’"," button. This will generate the next sequence and populate it in the ","‘Current value’",".","\n    ","‘Reset Value’"," will reset the ","‘Current value’"," to the ","‘Min value’",".","\n    ","Click on the Ok button to add the variable.","\n  ","\n  ","                               ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    "," ","Variable String","\n    "," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Sequence. This variable is used when a sequence is required.","\n  ","\n  ","                              ","\n  ","\n  ","\n  ","\n    "," ","Enter the Name and description. ","\n  ","\n  ","\n    ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)","\n    "," ‘Initial String Value’ is the value that is set initially.","\n    ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows.","\n    ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated.","\n    ","‘Publish value’"," will display the value from the linked variable.","\n    ","‘Formula’"," is populated as the initial string.","\n    ","‘Current Value’"," is the string given.","\n    "," ","Click on the Ok button to add the variable.","\n  ","\n  ","                             ","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  "," ","Variable List"," ","\n  ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Sequence. This variable is ","\n  ","used when a ","sequence is required.","\n  ","\n  ","                              ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    "," ","Enter the Name and description. ","\n  ","\n  ","\n    ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)","\n    "," ","‘List Values’"," is the area where the list is entered.  Every value should be entered on a new line.","\n    ","‘Random Order’","  is used when a random value needs to be selected from the list.","\n  ","\n  ","\n  ","\n    ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows.","\n  ","\n  ","\n  ","\n    ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated.","\n    ","‘Publish value’"," will display the value from the linked variable.","\n  ","\n  ","\n  ","\n    ","‘Formula’"," is populated as the given list.","\n    ","‘Current Value’"," is the first string from the list.","\n    "," ","Click on the Ok button to add the variable.","\n    ","‘Generate Auto Value’"," will display the next value from the list to the ‘","Current Value’",". If the ","‘Random Order’ ","button is checked then it will take any random value from the list.","\n  ","\n  ","                            ","\n  ","\n  "," ","\n  "," ","Variable Random Number"," ","\n  ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Sequence. This variable is used ","\n  ","when a ","sequence is required.","\n  ","                            ","\n  ","\n  ","\n  ","\n    "," ","Enter the Name and description. ","\n  ","\n  ","\n    ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)","\n    "," Enter the required ","‘Min  Value’"," and ","‘Max Value’",".","\n    ","‘Integer’","  is used when an integer is required. Without these decimals, up to 28 digits are generated.","\n  ","\n  ","\n  ","\n    ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows.","\n    ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated.","\n    ","‘Publish value’"," will display the value from the linked variable.","\n  ","\n  ","\n  ","\n    ","‘Formula’"," is populated as the min and max value with interval.","\n    ","‘Current Value’","  initially is the min value.","\n    "," ","Click on the Ok button to add the variable.","\n      ","\n        ","‘Generate Auto Value’"," will display the random value in the list to the ‘","Current Value’",".  ","       ","\n      ","\n    ","\n  ","\n  ","        ","\n  "," ","\n  ","Variable Timer","  ","\n  ","\n    "," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Timer. This variable is used when a timer is required to be set during the execution.","\n  ","\n  ","                           ","\n  ","\n  ","\n  ","\n  ","\n    ","Enter the Name and description. ","\n  ","\n  ","\n    ","A tag can be added using the ","‘Add’"," button which is used for grouping. (under development)","\n    "," Select the Timer unit. By default, seconds are displayed. Hours, milliseconds, and minutes are the other options.","\n  ","\n  ","\n  ","\n    ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows.","\n    ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated.","\n    ","‘Publish value’"," will display the value from the linked variable.","\n    ","Click on the Ok button when done.","\n  ","\n  ","\n  ","                      ","\n  ","                         ","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    ","How to use Variable Timer","             ","\n  ","\n  ","\n    "," Click on the ‘Add New’ button in the Activity Actions section.","\n  ","\n  ","In the Add Action window, select the ‘","Set Variable Action’ ","and click on Add Action button.","\n  ","\n  ","           ","\n  ","\n  ","\n    ","Select the variable in the Variable Name dropdown. The variable type is automatically populated depending on the variable used. ","\n  ","\n  ","Select value from the ‘","Select Variable Value Operation Type’ ","dropdown.","\n  ","Users can start, stop, continue or reset the timer.","\n  ","\n  ","\n  ","       ","\n  ","\n    ","Click on Ok to add the action.","\n    ","When the Action is run, the Timer is started for the Start timer operation type.","\n  ","\n  ","The timer is shown running in the current value field of the Timer variable.","\n  ","     ","\n  ","\n  "," ","\n  "," ","\n  ","Variable Number","\n  ","\n    "," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Number. This variable is used when an integer or decimal is required.","\n  ","\n  ","                       ","\n  ","\n  ","\n  ","\n    "," Enter the Name and description. ","\n  ","\n  ","\n    ","‘Initial String Value’ is the value that is set initially.","\n    ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows.","\n    ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated.","\n    ","‘Publish value’"," will display the value from the linked variable.","\n    ","Number type Configuration is used to select the type and range (minimum and maximum value) of the number ","\n    ","‘Formula’"," is populated as the initial string.","\n    ","‘Current Value’"," is the number given.","\n    "," ","Click on the Ok button to add the variable.","\n  ","\n  ","                             ","\n  ","\n  "," ","\n  ","Variable Date and Time","\n  ","\n    "," ","Click on the ‘Add New’ button in the Variable section where you want to add the variable. Select Variable Date and Time. This variable is used when a date and time are required.","\n  ","\n  ","                               ","\n  ","\n  ","\n  ","\n    "," ","Enter the Name and description. ","\n  ","\n  ","\n    ","‘Initial Date and Time’ is the value that is set initially.","\n    ","By default, the ","‘Set as Input Value’ ","and ","‘Set as Output Value’"," are checked which means that the value of the variable can be used in other Business flows.","\n    ","‘Linked Variable’"," :- another variable of the same type can be linked so that one’s value is copied to another. Eg. the Business variable is linked to an Activity variable, hence whenever the value of the activity variable changes, the business variable gets updated.","\n    ","‘Publish value’"," will display the value from the linked variable.","\n    ","Date time Configuration is used to set the type, date format, and range (minimum and maximum Date)","\n    ","‘Formula’"," is populated as the initial string.","\n    ","‘Current Value’"," is the date and time given.","\n    "," ","Click on the Ok button to add the variable.","\n  ","\n  ","                                    ","\n  ","                                ","\n  ","\n  ","\n  "," ","\n\n"]],"id":"107"})
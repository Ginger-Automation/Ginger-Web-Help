rh._.exports({"0":[["Ginger Groovy Plugin – User Guide"]],"1":[["\n  ","\n    "," ","\n    "," ","Ginger Groovy Plugin – User Guide","\n    "," ","\n    "," ","\n    "," ","\n    ","\n    ","\n    ","Contents","\n    ","Purpose","\n    ","Prerequisites","\n    ","\n      ","NET Core Installation","\n      ","Groovy Installation","\n      ","Java Installation","\n      ","Script","\n    ","\n    ","Install Groovy Plugin","\n    ","\n      ","Add Groovy Plugin to Ginger Solution","\n    ","\n    ","Executing Groovy Script","\n    ","\n      ","Execute Groovy Script using external file","\n      ","Execute Groovy Script using Content","\n    ","\n    ","Get Output Values from Groovy Flow to Ginger Flow","\n    ","\n      ","How to Get Output Values from Groovy Flow to Ginger Flow","\n    ","\n    "," ","\n    "," ","\n    "],["\n    "],["\n    ","    ","     The Groovy Plugin target is to allow executing Groovy scripts from Ginger as an integrative part of the Ginger test flow.","\n    ","\n    ","       Ginger Groovy plugin allows to:","\n    ","Configure Groovy script execution by using a script file.","\n    ","Configure Groovy script execution by using script content.","\n    ","\n    ","      For the above execution methods ginger groovy plugin offers:","\n    ","Send execution Input Values to the groovy script.","\n    ","Get execution output values by parsing and showing console values and look for “key=value” pairs","\n    ","\n    ","      The purpose of this document is to provide step by step guide on the Ginger Groovy plugin way of installing and using.","\n    "," ","\n    ","\n      ‎","\n    ","Prerequisites","\n    ","Please see below the items which need to be set up on the testing environment before executing the Groovy plugin.","\n    "," ","\n    "],["\n    ","The plugin requires .NET Core SDK version 2.2 or above to be installed on the machine it is running on.","\n    ","Please install it from the below link:","\n    ","https://dotnet.microsoft.com/download","\n    "," ","\n    "],["\n    ","Groovy installation is a must for the plugin to work.","\n    ","“GROOVY_HOME” environment variable system configuration is also required.","\n    "," ","\n    "],["\n    ","Java installation is a must for the plugin to work.","\n    ","“JAVA_HOME” environment variable system configuration is also required.","\n    "," ","\n    "],["\n    ","The groovy script files need to be located on the machine on which the Groovy Plugin running.","\n    ","It is recommended to place the script under the Ginger Solution “Documents” folder and use relative paths to it (like “~/Documents/Scripts”) so it will work on any user machine.","\n    "," ","\n    "," ","\n    "," Install Groovy Plugin","\n    ","    The ginger groovy plugin needs to be installed to the Ginger Solution in order to be used.","\n    ","    Please follow the below steps to perform it.","\n    "," ","\n    "],["\n    ","Download and Install the latest/required Ginger version from ","here","\n    ","Launch Ginger and add a Solution to it","\n    ","In Solution go to Resources Plugins","\n    ","Click on the “Download Plugin” tab","\n    ","Select “Groovy” Plugin from loaded list of Plugins","\n    ","Select latest/required Plugin version","\n    ","Click on Install","\n    ","             Once installation is done, shift to the “Installed” tab and confirm the ”Groovy” plugin appears on the tree- you will see the Plugin details on the                       right  including its embedded action types.","\n    "," ","\n    ","                 ","\n    "," ","\n    ","                      ","\n    "," ","\n    "," ","\n    "],["\n    ","   ","      Please follow the below steps to execute the groovy script.","\n    "," ","\n    "],["\n    ","Add Business Flow or select an existing one and click on “Automate” for loading it on Automate page","\n    ","Click on Add Action button, in the loaded window go to “Plugins Actions”","\n    ","Select “Execute Groovy Script File” Action","\n    "," ","\n    ","\n    "," ","\n    ","Set Action configurations according to the below:","\n    "," ","\n    ","\n      ","\n        ","\n          ","\n          ","\n          ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Field Name","\n            ","\n            ","\n              ","Mandatory?","\n            ","\n            ","\n              ","Field Description","\n            ","\n            ","\n              ","Sample Value","\n            ","\n            ","\n              ","Comments","\n            ","\n          ","\n          ","\n            ","\n              ","Overwrite Groovy Home Path","\n            ","\n            ","\n              ","No","\n              ","(assuming “GROOVY_HOME” system variable was configured)","\n            ","\n            ","\n              ","Full Path of groovy executer (groovy.bat in windows or groovy in Linux).","\n              ","If the value has not been set (recommended) so “GROOVY_HOME” system environment variable value will be used automatically.","\n              ","If “bin\\groovy” is missing from provided path so it has been added automatically.","\n              "," ","\n            ","\n            ","\n              ","“C:\\ Program Files \\Groovy\\groovy-2.5.5\\bin\\groovy.bat”","\n              "," ","\n            ","\n            ","\n              ","For allowing the Action to run on any machine It is recommended to configure the “GROOVY_HOME” system variable on the running machine and to keep this Action field value empty","\n            ","\n          ","\n          ","\n            ","\n              ","Groovy Script Path","\n            ","\n            ","\n              ","Yes","\n            ","\n            ","\n              ","Full Path of the groovy script file.","\n              "," ","\n            ","\n            ","\n              ","“C:\\Work\\Groovy\\ BasicScript.groovy”","\n            ","\n            ","\n              ","For allowing the Action to run on any machine It is recommended to place the groovy script file under the Ginger Solution “Documents” folder and set a relative path to it in Action definitions like:","\n              ","“~\\Documents\\Scripts\\BasicScript.groovy”","\n            ","\n          ","\n          ","\n            ","\n              ","Input Parameters","\n            ","\n            ","\n              ","No","\n            ","\n            ","\n              ","Add groovy input parameters as per requirement.","\n            ","\n            ","\n              "," ","\n            ","\n            ","\n              "," ","\n            ","\n          ","\n        ","\n      ","\n    ","\n    "," ","\n    ","\n    "],["\n    "],["\n    ","Add Business Flow or select an existing one and click on “Automate” for loading it on Automate page","\n    ","Click on Add Action button, in the loaded window go to “Plugins Actions”","\n    ","Select “Execute Groovy Script” Action","\n    "," ","\n    ","\n    "," ","\n    ","Set Action configurations according to the below:","\n    "," ","\n    ","\n      ","\n        ","\n          ","\n          ","\n          ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Field Name","\n            ","\n            ","\n              ","Mandatory?","\n            ","\n            ","\n              ","Field Description","\n            ","\n            ","\n              ","Sample Value","\n            ","\n            ","\n              ","Comments","\n            ","\n          ","\n          ","\n            ","\n              ","Overwrite Groovy Home Path","\n            ","\n            ","\n              ","No","\n              ","(assuming “GROOVY_HOME” system variable was configured)","\n            ","\n            ","\n              ","Full Path of groovy executer (groovy.bat in windows or java in Linux).","\n              ","If the value has not been set (recommended) so “GROOVY_HOME” system environment variable value will be used automatically.","\n              ","If “bin\\groovy” is missing from provided path so it has been added automatically.","\n              "," ","\n            ","\n            ","\n              ","“C:\\ Program Files \\Groovy\\groovy-2.5.5\\bin\\groovy.bat”","\n              "," ","\n            ","\n            ","\n              ","For allowing the Action to run on any machine It is recommended to configure the “GROOVY_HOME” system variable on the running machine and to keep this Action field value empty","\n            ","\n          ","\n          ","\n            ","\n              ","Groovy Script Content","\n            ","\n            ","\n              ","Yes","\n            ","\n            ","\n              ","Copy-Paste groovy script.","\n              "," ","\n            ","\n            ","\n              ","class BasicScript","\n              ","{","\n              ","static void main(String[] args)","\n              ","{","\n              ","println 'Groovy world!';","\n              ","}","\n              ","}","\n            ","\n            ","\n              "," ","\n            ","\n          ","\n          ","\n            ","\n              ","Input Parameters","\n            ","\n            ","\n              ","No","\n            ","\n            ","\n              ","Add groovy input parameters as per requirement.","\n            ","\n            ","\n              "," ","\n            ","\n            ","\n              "," ","\n            ","\n          ","\n        ","\n      ","\n    ","\n    "," ","\n    ","\n      ‎","\n    "],["\n    ","             ","The groovy plugin supports getting output values from the Groovy Flow.","\n    ","It has been done by parsing all values which the Groovy flow writes to the Console during execution, the parsing mechanism looks for any “key=value” pair and if it been found so the Key and Value been added to the Action Output Values list.","\n    "," ","\n    "],["\n    ","Prepare the Groovy Flow Code for Sharing Output Values","\n    ","Open the Script in notepad or another Editor.","\n    ","Look for the places in code (either tested class methods or actual test methods) which have values that can be shared with Ginger during execution","\n    ","In each such place, add a “println()” line of code with the Value key name equal to the value that needs to be shared, see sample below:","\n    "," ","\n    ","\n    "," ","\n    ","Configure Ginger Groovy Plugin Action to Read Output Values","\n    ","Configure any one of the Groovy Actions configurations","\n    ","After execution end, go to Action “Output Values” tab and see all output values which were parsed in run time","\n    ","Now you can set Validations on top of those values or pass them to Variables/Data Source or others to be used in the next Actions/other in the Ginger flow","\n    "," ","\n    ","\n  ","\n\n"]],"2":[["\n      ‎"],["Purpose"],["Executing Groovy Script"],["Get Output Values from Groovy Flow to Ginger Flow"]],"3":[[".NET Core SDK Installation"],["Groovy Installation"],["Java Installation"],["Script"],["     ","Add groovy Plugin to Ginger Solution"],["Execute Groovy script using an external file"],[" "],["Execute Groovy script using content"],["How to Get Output Values from Groovy Flow to Ginger Flow"]],"id":"87"})
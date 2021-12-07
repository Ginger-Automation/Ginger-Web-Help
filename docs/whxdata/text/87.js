rh._.exports({"0":[["Ginger Python Plugin – User Guide"]],"1":[["\n  ","\n    "," ","\n    "," Ginger Python Plugin – User Guide","\n    "," ","\n    "," ","\n    ","\n    ","\n    ","Contents","\n    ","Purpose","\n    ","Prerequisites","\n    ","\n      ","NET Core Installation","\n      ","Python Installation","\n      ","Script","\n    ","\n    ","Install Python Plugin","\n    ","\n      ","Add Python Plugin to Ginger Solution","\n    ","\n    ","Executing Python Script","\n    ","\n      ","Execute Python Script using external file","\n      ","Execute Python Script using Content","\n    ","\n    ","Get Output Values from Python Flow to Ginger Flow","\n    ","\n      ","How to Get Output Values from Python Flow to Ginger Flow","\n    ","\n    "," ","\n    "," ","\n    "],["\n    "],["\n    "," The Python Plugin target is to allow executing Python scripts from Ginger as an integrative part of the Ginger test flow.","\n    ","\n    "," Ginger Python plugin allows to:","\n    ","Configure python script execution by using a script file.","\n    ","Configure python script execution by using script content.","\n    ","\n    "," For the above execution methods ginger python plugin offers:","\n    ","Send execution Input Values to python script.","\n    ","Get execution output values by parsing and showing console values and look for “key=value” pairs","\n    ","\n    "," The purpose of this document is to provide step by step guide on the Ginger Python plugin way of installing and using it.","\n    "," ","\n    ","\n       ‎","Prerequisites","\n    ","Please see below the items which need to be set up on the testing environment before executing the Python plugin.","\n    "," ","\n    "],["\n    ","The plugin requires .NET Core SDK version 2.2 or above to be installed on the machine it is running on.","\n    ","Please install it from the below link:","\n    ","https://dotnet.microsoft.com/download","\n    "," ","\n    "],["\n    ","Python installation is a must for the plugin to work.","\n    ","“PYTHON_HOME” environment variable system configuration is also required.","\n    "," ","\n    "],["\n    ","The python script files need to be located on the machine on which the Python Plugin running.","\n    ","It is recommended to place the script under the Ginger Solution “Documents” folder and use relative paths to it (like “~/Documents/Scripts”) so it will work on any user machine.","\n    "," ","\n    "," ","Install Python Plugin","\n    ","    Ginger python plugin needs to be installed to the Ginger Solution to be used.","\n    ","    Please follow the below steps to perform it.","\n    "," ","\n    "],["\n    ","\n      ","Download and Install the latest/required Ginger version from ","here","\n      ","Launch Ginger and add a Solution to it","\n      ","In Solution go to Resources-> Plugins","\n      ","Click on the “Download Plugin” tab","\n      ","Select “Python” Plugin from loaded list of Plugins","\n      ","Select latest/required Plugin version","\n      ","Click on Install","\n    ","\n    "," ","\n    "," Once installation is done, shift to the “Installed” tab and confirm the ”Python” plugin appears on the tree- you will see the Plugin details on the ","right including its ","\n    "," embedded action types.","\n    ","               ","\n    "," ","\n    ","                 ","\n    "," ","\n    "," ","\n    "],["\n    "," Please follow the below steps to execute the python script.","\n    "],["\n    ","Add Business Flow or select an existing one and click on “Automate” for loading it on Automate page","\n    ","Click on Add Action button, in the loaded window go to “Plugins Actions”","\n    ","Select “Run Script file” Action","\n    ","\n    "," ","\n    "," ","\n    ","Set Action configurations according to the below:","\n    ","\n      ","\n        ","\n          ","\n          ","\n          ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Field Name","\n            ","\n            ","\n              ","Mandatory?","\n            ","\n            ","\n              ","Field Description","\n            ","\n            ","\n              ","Sample Value","\n            ","\n            ","\n              ","Comments","\n            ","\n          ","\n          ","\n            ","\n              ","Python Script Path","\n            ","\n            ","\n              ","Yes","\n            ","\n            ","\n              ","Full Path of the python script file.","\n              "," ","\n            ","\n            ","\n              ","“C:\\Work\\Python\\ BasicScript.py”","\n            ","\n            ","\n              ","For allowing the Action to run on any machine It is recommended to place the python script file under the Ginger Solution “Documents” folder and set a relative path to it in Action definitions like:","\n              ","“~\\Documents\\Scripts\\BasicScript.py”","\n            ","\n          ","\n          ","\n            ","\n              ","Input Parameters","\n            ","\n            ","\n              ","No","\n            ","\n            ","\n              ","Add python input parameters as per requirement.","\n            ","\n            ","\n              "," ","\n            ","\n            ","\n              "," ","\n            ","\n          ","\n        ","\n      ","\n    ","\n    "," ","\n    ","\n    "],["\n    "],["\n    ","Add Business Flow or select an existing one and click on “Automate” for loading it on Automate page","\n    ","Click on Add Action button, in the loaded window go to “Plugins Actions”","\n    ","Select “Run Script” Action","\n    ","\n    "," ","\n    ","Set Action configurations according to the below:","\n    ","\n      ","\n        ","\n          ","\n          ","\n          ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Field Name","\n            ","\n            ","\n              ","Mandatory?","\n            ","\n            ","\n              ","Field Description","\n            ","\n            ","\n              ","Sample Value","\n            ","\n            ","\n              ","Comments","\n            ","\n          ","\n          ","\n            ","\n              ","Python Script Content","\n            ","\n            ","\n              ","Yes","\n            ","\n            ","\n              ","Copy-Paste python script.","\n              "," ","\n            ","\n            ","\n              ","import sys","\n              ","a = sys.argv[1]","\n              ","b = sys.argv[2]","\n              ","print('a=' + a)","\n              ","print('b=' + b)","\n              ","sum = int(a) + int(b)","\n              ","print('sum=' + str(sum))","\n            ","\n            ","\n              "," ","\n            ","\n          ","\n          ","\n            ","\n              ","Input Parameters","\n            ","\n            ","\n              ","No","\n            ","\n            ","\n              ","Add python input parameters as per requirement.","\n            ","\n            ","\n              "," ","\n            ","\n            ","\n              "," ","\n            ","\n          ","\n        ","\n      ","\n    ","\n    "," ","\n    ","\n      ‎","\n    "],["\n    ","             ","Python plugin supports getting output values from the Python Flow.","\n    ","It has been done by parsing all values which the Python flow write to the Console during execution, the parsing mechanism looks for any “key=value” pair and if it been found so the Key and Value been added to the Action Output Values list.","\n    "," ","\n    "],["\n    ","Prepare the Python Flow Code for Sharing Output Values","\n    ","Open the Script in notepad or another Editor.","\n    ","Look for the places in code (either tested class methods or actual test methods) which have values that can be shared with Ginger during execution","\n    ","In each such place, add a “print()” line of code with the Value key name equal to the value that needs to be shared, see sample below:","\n    ","\n    "," ","\n    ","Configure Ginger Python Plugin Action to Read Output Values","\n    ","Configure any one of the Python Actions configurations","\n    ","After execution end, go to Action “Output Values” tab and see all output values which were parsed in run time","\n    ","Now you can set Validations on top of those values or pass them to Variables/Data Source or others to be used in the next Actions/other in the Ginger flow","\n    ","\n  ","\n\n"]],"2":[["\n      ‎"],["Purpose"],["     ","Executing Python Script"],["      Get Output Values from Python Flow to Ginger Flow"]],"3":[["  ",".NET Core SDK Installation"],["   Python Installation"],["   Script"],["   ","Add python Plugin to Ginger Solution"],["      ","Execute python script using an external file"],[" "],["        Execute python script using content"],["      ","How to Get Output Values from Python Flow to Ginger Flow"]],"id":"87"})
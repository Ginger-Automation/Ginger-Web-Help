rh._.exports({"0":[[" ","Ginger Python Plugin – User Guide"]],"1":[[" ","Executing Python Script"],[" ","      Get Output Values from Python Flow to Ginger Flow"]],"2":[[" "," Ginger Python Plugin – User Guide"],[" "," The Python Plugin target is to allow executing Python scripts from Ginger as an integrative part of the Ginger test flow."," "," Ginger Python plugin allows to:"," ","Configure python script execution by using a script file."," ","Configure python script execution by using script content."," "," For the above execution methods ginger python plugin offers:"," ","Send execution Input Values to python script."," ","Get execution output values by parsing and showing console values and look for “key=value” pairs"," "," The purpose of this document is to provide step by step guide on the Ginger Python plugin way of installing and using it."],[" ","Please see below the items which need to be set up on the testing environment before executing the Python plugin."],[" ","The plugin requires .NET 7 SDK or above to be installed on the machine it is running on. Please download and install it from ","Microsoft Official Page","."],[" ","Python installation is a must for the plugin to work."," ","“PYTHON_HOME” environment variable system configuration is also required."],[" ","The python script files need to be located on the machine on which the Python Plugin running."," ","It is recommended to place the script under the Ginger Solution “Documents” folder and use relative paths to it (like “~/Documents/Scripts”) so it will work on any user machine."," ","Install Python Plugin"," ","    Ginger python plugin needs to be installed to the Ginger Solution to be used."," ","    Please follow the below steps to perform it."],[" ","Download and Install the latest/required Ginger version from ","here"," ","Launch Ginger and add a Solution to it"," ","In Solution go to Resources-> Plugins"," ","Click on the “Download Plugin” tab"," ","Select “Python” Plugin from loaded list of Plugins"," ","Select latest/required Plugin version"," ","Click on Install"," "," Once installation is done, shift to the “Installed” tab and confirm the ”Python” plugin appears on the tree- you will see the Plugin details on the ","right including its "," "," embedded action types."],[" "," Please follow the below steps to execute the python script."],[" ","Add Business Flow or select an existing one and click on “Automate” for loading it on Automate page"," ","Click on Add Action button, in the loaded window go to “Plugins Actions”"," ","Select “Run Script file” Action"," ","Set Action configurations according to the below:"," ","Field Name"," ","Mandatory?"," ","Field Description"," ","Sample Value"," ","Comments"," ","Python Script Path"," ","Yes"," ","Full Path of the python script file."," ","“C:\\Work\\Python\\ BasicScript.py”"," ","For allowing the Action to run on any machine It is recommended to place the python script file under the Ginger Solution “Documents” folder and set a relative path to it in Action definitions like:"," ","“~\\Documents\\Scripts\\BasicScript.py”"," ","Input Parameters"," ","No"," ","Add python input parameters as per requirement."],[" ","Add Business Flow or select an existing one and click on “Automate” for loading it on Automate page"," ","Click on Add Action button, in the loaded window go to “Plugins Actions”"," ","Select “Run Script” Action"," ","Set Action configurations according to the below:"," ","Field Name"," ","Mandatory?"," ","Field Description"," ","Sample Value"," ","Comments"," ","Python Script Content"," ","Yes"," ","Copy-Paste python script."," ","import sys"," ","a = sys.argv[1]"," ","b = sys.argv[2]"," ","print('a=' + a)"," ","print('b=' + b)"," ","sum = int(a) + int(b)"," ","print('sum=' + str(sum))"," ","Input Parameters"," ","No"," ","Add python input parameters as per requirement."," ","\n      ‎"],[" ","Python plugin supports getting output values from the Python Flow."," ","It has been done by parsing all values which the Python flow write to the Console during execution, the parsing mechanism looks for any “key=value” pair and if it been found so the Key and Value been added to the Action Output Values list."],[" ","Prepare the Python Flow Code for Sharing Output Values"," ","Open the Script in notepad or another Editor."," ","Look for the places in code (either tested class methods or actual test methods) which have values that can be shared with Ginger during execution"," ","In each such place, add a “print()” line of code with the Value key name equal to the value that needs to be shared, see sample below:"," ","Configure Ginger Python Plugin Action to Read Output Values"," ","Configure any one of the Python Actions configurations"," ","After execution end, go to Action “Output Values” tab and see all output values which were parsed in run time"," ","Now you can set Validations on top of those values or pass them to Variables/Data Source or others to be used in the next Actions/other in the Ginger flow"]],"3":[[" ","Purpose"],[" ","Prerequisites"],[" ",".NET 7 SDK Installation"],[" ","   Python Installation"],[" ","   Script"],[" ","Add python Plugin to Ginger Solution"],[" ","Execute python script using an external file"],[" ","        Execute python script using content"],[" ","How to Get Output Values from Python Flow to Ginger Flow"]],"id":"81"})
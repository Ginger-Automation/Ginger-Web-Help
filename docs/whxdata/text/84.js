rh._.exports({"0":[[" ","Ginger Groovy Plugin – User Guide"]],"2":[[" ","Purpose"],[" ","\n      ‎Prerequisites"],[" ",".NET 7 SDK Installation"],[" ","     Groovy Installation"],[" ","    Java Installation"],[" ","    Script"],[" ","  Install Groovy Plugin"],[" ","   Add groovy Plugin to Ginger Solution"],[" ","     Executing Groovy Script"],[" ","      Execute Groovy script using an external file"],[" ","       Execute Groovy script using content"],[" ","\n      ‎ Output Values from Groovy Flow to Ginger Flow"],[" ","     How to Get Output Values from Groovy Flow to Ginger Flow"],[" ","Configure Ginger Groovy Plugin Action to Read Output Values"]],"3":[[" ","Ginger Groovy Plugin – User Guide"],[" ","     The Groovy Plugin target is to allow executing Groovy scripts from Ginger as an integrative part of the Ginger test flow."," ","       Ginger Groovy plugin allows to:"," ","Configure Groovy script execution by using a script file."," ","Configure Groovy script execution by using script content."," ","      For the above execution methods ginger groovy plugin offers:"," ","Send execution Input Values to the groovy script."," ","Get execution output values by parsing and showing console values and look for “key=value” pairs"," ","      The purpose of this document is to provide step by step guide on the Ginger Groovy plugin way of installing and using."],[" ","Please see below the items which need to be set up on the testing environment before executing the Groovy plugin."],[" ","The plugin requires .NET 7 SDK or above to be installed on the machine it is running on. Please download and install it from ","Microsoft Official Page","."],[" ","Groovy installation is a must for the plugin to work."," ","“GROOVY_HOME” environment variable system configuration is also required."],[" ","Java installation is a must for the plugin to work."," ","“JAVA_HOME” environment variable system configuration is also required."],[" ","The groovy script files need to be located on the machine on which the Groovy Plugin running."," ","It is recommended to place the script under the Ginger Solution “Documents” folder and use relative paths to it (like “~/Documents/Scripts”) so it will work on any user machine."],[" ","    The ginger groovy plugin needs to be installed to the Ginger Solution in order to be used."," ","    Please follow the below steps to perform it."],[" ","Download and Install the latest/required Ginger version from ","here"," ","Launch Ginger and add a Solution to it"," ","In Solution go to Resources Plugins"," ","Click on the “Download Plugin” tab"," ","Select “Groovy” Plugin from loaded list of Plugins"," ","Select latest/required Plugin version"," ","Click on Install"," ","             Once installation is done, shift to the “Installed” tab and confirm the ”Groovy” plugin appears on the tree- you will see the Plugin details on the right"," "," including its embedded action types."],[" ","      Please follow the below steps to execute the groovy script."],[" ","Add Business Flow or select an existing one and click on “Automate” for loading it on Automate page"," ","Click on Add Action button, in the loaded window go to “Plugins Actions”"," ","Select “Execute Groovy Script File” Action"," ","Set Action configurations according to the below:"," ","Field Name"," ","Mandatory?"," ","Field Description"," ","Sample Value"," ","Comments"," ","Overwrite Groovy Home Path"," ","No"," ","(assuming “GROOVY_HOME” system variable was configured)"," ","Full Path of groovy executer (groovy.bat in windows or groovy in Linux)."," ","If the value has not been set (recommended) so “GROOVY_HOME” system environment variable value will be used automatically."," ","If “bin\\groovy” is missing from provided path so it has been added automatically."," ","“C:\\ Program Files \\Groovy\\groovy-2.5.5\\bin\\groovy.bat”"," ","For allowing the Action to run on any machine It is recommended to configure the “GROOVY_HOME” system variable on the running machine and to keep this Action field value empty"," ","Groovy Script Path"," ","Yes"," ","Full Path of the groovy script file."," ","“C:\\Work\\Groovy\\ BasicScript.groovy”"," ","For allowing the Action to run on any machine It is recommended to place the groovy script file under the Ginger Solution “Documents” folder and set a relative path to it in Action definitions like:"," ","“~\\Documents\\Scripts\\BasicScript.groovy”"," ","Input Parameters"," ","No"," ","Add groovy input parameters as per requirement."],[" ","Add Business Flow or select an existing one and click on “Automate” for loading it on Automate page"," ","Click on Add Action button, in the loaded window go to “Plugins Actions”"," ","Select “Execute Groovy Script” Action"," ","Set Action configurations according to the below:"," ","Field Name"," ","Mandatory?"," ","Field Description"," ","Sample Value"," ","Comments"," ","Overwrite Groovy Home Path"," ","No"," ","(assuming “GROOVY_HOME” system variable was configured)"," ","Full Path of groovy executer (groovy.bat in windows or java in Linux)."," ","If the value has not been set (recommended) so “GROOVY_HOME” system environment variable value will be used automatically."," ","If “bin\\groovy” is missing from provided path so it has been added automatically."," ","“C:\\ Program Files \\Groovy\\groovy-2.5.5\\bin\\groovy.bat”"," ","For allowing the Action to run on any machine It is recommended to configure the “GROOVY_HOME” system variable on the running machine and to keep this Action field value empty"," ","Groovy Script Content"," ","Yes"," ","Copy-Paste groovy script."," ","class BasicScript"," ","{"," ","static void main(String[] args)"," ","{"," ","println 'Groovy world!';"," ","}"," ","}"," ","Input Parameters"," ","No"," ","Add groovy input parameters as per requirement."],[" ","The groovy plugin supports getting output values from the Groovy Flow."," ","It has been done by parsing all values which the Groovy flow writes to the Console during execution, the parsing mechanism looks for any “key=value” pair and if it been found so the Key and Value been added to the Action Output Values list."],[" ","Prepare the Groovy Flow Code for Sharing Output Values"," ","Open the Script in notepad or another Editor."," ","Look for the places in code (either tested class methods or actual test methods) which have values that can be shared with Ginger during execution"," ","In each such place, add a “println()” line of code with the Value key name equal to the value that needs to be shared, see sample below:"],[" ","Configure any one of the Groovy Actions configurations"," ","After execution end, go to Action “Output Values” tab and see all output values which were parsed in run time"," ","Now you can set Validations on top of those values or pass them to Variables/Data Source or others to be used in the next Actions/other in the Ginger flow"]],"id":"84"})
rh._.exports({"0":[[" ","Ginger Ruby Plugin – User Guide"]],"1":[[" ","Ginger Ruby Plugin – User Guide"],[" "," The Ruby Plugin target is to allow executing Ruby scripts from Ginger as an integrative part of the Ginger test flow."," ","            Ginger Ruby plugin allows to:"," ","Configure Ruby script execution by using a script file."," ","Configure Ruby script execution by using script content."," ","            For the above execution methods ginger ruby plugin offers:"," ","Send execution Input Values to Ruby script."," ","Get execution output values by parsing and showing console values and look for “key=value” pairs"," ","            The purpose of this document is to provide step by step guide on the Ginger Ruby plugin way of installing and using it."],[" ","Please see below the items which need to be set up on the testing environment before executing the Ruby plugin."],[" ","The plugin requires .NET 7 SDK or above to be installed on the machine it is running on. Please download and install it from ","Microsoft Official Page","."],[" ","Ruby installation is a must for the plugin to work."],[" ","The Ruby script files need to be located on the machine on which the Ruby Plugin running."," ","It is recommended to place the script under the Ginger Solution “Documents” folder and use relative paths to it (like “~/Documents/Scripts”) so it will work on any user machine."],[" ","Ginger Ruby plugin needs to be installed to the Ginger Solution to be used."," ","Please follow the below steps to perform it."],[" ","Download and Install the latest/required Ginger version from ","here"," ","Launch Ginger and add a Solution to it"," ","In Solution go to Resources-> Plugins"," ","Click on the “Download Plugin” tab"," ","Select “Ruby” Plugin from loaded list of Plugins"," ","Select latest/required Plugin version"," ","Click on Install"," ","      Once installation is done, shift to the “Installed” tab and confirm the ”Ruby” plugin appears on the tree- you will see the Plugin details on the right including its "," "," embedded action types."],[" ","Please follow the below steps to execute the Ruby script."],[" ","Add Business Flow or select an existing one and click on “Automate” for loading it on Automate page"," ","Click on Add Action button, in the loaded window go to “Plugins Actions”"," ","Select “Run Script file” Action"," ","Set Action configurations according to the below:"," ","Field Name"," ","Mandatory?"," ","Field Description"," ","Sample Value"," ","Comments"," ","Ruby Script Path"," ","Yes"," ","Full Path of the ruby script file."," ","“C:\\Work\\Ruby\\ RubyScript.py”"," ","For allowing the Action to run on any machine It is recommended to place the ruby script file under the Ginger Solution “Documents” folder and set a relative path to it in Action definitions like:"," ","“~\\Documents\\Scripts\\BasicScript.py”"," ","Delimiter"," ","No"," ","Split the console output param/value"," ","="," ","Input Parameters"," ","No"," ","Add ruby input parameters as per requirement."],[" ","Add Business Flow or select an existing one and click on “Automate” for loading it on Automate page"," ","Click on Add Action button, in the loaded window go to “Plugins Actions”"," ","Select “Run Script” Action"," ","Set Action configurations according to the below:"," ","Field Name"," ","Mandatory?"," ","Field Description"," ","Sample Value"," ","Comments"," ","Ruby Script Content"," ","Yes"," ","Copy-Paste Ruby script."," ","if ARGV.length != 2"," ","puts \"We need exactly two arguments\""," ","exit"," ","end"," ","num1=ARGV[0].to_i"," ","num2=ARGV[1].to_i"," ","sum=num1+num2"," ","puts \"Result = #{sum}\""," ","Delimiter"," ","No"," ","Split the console output param/value"," ","="," ","Input Parameters"," ","No"," ","Add Ruby input parameters as per requirement."],[" ","   Ruby plugin supports getting output values from the Ruby Flow."," ","It has been done by parsing all values which the Ruby flow writes to the Console during execution, the parsing mechanism looks for any “key=value” pair and if it been found so the Key and Value been added to the Action Output Values list."],[" ","Prepare the Ruby Flow Code for Sharing Output Values"," ","Open the Script in notepad or another Editor."," ","Look for the places in code (either tested class methods or actual test methods) which have values that can be shared with Ginger during execution"," ","In each such place, add a “puts” line of code with the Value key name equal to the value that needs to be shared, see sample below:"],[" ","Configure any one of the Ruby Actions configurations"," ","After execution end, go to Action “Output Values” tab and see all output values which were parsed in run time"," ","Now you can set Validations on top of those values or pass them to Variables/Data Source or others to be used in the next Actions/other in the Ginger flow"]],"3":[[" ","Purpose"],[" ","\n      Prerequisites"],[" ",".NET 7 SDK Installation"],[" ","    Ruby Installation"],[" ","   Script"],[" ","Install Ruby Plugin"],[" ","Add Ruby Plugin to Ginger Solution"],[" ","   Executing Ruby Script"],[" ","   Execute Ruby script using an external file."],[" ","     Execute Ruby script using content"],[" ","\n      ‎ Get Output Values from Ruby Flow to Ginger Flow"],[" ","  How to Get Output Values from Ruby Flow to Ginger Flow"],[" "," Configure Ginger Ruby Plugin Action to Read Output Values"]],"id":"85"})
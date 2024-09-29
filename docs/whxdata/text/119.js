rh._.exports({"0":[[" ","Ginger TestNG Plugin – User Guide"]],"2":[[" ","Purpose"],[" ","Prerequisites"],[" ",".NET 7 SDK Installation"],[" ","  Java Installation"],[" ","Maven Installation"],[" ","Java/Maven Project"],[" "," Install TestNG Plugin"],[" "," Add TestNG Plugin to Ginger Solution"],[" ","  Executing TestNG Flow using TestNG XML"],[" "," Executing Java Project TestNG Flow using TestNG XML"],[" "," Executing Maven Project TestNG Flow using TestNG XML"],[" "," Executing TestNG Flow using Free Command"],[" ","Executing Java Project TestNG Flow using Free Command"],[" "," Executing Maven Project TestNG Flow using Free Command"],[" ","  Sending Input Values to TestNG Flow from Ginger Flow"],[" "," How to Send Input Values to TestNG Flow from Ginger Flow"],[" ","   Get Output Values from TestNG Flow to Ginger Flow"],[" ","   How to Get Output Values from TestNG Flow to Ginger Flow"],[" ","   Parsing TestNG Flow Execution Results"],[" "," How to Get TestNG Execution Results on Ginger Action"]],"3":[[" "," Ginger TestNG Plugin – User Guide"],[" ","        The TestNG Plugin target is to allow executing TestNG Java/Maven projects tests from Ginger as an integrative part of the Ginger test flow."," ","       Ginger TestNG plugin allows to:"," ","Configure Java/Maven TestNG execution by TestNG test configuration XML"," ","Configure Java/Maven TestNG execution by free command line"," ","    For the above execution methods the Ginger TestNG plugin offers:"," ","Send execution Input Values by overwriting the TestNG test XML parameters values"," ","Get execution output values by parsing execution console values and look for “key=value” pairs"," ","Automatic TestNG execution results parsing and showing the below on Ginger Action/Report:"," ","Number of Passed/Failed/Skipped/Ignored/Total tests"," ","Executed Suite/s details"," ","Execution status of each executed Test"," ","Error details for Failed/Skipped tests"," ","     The purpose of this document is to provide step by step guide on the Ginger TestNG plugin way of installing and using it."],[" ","Please see below the items which need to be set up on the testing environment before executing the TestNG plugin."],[" ","The plugin requires .NET 7 SDK or above to be installed on the machine it is running on. Please download and install it from ","Microsoft Official Page","."],[" ","Java installation is a must for the plugin to work."," ","“JAVA_HOME” environment variable system configuration is also required in case not specifying a specific path for the “java” executable in the Plugin Action definitions."],[" ","Maven installation is a must just in case executing the Maven Java project."," ","“MAVEN_HOME”/”M2_HOME” environment variable system configuration is also required in case not specifying a specific path for the “mvn” executable in the Plugin Action definitions."],[" ","The Java/Maven project source files need to be located on the machine on which the TentNG Plugin running on."," ","It is recommended to place the project under the Ginger Solution “Documents” folder and use relative paths to it (like “~/Documents/MyJavaProject”) so it will work on any user machine."," ","\n      ‎"],[" ","Ginger TestNG plugin needs to be added to the Ginger Solution to be used."," ","Please follow the below steps to perform it."],[" ","Download and Install the latest/required Ginger version from ","here"," ","Lunch Ginger and add Solution to it"," ","In Solution go to Resources Plugins"," ","Click on the “Online” tab"," ","Select “Test NG” Plugin from loaded list of Plugins"," ","Select latest/required Plugin version"," ","Click on Install"," ","Once installation is done, shift to the “Installed” tab and confirm ”Test NG” plugin appears on the tree- you will see the Plugin details on the right including its embedded Action types"," ","\n      ‎"],[" "," TestNG plugin allows executing TestNG testing flows of “regular” Java projects and Maven Java projects. "," "," Please follow the below steps for executing each."],[" ","Add Business Flow or select an existing one and click on “Automate” for loading it on Automate page"," ","Click on Add Action button, in the loaded window go to “Plugins Actions”"," ","Select “Execute TestNG Tests by TestNG XML” Action"," ","Set Action configurations according to the below:"," ","Field Name"," ","Mandatory?"," ","Field Description"," ","Sample Value"," ","Comments"," ","Overwrite Java Home Path"," ","No"," ","(assuming “JAVA_HOME” system variable was configured)"," ","Full Path of Java executer (java.exe in windows or java in Linux)."," ","If the value has not been set (recommended) so “JAVA_HOME” system environment variable value will be used automatically."," ","If “bin\\java” is missing from provided path so it has been added automatically."," ","“C:\\Program Files\\Java\\jdk1.8.0_191\\bin\\java.exe”"," ","For allowing the Action to run on any machine It is recommended to configure the “JAVA_HOME” system variable on the running machine and to keep this Action field value empty"," ","Java Project Bin Path"," ","Yes"," ","Full Path of the Java Project “bin” folder."," ","If “bin” is missing from provided path so it has been added automatically."," ","“C:\\Users\\menik\\Documents\\MENIK05\\Demo\\Demo Materials\\TestNG Projects\\JavaTestNG\\bin”"," ","For allowing the Action to run on any machine It is recommended to place the Java project folder under the Ginger Solution “Documents” folder and set a relative path to it in Action definitions like:"," ","“~\\Documents\\TestNG Projects\\JavaTestNG\\bin”"," ","Java Project Resources Path"," ","Yes"," ","Full Path of the Java Project dependencies/resources Jars folder."," ","“C:\\Users\\menik\\Documents\\MENIK05\\Ginger Solutions\\Features Demo\\Documents\\TestNG Projects\\JavaTestNG\\Resources”"," ","For allowing the Action to run on any machine It is recommended to place the Resources project folder under the Ginger Solution “Documents” folder and set a relative path to it in Action definitions like:"," ","“~\\Documents\\TestNG Projects\\JavaTestNG\\Resources”"," ","Resources folder not must sit under the Java project folder"," ","Testing XML Path"," ","Yes"," ","Full/Relative Path to the TestNG XML to execute"," ","\"C:\\Users\\menik\\Documents\\MENIK05\\Demo\\Demo Materials\\TestNG Projects\\JavaTestNG\\bin\\Calculator\\testng.xml\""," ","Or"," ","\"\\bin\\Calculator\\testng.xml\""," ","The name of the XML can be any name."," ","For the rest of the Action configurations fields- see other sections in this user guide"],[" ","Add Business Flow or select an existing one and click on “Automate” for loading it on Automate page"," ","Click on Add Action button, in the loaded window go to “Plugins Actions”"," ","Select “Execute Maven Project TestNG Tests by TestNG XML” Action"," ","Set Action configurations according to the below:"," ","Field Name"," ","Mandatory?"," ","Field Description"," ","Sample Value"," ","Comments"," ","Overwrite Maven Home Path"," ","No"," ","(assuming “MAVEN_HOME” / “M2_HOME” system variable was configured)"," ","Full Path of Mvn executer (mvn.cmd in windows or mvn in Linux)."," ","If the value has not been set (recommended) so “MAVEN_HOME” / “M2_HOME” system environment variable value will be used automatically."," ","If “bin\\mvn” is missing from provided path so it has been added automatically."," ","“C:\\Program Files (x86)\\apache-maven-3.5.3\\bin\\mvn.cmd”"," ","For allowing the Action to run on any machine It is recommended to configure the “MAVEN_HOME” / “M2_HOME” system variable on the running machine and to keep this Action field value empty"," ","Maven Project Folder Path"," ","Yes"," ","Full Path of the Maven Project folder."," ","“C:\\Users\\menik\\Documents\\MENIK05\\Demo\\Demo Materials\\TestNG Projects\\MavenTestNG”"," ","For allowing the Action to run on any machine It is recommended to place the Maven project folder under the Ginger Solution “Documents” folder and set a relative path to it in Action definitions like:"," ","“~\\Documents\\TestNG Projects\\MavenTestNG”"," ","Perform Maven Install"," ","No"," ","Check the check box in case the Maven “install” operation is needed to be done before starting the testing"," ","Testing XML Path"," ","Yes"," ","Full/Relative Path to the TestNG XML to execute"," ","\"C:\\Users\\menik\\Documents\\MENIK05\\Demo\\Demo Materials\\TestNG Projects\\MavenTestNG\\src\\main\\java\\com\\Calculator\\testng.xml\""," ","Or"," ","“\\src\\main\\java\\com\\Calculator\\testng.xml\""," ","The name of the XML can be any name."," ","For the rest of the Action configurations fields- see other sections in this user guide"," ","\n      ‎"],[" ","In case the user needs to execute TestNG flow using customized arguments or to integrate some Java/Maven commands with it, he can use the Java/Maven command line Action to perform it using a fully customized command to be used."],[" ","Add Business Flow or select an existing one and click on “Automate” for loading it on Automate page"," ","Click on Add Action button, in the loaded window go to “Plugins Actions”"," ","Select “Execute Java Free Command” Action"," ","Set Action configurations according to the below:"," ","Field Name"," ","Mandatory?"," ","Field Description"," ","Sample Value"," ","Comments"," ","Overwrite Java Home Path"," ","No"," ","(assuming “JAVA_HOME” system variable was configured)"," ","Full Path of Java executer (java.exe in windows or java in Linux)."," ","If the value has not been set (recommended) so “JAVA_HOME” system environment variable value will be used automatically."," ","If “bin\\java” is missing from provided path so it has been added automatically."," ","“C:\\Program Files\\Java\\jdk1.8.0_191\\bin\\java.exe”"," ","For allowing the Action to run on any machine It is recommended to configure the “JAVA_HOME” system variable on the running machine and to keep this Action field value empty"," ","Java Working Folder Path"," ","Yes"," ","Path of the working folder to run the command from."," ","Usually, the needed working folder is the Java project folder"," ","“C:\\Users\\menik\\Documents\\MENIK05\\Demo\\Demo Materials\\TestNG Projects\\JavaTestNG”"," ","For allowing the Action to run on any machine It is recommended to place the project folder under the Ginger Solution “Documents” folder and set a relative path to it in Action definitions like:"," ","“~\\Documents\\TestNG Projects\\JavaTestNG”"," ","Free Command Arguments"," ","Yes"," ","Actual command line arguments to execute."," ","No need to mention the “java” executer at beginning of the command, it will be added automatically."," ","“-cp \"C:\\Users\\menik\\Documents\\MENIK05\\Demo\\Demo Materials\\TestNG Projects\\JavaTestNG\\bin;C:\\Users\\menik\\Documents\\MENIK05\\Demo\\Demo Materials\\TestNG Projects\\JavaTestNG\\Resources\\*\" org.testng.TestNG \"bin\\Calculator\\testng.xml\""," ","It is possible to transform the command to be dynamic by clicking on the “…” button and integrate Value Expression arguments in it."," ","Testing XML Path"," ","No"," ","Full/Relative Path to the TestNG XML to execute."," ","Needs to be provided only if “Parameters Overwrite” functionality is needed."," ","\"C:\\Users\\menik\\Documents\\MENIK05\\Demo\\Demo Materials\\TestNG Projects\\JavaTestNG\\bin\\Calculator\\testng.xml\""," ","Or"," ","\"\\bin\\Calculator\\testng.xml\""," ","The name of the XML can be any name."," ","For the rest of the Action configurations fields- see other sections in this user guide"],[" ","Add Business Flow or select an existing one and click on “Automate” for loading it on Automate page."," ","Click on Add Action button, in the loaded window go to “Plugins Actions”"," and Select “Execute Java Free Command” Action."," ","Set Action configurations according to the below:"," ","Field Name"," ","Mandatory?"," ","Field Description"," ","Sample Value"," ","Comments"," ","Overwrite Maven Home Path"," ","No"," ","(assuming “MAVEN_HOME” / “M2_HOME” system variable was configured)"," ","Full Path of Mvn executer (mvn.cmd in windows or mvn in Linux)."," ","If the value has not been set (recommended) so “MAVEN_HOME” / “M2_HOME” system environment variable value will be used automatically."," ","If “bin\\mvn” is missing from provided path so it has been added automatically."," ","“C:\\Program Files (x86)\\apache-maven-3.5.3\\bin\\mvn.cmd”"," ","For allowing the Action to run on any machine It is recommended to configure the “MAVEN_HOME” / “M2_HOME” system variable on the running machine and to keep this Action field value empty"," ","Maven Project Folder Path"," ","Yes"," ","Full Path of the Maven Project folder."," ","“C:\\Users\\menik\\Documents\\MENIK05\\Demo\\Demo Materials\\TestNG Projects\\MavenTestNG”"," ","For allowing the Action to run on any machine It is recommended to place the Maven project folder under the Ginger Solution “Documents” folder and set a relative path to it in Action definitions like:"," ","“~\\Documents\\TestNG Projects\\MavenTestNG”"," ","Free Command Arguments"," ","Yes"," ","Actual command line arguments to execute."," ","No need to mention the “mvn” executer at beginning of the command, it will be added automatically."," ","“clean install test -Dsurefire.suiteXmlFiles=\"src\\main\\java\\com\\Calculator\\testng.xml\"”"," ","It is possible to transform the command to be dynamic by clicking on the “…” button and integrate Value Expression arguments in it."," ","Testing XML Path"," ","No"," ","Full/Relative Path to the TestNG XML to execute."," ","Needs to be provided only if “Parameters Overwrite” functionality is needed."," ","\"C:\\Users\\menik\\Documents\\MENIK05\\Demo\\Demo Materials\\TestNG Projects\\MavenTestNG\\src\\main\\java\\com\\Calculator\\testng.xml\""," ","Or"," ","“\\src\\main\\java\\com\\Calculator\\testng.xml\""," ","The name of the XML can be any name."," ","For the rest of the Action configurations fields- see other sections in this user guide"," ","\n      ‎"],[" "," TestNG"," plugin supports sending input values from Ginger flow to TestNG flow."," ","    It has been done by overwriting the values of the TestNG XML Parameters."," ","    Input values can be static or dynamic (variables, environment parameters, Etc.) by using the Value Expression capabilities."," ","    In case Input values have been configured, the plugin will duplicate the original TestNG XML into a temp file, will overwrite the Parameters values on the          "," "," duplicated XML and will use the duplicated XML for actual execution."," ","   In case the user prefers to overwrite the original TestNG XML and not to create temp duplication he should check the “Overwrite Original TestNG XML”     "," ","   check box."],[" ","Configure any one of the TestNG Actions configurations"," ","Set the “TestNG XML Path” field in the Action configurations"," ","Open the TestNG XML to view its content and look for the “Parameters” nodes in it which you want to overwrite its values"," ","For each parameter which you want to overwrite its value:"," ","Add row to the “TestNG Xml Parameters To Overwrite” grid"," ","Set the cell of the “Name” column as the name on Parameter in the TestNG XML"," ","In case the Parameter appears in more than one node and you want to modify only a specific one and not all so set the name on the Parameter Parent node in the cell of the “ParentNodeName” column"," ","Set the value to be used in the “Value” column cell"," ","All cell values can be fully/partially dynamic using the Value Expression editor (“…” button)."," ","\n      ‎"],[" ","TestNG plugin supports getting output values from the TestNG Flow."," ","It has been done by parsing all values which the TestNG flow write to the Console during execution, the parsing mechanism looks for any “key=value” pair and if it been found so the Key and Value been added to the Action Output Values list."," ","TestNG plugin also supports getting all the Errors which been written to the Console during TestNG Flow execution and Fail the Ginger Action in case an Error exists. For enabling it you should check the “Fail Action Due To Console Errors”"],[" ","Prepare the TestNG Flow Code for Sharing Output Values"," ","Open the Java project in Eclipse or other IDE"," ","Look for the places in code (either tested class methods or actual test methods) which in them you have the value that can be shared with Ginger during execution"," ","In each such place, add a “System.out.println()” line of code with the Value key name equal to the value that needs to be shared, see sample below:"," ","Configure Ginger TestNG Plugin Action to Read Output Values"," ","Configure any one of the TestNG Actions configurations"," ","For the Action to read and parse the Console outputs, check the “Parse Console Outputs” check box"," ","After execution end, go to Action “Output Values” tab and see all output values which were parsed in run time"," ","Now you can set Validations on top of those values or pass them to Variables/Data Source or others to be used in the next Actions/other in the Ginger flow"," ","\n      ‎"],[" ","TestNG Plugin supports parsing the TestNG execution results XML (testing-results.xml)."," ","The values which been pulled from the TestNG execution results XML are:"," ","Number of Passed/Failed/Skipped/Ignored/Total tests"," ","Executed Suite/s details"," ","Execution status of each executed Test"," ","Error details for Failed/Skipped tests"," ","Validations can be configured on top of the report values, like setting validation that specific Test status is “Passed”."," ","Ginger Action status can indicate if all TestNG flow Tests Passed or not, in case the “Fail Action Due To TestNG Results Xml Failure” check box is checked, Ginger Action status will be “Passed” only if all TestNG flow tests will Pass and in the case at least 1 TestNG flow test will Fail so also the Ginger Action status will be “Failed” and the failure reason will be shown on the Action Status and also in Ginger execution report."],[" ","Configure any one of the TestNG Actions configurations"," ","Check the “Parse TestNG Results Xml” check box"," ","In case the TestNG “TestNG-results.xml” is configured not to be generated in the default location of it, please specify the full path to the Folder in which the “testng-results.xml” will be found at the end of Execution in the “Overwrite TestNG Results Xml Default Folder Path”. If the default location is been used so you can leave the text box empty."," ","For Failing the Action in case the TestNG results contain Failures/Errors – please check the “Fail Action Due To TestNG Results Xml Failure” check box"]],"id":"119"})
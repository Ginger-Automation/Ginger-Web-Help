rh._.exports({"0":[[" ","PACT PlugIn User Guide"]],"1":[[" ","Ginger ","PACT Plugin"],[" ","PlugIn Package Exist on your machine"," ","Ginger Installed on your machine"],[" ","The plugin requires .NET 7 SDK or above to be installed on the machine it is running on. Please download and install it from ","Microsoft Official Page","."],[" ","          1. From The left tree menu right click on Plugins"," ","          2. Select Add Embedded PlugIn or Add System PlugIn"," ","Embedded PlugIn will copy the plugin folder to the Ginger Solution Folder so the user will be able to share the solution with the PlugIn included."," ","System PlugIn will refer to the location the Plugin is currently located on the machine and will not be included in the solution folder, to be used when PlugIn DLL cannot be located at the Ginger Solution folder."," ","    Select the Plugin folder. (Make sure the GingerPluginInfo.json file is included in this folder)"," ","    Once loaded the tree item will be selected and you will see the plugin Page."," ","Click on “PlugIn Text Editors” to see the Text Editors configured under this plugin."],[" ","Prerequisites:"," ","Pact PlugIn loaded."," ","From the left tree menu right click on the “Documents” folder"," ","Select “Created Document”  “Create Pact Document”"," ","Note, if you can’t find the “Create Pact Document” option you probably haven’t loaded the plugin as expected"," ","Enter Pact file name"," ","Pact file created with text from the pact template, once the new tree item selected you will see the Pact Content Editor"],[" ","Prerequisites:"," ","Pact PlugIn loaded."," ","From the left tree menu right click on the “Documents” folder"," ","Select “Import Document” -> “Import Pact Document”"," ","Note, if you can’t find the “Import Pact Document” option you probably haven’t loaded the plugin as expected"," ","On Import PACT Page browses for file location and then click Import."," ","The Pact file imported, once the new tree item selected you will see the Pact Content Editor"],[" ","Prerequisites:"," ","Pact PlugIn loaded."," ","Pact File Created or Imported to the Documents Folder."," ","From the left tree, menu expend the “Documents” folder and select the created or imported .pact file"," ","Once the file selected you will see the PACT Content Editor"," ","Editor functions:"," ","Highlighting of saved words (Interaction, Given, Upon Receiving, Method, etc.)"," ","Comments highlighted in green when the text is after “//” or between “/*” and “*/”"," ","Tags highlighting"," ","Folding - Each Interaction can be collapsed and extended by clicking (-) and (+) buttons"," ","Each value will be highlighted in blue while it between quotes"," ","Table Editor Page will help you add new values to the Headers variable:"," ","Click on the table you want to edit"," ","Add/remove values from the below table page"," ","Click on update"," ","Save button will save the file imported under the solution"," ","Undo button will undo the last action"," ","Delete Selected button will delete the selected section"],[" ","Prerequisites:"," ","Pact PlugIn loaded."," ","Pact File Created or Imported to the Documents Folder."," ","On the “PACT Content Editor” Page Click on the Compile button"," ","The Compile process will check:"," ","That all the Variables (Given, Upon Receiving, Headers, etc.) which important to build the interaction exists"," ","That all the values after each variable are not empty"," ","That the Pact Interactions can be built with all the provided values"," ","If any of the above is not passing the compiler will throw an informative error with an error line number and the line will be highlighter on the PACT Content Editor."],[" ","Prerequisites:"," ","Pact PlugIn loaded."," ","Pact File Created or Imported to the Documents Folder."," ","Pact File Compiled."," ","On the “PACT Content Editor” Page Click on the Export To Java button"," ","Select a folder to export the Java file to"," ","It will ask you if you want to use the default Java template"," ","Click Yes will take the ordinary Java template"," ","Click No and you will be asked to select a new template file, make sure the file you are selecting contains the Interactions Data place holder “<<Interactions_Data>>” otherwise the export will be failed."," ","Once the Export process will finish the selected folder will be opened and the file will be inside with the following format “PactToJava<<TimeStamp>>.Java” for example “PactToJava13_11_2017_17_13_47.Java”"," ","Also, a success message will be popped up"],[" ","Prerequisites:"," ","Pact PlugIn loaded."," ","Pact File Created or Imported to the Documents Folder."," ","Pact File Compiled."," ","On the “PACT Content Editor” Page Click on the Export To JSON button"," ","Select a folder to export the JSON file to"," ","Once the Export process will finish the selected folder will be opened and the file will be inside another folder with the following format “PactToJSON<<TimeStamp>>” for example “PactToJson13_11_2017_17_18_02.Java”"," ","Inside this folder, you will see the JSON file with a naming convention built from the Consumer and Provider defined on the PACT Content Editor."," ","Also, you will find a log directory for this extract execution tracing"," ","A success message will be popped up."],[" ","Add New (Any) Action:"," ","Go to Automate tab"," ","On Actions Grid click on the Plus (+) button"," ","On the Add Action page go to the PlugIns Actions tab"," ","Select the desired action"," ","Click Add Action button"],[" ","Prerequisites:"," ","Pact PlugIn loaded"," ","This action should be used for starting the PACT server for it to be ready to get the Interactions load."," ","Configure free port on the port field."," ","If the Use Dynamic port is checked, Ginger will search for a free port on your machine and will use it to start the server."," ","Run Action"," ","When Running the Action – the Mock service is started at ","http://localhost:1234"," with the port specified."," ","On Extra Info Field (Can be seen on the actions grid or from the start server action edit page on another tab) you will find the server location it has been started. http://localhost: <<port specified>>"],[" ","Prerequisites:"," ","Pact PlugIn loaded."," ","Pact File Created or Imported to the Documents Folder."," ","Pact File Compiled."," ","Pact File Exported to JSON"," ","Pact Server Started"," ","This Action should be used to Load the Interaction JSON file to fire real API requests against the PACT server."," ","Open the Action Edit Page"," ","Browse for the Exported JSON file"," ","Run Action"," ","Note!: The server should be up and running while executing this action"],[" ","Prerequisites:"," ","Pact PlugIn loaded."," ","Pact File Created or Imported to the Documents Folder."," ","Pact File Compiled."," ","Pact File Exported to JSON"," ","Pact Server Started"," ","This Action should be used to clean all interaction which been loaded to the pact server"," ","This action doesn’t require any configuration"," ","Simply add the action and run it to clean all loaded interactions from the server"],[" ","Prerequisites:"," ","Pact PlugIn loaded."," ","Pact Server Started"," ","This Action should be used to stop the pact server"," ","This action doesn’t require any configuration"," ","Simply add the action and run it to stop the Pact server"]],"2":[[" "," Start Mock Server"],[" "," Load Interaction File"],[" "," Clear Interaction"],[" "," Stop Mock Server"],[" ","\n      ‎"]],"3":[[" ","Prerequisites"],[" ",".NET 7 SDK Installation"],[" ","Load PlugIn"],[" "," Create Pact Document"],[" "," Import Pact Document"],[" "," Edit Pact Document"],[" "," Compile"],[" "," Export to Java File"],[" "," Export to JSON File"],[" "," Pact Actions"]],"id":"94"})
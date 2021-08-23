rh._.exports({"0":[["PACT PlugIn User Guide"]],"1":[["\n  ","\n    "," ","\n    ","                               ","PACT Ginger Plugin","\n    ","\n    "," ","\n    ","Content","\n    ","Prerequisites","\n    ","Load PlugIn","\n    ","Create Pact Document","\n    ","Import Pact Document","\n    ","Edit Pact Document","\n    ","Compile","\n    ","Export to Java File","\n    ","Export to Json File","\n    ","Pact Actions","\n    ","\n      ","Start Mock Server","\n      ","Load Interaction File","\n      ","Clear Interaction","\n      ","Stop Mock Server","\n    ","\n    "," ","\n    "],["\n    "],["\n    ","PlugIn Package Exist on your machine","\n    ","Ginger Installed on your machine","\n    "," ","\n    "," ","\n    ","Load PlugIn","\n    "," ","\n    ","          1. From The left tree menu right click on Plugins","\n    ","          2. Select Add Embedded PlugIn or Add System PlugIn","\n    ","Embedded PlugIn will copy the plugin folder to the Ginger Solution Folder so the user will be able to share the solution with the PlugIn included.","\n    ","System PlugIn will refer to the location the Plugin is currently located on the machine and will not be included in the solution folder, to be used when PlugIn DLL cannot be located at the Ginger Solution folder.","\n    "," ","\n    ","\n    "," ","\n    ","\n      ","    Select the Plugin folder. (Make sure the GingerPluginInfo.json file is included in this folder)","\n      ","    Once loaded the tree item will be selected and you will see the plugin Page.","\n    ","\n    "," ","\n    ","\n    "," ","\n    ","\n      ","Click on “PlugIn Text Editors” to see the Text Editors configured under this plugin.","\n    ","\n    ","\n    "," ","\n    "],["\n    ","Prerequisites:","\n    ","Pact PlugIn loaded.","\n    ","From the left tree menu right click on the “Documents” folder","\n    ","Select “Created Document”  “Create Pact Document”","\n    ","\n    "," ","\n    ","Note, if you can’t find the “Create Pact Document” option you probably haven’t loaded the plugin as expected","\n    ","Enter Pact file name","\n    ","Pact file created with text from the pact template, once the new tree item selected you will see the Pact Content Editor","\n    "," ","\n    ","\n    "," ","\n    "],["\n    ","Prerequisites:","\n    ","Pact PlugIn loaded.","\n    ","From the left tree menu right click on the “Documents” folder","\n    ","Select “Import Document” -> “Import Pact Document”","\n    "," ","\n    ","\n    "," ","\n    ","Note, if you can’t find the “Import Pact Document” option you probably haven’t loaded the plugin as expected","\n    ","\n    ","On Import PACT Page browses for file location and then click Import.","\n    "," ","\n    ","\n    "," ","\n    "," ","\n    ","The Pact file imported, once the new tree item selected you will see the Pact Content Editor","\n    ","\n    "," ","\n    "],["\n    ","Prerequisites:","\n    ","Pact PlugIn loaded.","\n    ","Pact File Created or Imported to the Documents Folder.","\n    ","\n    ","From the left tree, menu expend the “Documents” folder and select the created or imported .pact file","\n    ","Once the file selected you will see the PACT Content Editor","\n    ","Editor functions:","\n    ","Highlighting of saved words (Interaction, Given, Upon Receiving, Method, etc.)","\n    ","Comments highlighted in green when the text is after “//” or between “/*” and “*/”","\n    ","Tags highlighting","\n    ","Folding - Each Interaction can be collapsed and extended by clicking (-) and (+) buttons","\n    ","Each value will be highlighted in blue while it between quotes","\n    ","Table Editor Page will help you add new values to the Headers variable:","\n    ","Click on the table you want to edit","\n    ","Add/remove values from the below table page","\n    ","Click on update","\n    ","Save button will save the file imported under the solution","\n    ","Undo button will undo the last action","\n    ","Delete Selected button will delete the selected section","\n    "],["\n    "],["\n    ","Prerequisites:","\n    ","Pact PlugIn loaded.","\n    ","Pact File Created or Imported to the Documents Folder.","\n    ","\n    ","On the “PACT Content Editor” Page Click on the Compile button","\n    ","\n    "," ","\n    ","The Compile process will check:","\n    ","That all the Variables (Given, Upon Receiving, Headers, etc.) which important to build the interaction exists","\n    ","That all the values after each variable are not empty","\n    ","That the Pact Interactions can be built with all the provided values","\n    ","If any of the above is not passing the compiler will throw an informative error with an error line number and the line will be highlighter on the PACT Content Editor.","\n    "," ","\n    "],["\n    ","Prerequisites:","\n    ","Pact PlugIn loaded.","\n    ","Pact File Created or Imported to the Documents Folder.","\n    ","Pact File Compiled.","\n    "," ","\n    ","On the “PACT Content Editor” Page Click on the Export To Java button","\n    ","\n    "," ","\n    "," ","\n    ","Select a folder to export the Java file to","\n    ","It will ask you if you want to use the default Java template","\n    ","\n    "," ","\n    ","Click Yes will take the ordinary Java template","\n    ","\n    ","Click No and you will be asked to select a new template file, make sure the file you are selecting contains the Interactions Data place holder “<<Interactions_Data>>” otherwise the export will be failed.","\n    ","Once the Export process will finish the selected folder will be opened and the file will be inside with the following format “PactToJava<<TimeStamp>>.Java” for example “PactToJava13_11_2017_17_13_47.Java”","\n    ","Also, a success message will be popped up","\n    "," ","\n    "],["\n    ","Prerequisites:","\n    ","Pact PlugIn loaded.","\n    ","Pact File Created or Imported to the Documents Folder.","\n    ","Pact File Compiled.","\n    "," ","\n    ","On the “PACT Content Editor” Page Click on the Export To JSON button","\n    ","\n    "," ","\n    ","Select a folder to export the JSON file to","\n    ","Once the Export process will finish the selected folder will be opened and the file will be inside another folder with the following format “PactToJSON<<TimeStamp>>” for example “PactToJson13_11_2017_17_18_02.Java”","\n    ","Inside this folder, you will see the JSON file with a naming convention built from the Consumer and Provider defined on the PACT Content Editor.","\n    ","Also, you will find a log directory for this extract execution tracing","\n    ","A success message will be popped up.","\n    "," ","\n    "," ","\n    "],["\n    ","Add New (Any) Action:","\n    ","Go to Automate tab","\n    ","On Actions Grid click on the Plus (+) button","\n    ","On the Add Action page go to the PlugIns Actions tab","\n    ","Select the desired action","\n    ","Click Add Action button","\n    ","\n    "," ","\n    ","\n    "," ","\n    "],["\n    ","Prerequisites:","\n    ","Pact PlugIn loaded","\n    ","\n    "," ","\n    "," ","\n    ","This action should be used for starting the PACT server for it to be ready to get the Interactions load.","\n    ","Configure free port on the port field.","\n    ","If the Use Dynamic port is checked, Ginger will search for a free port on your machine and will use it to start the server.","\n    ","Run Action","\n    ","When Running the Action – the Mock service is started at ","http://localhost:1234"," with the port specified.","\n    ","On Extra Info Field (Can be seen on the actions grid or from the start server action edit page on another tab) you will find the server location it has been started. http://localhost: <<port specified>>","\n    "," ","\n    "],["\n    ","Prerequisites:","\n    ","Pact PlugIn loaded.","\n    ","Pact File Created or Imported to the Documents Folder.","\n    ","Pact File Compiled.","\n    ","Pact File Exported to JSON","\n    ","Pact Server Started","\n    ","\n    "," ","\n    ","This Action should be used to Load the Interaction JSON file to fire real API requests against the PACT server.","\n    ","Open the Action Edit Page","\n    ","Browse for the Exported JSON file","\n    ","Run Action","\n    ","Note!: The server should be up and running while executing this action","\n    "," ","\n    "],["\n    ","Prerequisites:","\n    ","Pact PlugIn loaded.","\n    ","Pact File Created or Imported to the Documents Folder.","\n    ","Pact File Compiled.","\n    ","Pact File Exported to JSON","\n    ","Pact Server Started","\n    ","This Action should be used to clean all interaction which been loaded to the pact server","\n    ","This action doesn’t require any configuration","\n    ","Simply add the action and run it to clean all loaded interactions from the server","\n    "," ","\n    "],["\n    ","Prerequisites:","\n    ","Pact PlugIn loaded.","\n    ","Pact Server Started","\n    ","This Action should be used to stop the pact server","\n    ","This action doesn’t require any configuration","\n    ","Simply add the action and run it to stop the Pact server","\n    "],["\n    "," ","\n    "," ","\n    "," ","\n  ","\n\n"]],"2":[["\n      ‎"],["Prerequisites"],["Create Pact Document"],["Import Pact Document"],["Edit Pact Document"],[" "],["Compile"],["Export to Java File"],["Export to JSON File"],["Pact Actions"],["Start Mock Server"],["Load Interaction File"],["Clear Interaction"],["Stop Mock Server"],["\n      ‎"," "]],"id":"88"})
rh._.exports({"0":[["How to Execute Run Set Via CLI"]],"1":[["\n  ","\n    ","                           ","\n    ","                        ","How to Execute Run Set Via CLI","\n    "," ","\n    "," ","\n    ","Contents","\n    ","Introduction","\n    ","How to Create Auto Run Set Configuration?","\n    ","General Options Tab","\n    ","Configurations Type Tab","\n    ","Execution Shortcut","\n    ","How to Trigger Execution via CLI?","\n    "," ","\n    "],["\n    "],["\n    "," Auto Run Configuration is used when the Run set is required to run via command line for automatic execution of Ginger Run set as part of Automation needed or for CI/CD processes integration.","\n    "],["\n    "," Go to the Run tab of the solution","\n    "," Click on the ‘Create Run Set Auto Run Configuration’ button as shown below.","\n    ","                 ","\n    "," ","\n    "," The Wizard is opened.","\n    ","                 ","\n    "," ","\n    "," ","\n    "],["\n    "," ","\n    ","                  ","\n    "," ","\n    ","Download/ Update Solution from source control","\n    ","\n    ","Note:- This option is disabled if the solution is not downloaded from the source control repository.","\n    ","It is enabled and checked if the solution is from the source control repository.","\n    ","\n    ","In case checked, Ginger Solution will be downloaded/updated from source control on the execution machine before the execution starts.","\n    ","\n    ","Show Run Set execution window while running (on Windows only)","\n    ","This is option is not selected by default. If a user wants to see the execution status in Ginger while the run set is run, then use this option.","\n    ","It displays only the Ginger Run tab. The status of the Run set along with the Runners, Activities and Actions are displayed during the execution as shown below.","\n    ","It is recommended to run without UI for compatibility and performance reasons, for that please keep this option unchecked.","\n    ","\n    "," ","\n    ","Run Set Analyzer before execution","\n    ","\n    ","This option is selected by default. It helps in finding any critical/high design issues in the Business Flow which might impact the execution. In such a case, the execution is not started until the issues are fixed by the user.","\n    ","When this option is unchecked, all the design issues are ignored, and execution starts without any checks.","\n    "," ","\n    "," ","\n    "],["\n    "," ","\n    ","                 ","\n    "," ","\n    ","Config","\n    ","This option is used to create a config file which is used to execute a run set.","\n    ","It contains the details like the path of the solution, environment name to be used, the Analyzer to be run or not, the run set name and to show the Ginger window or not when execution is going on.","\n    ","\n    ","The file name and the path can be edited by the user.","\n    ","The default path is the path of the RunsetShortCuts folder inside the solution.","\n    "," ","\n    ","Dynamic","\n    ","The dynamic config file is supported in JSON and XML format, it is recommended to use the JSON format which supports much more flexible configurations.","\n    ","       ","\n    "," ","\n    ","      ","\n    "," ","\n    ","JSON Dynamic file supports 2 main modes:","\n    ","Existing Run Set execution configurations- User can specify how exactly an existing Run set will be executed by manipulating it:","\n    ","Runners execution configuration such as Parallel/Sequential, if to stop on failure or not, etc.","\n    ","Applications-Agents mapping- set different Agent than configured on Ginger","\n    ","Change selected Environment/s","\n    ","Business Flows Active flag for disabling some of the Business Flows","\n    ","Business Flow Input values- can define which value will be set to each input, including Output Values configuration","\n    ","Run set Operations configurations manipulation (currently only Mail Report operation changes is supported)","\n    ","On run time from CLI, Ginger will load the existing Run set, then will manipulate it according to the JSON configurations and then will execute the manipulated Run set.","\n    ","Changes are not been saved to the Run set and have been used only during execution.","\n    ","Note: JSON should include only the nodes of the items (Runners/Business Flows/etc.) which need to be modified on the Run set before execution starts.","\n    "," ","\n    ","Sample existing Run set manipulation JSON:","\n    "," ","\n    ","{","\n    ","\"SolutionScmDetails\": {","\n    ","\"SCMType\": \"GIT\",","\n    ","\"SolutionRepositoryUrl\": \"https://github.com/Ginger-Automation/TDMTestSolution\",","\n    ","\"User\": \"menikadosh1\",","\n    ","\"Password\": \"XrqycklHMicLOWU2ZayaKg==\",","\n    ","\"PasswordEncrypted\": true,","\n    ","\"UndoSolutionLocalChanges\": false","\n    ","},","\n    ","\"SolutionLocalPath\": \"C:\\\\Ginger Solutions\\\\Cloud\\\\TDMTestSolution\",","\n    ","\"ShowAutoRunWindow\": false,","\n    ","\"VerboseLevel\": \"normal\",","\n    ","\"Runset\": {","\n    ","\"Exist\": true,","\n    ","\"Name\": \"BP_Create\",","\n    ","\"ID\": \"14cdc3e5-3a62-47a1-bfae-34c85ba086e5\",","\n    ","\"EnvironmentName\": \"AOT_221\",","\n    ","\"EnvironmentID\": \"b7ca5289-d0f7-4220-ac3f-f0de95576873\",","\n    ","\"RunAnalyzer\": true,","\n    ","\"RunInParallel\": true,","\n    ","\"StopRunnersOnFailure\": false,","\n    ","\"Runners\": [","\n    ","{","\n    ","\"Name\": \"Runner 1\",","\n    ","\"ID\": \"83cd17d7-1e56-498e-a2d5-18fcc2331b6b\",","\n    ","\"BusinessFlows\": [","\n    ","{","\n    ","\"Name\": \"Create\",","\n    ","\"ID\": \"c3d7d9ad-4336-4576-a516-e9814dc9d523\",","\n    ","\"Active\": true,","\n    ","\"InputValues\": [","\n    ","{","\n    ","\"VariableParentName\": \"CreateCustomer\",","\n    ","\"VariableParentID\": \"c3d7d9ad-4336-4576-a516-e9814dc9d523\",","\n    ","\"VariableName\": \"CustomerCreationType\",","\n    ","\"VariableID\": \"4f35384d-6a63-4154-819f-26baf388e0e9\",","\n    ","\"VariableCustomizationType\": \"Value\",","\n    ","\"VariableCustomizedValue\": \"Type1\"","\n    ","}","\n    ","]","\n    ","}","\n    ","]","\n    ","}","\n    ","],","\n    ","\"Operations\": [","\n    ","{","\n    ","\"$type\": \"RunsetOperations.MailReportOperationExecConfig, Ginger.ExecuterService.Contracts\",","\n    ","\"MailSettings\": {","\n    ","\"EmailMethod\": \"SMTP\",","\n    ","\"SmtpDetails\": {","\n    ","\"Server\": \"ilmail\",","\n    ","\"Port\": \"25\",","\n    ","\"EnableSSL\": true","\n    ","},","\n    ","\"Subject\": \"TDM Execution Details Report- BP_Create\"","\n    ","},","\n    ","\"BodyContentType\": \"HTMLReport\",","\n    ","\"BodyReportTemplateID\": 2,","\n    ","\"IncludeAttachmentReport\": true,","\n    ","\"AttachmentReportTemplateID\": 2,","\n    ","\"AttachmentReportAttachType\": \"Link\",","\n    ","\"CustomizedReportFolder\": \"\\\\\\\\ilrnaginger02\\\\GingerExecuterAgent\\\\Reports\",","\n    ","\"Name\": \"Send HTML Report Email\",","\n    ","\"ID\": \"ca90b21a-aedb-455c-aafb-f2b3a7979d8d\",","\n    ","\"Active\": false,","\n    ","\"Condition\": \"AlwaysRun\",","\n    ","\"RunAt\": \"ExecutionEnd\"","\n    ","}","\n    ","]","\n    ","}","\n    ","}","\n    "," ","\n    ","Virtual Run Set execution configurations- User can specify how exactly not existing Run set will be created virtually during run time, including:","\n    ","Adding any needed number of Runners needed","\n    ","Describe all Runners related configurations","\n    ","Set environment/s to be used","\n    ","Applications-Agents mapping setup","\n    ","Add all Business Flows needed for the execution","\n    ","Business Flow Input values- can define which value will be set to each input, including Output Values configuration","\n    ","Run set Operations configurations (currently only Mail Report operation is supported)","\n    ","On run time from CLI, Ginger will virtually create the Run set as described in the JSON and then will execute it.","\n    ","The virtual Run set is not been saved to Ginger and has been used only during execution.","\n    "," ","\n    ","Sample Virtual Run set JSON:","\n    "," ","\n    ","{","\n    ","\"SolutionScmDetails\": {","\n    ","\"SCMType\": \"GIT\",","\n    ","\"SolutionRepositoryUrl\": \"https://github.com/Ginger-Automation/TDMTestSolution.git\",","\n    ","\"User\": \"menikadosh1\",","\n    ","\"Password\": \"dfQhf/SpUPGl3qhpmneClUb71uDX6Ybq0hyMpeZ0CTzni2KSAvgfHNMggnvfNJeB\",","\n    ","\"PasswordEncrypted\": true","\n    ","},","\n    ","\"Runset\": {","\n    ","\"Exist\": false,","\n    ","\"Name\": \"BP_Create > BP_ModifyPackage > BP_ModifyName\",","\n    ","\"EnvironmentName\": \"VAPP_89\",","\n    ","\"EnvironmentID\": \"ee123103-b2cf-4de9-93a2-143f5cf9b767\",","\n    ","\"RunAnalyzer\": false,","\n    ","\"RunInParallel\": false,","\n    ","\"StopRunnersOnFailure\": true,","\n    ","\"Runners\": [","\n    ","{","\n    ","\"Name\": \"BP_ModifyName\",","\n    ","\"EnvironmentName\": \"VAPP_89\",","\n    ","\"EnvironmentID\": \"ee123103-b2cf-4de9-93a2-143f5cf9b767\",","\n    ","\"OnFailureRunOption\": \"ContinueToRunall\",","\n    ","\"AppAgentMappings\": [","\n    ","{","\n    ","\"ApplicationName\": \"CPQ\",","\n    ","\"ApplicationID\": \"49e7d234-fb87-45ad-bb2e-359930ee1f41\",","\n    ","\"AgentName\": \"APIAgent1\",","\n    ","\"AgentID\": \"ccb7c809-7662-46c6-bf94-d50a3905c2f4\"","\n    ","}","\n    ","],","\n    ","\"BusinessFlows\": [","\n    ","{","\n    ","\"Name\": \"ModifyName\",","\n    ","\"ID\": \"80e3a8df-6af6-4026-b15e-fe033c54699b\",","\n    ","\"InputValues\": [","\n    ","{","\n    ","\"VariableParentName\": \"ModifyName\",","\n    ","\"VariableParentID\": \"80e3a8df-6af6-4026-b15e-fe033c54699b\",","\n    ","\"VariableName\": \"CustomerIDToModify\",","\n    ","\"VariableID\": \"43769aaa-7977-47aa-96de-dedbd98459fc\",","\n    ","\"VariableCustomizationType\": \"OutputVariable\",","\n    ","\"VariableCustomizedValue\": \"94b50452-f59c-422c-a5c1-3a8ddef89a46\"","\n    ","},","\n    ","{","\n    ","\"VariableParentName\": \"ModifyName\",","\n    ","\"VariableParentID\": \"80e3a8df-6af6-4026-b15e-fe033c54699b\",","\n    ","\"VariableName\": \"CustomerNameToSet\",","\n    ","\"VariableID\": \"826290d1-c04d-41b4-bcd1-6089e6007098\",","\n    ","\"VariableCustomizationType\": \"Value\",","\n    ","\"VariableCustomizedValue\": \"zzz\"","\n    ","}","\n    ","]","\n    ","},","\n    ","{","\n    ","\"Name\": \"Generic Validation 2\",","\n    ","\"ID\": \"378221e0-ec95-4301-92f7-cf30b2d7f164\"","\n    ","}","\n    ","]","\n    ","}","\n    ","],","\n    ","\"Operations\": [","\n    ","{","\n    ","\"$type\": \"RunsetOperations.MailReportOperationExecConfig, Ginger.ExecuterService.Contracts\",","\n    ","\"MailSettings\": {","\n    ","\"EmailMethod\": \"SMTP\",","\n    ","\"SmtpDetails\": {","\n    ","\"Server\": \"ilmail.corp.amdocs.com\",","\n    ","\"Port\": \"25\",","\n    ","\"EnableSSL\": false,","\n    ","\"User\": \"ntnet\\\\gingergen\",","\n    ","\"Password\": \"kd7NrCoIP5r4MTNawlQNw2NTwRMFZRueE8k64+WCNxI=\"","\n    ","},","\n    ","\"MailFrom\": \"gingergen@amdocs.com\",","\n    ","\"MailTo\": \"menik@amdocs.com\",","\n    ","\"Subject\": \"eTDM Detailed Execution Report for 'BP_Create > BP_ModifyPackage > BP_ModifyName'\"","\n    ","},","\n    ","\"Comments\": \"Executed via eTDM by menikadosh1\",","\n    ","\"BodyContentType\": \"HTMLReport\",","\n    ","\"IncludeAttachmentReport\": true,","\n    ","\"AttachmentReportAttachType\": \"Link\",","\n    ","\"CustomizedReportFolder\": \"\\\\\\\\ilrnaginger02\\\\GingerExecuterAgent\\\\Reports\",","\n    ","\"Name\": \"eTDM Detailed Execution Report for 'BP_Create > BP_ModifyPackage > BP_ModifyName'\",","\n    ","\"Active\": true,","\n    ","\"Condition\": \"AlwaysRun\",","\n    ","\"RunAt\": \"ExecutionEnd\"","\n    ","}","\n    ","]","\n    ","}","\n    ","}","\n    "," ","\n    "," ","\n    ","Script","\n    ","The script file can be used to trigger Ginger with very basic commands supported.","\n    "," ","\n    ","\n    "," ","\n    "," ","\n    ","Arguments","\n    ","This option does not use any file for the execution configuration but only CLI arguments.","\n    "," ","\n    ","             ","\n    "," ","\n    "," ","\n    "],["\n    "," ","\n    ","Create Auto Run Shortcut","\n    ","This option is by default selected to Yes.","\n    ","If a user does not want to create the run set shortcut but wants to have the Config file, then","\n    ","select this option to No.","\n    "," ","\n    ","Ginger.exe (Windows only)","\n    ","This option is selected by default. It is used when the run set is to be run on Windows PC and Ginger is already installed on it.","\n    ","The Path of the Ginger.exe is given in the ‘Executer Path’. Generally, it's populated automatically when the path is in Program Files.","\n    "," ","\n    ","GingerConsole.dll (Windows/Linux/Mac in case solution is compatible)","\n    ","This option is used when a run set is to be run on a Linux/ Mac machine.","\n    ","This DLL file can also be used to run on Windows.","\n    ","When using in Linux/Mac, the actions in the run set should be compatible with Linux.","\n    ","The Ginger.dll should also be available on the machine.","\n    "," ","\n    ","The shortcut can be created on the Desktop or in the desired Folder by clicking the Folder option.","\n    ","The Browse button is displayed to select the folder to save in.","\n    "," ","\n    ","Shortcut Content Preview","\n    ","This shows the full execution command which is stored in the Shortcut in case needed to be used for direct execution on the commands console or be configured in CI/CD processes.","\n    "," ","\n    ","Eg. ","\n    "," ","\n    "," ","\n    "],["\n    ","Once autorun configuration file was created (in one of the above formats Config/JSON/XML/Script, note- in case choose ‘Arguments’ option so config file not needed) you can execute Ginger either by simple execute the shortcut file created by the Wizard or by copying the full command which is in below format:","\n    ","Ginger executer path on the machine","\n    ","Config file type","\n    ","Config file path","\n    ","\n    ","\"C:\\Program Files (x86)\\Amdocs\\Ginger by amdocs\\Ginger.exe\" dynamic --filename \"C:\\Ginger Solutions\\Cloud\\TDMTestSolution\\Documents\\RunSetShortCuts\\TDM-Demo-BP_Create.Ginger.AutoRunConfigs.json\"","\n    ","\n    ","Open CMD console paste the command and click Enter, you will see that Ginger execution started and aal execution details appear on Console logs:","\n    "," ","\n    "," ","\n    "," ","\n    ","  ","\n  ","\n\n"]],"2":[["\n      ‎"," "],["Introduction"],["How to Create Auto Run Set Configuration?"],["How to Trigger Execution via CLI?"]],"3":[["General Options Tab"],["Configurations Type Tab"],["Execution Shortcut"]],"id":"39"})
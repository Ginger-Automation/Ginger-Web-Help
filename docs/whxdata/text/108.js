rh._.exports({"0":[["Ginger Plugin for Bamboo"]],"1":[["\n  ","\n    "," ","\n    "," Ginger Plugin for Bamboo","\n    "," ","\n    "," ","\n    "," ","\n    ","Contents","\n    ","Description","\n    ","Pre Requisites","\n    ","How to use the Ginger Plugin","\n    ","\n      ","Install Ginger Plugin","\n      ","Set Ginger Execution using Ginger Plugin","\n    ","\n    "," ","\n    "," ","\n    "," ","\n    ","\n      ‎","\n    "," ","\n    "],["\n    "," The Ginger plugin was created for allowing Ginger users to schedule Ginger executions using Bamboo with ease, including advanced capabilities like ","\n    "," automatic updates from Source Control like Git/SVN.","\n    ","\n    "," Ginger Plugin offers Two different tasks:"," ","\n    ","\n      "," Ginger Runset Execution"," ","\n        ","\n          ","Selecting which Solution Run Set & Environment to use from drop list.","\n        ","\n      ","\n      "," ","Ginger Execution Advanced","\n    ","\n    ","\n    "],["\n    ","Plugin Prerequisites are:","\n    ","Bamboo Server requires Java8 or above to function.","\n    ","Bamboo Server version 6.3.2 or above","\n    ","Bamboo Slave installed on the machine hosting Ginger installation","\n    ","Bamboo projects creation and execution knowledge","\n    ","Ginger Solution which:","\n    ","Configured on Ginger Source Control","\n    ","Includes Run Set/s ready to be executed","\n    ","Ginger Version (Beta 3.7.5 or above) on Slave machine (For Ginger Plugin V1 or above)","\n    ","\n    "],["\n    "],["\n    ","       Please follow below steps for installing the Ginger Plugin:","\n    ","Login to Bamboo","\n    ","Go to: Manage apps","\n    ","On the Same page there is an option to upload a plugin browse and select the Ginger Plugin file “GingerForBamboo.jar”","\n    ","Click on “Upload”","\n    ","        The plugin now supposed to be installed and ready to be used.","\n    ","\n    ","      ","\n    ","\n    ","\n    ","\n    "],["\n    "],["\n    ","Follow below steps to use the Ginger plugin in your new/existing Bamboo project:","\n    ","Open the Project page -> Go to Project Plan -> Go to desired Job","\n    ","Click on “Add Task”","\n    ","Search For “Ginger” on Tasks Page","\n    ","Click on desired “Ginger Task”.","\n    ","\n    ","\n    ","\n    "],["\n    ","         Please set below details in the plugin configurations:","\n    ","Set below “Source Control Configurations” details","\n    ","\n      ","\n        ","\n          ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Parameter Name","\n            ","\n            ","\n              ","Explanation","\n            ","\n            ","\n              ","Sample Value","\n            ","\n          ","\n          ","\n            ","\n              ","Source Control Type","\n            ","\n            ","\n              ","Type of source Control","\n            ","\n            ","\n              ","SVN/GIT","\n            ","\n          ","\n          ","\n            ","\n              ","URL","\n            ","\n            ","\n              ","The URL of Source Control server which host the Ginger Solution to execute","\n            ","\n            ","\n              ","http://cmitechint1srv.corp.amdocs.com:81/svn/","\n            ","\n          ","\n          ","\n            ","\n              ","User","\n            ","\n            ","\n              ","Source Control username","\n            ","\n            ","\n              ","\n            ","\n          ","\n          ","\n            ","\n              ","Password","\n            ","\n            ","\n              ","Source Control password","\n            ","\n            ","\n              ","\n            ","\n          ","\n          ","\n            ","\n              ","Proxy Server","\n            ","\n            ","\n              ","Required for githib.com only","\n            ","\n            ","\n              ","genproxy.amdocs.com","\n            ","\n          ","\n          ","\n            ","\n              ","Proxy Port","\n            ","\n            ","\n              ","Required for githib.com only","\n            ","\n            ","\n              ","8080","\n            ","\n          ","\n        ","\n      ","\n    ","\n    ","\n    ","Click on “Test Connection”","\n    ","Set below “Test Properties” details","\n    ","\n    ","\n      ","\n        ","\n          ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Parameter Name","\n            ","\n            ","\n              ","Explanation","\n            ","\n            ","\n              ","Sample Value","\n            ","\n          ","\n          ","\n            ","\n              ","Solution Name","\n            ","\n            ","\n              ","Ginger Solution name to execute as appear in repository","\n            ","\n            ","\n              ","\n            ","\n          ","\n          ","\n            ","\n              ","RunSet Name","\n            ","\n            ","\n              ","The Ginger Run Set to execute (must be exist in the Solution)","\n            ","\n            ","\n              ","\n            ","\n          ","\n          ","\n            ","\n              ","Environment Name","\n            ","\n            ","\n              ","The Ginger environment to use for execution (must be exist in the Solution)","\n            ","\n            ","\n              ","\n            ","\n          ","\n        ","\n      ","\n    ","\n    ","\n    ","Set below “Ginger Execution Definitions” details:","\n    ","\n    ","\n      ","\n        ","\n          ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Parameter Name","\n            ","\n            ","\n              ","Explanation","\n            ","\n            ","\n              ","Sample Value","\n            ","\n          ","\n          ","\n            ","\n              ","Solution Full Path","\n            ","\n            ","\n              ","The full path on the slave machine to place the Ginger Solution before the execution","\n            ","\n            ","\n              ","C:\\GingerSolutions","\n            ","\n          ","\n          ","\n            ","\n              ","Ginger Executer","\n            ","\n            ","\n              ","The Ginger executor based on OS","\n            ","\n            ","\n              ","Ginger.exe","\n            ","\n          ","\n          ","\n            ","\n              ","Ginger Executable Full Path","\n            ","\n            ","\n              ","The full path to “Ginger.exe” on the slave machine","\n            ","\n            ","\n              ","C:\\Program Files (x86)\\Amdocs\\Ginger by amdocs\\Ginger.exe","\n            ","\n          ","\n          ","\n            ","\n              ","Show Ginger Auto Run Window","\n            ","\n            ","\n              ","Check if you want have Auto Run Window","\n            ","\n            ","\n              ","\n            ","\n          ","\n          ","\n            ","\n              ","Run Analyzer","\n            ","\n            ","\n              ","Check if you want run analyzer before execution","\n            ","\n            ","\n              ","\n            ","\n          ","\n        ","\n      ","\n    ","\n    ","\n    ","\n    ","\n    ","Config Example – Ginger Runset Execution","\n    ","\n    ","                    ","\n    ","\n    "],["\n    ","             Please set below details in the plugin configurations:","\n    ","\n    ","\n      ","\n        ","\n          ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Parameter Name","\n            ","\n            ","\n              ","Explanation","\n            ","\n            ","\n              ","Sample Value","\n            ","\n          ","\n          ","\n            ","\n              ","Ginger Executer","\n            ","\n            ","\n              ","The Ginger executor based on OS","\n            ","\n            ","\n              ","Ginger.exe","\n            ","\n          ","\n          ","\n            ","\n              ","Ginger Executable Full Path","\n            ","\n            ","\n              ","The full path to “Ginger.exe” on the slave machine","\n            ","\n            ","\n              ","C:\\Program Files (x86)\\Amdocs\\Ginger by amdocs\\Ginger.exe","\n            ","\n          ","\n          ","\n            ","\n              ","Json Payload","\n            ","\n            ","\n              ","Provide Json data of the Runset which can find while creating autorun window or else you can modify default schema provided.","\n            ","\n            ","\n              ","\n            ","\n          ","\n        ","\n      ","\n    ","\n    ","\n    "],["\n    ","\n    ","Existing Run Set execution configurations- User can specify how exactly an existing Run set will be executed by manipulating it:","\n    "," Runners execution configuration such as Parallel/Sequential, if to stop on failure or not, etc.","\n    "," Applications-Agents mapping- set different Agent than configured on Ginger","\n    "," Change selected Environment/s","\n    "," Business Flows Active flag for disabling some of the Business Flows","\n    "," Business Flow Input values- can define which value will be set to each input, including Output Values configuration","\n    "," Run set Operations configurations manipulation (currently only Mail Report operation changes is supported)","\n    ","On run time from CLI, Ginger will load the existing Run set, then will manipulate it according to the JSON configurations and then will ","\n    ","execute the manipulated Run set.","\n    ","Changes are not been saved to the Run set and been used only during execution.","\n    ","Note: JSON should include only the nodes of the items (Runners/Business Flows/etc.) which needs to be modified on the Run set before ","\n    ","execution starts.","\n    ","\n    ","Sample existing Run set manipulation JSON:","\n    ","\n    ","{","\n    ","\"SolutionScmDetails\": {","\n    ","\"SCMType\": \"GIT\",","\n    ","\"SolutionRepositoryUrl\": \"https://github.com/Ginger-Automation/TDMTestSolution\",","\n    ","\"User\": \"menikadosh1\",","\n    ","\"Password\": \"XrqycklHMicLOWU2ZayaKg==\",","\n    ","\"PasswordEncrypted\": true,","\n    ","\"UndoSolutionLocalChanges\": false","\n    ","},","\n    ","\"SolutionLocalPath\": \"C:\\\\Ginger Solutions\\\\Cloud\\\\TDMTestSolution\",","\n    ","\"ShowAutoRunWindow\": false,","\n    ","\"VerboseLevel\": \"normal\",","\n    ","\"Runset\": {","\n    ","\"Exist\": true,","\n    ","\"Name\": \"BP_Create\",","\n    ","\"ID\": \"14cdc3e5-3a62-47a1-bfae-34c85ba086e5\",","\n    ","\"EnvironmentName\": \"AOT_221\",","\n    ","\"EnvironmentID\": \"b7ca5289-d0f7-4220-ac3f-f0de95576873\",","\n    ","\"RunAnalyzer\": true,","\n    ","\"RunInParallel\": true,","\n    ","\"StopRunnersOnFailure\": false,","\n    ","\"Runners\": [","\n    ","{","\n    ","\"Name\": \"Runner 1\",","\n    ","\"ID\": \"83cd17d7-1e56-498e-a2d5-18fcc2331b6b\",","\n    ","\"BusinessFlows\": [","\n    ","{","\n    ","\"Name\": \"Create\",","\n    ","\"ID\": \"c3d7d9ad-4336-4576-a516-e9814dc9d523\",","\n    ","\"Active\": true,","\n    ","\"InputValues\": [","\n    ","{","\n    ","\"VariableParentName\": \"CreateCustomer\",","\n    ","\"VariableParentID\": \"c3d7d9ad-4336-4576-a516-e9814dc9d523\",","\n    ","\"VariableName\": \"CustomerCreationType\",","\n    ","\"VariableID\": \"4f35384d-6a63-4154-819f-26baf388e0e9\",","\n    ","\"VariableCustomizationType\": \"Value\",","\n    ","\"VariableCustomizedValue\": \"Type1\"","\n    ","}","\n    ","]","\n    ","}","\n    ","]","\n    ","}","\n    ","],","\n    ","\"Operations\": [","\n    ","{","\n    ","\"$type\": \"RunsetOperations.MailReportOperationExecConfig, Ginger.ExecuterService.Contracts\",","\n    ","\"MailSettings\": {","\n    ","\"EmailMethod\": \"SMTP\",","\n    ","\"SmtpDetails\": {","\n    ","\"Server\": \"ilmail\",","\n    ","\"Port\": \"25\",","\n    ","\"EnableSSL\": true","\n    ","},","\n    ","\"Subject\": \"TDM Execution Details Report- BP_Create\"","\n    ","},","\n    ","\"BodyContentType\": \"HTMLReport\",","\n    ","\"BodyReportTemplateID\": 2,","\n    ","\"IncludeAttachmentReport\": true,","\n    ","\"AttachmentReportTemplateID\": 2,","\n    ","\"AttachmentReportAttachType\": \"Link\",","\n    ","\"CustomizedReportFolder\": \"\\\\\\\\ilrnaginger02\\\\GingerExecuterAgent\\\\Reports\",","\n    ","\"Name\": \"Send HTML Report Email\",","\n    ","\"ID\": \"ca90b21a-aedb-455c-aafb-f2b3a7979d8d\",","\n    ","\"Active\": false,","\n    ","\"Condition\": \"AlwaysRun\",","\n    ","\"RunAt\": \"ExecutionEnd\"","\n    ","}","\n    ","]","\n    ","}","\n    ","}","\n    ","\n    ","\n    "," Virtual Run Set execution configurations- User can specify how exactly not existing Run set will be created virtually during run time, including:","\n    "," Adding any needed number of Runners needed","\n    "," Describe all Runners related configurations","\n    "," Set environment/s to be used","\n    "," Applications-Agents mapping setup","\n    "," Add all Business Flows needed for the execution","\n    "," Business Flow Input values- can define which value will be set to each input, including Output Values configuration","\n    "," Run set Operations configurations (currently only Mail Report operation is supported)","\n    ","On run time from CLI, Ginger will virtually create the Run set as described in the JSON, and then will execute it.","\n    ","The virtual Run set is not been saved to Ginger and been used only during execution.","\n    ","\n    ","Sample Virtual Run set JSON:","\n    ","\n    ","{","\n    ","\"SolutionScmDetails\": {","\n    ","\"SCMType\": \"GIT\",","\n    ","\"SolutionRepositoryUrl\": \"https://github.com/Ginger-Automation/TDMTestSolution.git\",","\n    ","\"User\": \"menikadosh1\",","\n    ","\"Password\": \"dfQhf/SpUPGl3qhpmneClUb71uDX6Ybq0hyMpeZ0CTzni2KSAvgfHNMggnvfNJeB\",","\n    ","\"PasswordEncrypted\": true","\n    ","},","\n    ","\"Runset\": {","\n    ","\"Exist\": false,","\n    ","\"Name\": \"BP_Create > BP_ModifyPackage > BP_ModifyName\",","\n    ","\"EnvironmentName\": \"VAPP_89\",","\n    ","\"EnvironmentID\": \"ee123103-b2cf-4de9-93a2-143f5cf9b767\",","\n    ","\"RunAnalyzer\": false,","\n    ","\"RunInParallel\": false,","\n    ","\"StopRunnersOnFailure\": true,","\n    ","\"Runners\": [","\n    ","{","\n    ","\"Name\": \"BP_ModifyName\",","\n    ","\"EnvironmentName\": \"VAPP_89\",","\n    ","\"EnvironmentID\": \"ee123103-b2cf-4de9-93a2-143f5cf9b767\",","\n    ","\"OnFailureRunOption\": \"ContinueToRunall\",","\n    ","\"AppAgentMappings\": [","\n    ","{","\n    ","\"ApplicationName\": \"CPQ\",","\n    ","\"ApplicationID\": \"49e7d234-fb87-45ad-bb2e-359930ee1f41\",","\n    ","\"AgentName\": \"APIAgent1\",","\n    ","\"AgentID\": \"ccb7c809-7662-46c6-bf94-d50a3905c2f4\"","\n    ","}","\n    ","],","\n    ","\"BusinessFlows\": [","\n    ","{","\n    ","\"Name\": \"ModifyName\",","\n    ","\"ID\": \"80e3a8df-6af6-4026-b15e-fe033c54699b\",","\n    ","\"InputValues\": [","\n    ","{","\n    ","\"VariableParentName\": \"ModifyName\",","\n    ","\"VariableParentID\": \"80e3a8df-6af6-4026-b15e-fe033c54699b\",","\n    ","\"VariableName\": \"CustomerIDToModify\",","\n    ","\"VariableID\": \"43769aaa-7977-47aa-96de-dedbd98459fc\",","\n    ","\"VariableCustomizationType\": \"OutputVariable\",","\n    ","\"VariableCustomizedValue\": \"94b50452-f59c-422c-a5c1-3a8ddef89a46\"","\n    ","},","\n    ","{","\n    ","\"VariableParentName\": \"ModifyName\",","\n    ","\"VariableParentID\": \"80e3a8df-6af6-4026-b15e-fe033c54699b\",","\n    ","\"VariableName\": \"CustomerNameToSet\",","\n    ","\"VariableID\": \"826290d1-c04d-41b4-bcd1-6089e6007098\",","\n    ","\"VariableCustomizationType\": \"Value\",","\n    ","\"VariableCustomizedValue\": \"zzz\"","\n    ","}","\n    ","]","\n    ","},","\n    ","{","\n    ","\"Name\": \"Generic Validation 2\",","\n    ","\"ID\": \"378221e0-ec95-4301-92f7-cf30b2d7f164\"","\n    ","}","\n    ","]","\n    ","}","\n    ","],","\n    ","\"Operations\": [","\n    ","{","\n    ","\"$type\": \"RunsetOperations.MailReportOperationExecConfig, Ginger.ExecuterService.Contracts\",","\n    ","\"MailSettings\": {","\n    ","\"EmailMethod\": \"SMTP\",","\n    ","\"SmtpDetails\": {","\n    ","\"Server\": \"ilmail.corp.amdocs.com\",","\n    ","\"Port\": \"25\",","\n    ","\"EnableSSL\": false,","\n    ","\"User\": \"ntnet\\\\gingergen\",","\n    ","\"Password\": \"kd7NrCoIP5r4MTNawlQNw2NTwRMFZRueE8k64+WCNxI=\"","\n    ","},","\n    ","\"MailFrom\": \"gingergen@amdocs.com\",","\n    ","\"MailTo\": \"menik@amdocs.com\",","\n    ","\"Subject\": \"eTDM Detailed Execution Report for 'BP_Create > BP_ModifyPackage > BP_ModifyName'\"","\n    ","},","\n    ","\"Comments\": \"Executed via eTDM by menikadosh1\",","\n    ","\"BodyContentType\": \"HTMLReport\",","\n    ","\"IncludeAttachmentReport\": true,","\n    ","\"AttachmentReportAttachType\": \"Link\",","\n    ","\"CustomizedReportFolder\": \"\\\\\\\\ilrnaginger02\\\\GingerExecuterAgent\\\\Reports\",","\n    ","\"Name\": \"eTDM Detailed Execution Report for 'BP_Create > BP_ModifyPackage > BP_ModifyName'\",","\n    ","\"Active\": true,","\n    ","\"Condition\": \"AlwaysRun\",","\n    ","\"RunAt\": \"ExecutionEnd\"","\n    ","}","\n    ","]","\n    ","}","\n    ","}","\n    ","\n    ","\n    ","\n    "," Config Example – Ginger Execution Advanced:","\n    ","\n    "," ","\n    ","\n    "," ","\n  ","\n\n"]],"2":[["Description"],["Pre Requisites"],["How to use the Ginger Plugin"]],"3":[["Install Ginger Plugin"],["Set Ginger Execution using Ginger Plugin"]],"4":[["           ","Use Ginger Plugin in Your Project"],["Configure Ginger Runset Execution Task"],["            Configure Ginger Execution Advanced Task"],["Json Payload in Advanced Task - supports 2 main modes"]],"id":"108"})
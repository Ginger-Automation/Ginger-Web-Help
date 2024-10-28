rh._.exports({"0":[[" ","Ginger Plugin for Bamboo"]],"1":[[" ","Description"],[" ","Pre Requisites"],[" ","How to use the Ginger Plugin"]],"2":[[" ","Install Ginger Plugin"],[" ","Set Ginger Execution using Ginger Plugin"]],"3":[[" "," Ginger Plugin for Bamboo"," ","Contents"," ","Description"," ","Pre Requisites"," ","How to use the Ginger Plugin"," ","Install Ginger Plugin"," ","Set Ginger Execution using Ginger Plugin"," ","\n      ‎"],[" "," The Ginger plugin was created for allowing Ginger users to schedule Ginger executions using Bamboo with ease, including advanced capabilities like "," "," automatic updates from Source Control like Git/SVN."," "," Ginger Plugin offers Two different tasks:"," "," Ginger Runset Execution"," ","Selecting which Solution Run Set & Environment to use from drop list."," ","Ginger Execution Advanced"],[" ","Plugin Prerequisites are:"," ","Bamboo Server requires Java8 or above to function."," ","Bamboo Server version 6.3.2 or above"," ","Bamboo Slave installed on the machine hosting Ginger installation"," ","Bamboo projects creation and execution knowledge"," ","Ginger Solution which:"," ","Configured on Ginger Source Control"," ","Includes Run Set/s ready to be executed"," ","Ginger Version (Beta 3.7.5 or above) on Slave machine (For Ginger Plugin V1 or above)"],[" ","       Please follow below steps for installing the Ginger Plugin:"," ","Login to Bamboo"," ","Go to: Manage apps"," ","On the Same page there is an option to upload a plugin browse and select the Ginger Plugin file “GingerForBamboo.jar”"," ","Click on “Upload”"," ","        The plugin now supposed to be installed and ready to be used."],[" ","Follow below steps to use the Ginger plugin in your new/existing Bamboo project:"," ","Open the Project page -> Go to Project Plan -> Go to desired Job"," ","Click on “Add Task”"," ","Search For “Ginger” on Tasks Page"," ","Click on desired “Ginger Task”."],[" ","         Please set below details in the plugin configurations:"," ","Set below “Source Control Configurations” details"," ","Parameter Name"," ","Explanation"," ","Sample Value"," ","Source Control Type"," ","Type of source Control"," ","SVN/GIT"," ","URL"," ","The URL of Source Control server which host the Ginger Solution to execute"," ","http://svnserver.corp.yourdomain.com:81/svn/"," ","User"," ","Source Control username"," ","Password"," ","Source Control password"," ","Proxy Server"," ","Required for githib.com only"," ","proxy.yourcompany.com"," ","Proxy Port"," ","Required for githib.com only"," ","8080"," ","Click on “Test Connection”"," ","Set below “Test Properties” details"," ","Parameter Name"," ","Explanation"," ","Sample Value"," ","Solution Name"," ","Ginger Solution name to execute as appear in repository"," ","RunSet Name"," ","The Ginger Run Set to execute (must be exist in the Solution)"," ","Environment Name"," ","The Ginger environment to use for execution (must be exist in the Solution)"," ","Set below “Ginger Execution Definitions” details:"," ","Parameter Name"," ","Explanation"," ","Sample Value"," ","Solution Full Path"," ","The full path on the slave machine to place the Ginger Solution before the execution"," ","C:\\GingerSolutions"," ","Ginger Executer"," ","The Ginger executor based on OS"," ","Ginger.exe"," ","Ginger Executable Full Path"," ","The full path to “Ginger.exe” on the slave machine"," ","C:\\Program Files (x86)\\Amdocs\\Ginger by amdocs\\Ginger.exe"," ","Show Ginger Auto Run Window"," ","Check if you want have Auto Run Window"," ","Run Analyzer"," ","Check if you want run analyzer before execution"," ","Config Example – Ginger Runset Execution"],[" ","             Please set below details in the plugin configurations:"," ","Parameter Name"," ","Explanation"," ","Sample Value"," ","Ginger Executer"," ","The Ginger executor based on OS"," ","Ginger.exe"," ","Ginger Executable Full Path"," ","The full path to “Ginger.exe” on the slave machine"," ","C:\\Program Files (x86)\\Amdocs\\Ginger by amdocs\\Ginger.exe"," ","Json Payload"," ","Provide Json data of the Runset which can find while creating autorun window or else you can modify default schema provided."],[" ","Existing Run Set execution configurations- User can specify how exactly an existing Run set will be executed by manipulating it:"," "," Runners execution configuration such as Parallel/Sequential, if to stop on failure or not, etc."," "," Applications-Agents mapping- set different Agent than configured on Ginger"," "," Change selected Environment/s"," "," Business Flows Active flag for disabling some of the Business Flows"," "," Business Flow Input values- can define which value will be set to each input, including Output Values configuration"," "," Run set Operations configurations manipulation (currently only Mail Report operation changes is supported)"," ","On run time from CLI, Ginger will load the existing Run set, then will manipulate it according to the JSON configurations and then will "," ","execute the manipulated Run set."," ","Changes are not been saved to the Run set and been used only during execution."," ","Note: JSON should include only the nodes of the items (Runners/Business Flows/etc.) which needs to be modified on the Run set before "," ","execution starts."," ","Sample existing Run set manipulation JSON:"," ","{"," ","\"SolutionScmDetails\": {"," ","\"SCMType\": \"GIT\","," ","\"SolutionRepositoryUrl\": \"https://github.com/Ginger-Automation/TDMTestSolution\","," ","\"User\": \"menikadosh1\","," ","\"Password\": \"XrqycklHMicLOWU2ZayaKg==\","," ","\"PasswordEncrypted\": true,"," ","\"UndoSolutionLocalChanges\": false"," ","},"," ","\"SolutionLocalPath\": \"C:\\\\Ginger Solutions\\\\Cloud\\\\TDMTestSolution\","," ","\"ShowAutoRunWindow\": false,"," ","\"VerboseLevel\": \"normal\","," ","\"Runset\": {"," ","\"Exist\": true,"," ","\"Name\": \"BP_Create\","," ","\"ID\": \"14cdc3e5-3a62-47a1-bfae-34c85ba086e5\","," ","\"EnvironmentName\": \"AOT_221\","," ","\"EnvironmentID\": \"b7ca5289-d0f7-4220-ac3f-f0de95576873\","," ","\"RunAnalyzer\": true,"," ","\"RunInParallel\": true,"," ","\"StopRunnersOnFailure\": false,"," ","\"Runners\": ["," ","{"," ","\"Name\": \"Runner 1\","," ","\"ID\": \"83cd17d7-1e56-498e-a2d5-18fcc2331b6b\","," ","\"BusinessFlows\": ["," ","{"," ","\"Name\": \"Create\","," ","\"ID\": \"c3d7d9ad-4336-4576-a516-e9814dc9d523\","," ","\"Active\": true,"," ","\"InputValues\": ["," ","{"," ","\"VariableParentName\": \"CreateCustomer\","," ","\"VariableParentID\": \"c3d7d9ad-4336-4576-a516-e9814dc9d523\","," ","\"VariableName\": \"CustomerCreationType\","," ","\"VariableID\": \"4f35384d-6a63-4154-819f-26baf388e0e9\","," ","\"VariableCustomizationType\": \"Value\","," ","\"VariableCustomizedValue\": \"Type1\""," ","}"," ","]"," ","}"," ","]"," ","}"," ","],"," ","\"Operations\": ["," ","{"," ","\"$type\": \"RunsetOperations.MailReportOperationExecConfig, Ginger.ExecuterService.Contracts\","," ","\"MailSettings\": {"," ","\"EmailMethod\": \"SMTP\","," ","\"SmtpDetails\": {"," ","\"Server\": \"ilmail\","," ","\"Port\": \"25\","," ","\"EnableSSL\": true"," ","},"," ","\"Subject\": \"TDM Execution Details Report- BP_Create\""," ","},"," ","\"BodyContentType\": \"HTMLReport\","," ","\"BodyReportTemplateID\": 2,"," ","\"IncludeAttachmentReport\": true,"," ","\"AttachmentReportTemplateID\": 2,"," ","\"AttachmentReportAttachType\": \"Link\","," ","\"CustomizedReportFolder\": \"\\\\\\\\ilrnaginger02\\\\GingerExecuterAgent\\\\Reports\","," ","\"Name\": \"Send HTML Report Email\","," ","\"ID\": \"ca90b21a-aedb-455c-aafb-f2b3a7979d8d\","," ","\"Active\": false,"," ","\"Condition\": \"AlwaysRun\","," ","\"RunAt\": \"ExecutionEnd\""," ","}"," ","]"," ","}"," ","}"," "," Virtual Run Set execution configurations- User can specify how exactly not existing Run set will be created virtually during run time, including:"," "," Adding any needed number of Runners needed"," "," Describe all Runners related configurations"," "," Set environment/s to be used"," "," Applications-Agents mapping setup"," "," Add all Business Flows needed for the execution"," "," Business Flow Input values- can define which value will be set to each input, including Output Values configuration"," "," Run set Operations configurations (currently only Mail Report operation is supported)"," ","On run time from CLI, Ginger will virtually create the Run set as described in the JSON, and then will execute it."," ","The virtual Run set is not been saved to Ginger and been used only during execution."," ","Sample Virtual Run set JSON:"," ","{"," ","\"SolutionScmDetails\": {"," ","\"SCMType\": \"GIT\","," ","\"SolutionRepositoryUrl\": \"https://github.com/Ginger-Automation/TDMTestSolution.git\","," ","\"User\": \"menikadosh1\","," ","\"Password\": \"dfQhf/SpUPGl3qhpmneClUb71uDX6Ybq0hyMpeZ0CTzni2KSAvgfHNMggnvfNJeB\","," ","\"PasswordEncrypted\": true"," ","},"," ","\"Runset\": {"," ","\"Exist\": false,"," ","\"Name\": \"BP_Create > BP_ModifyPackage > BP_ModifyName\","," ","\"EnvironmentName\": \"VAPP_89\","," ","\"EnvironmentID\": \"ee123103-b2cf-4de9-93a2-143f5cf9b767\","," ","\"RunAnalyzer\": false,"," ","\"RunInParallel\": false,"," ","\"StopRunnersOnFailure\": true,"," ","\"Runners\": ["," ","{"," ","\"Name\": \"BP_ModifyName\","," ","\"EnvironmentName\": \"VAPP_89\","," ","\"EnvironmentID\": \"ee123103-b2cf-4de9-93a2-143f5cf9b767\","," ","\"OnFailureRunOption\": \"ContinueToRunall\","," ","\"AppAgentMappings\": ["," ","{"," ","\"ApplicationName\": \"CPQ\","," ","\"ApplicationID\": \"49e7d234-fb87-45ad-bb2e-359930ee1f41\","," ","\"AgentName\": \"APIAgent1\","," ","\"AgentID\": \"ccb7c809-7662-46c6-bf94-d50a3905c2f4\""," ","}"," ","],"," ","\"BusinessFlows\": ["," ","{"," ","\"Name\": \"ModifyName\","," ","\"ID\": \"80e3a8df-6af6-4026-b15e-fe033c54699b\","," ","\"InputValues\": ["," ","{"," ","\"VariableParentName\": \"ModifyName\","," ","\"VariableParentID\": \"80e3a8df-6af6-4026-b15e-fe033c54699b\","," ","\"VariableName\": \"CustomerIDToModify\","," ","\"VariableID\": \"43769aaa-7977-47aa-96de-dedbd98459fc\","," ","\"VariableCustomizationType\": \"OutputVariable\","," ","\"VariableCustomizedValue\": \"94b50452-f59c-422c-a5c1-3a8ddef89a46\""," ","},"," ","{"," ","\"VariableParentName\": \"ModifyName\","," ","\"VariableParentID\": \"80e3a8df-6af6-4026-b15e-fe033c54699b\","," ","\"VariableName\": \"CustomerNameToSet\","," ","\"VariableID\": \"826290d1-c04d-41b4-bcd1-6089e6007098\","," ","\"VariableCustomizationType\": \"Value\","," ","\"VariableCustomizedValue\": \"zzz\""," ","}"," ","]"," ","},"," ","{"," ","\"Name\": \"Generic Validation 2\","," ","\"ID\": \"378221e0-ec95-4301-92f7-cf30b2d7f164\""," ","}"," ","]"," ","}"," ","],"," ","\"Operations\": ["," ","{"," ","\"$type\": \"RunsetOperations.MailReportOperationExecConfig, Ginger.ExecuterService.Contracts\","," ","\"MailSettings\": {"," ","\"EmailMethod\": \"SMTP\","," ","\"SmtpDetails\": {"," ","\"Server\": \"mail.corp.yourcompany.com\","," ","\"Port\": \"25\","," ","\"EnableSSL\": false,"," ","\"User\": \"yourdomain\\\\yourusername\","," ","\"Password\": \"youruser\""," ","},"," ","\"MailFrom\": \"gingergen@amdocs.com\","," ","\"MailTo\": \"menik@amdocs.com\","," ","\"Subject\": \"eTDM Detailed Execution Report for 'BP_Create > BP_ModifyPackage > BP_ModifyName'\""," ","},"," ","\"Comments\": \"Executed via eTDM by menikadosh1\","," ","\"BodyContentType\": \"HTMLReport\","," ","\"IncludeAttachmentReport\": true,"," ","\"AttachmentReportAttachType\": \"Link\","," ","\"CustomizedReportFolder\": \"\\\\\\\\ilrnaginger02\\\\GingerExecuterAgent\\\\Reports\","," ","\"Name\": \"eTDM Detailed Execution Report for 'BP_Create > BP_ModifyPackage > BP_ModifyName'\","," ","\"Active\": true,"," ","\"Condition\": \"AlwaysRun\","," ","\"RunAt\": \"ExecutionEnd\""," ","}"," ","]"," ","}"," ","}"," "," Config Example – Ginger Execution Advanced:"]],"4":[[" ","Use Ginger Plugin in Your Project"],[" ","Configure Ginger Runset Execution Task"],[" ","            Configure Ginger Execution Advanced Task"],[" ","Json Payload in Advanced Task - supports 2 main modes"]],"id":"139"})
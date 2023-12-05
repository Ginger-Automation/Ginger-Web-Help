rh._.exports({"0":[[" ","How to Execute Run Set Via CLI"]],"1":[[" ","How to Execute Run Set Via CLI"],[" ","Auto Run Configuration is used when the Run set is required to run via command line or API for automatic execution of Ginger Run set as part of Automation needed or for CI/CD processes integration"],[" ","Go to the Runset tab of the solution."," ","Click on the ‘Create Run Set Auto Run Configuration’ button as shown below."," "," The Wizard is opened."],[" ","Explanation ","for each General Configuration:"," ","Download/ Update Solution from source control"," ","In case checked, Ginger Solution will be downloaded/updated from source control on the execution machine before the execution starts."," ","Note:- This option is disabled if the solution is not downloaded from the source control repository."," ","It is enabled and checked if the solution is from the source control repository."," ","Show Run Set execution window while running (on Windows only)"," "," This is option is not selected by default. If a user wants to see the execution status in Ginger while the run set is run, then use this option."," "," It displays only the Ginger Run tab. The status of the Run set along with the Runners, Activities and Actions are displayed during the "," "," execution as ","shown below."," "," It is recommended to run without UI for compatibility and performance reasons, for that please keep this option unchecked."," ","Run Set Analyzer before execution"," ","This option is selected by default. It helps in finding any critical/high design issues in the Business Flow which might impact the execution. "," ","In such a case, the execution is not started until the issues are fixed by the user."," ","When this option is unchecked, all the design issues are ignored, and execution starts without any checks."," ","Set ALM Connection details"," ","If ","it is checked and “Publish Execution Result","s to ALM” is c","onfigured in Runset operation. It will publish execution result to respective ","project "," ","in ALM."," ","e",". Save Self Healing changes and check-in to source control",": If it is checked, it will save changes which is made during self healing operation and will "," check-in the changes in source control."," ","Artifacts Path :","  This option is used to store execution results/report on specific path. "," ","f.      ","Set Global Variables configuration used in Run set: ","When activated, it will include the global variables used in the Run Set into the Configuration."," ","In dynamic Json configure we can see All global variables and we can update the Customized value to it."],[" ","This tab has 3 options."," ","1) ","Arguments"," "," This option does not use any file for the execution configuration but only arguments which can be added to the Ginger execution command line"," ","Re run configuration :- this section also used by arguments "," ","Below 3 arguments can be used "," ","--ReRunFailed  - ","it indicates the Re run configuration is active."," ","--ReferenceExecutionID=\"00000000-0000-0000-0000-000000000000\""," ","this parameter is optional. we can provide the last execution Id"," ","--RerunLevel=\"RunSet\" - ","It have 3 level Business Flow/ Runner/Runset"," ","By default, Level is set to Run set."," ","2) File"," "," The file is supported in JSON format, which supports much more flexible configurations. "," ","JSON"," Dynamic file supports 2 main modes:"," ","Existing Run Set execution configurations","- User can specify how exactly an existing Run set will be executed by manipulating it:"," ","Runners execution configuration such as Parallel/Sequential, if to stop on failure or not, etc."," ","Applications-Agents mapping- set different Agent than configured on Ginger"," ","Change selected Environment/s"," ","Business Flows Active flag for disabling some of the Business Flows"," ","Business Flow Input values- can define which value will be set to each input, including Output Values configuration"," ","Run set Operations configurations manipulation (currently only Mail Report operation changes is supported)"," ","Re run configuration"," ","On run time from CLI, Ginger will load the existing Run set, then will manipulate it according to the JSON configurations and then will execute the "," "," manipulated Run set. ","Changes are not been saved to the Run set and have been used only during execution."," ","Note",": JSON should include only the nodes of the items (Runners/Business Flows/etc.) which need to be modified on the Run set before execution starts."," ","Sample existing Run set manipulation JSON:"," ","{"," ","  \"SolutionLocalPath\": \"C:\\\\GingerSourceControl\\\\2023Beta_Global\\\\2023Beta_Global\","," ","  \"EncryptionKey\": \"********\","," ","  \"ShowAutoRunWindow\": false,"," ","\"VerboseLevel\": \"normal\","," ","  \"Runset\": {"," ","    \"Exist\": true,"," ","    \"Name\": \"Default Run Set\","," ","    \"ID\": \"675f4b69-a8bc-4c06-8dd9-a5243aa9bf3e\","," ","    \"EnvironmentName\": \"Default\","," ","    \"EnvironmentID\": \"194a241f-548a-4151-b6d7-8e5ef83ac534\","," ","    \"RunAnalyzer\": true,"," ","    \"RunInParallel\": true,"," ","    \"StopRunnersOnFailure\": false,"," ","    \"Runners\": ["," ","      {"," ","        \"Exist\": true,"," ","        \"Name\": \"Runner 1\","," ","        \"ID\": \"fad52f0f-e578-405c-96c4-31bcfc1f0cbb\","," ","        \"Active\": true,"," ","        \"OnFailureRunOption\": \"StopAllBusinessFlows\","," ","        \"RunInSimulationMode\": false,"," ","        \"RunInVisualTestingMode\": true,"," ","        \"AppAgentMappings\": ["," ","          {"," ","            \"ApplicationName\": \"MyWebApp\","," ","            \"ApplicationID\": \"1e953096-88f5-4fb1-9d38-98f96ab62d25\","," ","            \"AgentName\": \"MyWebApp - Agent 1\","," ","            \"AgentID\": \"54a1fb40-1d9b-4f84-9046-0eecb8e189cf\""," ","          }"," ","        ],"," ","        \"KeepAgentsOpen\": false,"," ","        \"BusinessFlows\": ["," ","          {"," ","            \"Exist\": true,"," ","            \"Name\": \"Flow 1\","," ","            \"ID\": \"6e954c48-b123-4722-a6a5-20319caa0d3a\","," ","            \"InstanceID\": \"78409b76-3c16-4dd4-8004-32ad72b7fc3c\","," ","            \"Active\": true"," ","          }"," ","        ]"," ","      }"," ","    ],"," ","\"RerunConfigurations\": {"," ","      \"Active\": false,"," ","      \"RerunLevel\": \"RunSet\","," ","      \"ReferenceExecutionID\": \"00000000-0000-0000-0000-000000000000\""," ","    },"," ","\"Operations\": ["," ","      {"," ","        \"$type\": \"RunsetOperations.AlmPublishOperationExecConfig, Ginger.ExecuterService.Contracts\","," ","        \"ALMType\": \"Default\","," ","        \"AlmTestSetLevel\": \"BusinessFlow\","," ","        \"ExportType\": \"ResultsOnly\","," ","        \"TestCasesResultsToExport\": \"All\","," ","        \"AttachActivitiesGroupsReport\": false,"," ","        \"UseUserVariableInRunInstanceName\": false,"," ","        \"UserVariableInRunInstance\": \"GingerRun_{CS Exp=DateTime.Now}\","," ","        \"Name\": \"Publish Execution Results to ALM\","," ","        \"ID\": \"9704d5f6-54fe-452c-93f0-efecb8ffa74b\","," ","        \"Condition\": \"AlwaysRun\","," ","        \"RunAt\": \"ExecutionEnd\""," ","      }"," ","    ],"," ","    \"SelfHealingConfiguration\": {"," ","      \"ReprioritizePOMLocators\": true,"," ","      \"AutoFixAnalyzerIssue\": false,"," ","      \"AutoUpdateApplicationModel\": false,"," ","      \"SaveChangesInSourceControl\": false,"," ","      \"AutoExecuteInSimulationMode\": false"," ","    }"," ","  },"," ","  \"GlobalVariables\": ["," ","    {"," ","      \"VariableName\": \"GBL_DateTime\","," ","      \"VariableID\": \"b1e69125-f386-4777-a421-ce25ab69f168\","," ","      \"VariableCustomizedValue\": \"09/20/2023 12:00:00 AM\""," ","    },"," ","    {"," ","      \"VariableName\": \"GBL_Selection_List\","," ","      \"VariableID\": \"d232f92d-ae0d-4a32-bd5c-f78552f5af62\","," ","      \"VariableCustomizedValue\": \"test\""," ","    }"," ","  ]"," ","}"," ","Verbose Level –  To set the log  level for CLI as “normal\""," ","Re-Run Configurtion --  this section is added for the Re-Run the failed flow."," ","it have three parameters."," ","Note :-This Re-Run configuration Option is valid only if Centralized Database/Account Report is configured in the solution"," ","a) Active"," – it indicates the Re-Run configuration is active or not "," ","b) Re-Run Level"," – It have 3 level Business Flow/ Runner/Runset"," ","By default, Level is set to Run set."," ","If Re-Run Level is set to “Runset”. Then Re-Run Failed Execution will only consider the Run set Status. If Run-set status is failed, then it will ","Re-Execute"," the whole run-set."," ","If Re-Run Level is set to “Business Flow”. Then Re-Run failed Execution will only consider the Business Flow status. If Business flow is failed, then it will ","Re-Execute"," that business flow only."," ","If Re-Run Level is set to “Runner”. Then Re-Run Failed Execution will only consider the Runner status. If runner status is failed, then it will ","Re-Execute"," the whole runner."," ","c) ReferenceExecutionID"," – this parameter is optional. we can provide the last execution Id ."," ","if execution Id is provided it will execute the flow as per execution details of that provided Execution Id."," ","if Execution Id is not provided it will automatically get the Last Execution Id from the Centralized Database/Account Report."," ","Virtual Run Set execution configurations","- User can specify how exactly not existing Run set will be created virtually during run time, including:"," ","Adding any needed number of Runners needed"," ","Describe all Runners related configurations"," ","Set environment/s to be used"," ","Applications-Agents mapping setup"," ","Add all Business Flows needed for the execution"," ","Business Flow Input values- can define which value will be set to each input, including Output Values configuration"," ","Run set Operations configurations (currently only Mail Report operation is supported)"," ","On run time from CLI, Ginger will virtually create the Run set as described in the JSON and then will execute it."," ","The virtual Run set is not been saved to Ginger and has been used only during execution."," ","Sample Virtual Run set JSON:"," ","{"," ","  \"SolutionScmDetails\": {"," ","    \"SCMType\": \"GIT\","," ","    \"SolutionRepositoryUrl\": \"https://github.com/Ginger-Automation/TDMTestSolution.git\","," ","    \"User\": \"menikadosh1\","," ","    \"Password\": \"dfQhf/SpUPGl3qhpmneClUb71uDX6Ybq0hyMpeZ0CTzni2KSAvgfHNMggnvfNJeB\","," ","    \"PasswordEncrypted\": true"," ","  },"," ","  \"Runset\": {"," ","\"Exist\": false,"," ","    \"Name\": \"BP_Create > BP_ModifyPackage > BP_ModifyName\","," ","\"EnvironmentName\": \"VAPP_89\","," ","    \"EnvironmentID\": \"ee123103-b2cf-4de9-93a2-143f5cf9b767\","," ","\"RunAnalyzer\": false,"," ","    \"RunInParallel\": false,"," ","    \"StopRunnersOnFailure\": true,"," ","    \"Runners\": ["," ","      {"," ","        \"Name\": \"BP_ModifyName\","," ","        \"EnvironmentName\": \"VAPP_89\","," ","\"EnvironmentID\": \"ee123103-b2cf-4de9-93a2-143f5cf9b767\","," ","\"OnFailureRunOption\": \"ContinueToRunall\","," ","        \"AppAgentMappings\": ["," ","          {"," ","            \"ApplicationName\": \"CPQ\","," ","            \"ApplicationID\": \"49e7d234-fb87-45ad-bb2e-359930ee1f41\","," ","            \"AgentName\": \"APIAgent1\","," ","            \"AgentID\": \"ccb7c809-7662-46c6-bf94-d50a3905c2f4\""," ","          }"," ","        ],"," ","        \"BusinessFlows\": ["," ","          {"," ","            \"Name\": \"ModifyName\","," ","            \"ID\": \"80e3a8df-6af6-4026-b15e-fe033c54699b\","," ","            \"InputValues\": ["," ","              {"," ","                \"VariableParentName\": \"ModifyName\","," ","                \"VariableParentID\": \"80e3a8df-6af6-4026-b15e-fe033c54699b\","," ","                \"VariableName\": \"CustomerIDToModify\","," ","                \"VariableID\": \"43769aaa-7977-47aa-96de-dedbd98459fc\","," ","                \"VariableCustomizationType\": \"OutputVariable\","," ","                \"VariableCustomizedValue\": \"94b50452-f59c-422c-a5c1-3a8ddef89a46\""," ","              },"," ","              {"," ","                \"VariableParentName\": \"ModifyName\","," ","                \"VariableParentID\": \"80e3a8df-6af6-4026-b15e-fe033c54699b\","," ","                \"VariableName\": \"CustomerNameToSet\","," ","                \"VariableID\": \"826290d1-c04d-41b4-bcd1-6089e6007098\","," ","                \"VariableCustomizationType\": \"Value\","," ","                \"VariableCustomizedValue\": \"zzz\""," ","              }"," ","            ]"," ","          },"," ","          {"," ","            \"Name\": \"Generic Validation 2\","," ","            \"ID\": \"378221e0-ec95-4301-92f7-cf30b2d7f164\""," ","          }"," ","        ]"," ","      }"," ","    ],"," ","    \"Operations\": ["," ","      {"," ","        \"$type\": \"RunsetOperations.MailReportOperationExecConfig, Ginger.ExecuterService.Contracts\","," ","        \"MailSettings\": {"," ","          \"EmailMethod\": \"SMTP\","," ","          \"SmtpDetails\": {"," ","            \"Server\": \"mail.corp.yourcompany.com\","," ","            \"Port\": \"25\","," ","            \"EnableSSL\": false,"," ","            \"User\": \"yourdomain\\\\yourusername\","," ","            \"Password\": \"youruser\""," ","          },"," ","          \"MailFrom\": \"gingergen@amdocs.com\","," ","          \"MailTo\": \"menik@amdocs.com\","," ","          \"Subject\": \"eTDM Detailed Execution Report for 'BP_Create > BP_ModifyPackage > BP_ModifyName'\""," ","        },"," ","        \"Comments\": \"Executed via eTDM by menikadosh1\","," ","        \"BodyContentType\": \"HTMLReport\","," ","        \"IncludeAttachmentReport\": true,"," ","        \"AttachmentReportAttachType\": \"Link\","," ","        \"CustomizedReportFolder\": \"\\\\\\\\ilrnaginger02\\\\GingerExecuterAgent\\\\Reports\","," ","        \"Name\": \"eTDM Detailed Execution Report for 'BP_Create > BP_ModifyPackage > BP_ModifyName'\","," ","        \"Active\": true,"," ","        \"Condition\": \"AlwaysRun\","," ","        \"RunAt\": \"ExecutionEnd\""," ","      }"," ","    ]"," ","  }"," ","}"," "," 3) Request: ","R","equest is used to trigger Ginger execution on Cloud machine."," "," It is used to send execution request to remote machine Ginger directly from wizard or we can configure request content for any API Client System."],[" ","Create shortcut feature offer to create shortcut execution file on the machine which will hold the execution command for easier automatic execution."," "," The shortcut can be created on the Desktop or in the desired Folder by clicking the Folder option."," "," The Browse button is displayed to select the folder to save in."," ","This option is by default selected to No"," "," If a user does not want to create the run set shortcut but wants to have the Config file, then ","select this option to No"," ","Shortcut is available only for Arguments and File configuration options"],[" "," This shows the full execution command which is stored in the Shortcut in case needed to be used for direct execution on the commands console or be configured in CI/CD "," "," processes. "],[" "," It will allow to start execution in external process as soon as clicking ‘Finish’ button."," "," User can set  1-10 parallel execution sessions."," "," In case of Request",": it will send the ginger runset execution  request to Remote/Cloud machine ginger where Execution Handler service ( Execution Service URL) is hosted."],[" ","Once autorun configuration file was created (in one of the above formats Config/JSON/XML/Script, note- in case choose ‘Arguments’ option so config file "," ","not needed) you can execute Ginger either by simple execute the shortcut file created by the Wizard or by copying the full command which is in below "," ","format:"," ","Ginger executer path on the machine"," ","Config file type"," ","Config file path"," ","\"C:\\Program Files (x86)\\Amdocs\\Ginger by amdocs\\Ginger.exe\""," ","dynamic"," --filename ","\"C:\\Ginger Solutions\\Cloud\\TDMTestSolution\\Documents\\RunSetShortCuts\\TDM-"," ","Demo-BP_Create.Ginger.AutoRunConfigs.json\""," ","Open CMD console paste the command and click Enter, you will see that Ginger execution started and aal execution details appear on Console logs:"]],"3":[[" ","Introduction"," ","Introduction"],[" ","How to Create Auto Run Set Configuration?"],[" ","General Option Tab"],[" ","Execution Configuration Tab"],[" ","  Execute"," ","Create Auto Run Shortcut"],[" ","CLI Execution Command"],[" ","Execute Now"],[" ","  How to Trigger Execution via CLI?"]],"id":"121"})
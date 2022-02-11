rh._.exports({"0":[[" ","Ginger Plugin for Jenkins"]],"1":[[" ","Ginger Jenkins plugin was created for allowing Ginger users to schedule Ginger executions using Jenkins with ease, including "," ","capabilities like ","automatic updates from SVN."," ","Ginger Jenkins Plugin offers"," ","Selecting which Solution Run Set & Environment to use from drop list"," ","Automatic update of the Solution to execute from SVN automatically prior to execution"," ","Execution of the configured Run set on schedule time"],[" ","Ginger Jenkins Plugin Prerequisites are"," ","Jenkins requires Java7 or above to function. Java 8 is recommended."," ","Jenkins Server version 1.606 or above"," ","Jenkins Slave installed on the machine hosting Ginger installation (machine also need to be able to access SVN server in which the Ginger ","Solution exist)"," ","Jenkins projects creation and execution knowledge"," ","Ginger Solution which:"," ","Configured on Ginger SVN Data Source"," ","Includes Run Set/s ready to be executed"," ","Ginger Version (Beta 2.5.7 or above) on Slave machine(For Ginger Plug in V1.5 or above)"],[" ","     Please follow below steps for installing the Ginger Plugin:"," ","Login to Jenkins"," ","Go to: Manage Jenkins > Manage Plugins"," ","Click on “Advance configuration” tab"," ","In that page there is an option to upload a plugin browse and select the Ginger Plugin file “gingerPlugin.hpi”"," ","Click on “Upload”"," ","The plugin now supposed to be installed and ready to be used."],[" ","Follow below steps to use the Ginger plugin in your new/existing Jenkins project:"," ","Open the Project page"," ","Click on “Configure”"," ","Go to “Build” section configurations"," ","Click on “Add Build Step” and choose “Configure Ginger execution parameters”"],[" ","Please set below details in the plugin configurations:"," ","Set below “Source Control (SVN) Configurations” details"," ","Parameter Name"," ","Explanation"," ","Source Control Type"," ","Type of source Control"," ","URL"," ","The URL of Source Control server which host the Ginger Solution to execute"," ","User"," ","Source Control user name"," ","Password"," ","Source Control password"," ","Proxy Server"," ","Required for githib.com only"," ","Proxy Port"," ","Required for githib.com only"," ","Click on “Test Connection”"," ","Set below “Test Properties” details"," ","Parameter Name"," ","Explanation"," ","Solution Name"," ","Ginger Solution name to execute as appear in SVN repository"," ","Encryption key"," ","From plugin version 3.1 and ginger version 3.9 or above, each solution require to have encryption key. "," ","it is recommended to use Jenkins build paramter to set the encryption key, so that if key changes in future can be updated on 1 jenkins paramter instead of going in each job"," ","RunSet Name"," ","The Ginger Run Set to execute (must be exist in the Solution)"," ","For selecting from drop list of optional RunSets- click on “Get Solution Details” button and type “.” In the text box"," ","Environment Name"," ","The Ginger environment to use for execution (must be exist in the Solution)"," ","For selecting from drop list of optional Environments- click on “Get Solution Details” button and type “.” In the text box"," ","Execution Id (Optional)"," ","This is optional GUID field which will identify the execution uniquely. When using Account report/ Centralized logging this id is required to fetch execution details"," ","Show Ginger UI"," "," Recommended to keep it uncheked for optimized perfomance when running in unattended mode"," ","Don't Anlyze"," ","Rcommented to keep it unchecked so that analyzer will run before each execution"," ","Set below “Ginger Execution definitions details:"," ","Parameter Name"," ","Explanation"," ","Sample Value"," ","Solution Full Path"," ","The full path on the slave machine to place the Ginger Solution before the execution"," ","C:\\GingerSolutions"," ","Ginger Executable Full Path"," ","The full path to “Ginger.exe” on the slave machine"," ","C:\\Program Files (x86)\\Amdocs\\Amdocs BEAT Ginger Automation\\Ginger.exe"]],"2":[[" ","Ginger Plugin for Jenkins"],[" ","How to use the Ginger Plugin"]],"3":[[" ","Pre Requisites"],[" ","Install Ginger Plugin"],[" "," Use Ginger Plugin in Your Project"],[" ","Configure Ginger Plugin Parameters"]],"id":"102"})
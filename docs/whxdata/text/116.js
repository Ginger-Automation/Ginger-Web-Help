rh._.exports({"0":[[" ","Ginger-Sealights Integration"]],"2":[[" ","Ginger and Sealights Integration"," ","Ginger have ability to integrate with Sealights. "," ","Sealights is a ","cloud-based, continuous testing platform that helps to increase code quality by collecting telemetry data from all stages of the SDLC."," ","Ginger is sending an API request for reporting SeaLights regarding test event results on different Ginger’s Run-Set entity levels (information below)"," ","Ginger reports test status option values: ","Passed",", ","Failed"," or ","Skipped."],[" ","Respective Sealight URL and related deatils"," ","Ensure ","'Show enterprise feature'"," is selected & saved in Ginger under 'Users Settings option'"],[" ","        To set Sealights configuraiton details in Ginger solution level, please follow the below steps:"," "," Go to “Configurations --> External Integrations --> Sealight configuration"," ","The following are the Sealights fields:"," ","Enable (Yes/No)"," ","URL - This is Sealights instance URL, usually provided by sealights team"," ","Agent Token - ","token is required to connect to the Sealights. Token can be generated from Sealight dashboard --> Settings"," ","Lab ID"," ","Build Session ID "," ","Session Timeout (seconds)"," ","Test Stage"," ","Entity Level to Report (“Business Flow” / “Activities Group” / “Activity”)"," ","Enter all required details and click on Save                              "," ","Note",": If the saved configurations are incorrect or missing, Ginger will not be able to establish a connection to Sealights"],[" ","        By default the settings configured on Solution level will be used. But user also have an option to override specific selaight configurations on each Ginger Run-Sets level, please follow the below steps:"," ","  Go to the “Details” tab under “Run-Sets”."," ","The following are Sealights fields which the user can override the solution setting:"," ","Lab ID"," ","Build Session ID "," ","Test Stage"," ","Note",": "," ","Sealight settings will be visible on Runset only if the Sealight logger configuration is enabled on Solution level"," ","The Run-Sets default values will be populated by Ginger’s Solution settings."],[" ","Ginger allows reporting to Sealights via Ginger CLI, with argument or Json file,"," ","Please follow the below steps to set Sealights setup details via Ginger CLI:"," ","Go to “Run-Sets” and open the AutoRun configuration window "," ","Check the “Set Sealights Setting” option and click ‘Next’ "," ","All Sealights settings from Ginger’s solution Configuration will be added as a command-line configuration."," ","Notes",": "," ","Any Run-Sets custom settings will override the Solution settings"," ","“Set Sealights Setting” option availability depends on if Sealights has been enabled in Ginger’s solution configuration"],[" ","Note: All Sealights fields can be populated as values or as a “Value Expressions”"," ","Url: Sealights URL Address to run connection through"," ","Agent Token: Sealighs Token is required to connect to the Sealights APIs"," ","Build Session Id: (Not to be used IF using labId) session id created by the config step, "," ","The Build Session ID is used to identify the build that is being tested and need to be provided to the test listener as well."," ","The Bsid can be found on Sealighs portal, please follow the following steps:"," ","Log-in to Sealights dashboard"," ","Click on the Applicable App/Branch’s “Overall Coverage” "," ","The Build-Session-Id can be found in the report URL (between 2 backslashes), as shown below."," ","Lab Id:  (Optional) Unique ID for a set of test labs in case multiple labs are running simultaneously, Lab-Id or Build-Session-Id must be provided"," ","Test Stage: Name of the test stage as will be displayed on the SeaLights dashboard, "," ","The Test Stage can be any description reflecting the entity level of the Ginger’s tested solution "," ","Entity Level to Report: Should be one of the following Dropdown options "," ","“Business Flow” "," ","“Activities Group” "," ","“Activity”"," ","Session Timeout (seconds): (Optional) Default value = 14,000 seconds (4 hours)"],[" ","Users can view the Ginger’s test reports on the Sealights portal, under/click the applicable App/branch "]],"3":[[" ","Pre-requisites"],[" ","Sealights Setting on Ginger Solution"],[" ","Sealights Setting on Ginger Run-Sets"],[" ","Sealights Setting via Ginger CLI"],[" ","Sealights Fields"],[" ","Ginger’s Report on Sealights Portal "]],"id":"116"})
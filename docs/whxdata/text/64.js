rh._.exports({"0":[[" ","Ginger - Splunk Integration"]],"1":[[" ","Description"],[" ","Pre Requisites"],[" ","How to use the Ginger Splunk Integration"]],"2":[[" "," Ginger - Splunk Integration"," ","Contents"," ","Description"," ","Pre Requisites"," ","How to use the Ginger Splunk Integration"," ","Ginger Source Field Configuration"," ","Ginger Runset operation Configuration"," ","\n      ‎"],[" "," Splunk is the tool to monitor different infrastructure performances, troubleshoot issues, create dashboards, create reports and alerts easily. "," "," It is a complete tool for managing any system with all the logs being stored dynamically. Splunk can generate a variety of reports like graphs, "," "," pie charts, bar charts, etc. "," ","                    Ginger has the capability of running multiple flows and generating detail reports although by integrating Ginger with Splunk, we can expand        ","                   the capabilities of Ginger to generate variety of report by sending Execution JSON Data to Splunk. "],[" ","Prerequisites are:"," ","Splunk API details like endpoint url, authorization, body etc."," ","Ginger Version (Beta 3.7.1 or above)"],[" ","Please follow below steps for field configuration:"," ","Go to: Configuration → Reports → Execution Logger Configurations."," ","Select Data Source option as LiteDB"," ","Go to: Configurations → Reports → Reports Templates"," ","Add New Template or select existing template"," ","Under Execution JSON Data select the fields configuration under each category and save the changes."],[" ","Follow below steps to use ‘Send Execution JSON Data To External Source’ runset operation:"," ","Go to: Runset"," ","Click on “Operations”"," ","Click on “Add Send Execution JSON Data To External Source Operation”"],[" ","      Please set below details in the runset operation configurations:"," ","Set below “Send Execution JSON Data To External Source Configurations” details"," ","Parameter Name"," ","Explanation"," ","Sample Value"," ","Run at"," ","When this operation should run"," ","Execution End"," ","Condition"," ","Condition for running this operation"," ","Always run"," ","Select Report Template"," ","Select from Report templates designed under report tab"," ","Default"," ","End Point URL"," ","Api Endpoint URl"," ","https://host:8088/services/collector"," ","Request Headers"," ","Required headers for request"," ","Authorization"," ","Request Body"," ","Required body for request in List view or JSON view"," ","{"," ","\"time\": {CS Exp=DateTimeOffset.UtcNow.ToUnixTimeSeconds()},"," ","\"source\": \"Ginger_Automation_Report\","," ","\"event\": {ExecutionJsonData}"," ","}"," ","             Send Execution JSON Data To External Source Configurations Example:"]],"3":[[" ","Ginger Source Field Configuration"],[" ","Ginger Runset Operation Configuration"]],"4":[[" ","         Use Ginger Runset operation for sending data to Splunk"],[" ","        Configure Ginger Runset operation"]],"id":"64"})
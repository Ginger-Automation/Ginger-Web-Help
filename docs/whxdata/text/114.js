rh._.exports({"0":[[" ","Web API Action- SoapUI Wrapper & Rest"]],"1":[[" ","\n      ‎"," ","Introduction "],[" ","Agent Configuration"],[" ","How to configure Action"]],"2":[[" "," Web API Action- SoapUI Wrapper & Rest"," ","Contents"," ","Introduction"," ","Agent Configuration"," ","How to Configure Action"," ","Pre-requisite"," ","Action Operation"],[" ","Web API SOAP & Web API REST Actions support the following features:"," ","Security – ability to use certificates provided by a user"," ","Authorization - currently added Basic authorization method using username and password."," ","."],[" ","             Create a new agent and select platform and driver as WebService."," ","Go to Configurations-> Agents and click on the + button."," ","In the Agent Wizard, enter the Name and select ‘WebServices’ in the Platform type."," ","             Configure relevant fields:"," ","SaveRequestXML, SaveResponseXML – setting Value to true will save the request files being sent and received responses"," ","SaveXMLDirectoryPath – The path where all requests and response will be saved"," ","Test Agent – click on the ‘Test Agent Configurations’ button to make sure all the settings are correct."," ","Make sure connection is successful:"],[" ","WebServices Platform."," ","Soap UI 5.0.0 or above should be installed on the machine."," ","SoapUI Project XML should be available"," ","String for validation is required to verify the output if needed."],[" ","             Double click on the Business flow. In the Activity Actions, click on the ‘Add New’ button"," ","            In the ‘Platform Actions’ tab, select the ‘SoapUI Wrapper Action’ then Double click on the action row you selected/highlighted "," ","            And it will automatically be added"," ","           The below screen should be displayed."," ","‘XML File Location:’ use the Browse button to give the soapUI project XML file."," ","The ‘Import XML file to Solution folder’ is used to copy the file to the Ginger Solution folder."," ","There is an option to Add Respond XML Nodes to the Output Values."," ","Checkbox “Ignore Report XML validation” is by default unchecked, the process will check if all the return test steps statuses ","are “OK” otherwise the action will be failed, if you don’t want the process to fail the action based on the statuses, please ","check this check box."," ","By default, the process will run all test steps that exist on this project XML. If you want to narrow your test scope or if you ","need to configure test case properties please select test suite and test case, if the combo boxes are empty please press the ","refresh button"," ","From any ‘…’ the user can reach the value expression editor screen and parameterize the inputs:"," ","Once Test Case selected the “Configure Test Case Properties” become enabled, Click it if you need to configure test case ","properties or place holder which will be replaced by the process on runtime"," ","Once “Configure Test Case Properties” checked, the Radio selection and test case properties grid will become visible to the ","screen with all the relevant properties related to this test case, fill the ones you need and then delete all the rest (not ","mandatory), if you need placeholders instead so please click on Placeholders radio button and add the placeholders you ","need to replace on runtime."," ","Entering any field from the below screenshot will replace the default value inside the project XML on runtime."," ","  In the screenshot below you can see the required fields"," ","Endpoint URL – this is the ‘endpoint ‘ URL where the request is being sent (same as in SOAP UI)"," ","If custom network credentials are required to access the endpoint URL (for example Username = so, Password=sa), a radio ","button can be marked as ‘Custom’ and then 3 additional fields will be visible allowing the user to populate: username, ","password, and domain"," ","SOAP Action – This allows customizing the Action header in the request (if required, or can be used to identify different ","actions or index them)."," ","‘Do not Fail Action on Bad Response’ - when a checkbox is marked no validation will be done on the response code (useful ","for negative testing)."," ","‘Request Headers’ – by clicking on the ‘+’ sign (#6) the user can add a field that is required in the request e.g. token, in the ","case of adding a token the values should be as follows:"," ","Header = ‘Token’ (or as required per specifications)."," ","Value = the token value ."," ","If you need to configure the system, global, or project properties you shell do it in the below grids."," ","Run Action."," ","After running the action “Open Execution Output Directory” button will become enabled, click it if you want to see all the ","generated output files."," "," All the relevant data (Request, Respond, Message, Properties, Output Properties, etc..) will be generated at the Output"," ","                  values grid, to validate the data you can add expected value fields just click on the “…” button and fill your expected behavior"," ","                   here are some examples:"," ","\n        ‎"," ","                   If you want to see if some data got on the response using “Actual contains the string”"," ","                If you want to see what is the index of a specific text inside the response use “Get Inner String Index”."," ","                Security Configurations:-"," ","                Authorization – allows using the authorization method."," ","                 Web API Rest Action:-"," ","                 Configuration"," ","                 Go To the ‘Add Action’ screen and select ‘WebAPI REST Action’ and click ‘Add Action’"," ","   Action Type configurations:"," ","  In the screenshot below you can see the required fields"," ","Endpoint URL – this is the ‘endpoint ‘ URL where the request is being sent (same as in SOAP UI)"," ","If custom network credentials are required to access the endpoint URL (for example Username = so, Password=sa), a radio ","button can be marked as ‘Custom’ and then 3 additional fields will be visible allowing the user to populate: username, ","password, and domain"," ","‘Do not Fail Action on Bad Response’ - when a checkbox is marked no validation will be done on the response code (useful ","for negative testing)."," ","‘Request Headers’ – by clicking on the ‘+’ sign (#6) the user can add a field that is required in the request e.g. token, in the ","case of adding a token the values should be as follows:"," ","Header = ‘Token’ (or as required per specifications)."," ","Value = the token value ."," ","Request Type: populate request type per requirement"," ","**Note: GET/DELETE Requests do not require a request body"," ","HTTP Version – HTTP protocol version (mostly used Version 1.1):"," ","Response content Type – encoding of the response the user expects to receive:"," ","Cookie Mode:"," ","Don’t use cookies – the platform will not record nor send cookies."," ","Use Fresh Cookies – the platform will retrieve the cookies from the response and store them, for example storing ","the cookies from a login step."," ","Use Session Cookies – will use previously-stored cookies, for example, if a login step is required then the cookies ","retrieved from the login step will be used"," ","      From any ‘…’ the user can reach the value expression editor screen and parameterize the inputs:"," ","     Request Body:"," ","    In this section, the user can define the body of the message"," ","Radio button selecting input type: free text or from a file."," ","**Note file types are : JSON, XML,txt."," ","Body content Parameters – ability to replace keys with values per definition"," ","Body content Type – request encoding"," "," Security Configurations:"," "," This section allows the user to configure security settings:"," ","SSL Certificates :"," ","This area allows adding a custom SSL certificate to the request, default the platform Accepts all Certificates,"," ","When the ‘Custom’ radio button is selected 2 fields become visible, Certificate Path & Certificate Password ( not mandatory), and "," ","the user can browse for the certificate or pass its path in a variable."," ","Security Type – as mentioned in the introduction the user can select the security protocol per system requirements from ","a drop-down list"," ","Authorization – allows to use of different authorization methods:"," ","Output Section"," ","If the actions successful the output values will be populated with :"," ","Response code, headers, full response, parsed response per fields:"]],"3":[[" ","Pre-requisite"],[" ","Action Operation"]],"id":"114"})
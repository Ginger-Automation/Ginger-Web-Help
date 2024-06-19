rh._.exports({"0":[[" ","Diameter Action"]],"1":[[" ","Diameter Action"]],"2":[[" ","Diameter action is used for ","automating ","Diameter protocol messages over TCP using Ginger."," ","Diameter protocol is an authentication, authorization, and accounting (AAA) protocol used for various network applications, including authentication, authorization, and accounting for services such as access control, roaming, and network resource management."],[" ","   A new/existing Solution with WebServices Target Application & WebServices Agent."," ","For new Solution:"," ","Click on Create New Solution:"," ","Select Web Services as Main Application Platform:"," ","  2. ","For existing Solution:"," ","Click on CONFIGURATIONS tab and add a new Target Applications:"," ","Click on Agents tab and add a new WebServices Driver:"," ","Click on Next button, expand the Connection Configurations -> TCP Details, check the use TCP client and provide the hostname & port for the Diameter node you want to connect to"],[" ","Click on ‘BUSINESS FLOWS’ tab, add a new Business Flow"," "," 2. ","Select your WebServices platform"," ","3. ","Open the created business flow by double-clicking on it"," ","4. ","Click on ‘+’ button to add new Action"," ","5. ","Click on ‘Action Library’ and add a new ‘Diameter Action’ under the ‘Platform Actions’"," ","6.  ","Open the action by double-click on it, click on the ‘Operation Settings’ tab"," ","Message Type Selection – ","select from a predefined message for quick action configuration or leave as ‘Custom Message’ to send a different message type."," ","Message Header –"," configure the message header."," ","Command Code - ","Each command Request/Answer pair is assigned a command code."," ","Application ID -"," Application-ID is used to identify for which Diameter application the message is applicable."," ","Hop-by-Hop Identifier - ","The Hop-by-Hop Identifier is an unsigned 32-bit integer field that is used to match the requests with their answers as the same value in the request is used in the response."," ","End-To-End Identifier -"," ","The End-to-End Identifier is an unsigned 32-bit integer field that is used to detect duplicate messages along with the combination of the Origin-Host AVP."," ","Message Command Flags:"," ","Request - ","If set, the message is a request. If cleared, the message is an answer."," ","Proxiable -"," If set, the message MAY be proxied, relayed or redirected. If cleared, the message MUST be locally processed."," ","Error -"," If set, the message contains a protocol error, and the message will not conform to the CCF described for this command. Messages with the \"E\" bit set are commonly referred to as error messages. This bit MUST NOT be set in request messages."," ","Request AVPs - ","AVPs are fundamental building blocks of the Diameter protocol and are used to carry information between Diameter nodes, typically in the form of a structured attribute and its associated value."," ","Diameter AVPs are used in Diameter messages to carry information related to the specific application or service being provided. They are used for exchanging various attributes, such as user identity, authorization attributes, and accounting information, among others. Diameter applications define the specific AVPs and their usage for the particular application."," ","  1. ","Name – ","The attribute name."," ","2."," Code -"," AVP Code is a unique identifier that defines the attribute's type. It specifies the attribute's semantics and purpose."," ","        3. ","Data Type –"," The format of AVP, supported types"," ","  4. ","AVP Flags - ","These are bits that provide additional information about the AVP."," ","1."," Mandatory - ","indicates whether support of the AVP is required. If set, AVP is mandatory."," ","                        2. ","Vendor-Specific – ","indicates whether the optional Vendor-ID field is present in the AVP header. "," ","                              if set, the AVP Code belongs to the specific vendor code address space."," ","               5. ","Vendor-ID - ","An optional field that identifies the vendor that defined the AVP. It allows for extensibility and the inclusion of AVPs"," ","               defined by different vendors"," ","              6."," Parent AVP –"," Some AVPs are nested under another AVP which its type is of ‘Grouped’ in the ‘Data Type’ field, if set, the selected "," ","               AVP in the Parent AVP field is the parent of the current AVP. i.e., ‘Subscription-Id’ AVP is of type ‘Grouped’ and ‘Subscription-Id-Type’ "," ","               AVP is a child of ‘Subscription-Id’ AVP"," ","  7. ","Value – ","This is the actual data associated with the AVP, which can vary in format and structure depending on the AVP's type."," ","AVPs of type ‘Grouped’ doesn’t have value."," ","   5. ","Custom Response AVPs"," ","– ","allow the user to customize current AVPs with different data and add non-existing AVPs that are required to process the response."],[" ","Set the Diameter action with the required details as mentioned in the ‘Diameter Action Configuration’ Section"," ","When selecting an AVP with ‘Data Type’ of ‘Enumerated’, provide the integer value rather than the Enum value. I.e., The AVP ‘CC-Request-Type’ is of type Enumerated and its Enum Values are: INITIAL_REQUEST (1), UPDATE_REQUEST (2), TERMINATE_REQUEST (3), for INITIAL_REQUEST, use the value of ‘1’ rather than ‘INITIAL_REQUEST’."," ","After building the message, use the ‘View Raw Request Preview’ to view the message formatted:"," ","A new pop-up window will open with the message:"],[" ","After running ‘Diameter Action’, you can see the raw output at the ‘Output Values’ tab in 2 different ways:"," ","1. In the Output Values table, where the raw response is parsed and populated with the full raw request."," ","2. By pressing the “View Raw Output Values” button."]],"3":[[" ","Introduction"],[" ","Pre-requisite"],[" ","Diameter Action Configuration"],[" ","Building Diameter Action"],[" ","Action Execution Results"]],"id":"98"})
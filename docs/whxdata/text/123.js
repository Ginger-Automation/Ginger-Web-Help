rh._.exports({"0":[[" ","Email Action"]],"2":[[" ","Introduction "],[" ","How to Configure Action"],[" ","Configure for Sending Email"," ","Pre-requisite"],[" ","Configure for Reading Email"," ","1. ","Configure for Reading Email using MS Graph API (Read email form Outlook)"," ","Pre-requisite"],[" ","Registering an Application on Azure for using Ginger Email Read Action"],[" ","2. ","Configure for Reading Email using IMAP (Read email form Gmail)"]],"3":[[" ","Email Action"],[" ","Email action supports two types of operations"," ","Send",": Send operation is used for sending emails. This can be accomplished with either SMTP or Outlook. While sending emails user can also choose to send attachments."," ","Read",": Read operation is used for reading emails from a particular mailbox. This is accomplished using Microsoft’s Graph API. So currently it works with Outlook mailboxes only."],[" ","Click on the Business Flows. Click on the ‘+’ icon as shown below"," ","Click on ‘Actions Library’"," ","Go to the ‘General Actions’ tab under the ‘Action Library’ screen and double click on Email Action’."," ","Email Action will be added as shown below"," ","Double click on it and go to the ‘Operation Settings’ tab."],[" ","For using SMTP option for sending emails, you must have the SMTP related details like Host, Port, Username, Password etc. "," ","For using Outlook option for sending emails, no additional details are required."," ","Steps"," ","Click on the ‘Send’ radio button in ‘Action Type’"," ","Users can fill in the details like From, To, CC, Subject, Body and Attachment Files Path as per the requirement."," ","Go to the ‘Configuration tab on this screen to select ‘E-mail Method’ as ‘Outlook’."," ","Users have the option to use the E-Mail Method as SMTP. Find the below screen for more details."],[" ","For using Microsoft’s Graph API for reading emails, you must have the Client Id and Tenant Id. You can get these details from Azure portal. For more information on how to register an application on Azure and get it ready for Ginger, you can follow this document."],[" ","Follow these steps to register an application in Azure and get it ready to use with Ginger Email Read Action:"," "," Sign In to the Azure portal."," "," Search for and select Azure Active Directory."," "," Under Manage, select App registrations > New registration."," ","4. Enter a display Name for your application. In this case you can enter ‘GingerCore’"," ","5. Specify who can use the application, sometimes called its sign-in audience. In this case you can choose ‘Accounts in this organizational directory only’"," ","6. For Redirect URI, choose ‘Mobile and desktop applications’ as platform and enter ‘http://localhost’ as value."," ","7. Click on ‘Register’ to complete the app registration."," ","8. After the registration you can get the Client Id and Tenant Id in the registered application’s ‘Overview’ tab."," ","9. Go to the ‘API Permissions’ tab and click on ‘Add Permission’"," ","10. In ‘Request API permissions’ screen click on the ‘Microsoft Graph’ option and then select ‘Delegated permissions’ option."," ","11. Select the below permissions and then click on ‘Add permissions’ button"," "," email"," "," offline_access"," "," Mail.Read"," ","NOTE: You might require Admin Consent for the registered application to use these permissions."," ","Addition Reference Links:"," ","https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app"," ","Steps"," ","Click on the ‘Read’ radio button in ‘Action Type’"," ","Users can search email from all folders by choosing the ‘All’ radio button in ‘Folder’ filter or they can choose to search from specific folders by choosing the ‘Specific’ radio button and entering the folder names. To specify multiple folder names, separate them using semi-colon (;). e.g. Inbox;Saved;Archives"," ","Users can narrow the search result by using the appropriate filters like From, To, Subject, Body etc., they can also choose to search emails within a specific date range."," ","By using the ‘Has Attachments’ filter users can also choose to download the attachments of a specific content type in their desired location","."," ","In the ‘Configuration’ tab specify the Email credentials for the account for which you want to read the emails."," ","You can get the ‘Client Id’ and ‘Tenant Id’ from the Azure portal, when you register the application there. "],[" ","To perform this operation we need to select the Email Action from the General Actions tab. "," ","Next Select the Read radio button. Under Email Method select the IMAP one."," ","There are 2 tabs . "," ","Filters tab "," ","Configuration tab"," ","Under ","Configuration tab"," we have to provide all the configuration details for connection."," ","To connect to gmail we will be requiring 4 parameters. "," ","1"," ",": IMAP Host"," – for Gmail the host will be ","imap.gmail.com"," ","2 ",":  IMAP Port"," – for Gmail its ","993"," ","3 ",":  User Email"," – It’s the email ID of the User whose Gmail inbox need to be read. "," ","4 : ","User App Password"," – For logging into gmail account here we will be needing the App Password of the user. To generate App Password  follow steps provided  in this document."," ","Next is the ","Filters Tab",". We can use different filters to filter out the emails as per requirement. "," ","In the ","From filter",","," we have to provide the email id . It should filter out the emails received only from the specific account with the email id."," ","In the ","To filter",", we can provide multiple email ids separated by ‘;’ . Suppose we want to read all the mails that are sent to two other accounts ","abc@xyz.com"," and ","pqr@abc.com"," along with the user account, then we have to provide ","abc@xyz.com",","," ","pqr@abc.com"," ","in the To filter. "," ","Subject filter"," ","works on contains. Suppose we want to filter out all the emails that have a specific text in the subject, then we put that that text in this filter."," ","The ","Body filter"," ","also works the same way as Subject filter. "," ","The ","Received Date"," ","filter filters out the messages based on the message received date"," ","Has Attachment has a dropdown with 3 options. "," ","1. Blank"," ","2. Yes"," ","3. No"," ","If nothing is selected ie if it is ","blank",", it will not consider this filter. "," ","If its ‘","yes’ ","then only those emails  will be selected that has attachments. "," ","If its ‘","No’",", then those emails will be selected which do not have any attachments"," ","How to Generate App Password"," ","Login to your gmail account. "," ","Click on your Profile Icon"," ","Click on  Manage your Account"," ","Click on Security tab"," ","Turn on 2 step verification if it is off. ","Click on the arrow next to 2-step verification"," ","Click on ","Get started"," ","Provide phone number and click ","next"," ","You will get the below screen "," ","Click on ","TURN ON"," ","You will get the below screen "," ","Click on ","PassKeys",". Will get the below screen"," ","Click on ","Create a passkey",". The below screen will appear"," ","Click on ","use another device"," ","Click ","on the device you want to send the notification regarding authentication for creating a passkey."," Do the necessary security tests for authenticating the process. "," ","On successful completion,  we will get the below screen "," ","Next go to the link "," ","https://myaccount.google.com/apppasswords"," ","The below screen will appear. Again to create App Password, we have to go through the authentication mechanism."," ","Click on ","Continue",", the below screen will appear."," ","Click ","Continue"," ","Message will be sent to the registered device. Again authenticate the process. You will get below screen"," ","Select the App and device and click on ","GENERATE"," ","We will get the below screen "," ","Copy the App Password and use it while logging into the read gmail application. "," ","Reference for creating the App Password"," ","https://support.google.com/accounts/answer/185833?hl=en#zippy=%2Capp-passwords-revoked-after-password-change%2Cwhy-you-may-need-an-app-password"," ","https://www.zdnet.com/article/gmail-app-passwords-what-they-are-how-to-create-one-and-why-to-use-them/"]],"id":"123"})
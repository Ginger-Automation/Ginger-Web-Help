rh._.exports({"0":[[" ","Ginger End to End Flow- Do it Yourself"]],"2":[[" ","OBJECTIVE:"]],"3":[[" "," Ginger End to End - Do it Yourself"],[" ","This exercise will help you automate a small flow using GINGER."," ","Here we will see the steps on how we automate the flow of launching URL  ","https://demoqa.com/automation-practice-form"," "," using the ‘Auto-Pilot’ or ‘POM’ (Page Object Model) option and customizing the execution report as per our requirement."," ","1. To create a solution, click on the drop-down as shown below and select the ‘Create New Solution’ ","option","."," ","In the pop window, enter the name of the solution (as shown below) browse to the location of the folder where you wish to save your solution. Also provide the encryption Key as per your choice. (Encryption Key is getting used to make your solution password protected)"," ","Since we are automating a website flow select the application as “MywebApp” and platform as “WEB”. With a click on create, a solution is created successfully."," ","2. This will load the solution as shown below."," ","3. Go to the Configurations tab and click on Agents.  "," ","In the left panel, the agent is automatically created for the “MyWebApp”. ","The default driver for the WebApp application is Internet Explorer “SeleniumIE” and the driver type can be changed if needed using the dropdown."," ","4. Once the solution and agent are created, double click on the Business flow and it will take you to the automation area. "," ","In this window, you will see various sections like Activities Group, Activity-Variables and Actions. "," ","By default, Activity1 is added as shown below. "," ","5. ‘Auto-Pilot’ or ‘POM’ (Page Object Model’) option, we need to create POM. POM reads the webpage and learn all web elements and stored the same."," ","To create POM, go to ‘Resources’ tab then ‘Application Models’ and click on ‘Page Object Models’."," ","To create a new POM, please click on ‘+’ icon."," ","Click on ‘Next’ button"," ","Now ‘start’ agent, click on Start icon."," ","After starting agent, Browser would be open and then put URL: ","https://demoqa.com/automation-practice-form"," ","ToolsQA page would be opened. "," ","Now go to Ginger POM screen"," ","Now you will see the Elements on the pages, which POM will learn."," ","By default, all elements are selected. User can select (selects and unselects elements) elements as per their choice. Only selected elements would be learned by POM."," ","Note: As per current web page need, we don’t need Hyperlink and Iframe to be learned, hence we unselected."," ","Click on ‘Next’"," ","Now POM is learning the elements of pages. Once all elements are learned, then processing will be stopped. "," ","You can click on ‘Finger’ icon to highlight the actual web element on page."," ","Go to Web page and check ‘First Name’ text box is highlighted."," ","Then click on ‘Finish’ button, close the Agent and Save this POM."," ","Note: Here in the Mapped Elements, you can see web elements like First Name, Last Name, Email, Gender and so on got identified."," ","POM has been saved."," ","6. ","Now go to Business Flow Tab and click on ‘Automate’ option."," ","7. Now first to launch URL, please click on ‘Actions Library’ and please add ‘Browser Action’ from ‘Platform Actions’"," ","Click on ‘+’ icon to add actions."," ","Go to ‘Actions Library’."," ","Go to ‘Platform Actions’ tab and select ‘Browser Action’."," ","Double Click on ‘Browser Action’ option to add the same."," ","8. ","Now to configure the URL Link, double click on the Browser action and go to ‘Operating Settings and select URL Source as ‘Page Objects Model URL’."," ","9. ","Now select ‘Page object Model’. To select POM, click on down arrow and select POM name."," ","Now Save the same."," ","10. ","Now again Click on ‘+’ icon"," ","Press White color back arrow key."," ","Click on 'Application Models’."," ","Click on ‘Page Object Model’."," ","You will see your saved POM, select POM and scroll down and you would be able to see all elements (Mapped Elements) of this POM."," ","Note: Here in the Mapped Elements, you can see web elements like First Name, Last Name, Email, Gender and so on got identified."," ","11. Now to automate the flow, use these elements to create the actions."," ","Select the elements and click on ‘Black Back Arrow Key’ and actions would be created automatically. Now configure the actions."," ","                                                           Or"," ","Select, Drag and drop the element to create the actions."," ","12. "," Now add other actions in same manner "," ","Note",":  In case of Web Applications, if any web page has ","Form ","then during POM creation, Ginger also creates ","Suggested Activities"," as well. "," ","Suggested Activities"," contains all the required actions of web page. After adding this activity users are not required to add Browser action & all other actions explicitly (as user will get all the things in place in one GO automatically)"," ","Please see below in screenshot. ","(You can use this approcah for steps from Step 7 to Step 12)"," ","Add this"," Suggested activity"," ","Click on 'Select' option"," ","Suggested Activity got added and it contains all the actions as well including 'Go to URL' action (Browser action) automatically. "," ","13. User can rename the action name. Double click on any action and go to Details Section and update the Description."," ","14. Complete the configurations of action wherever required as follows:"," ","For below action provide the First Name value"," ","Do configurations for all other actions as well wherever required as follows: "," ","15. For DOB action: ","Selection of ","current"," ","date"," from Calendar for this example",": To set current date please use Element Action as ‘Set Value’ (instead of ‘set Text’)"," ","16. ","Note",": ","Selection of ‘Radio button’ and ‘Check box’:"," ","In general, to select ‘Radio button’, ‘Check box’ on web pages, we need to use by default identified Element action is ‘Click’ as follows:"," ","However few websites don’t work with ‘Click’ option for those we have to use ‘Java Script Click’ Element action (Reason of this: This is because of the development nature of webpage)"," ","For current example webpage: Please Use ‘Java Script Click’ element action as follows to select Gender and Hobbies:"," ","17. ","Selection of option or value from dropdown list:"," ","To handle drop down on this ","webpage"," for Subject, State and City field, first we need to put text (using by default action of POM) into text box to filter the list item or option from depdown list and later to select this option we will use “Send Key Action with ‘Enter’ option” as follows: "," ","For Subject",": First set text to insert into text box to filter the option of dropdown list."," ","Now add ‘Send Keys Action’ action from Actions Library ","à"," General Actions option explicitly."," ","Now do configuration for this ‘Send Keys Action’. "," ","Double click on action and go to ‘Operation Settings’ tab."," ","Please note: Send Keys Action works with below values:"," ","Locate by:  By Title and provide title of your webpage in ‘Locate Value’ filed"," ","Check ‘Send Keys Separately’ check box"," ","‘Select Keys to be sent’ (for use we need to use ‘Enter’)"," ","Updating name of the action for better understanding:"," ","18. Do the same thing for State:"," ","19. Do the same for City as well:"," ","20. After addition of all actions and configuration, please click on save button."," ","21. To run this automated flow, please click on ‘Run Flow’ option."," ","It will start running the automated flow and will submit the form and you will get below screen. "," ","22. Now to create a run set, go to the ‘RUN SETS’ tab."," "," Click on ‘Run Sets’ option."," "," This will display the belwo screen. ‘Default Run Set’ would be created. "," "," Click on the + button as shown by the arrow below to add the required Business Flows."," "," In the displayed window, select the Business Flow and click on the Select button."," "," The Activities & Actions in the Business Flow get added to the Run set."," ","Click on Up Arrow Key to see the business flow and activities and actions:"," ","Click on Save icon."," ","Note: To set the layout of Report Go to ‘Configurations’ tab ","à"," Reports Section and make configurations as per your need"," ","23. ","To Generate ‘Run Set Report’:  Go to Run Set tab and click on Report icon:"," ","Execution report can be sent over email automatically, once execution is completed."," ","To configure report, go to the Operations Tab of created Run Set."," ","Click on ‘Add send HTML report Email Operation’ option"," ","Configure or fill all the details in Message, Delivery Method options."," ","Once the report is configured save the run set."," ","To run the run set, click on the RUN button as shown below."," ","One can see the progress of the execution by the status displayed at the corner of the business flows, activities and actions as shown below."," ","Once the execution is completed status would be as follows in Run Set."," ","Once the execution is complete a mail is sent showing the outcome of passed and failed test cases like below. It also shows the run set details with the execution start and ends time."," ","There is also a zipped HTML with the mail containing the HTML report with all the details like below."]],"id":"131"})
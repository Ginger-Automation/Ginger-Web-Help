rh._.exports({"0":[[" ","Windows Automation Run Book"]],"1":[[" "," Windows Automation Run Book"]],"2":[[" ","Configuring Solution"],[" ","Configuration for Windows"],[" ","Automation Procedure"],[" ","Understanding the Ginger Window Explorer"],[" ","Ginger Windows Actions:"],[" ","Automating Desktop:"]],"3":[[" ","Contents"," ","Configuring Solution"," ","Configuration for Windows"," ","Automation Procedure"," ","Understanding the Ginger Window Explorer"," ","Ginger Windows Actions"," ","Automating Desktop"," ","Windows Automation enables Ginger to Automate windows .NET-based apps, including the elements on Desktop."],[" "," Click on the Solution name drop-down and select the ‘Create New Solution’ option."," "," Click on Create New Solution, enter Solution Name, browse Solution Folder, Select Main Application Name as “MyWindowsApp”, Select Main "," ","Application ","Platform “Windows” and","then click Create."],[" "," At least one agent is required for Windows Automation. When a new solution is created, a default agent is available in the solution. Another "," ","Agent can be ","added with the below "," steps."," "," Configuring Agent"," "," To add a new Agent, go to the Configurations --> Agents, and click on the + button as shown below."," "," The Agent Wizard is displayed. It shows the information about the Agent. Click on the Next button."," "," It is advisable to go as per the methodology as Windows_<Application_Name>"," "," In this case, we do not have any specific application, so we are using the agent name as “Windows Platform Agent”."," "," Select the Platform as ‘Windows’ and click on the Next button."," ","‎"," ","Driver Configurations window gets displayed. Users can edit the parameters if desired."," "," Users can click on the ‘Test Agent’ button to test if the connection is successful."," "," Click on the Finish button."," "," The Agent is added to the list."," ","Configuring Business flow:"," ","While adding new Business flow, a user must select the target application “WindowsApplication”, so that Ginger would make the "," ","Windows agents available for that business flow."," "," If the business flow is created already, the above dialog box will be displayed in the Details tab of the Activity."],[" "," Automation in Windows is possible only through spying (using the Window Explorer of Ginger). "," "," Recording actions are not implemented for Windows."," "," After the Agent has connected successfully, a green switch would indicate all is working."," ","Concept and additional information -"," "," In simple words, you need to use Switch Window action always before performing any activities on a particular window. "," "," This action tells Ginger which window to work on out of many running windows applications."," "," How does it work?"," "," When we say we want to Automate a windows application, the first question comes:"," "," How will Ginger identify the window that we want to automate out of all the windows running?"," "," The answer is simple. We would tell Ginger to Automate a specific window by using its window name as its identity. Thus, we refer to the "," ","window to automate "," "," by using its window name and switching to that window before performing any other actions on it."],[" ","To open Ginger’s Window Explorer, click on the + button as shown below."," "," Click on the Explorer button."," "," Then following window get displayed."," "," Adding Switch Window Action -"," "," First, select the window which we need to Automate from the Ginger Window Explorer."," ","Note that the selection was done manually in this case."," "," To do this at run time, we need a Switch Window Action with the window name as a parameter."," "," Click on the button shown below to create the activity and add it to the business flow with a single click."," ","‎"," ","As we proceed further with creating the actions for the automation, keep an eye on the “Activity Actions” section, where these actions will be "," ","added one by one a","s soon as we add them."," "," For now, we can see only the action that we have added, i.e., the switch window action:"," "," Spying Elements"," "," Live Spy tab in the Ginger Window Explorer allows the user to spy on the elements."," "," Click on the Spy button to activate the live spy."," "," When Spy gets activated below Spying... button gets displayed."," "," On the windows application, hover over the area you need to perform an action and press and hold the control button on the keyboard."," "," Suppose if we want to click on the "," button in Skype, we hover on that button while keeping the control key pressed. "," "," A red border over the element will confirm the element that is being spied."," "," Once the element was identified click on the Stop button as shown below."," "," At this point, the Ginger Window Explorer would look like this:"," "," There are 2 sections of the Ginger Window Explorer that we require to check:"," "," Actions"," "," Locators"," "," The Actions section: This section shows the actions that we can perform on that specific element. "," "," Users can select Element Type and Element Action depending upon the need."," "," The Locators section: This section will show the different locators that we can use to identify the element. "," "," We need to use a locator that works for this scenario. (Ideally should be unique)"," "," If any parameters need to be passed in the action (like if you need to set a specific text value in a text box), they should be added in the value "," ","textbox of the"," Ginger Window Explorer. For a button, this is not required, so we will skip that part."," "," Once we have selected the Action and a Locator, we can click on the Run button to test it."," "," (In case it fails, test again with a different locator/action)"," "," The test result will be displayed as follows. We can check Execution Status under Execution Details."," "," (If you do not get this message, try using a different locator)"," ","    As soon as the action is tested to be working, add it to your business flow by using the Add button."," "," Spying different types of Elements"," "," There can be multiple element types, like buttons, text box, drop-down, combo box, radio button, etc."," "," For all these different types of elements, the user can select Element Type and Element Actions from the Action tab."," "," Similarly, in case the element is a text box, then the user can perform Set Value, Get Value, Get Control Property, Send Key, Set Text, etc. actions "," ","related to the "," text box element."," "," Ginger Window Explorer - Conclusion"," "," This concludes the Ginger Window Explorer."," "," It is a powerful tool that is flexible to support and handle any type of element and can add actions under it."," "," Not only is it useful in Windows, but you can also use it while Automating Web, CRM or CSM, in the same way."],[" ","Although Ginger Window Explorer selects and adds the action of the required type to the business flow, there can be circumstances where we "," ","need to add ","some actions manually. Hence, let us hover through the actions supported by a Windows Agent."," "," The help topics for these actions are provided in the Ginger interface itself and will be visible by clicking on the action type."," "," Windows Control Action"," "," Although the action can be created using Ginger Window Explorer, in some cases we need to use an action that is different from the available "," ","list of actions."," "," After the action is added, what the action does can be changed by editing the action."," "," Below is a list of actions used frequently:"," ","Click: Performs click operation"," ","GetValue: Fetches value from an element"," ","IsEnabled: Returns the state of an object as true or false. (Used in checkboxes/radio buttons)"," ","SetValue: Sets value in an element. Can be a text box, combo box, list, etc. anything that requires setting a value."," ","DoubleClick: Performs double click operation."," ","RightClick: Performs right-click operation."," ","SendKeys: Sends keyboard strokes to an element. Use this if SetValue is not working."," "," Window Action"," "," The action comes with 5 operations that can be performed on a window level. Each action is self-explanatory."," "," Switch Window Action"," "," Brings a window in focus to perform actions on it."," "," “Locate By” used is generally “By Title” and “Locate Value” is the title of the window to be brought in focus."],[" ","Items on the desktop can also be Automated using Ginger."," "," To automate an item on a desktop, use “Program Manager” as the Window in the Ginger Window Explorer."," "," After this, the procedure is the same as automating any other applica","tion."]],"id":"112"})
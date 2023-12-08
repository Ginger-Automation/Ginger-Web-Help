rh._.exports({"0":[[" ","Automatic Actions Convertor"]],"1":[[" ","Purpose"],[" ","How to use the Actions Convertor?"],[" ","Some troubleshooting tips"]],"2":[[" ","Name of Activities in the Business Flow"],[" ","Convertible Action Types"],[" ","Conversion Configurations"],[" ","New Activity with selected Target Application from the dropdown list"],[" ","Same Activity with selected Target Application from the dropdown list"],[" ","Action conversion to use the POM object"]],"3":[[" ","Automatic Actions Convertor"," ","Contents"," ","Purpose"," ","Understanding the Actions Convertor"," ","Name of Activities in the Business Flow"," ","Convertible Action Types"," ","Conversion Configurations"," ","How to use the Actions Convertor?"," ","New Activity with selected TA from dropdown list"," ","Same Activity with selected TA from dropdown list"," ","Action conversion to use the POM object"," ","Some troubleshooting tips"],[" "," The purpose of adding an Actions Convertor is to allow users to automatically convert their obsolete flows containing redundant "," "," actions to new flows, also it provides the ability to convert to new actions using the POM objects."," "," In this document, we’ll consider the example of conversion of obsolete ASCF Driver-based flows to Java Driver-based flows. There "," "," could be more such scenarios in the future but for simplicity in understanding, we will take the example of conversion of obsolete "," ","ASCF flows to Java Driver."," "," Since ASCF Driver is no longer supported by Ginger and users are highly recommended to switch to Java Driver for automation, "," "," the ","ASCF/GTB Converter will facilitate the users to automatically convert their obsolete ASCF Driver-based actions to Java Driver- "," "," based ","ones thus, minimizing the manual effort to a great extent."," ","Understanding the Actions Convertor"," "," The Actions Conversion window consists of mainly three sections:"," ","Name of Activities in the Business Flow,"," ","Convertible Action Types and,"," ","Conversion Configurations"],[" ","This section lists out all the activities present in the selected Business Flow regardless they are active or inactive."," ","The user needs to select the activities that he wants to convert from the grid and then, click on the View Convertible Action Types buttons."],[" ","This section enlists all the types of actions present in the selected activity by the user. The action types are shown in a grid along with their "," ","Source Activities, which are the parent activities that contain that specific type of action in the activity."," ","The users can also view the Count of the action types in the selected activity i.e. number of occurrences of the action types in this activity "," ","along with their parent activities."," ","Finally, we have the Target Action Type that states the action type of the newly converted actions after the conversion is done.","\n        ‎"],[" ","In this section, the users can do the configuration settings for the conversion. The users can choose whether they want to add the newly converted actions to a New Activity or the Same Activity i.e. the parent activity to which the obsolete action belongs to, also it provides the ability to convert to new actions using the POM objects user can select the existing POM object."," ","The users can also set a default Target Application (TA) for the modified activities by selecting the respective TA from a list of available TAs that are present in the selected Business Flow."," ","In case the flow doesn’t have the required TA (in this case, a Java platform-based) then, the user can simply minimize the Actions Flow Conversion window and add the required TA to the flow from the Solution tab. Once added successfully, the user can switch back to the Actions Conversion window and click on the Refresh button (",") and the newly added TA will be shown in the list of TAs."," ","The user can choose the TA from the dropdown list and then, click on the Convert button and the newly converted actions will be added to a new activity or the same parent activity, depending on the selection made by the user."," ","NOTE: It’s recommended to add the newly converted actions to a New Activity rather than the Same Activity because the new actions will "," ","need mapping to a different TA, in this case, a Java Driver-based TA."," ","Therefore, in a new activity, it is simpler to configure a new TA, in this case, a Java Driver-based TA. Whereas, if we choose to add new "," ","actions to the same activity that is already mapped to an ASCF Driver-based TA, this will result in a conflict here. Although the conflict can "," ","be resolved manually by the user, it will be easier for him/her in case of a new activity."," ","POM Selection window"," ","Figure 1 – Actions Conversion window"],[" ","              Double click on the Business Flow to get to the page as shown below."," ","              Click on the Extra options button and select Convert Legacy Business Flow Actions into New Actions."," ","Figure 2 – Actions Conversion button"," ","Please follow the steps mentioned below:"," ","For example, below is a Business Flow, Web_RegressionTestingSuite, containing multiple activities from an older version."," ","Now as you can see below, the first activity consists of ‘Go to URL Action’ which is an old action."," ","              Figure 3 – Displaying old Action"," ","Click on the ‘Convert Legacy Business Flow Actions into New Actions’ button under the Extra Operations."," ","Actions Conversion wizard will be opened and will display the activities which contain legacy actions."," ","Figure 6"," ","Now we can select the activities which we want to convert to new actions and click on the Next button, we will see a list of Convertible ","Actions Types along with their count listed next to their Source Activities and Target Action Type,"," ","which states the Action Type to which the old action will be converted after the conversion is completed."," ","Figure 7"," ","As you can see above, the selected activity consists of:"," ","1 Goto URL Action and,"," ","2 Generic Element Actions"," ","These are the obsolete actions that will be converted to UIElement Actions."," ","Now, we need to select the type of actions that we want to convert. We can also select all the enlisted Source Action Types too, the ","selections can be made depending on the requirement."," ","After selecting the Source Action Type, we need to decide the conversion configuration. This means that we need to decide whether we "," ","want to add newly converted action(s) to a New Activity or the Same Activity along"," ","with the TA from the dropdown list."," ","Let’s consider both the scenarios separately here,"],[" ","In our example, we can select Web-App (or any other from dropdown) Target Application from the list and then, hit the Finish button, a new "," ","activity with the name, New - Automate Selenium Web, will be added to your business flow"," ","just below the parent activity."," ","Figure 8"," ","We can notice that the old activity has been marked as Inactive and the newly converted activity has been set as Active."],[" ","Now, if we select Menu Item Action and will take the default Target Application as for the Target Application for selected activity from the "," ","list and then, hit the Convert button, we will see that the newly"," ","converted Menu Item actions will be added to the same activity i.e. 2. Create Contact - Mandatory Information."," ","Figure 9"," ","As we can see below that the newly converted Menu Item action into UIElement actions have been added right below the source action in "," ","the same activity. Also, the source actions have been marked as Inactive and the","new UIElement actions have been set as "," ","Active."," ","Figure 10"],[" ","As we can see below that, if we select the POM object to convert the legacy actions to use the POM object then we need to select the "," ","Menu Item Action as in the figure below, by selecting this we can convert the selected actions"," ","to be converted to new actions which use the selected POM object. It tries to search the element (control in action) in the POM object and "," ","binds the new action with the element searched."," ","Figure 11"," ","Figure 12"],[" ","The Actions Convertor has been tested against a number of ASCF driver-based scenarios, with different business flows from different ","projects but there could be some edge-cases, where it may encounter issues while conversion."," ","In such cases, we advise the users to manually configure the obsolete action causing issues like mapping of values – Locate Value, Column "," ","Number or Column Title, etc. from the old action with the new UIElement Action."," ","If the users still face issues with the convertor beyond their control, they are requested to share the scenarios with the Ginger Core Team so ","that they can look into it and fix it, as soon as possible to make the convertor more"," ","robust and intuitive. Their feedback and suggestions are also welcome."," ","It is recommended to choose a New Activity in the Conversion Configurations section to add the newly converted actions."]],"id":"98"})
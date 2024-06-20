rh._.exports({"0":[[" ","Find and Replace - User Guide"]],"1":[[" ","Purpose"],[" ","Find items"],[" ","Replace"],[" ","Save"]],"2":[[" ","Find and Replace - User Guide"," ","Contents"," ","Purpose"," ","Find items"," ","How to Find Items?"," ","Found Items Grid"," ","Replace"," ","Replace Items"," ","Replace With the Right Value"," ","Replace States"," ","Save"," ","\n      ‎"],[" ","The purpose is to find and replace fields among the Ginger entities such as Actions, API Models, Variables, etc."],[" ","Go to the Business Flow tab and double-click on the desired Business Flow. Find and Replace button is displayed as ","shown below."],[" ","Step one will be to select the Item Type user wants to find."," ","Once selected, Sub Item Type will be visible. In case the selected ‘Item Type’ has a sub-item then by default all ‘Sub Items Type’ will be included "," ","in the search. "," ","The user has to select the ‘Sub Item’ to narrow the search scope."," ","Populate the ‘Find What’ field with the field value you want to search."," ","If the user wants to include case sensitive in the search, then check the ‘Match Case’ checkbox."," ","If the user wants to find values that are equal to the whole field value check the ‘Match whole word’ check box."," ","Click the find button."],[" ","      Grid column dictionary:"," ","Item Type – Ginger Entity Type"," ","Item Name – Entity Name (Action Name, Activity Name, etc.)"," ","Item Path – Relative path from solution directory"," ","Item Parent – Parent Path from the Item Path (relative solution directory)"," ","Found Field – The actual field name – in case it’s a field inside field it will appear as a path for example IntptValues/EndPointURL/Value (The user will understand the EndPoint URL, it is shown like this because of the way we are saving it on our backend) please try to find the field inside the path in our example ‘EndPointURL’"," ","Field Value - The actual field value."," ","Double Click on the row or click on the View Details to open the Item edit page from where the user can also change the value and save."],[" ","Only after the finding process is finished, we can run replace process."," ","To see replace configuration please check the Replace Radio Button."],[" ","Once selecting the Replace Radio button, Replace configuration will appear. Replace text box, Replace Selected Button will get displayed."," ","Note: – Value can be replaced only if it is selected, and its status is Pending Replace or Replace Failed."," ","     Also, after selecting the Replace Radio Button 2 new column will be added to the grid Selected and Status."],[" ","In some cases, Replace will be possible only with the right value:"," ","A value which been selected from a list of already defined values cannot be replaced with just any text."," ","Boolean Value – true or false which reflects the checkbox ‘Is checked’ property."," ","To overcome this obstacle, we forced the Replace text box to be changed to a dropdown list with defined values whenever you will select a "," ","row from the Find Result grid which meets the above cases."," ","Please note –If you need to replace value like described above make sure to select only rows with the same field so you do not replace all the "," ","find value but only the one which selected from this list, the Selected check box will be by default unselected."],[" ","To understand the Replace states please refer to the below table"," ","MatchCase"," ","MatchAllWord"," ","Find What"," ","Replace"," ","Value before replace"," ","Value After Replace"," ","Description"," ","X"," ","X"," ","o"," ","GINGER"," ","Hello World"," ","HellGINGER WGINGERrld"," ","Only the Value O was replaced with the new value to replace."," ","V"," ","X"," ","o"," ","GINGER"," ","HellO World"," ","HellO WGINGERrld"," ","Only the lower o has been changed because we included case-sensitive by checking the match case."," ","X"," ","V"," ","Hello World"," ","GINGER"," ","HELLO WORLD"," ","GINGER"," ","The complete value has been changed to the new value."," ","V"," ","V"," ","Hello World"," ","GINGER"," ","Hello World"," ","GINGER"," ","The complete has been changed to the new value."],[" ","Enter the value in the Replace field and select the file from Find Result and then click on the Replace Selected button to save the replaced file."," ","Note: – File can be saved only if it is selected, and its status is Replaced or Save Failed."]],"3":[[" ","How to Find Items?"],[" ","Found Items Grid"],[" ","Replace Items"],[" ","Replace With the Right Value"],[" ","Replace States"]],"id":"90"})
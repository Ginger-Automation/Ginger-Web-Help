rh._.exports({"0":[["Find and Replace - User Guide"]],"1":[["\n  ","\n    "," ","\n    ","                     ","Find and Replace - User Guide","\n    "," ","\n    "," ","\n    ","Contents","\n    ","Purpose","\n    ","Find items","\n    ","\n      ","How to Find Items?","\n      ","Found Items Grid","\n    ","\n    ","Replace","\n    ","\n      ","Replace Items","\n      ","Replace With the Right Value","\n      ","Replace States","\n    ","\n    ","Save","\n    "," ","\n    "," ","\n    "," ","\n    ","\n      ‎","\n    "],["\n    ","          ","The purpose is to find and replace fields among the Ginger entities such as Actions, API Models, Variables, etc.","\n    "],["\n    "," ","\n    ","Go to the Business Flow tab and double-click on the desired Business Flow. Find and Replace button is displayed as","\n    ","shown below.","\n    ","\n    "," ","\n    "," ","\n    "],["\n    ","Step one will be to select the Item Type user wants to find.","\n    ","             ","\n    ","\n    ","Once selected, Sub Item Type will be visible. In case the selected ‘Item Type’ has a sub-item then by default all ‘Sub Items Type’ will be included in the search. ","\n    ","The user has to select the ‘Sub Item’ to narrow the search scope.","\n    ","\n    "," ","\n    ","Populate the ‘Find What’ field with the field value you want to search.","\n    ","If the user wants to include case sensitive in the search, then check the ‘Match Case’ checkbox.","\n    ","If the user wants to find values that are equal to the whole field value check the ‘Match whole word’ check box.","\n    ","\n    "," ","\n    ","Click the find button.","\n    ","      ","\n    "," ","\n    "," ","\n    "],["\n    ","        ","      Grid column dictionary:","\n    ","Item Type – Ginger Entity Type","\n    ","Item Name – Entity Name (Action Name, Activity Name, etc.)","\n    ","Item Path – Relative path from solution directory","\n    ","Item Parent – Parent Path from the Item Path (relative solution directory)","\n    ","Found Field – The actual field name – in case it’s a field inside field it will appear as a path for example IntptValues/EndPointURL/Value (The user will understand the EndPoint URL, it is shown like this because of the way we are saving it on our backend) please try to find the field inside the path in our example ‘EndPointURL’","\n    ","Field Value - The actual field value.","\n    ","               ","\n    "," ","\n    ","  ","Double Click on the row or click on the View Details to open the Item edit page from where the user can also change the value and save.","\n    "," ","\n    "],["\n    ","Only after the finding process is finished, we can run replace process.","\n    ","To see replace configuration please check the Replace Radio Button.","\n    ","         ","\n    "," ","\n    "," ","\n    "],["\n    ","Once selecting the Replace Radio button, Replace configuration will appear. Replace text box, Replace Selected Button will get displayed.","\n    ","Note: – Value can be replaced only if it is selected, and its status is Pending Replace or Replace Failed.","\n    ","                 ","\n    "," ","\n    ","     Also, after selecting the Replace Radio Button 2 new column will be added to the grid Selected and Status.","\n    ","    ","\n    "," ","\n    "," ","\n    "],["\n    ","In some cases, Replace will be possible only with the right value:","\n    ","A value which been selected from a list of already defined values cannot be replaced with just any text.","\n    ","Boolean Value – true or false which reflects the checkbox ‘Is checked’ property.","\n    ","To overcome this obstacle, we forced the Replace text box to be changed to a dropdown list with defined values whenever you will select a row from the Find Result grid which meets the above cases.","\n    ","\n    ","Please note –If you need to replace value like described above make sure to select only rows with the same field so you do not replace all the find value but only the one which selected from this list, the Selected check box will be by default unselected.","\n    ","            ","\n    "," ","\n    "," ","\n    "],["\n    ","To understand the Replace states please refer to the below table","\n    "," ","\n    ","\n      ","\n        ","\n          ","\n          ","\n          ","\n          ","\n          ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","MatchCase","\n            ","\n            ","\n              ","MatchAllWord","\n            ","\n            ","\n              ","Find What","\n            ","\n            ","\n              ","Replace","\n            ","\n            ","\n              ","Value before replace","\n            ","\n            ","\n              ","Value After Replace","\n            ","\n            ","\n              ","Description","\n            ","\n          ","\n          ","\n            ","\n              ","X","\n            ","\n            ","\n              ","X","\n            ","\n            ","\n              ","o","\n            ","\n            ","\n              ","GINGER","\n            ","\n            ","\n              ","Hello World","\n            ","\n            ","\n              ","HellGINGER WGINGERrld","\n            ","\n            ","\n              ","Only the Value O was replaced with the new value to replace.","\n            ","\n          ","\n          ","\n            ","\n              ","V","\n            ","\n            ","\n              ","X","\n            ","\n            ","\n              ","o","\n            ","\n            ","\n              ","GINGER","\n            ","\n            ","\n              ","HellO World","\n            ","\n            ","\n              ","HellO WGINGERrld","\n            ","\n            ","\n              ","Only the lower o has been changed because we included case-sensitive by checking the match case.","\n            ","\n          ","\n          ","\n            ","\n              ","X","\n            ","\n            ","\n              ","V","\n            ","\n            ","\n              ","Hello World","\n            ","\n            ","\n              ","GINGER","\n            ","\n            ","\n              ","HELLO WORLD","\n            ","\n            ","\n              ","GINGER","\n            ","\n            ","\n              ","The complete value has been changed to the new value.","\n            ","\n          ","\n          ","\n            ","\n              ","V","\n            ","\n            ","\n              ","V","\n            ","\n            ","\n              ","Hello World","\n            ","\n            ","\n              ","GINGER","\n            ","\n            ","\n              ","Hello World","\n            ","\n            ","\n              ","GINGER","\n            ","\n            ","\n              ","The complete has been changed to the new value.","\n            ","\n          ","\n        ","\n      ","\n    ","\n    "],["\n    "],["\n    ","Enter the value in the Replace field and select the file from Find Result and then click on the Replace Selected button to save the replaced file.","\n    ","Note: – File can be saved only if it is selected, and its status is Replaced or Save Failed.","\n    ","        ","\n    "," ","\n    "," ","\n  ","\n\n"]],"2":[["Purpose"],[" ","Find items"],["Replace"],[" "],["Save"]],"3":[["How to Find Items?"],["Found Items Grid"],["        ","Replace Items"],["Replace With the Right Value"],["Replace States"]],"id":"67"})
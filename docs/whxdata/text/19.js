rh._.exports({"0":[["How to use Automate Mainframe 3270 in Ginger"]],"1":[["\n  ","\n    "," ","\n    ","                  "," How to use Automate Mainframe 3270 in Ginger","\n    "," ","\n    "," ","\n    ","Contents","\n    ","Configurations","\n    ","Add Action","\n    "," ","\n    "," ","\n    "],["\n    ","Add a new Target Application with platform Mainframe","\n        ‎","\n        ‎","\n    ","Add a New Agent of Type Mainframe 3270","\n        ‎","\n        ‎","\n    ","Configure the agent with your application details, Do not change Term Type unless necessary","\n    ","                        ","\n    ","\n    ","Add the Target Application to the desired Business Flow","\n    ","Add a new activity and choose the Target application with Platform Mainframe.","\n    ","On Proper connection, you’ll see your application screen with a message that the connection is successful.","\n    ","                   ","\n    "," ","\n    "," ","\n    "],["\n    ","Set Text To Mainframe Action","\n    ","  Locate By: Use By Caret Position or BY XY","\n         #x200e ByCaretPosition: Use the caret position shown in the Ginger mainframe window for the desired location.","\n        ‎ ByXY: We can also use the XY in the format x,y to set the location of the text","\n        ‎Set Text and Send Enter Checkbox: Tick this if you want to send enter after setting text.","\n    ","\n    "," ","\n    ","Get Details from MainFrame Action","\n        ‎Similar to Set Text, Get Details also requires the Locate by and Locate Value.","\n        ‎","\n        ‎The value field is the length of the required text starting from the provided Caret Position/ XY.","\n        ‎If left blank it will return the text till the next whitespace.","\n      ‎","\n    "," ","\n    "," Send Keys to Mainframe","\n    "," Use this Action to send Special Keys to the mainframe like entering, Tab Insert, Function Keys, etc.","\n        ‎ Users just need to select the desired key from the dropdown, no other configuration is required.","\n      ‎ ","\n    "," ","\n  ","\n\n"]],"2":[["Configurations"],["Add Action"]],"id":"19"})
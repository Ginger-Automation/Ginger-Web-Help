rh._.exports({"0":[[" ","How to Configure Error Handler"]],"2":[[" ","‎‎","Introduction"]],"3":[[" ","                                                                      How to Configure Error Handler"],[" ","Error Handler is used auto handle the unexpected pop-up/Error which encountered during flow execution via script, and it tries to recover the flow from failure."," ","It is triggered if any action of activity is failed, and that activity should be mapped to execute error handler."," ","How to add Error Handler?"," ","Go to Business Flow tab of the solution and click on the ‘Automate Business Flow’ button as shown below."," ","  Click on Add ‘New Activity’ button as shown below."," ","The Wizard is opened. Select ‘Error Handler’ and click on next."," ","Activity Configurations Tab"," ","Trigger On:"," ","It has two option “Any Error” and “Specific Error”, based on selection underlying Error handler gets trigger."," ","Any Error:"," it is default selection type. if you want to trigger this handler irrespective of error strings, then this selection is required."," ","Specific Error:"," if you want to trigger this handler based on specific error string/s, then this selection is required. On selection of this, the ‘Configure Error’ button is shown as below."," ","On Click of “Configure Error” button, the “Error String Configuration” window is opened."," ","Here you can configure any number of error string as shown below."," ","Post Execution Action:"," ","This option decides, from where to resume the flow after executing handler."," ","It has three options, ‘Rerun Origin Action’, ‘Rerun Origin Activity’ and ‘Rerun Business Flow’."," ","Rerun Origin Action:"," this is default selection. It resumes the flow from failed action, where this handler is triggered."," ","Rerun Origin Activity:"," It resumes the flow from Failed Activity, from where this handler is triggered."," ","Rerun Business Flow:"," It resumes the flow execution from beginning."," ","How to map Error Handler to Activity"," ","Go to Activity and click on ‘Details’ tab as shown below."," ","Error Handler Map:"," ","This option decides, which error handler will be executed. It has below different options."," ","Error Handlers Matching the Trigger:"," It is default option. If user wants to trigger all error handler which having ‘Trigger On’ set to ‘Any Error’ and for ‘Specific Error’ it triggers the handler if originated error has found in error string list."," ","All Available Error Handler:"," it triggers all error handler which is available in Business Flow."," ","None:"," if user does not want to execute any error handler for underling activity then this selection is required."," ","Specific Error Handlers: ","if user wants to execute specific error handler/s for underlying activity then this selection required. User can configure one or more error handler based on selection list that error handler gets trigger."]],"id":"65"})
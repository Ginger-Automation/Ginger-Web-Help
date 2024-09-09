rh._.exports({"0":[[" ","Web Smart Sync Action"]],"1":[[" ","Web Smart Sync Action"]],"2":[[" ","The Web Smart Sync Action is used to monitors the state of a web page and its elements until a specified time. This functionality ensures that the web page and its components are in the desired state within the given timeframe. By continuously checking, it helps maintain the consistency and reliability of web interactions. This Action only supports web platform."," ","Supported operation in Web Smart Sync Action-"," ","1. Element Is Visible:"," This condition checks whether an element (e.g., a button, link, or input field) is currently visible on the web page. If it is visible, the condition evaluates to true; otherwise, it evaluates to false."," ","2. Element Exists:"," This condition verifies whether an element exists in the web page’s DOM (Document Object Model). It doesn’t consider visibility; it only checks if the element is present in the HTML structure."," ","3. Element To Be Clickable:"," This condition ensures that an element is both visible and enabled (not disabled) so that it can be interacted with (e.g., clicked). It waits until the element meets these criteria before proceeding."," ","4. Text Matches:"," This condition checks whether the text content of an element matches a specified value. For example, you can verify if a button displays the expected label."," ","5. Alert Is Present:"," This condition checks if an alert (such as a JavaScript alert, confirmation, or prompt) is currently displayed on the page."," ","6. Element Is Selected:"," For checkboxes, radio buttons, and dropdowns, this condition checks whether an option is selected."," ","7. Attribute Matches:"," You can use this condition to verify if an element’s attribute (e.g., “href” for links or “value” for input fields) matches a specific value."," ","8. URL Matches:"," This condition checks if the current URL of the web page matches a given URL pattern."," ","9. Page Has Been Loaded:"," This condition confirms that the page has finished loading and is ready for interaction."," ","10. Invisibility of Element Located By: ","This condition waits until an element becomes invisible (e.g., hidden or removed) based on a specified locator (e.g., CSS selector or XPath)."," ","11. Presence of All Elements Located By:"," It checks whether all elements matching a specified locator are present in the DOM."," ","12. Visibility of All Elements Located By:"," Similar to the previous condition, this one ensures that all elements matching a locator are visible."," ","13. Invisibility of All Elements Located By:"," It waits until all elements matching a locator become invisible."," ","14. ","Frame To Be Available and Switch To It:"," When working with iframes (embedded frames within a web page), this condition ensures that a specific frame is available and switches the WebDriver context to that frame."," ","15. Selected of All Elements Located By:"," For multiple checkboxes or options, this condition verifies that all elements matching a locator are selected."," ","16. Enability of All Elements Located By:"," It checks whether all elements matching a locator are enabled (not disabled)."],[" ","Prerequisite",": "," ","A solution must be created with a Web Agent having Selenium Driver."],[" ","Double-click on the Business flow."," ","In the Activity Actions, click on the ‘Add New (+)’ button shown below."," ","3. Click on ‘Actions Library’ shown below."," ","4. ","Click on Platform Actions Tab and Double click/Drag and Drop Web Smart Sync Action."," ","5. ","Operation Settings Tab Settings"," ","Select the Locate By value, provide Locate Value input and select Operation Type."," ","According to operation type we can see the Operation Description Below it."," ","We can also use the POM element for this Action"," ","In Locate By select Page Object Model Element"," ","And Select the POM and target element"," ","Timeout- Until specific timeout action will wait to complete otherwise it will mark as failed"," ","Default timeout for this action is 30 second. User can also give the manual timeout"]],"3":[[" ","Introduction"],[" ","How to configure Web Smart Sync Action"],[" ","How to add and use Web Smart Sync Action"]],"id":"82"})
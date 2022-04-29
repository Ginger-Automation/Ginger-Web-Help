rh._.exports({"0":[[" ","Image Based Operation"]],"2":[[" ","Image Based Operation"," ","Ginger now supports Visual Locator using Sikuli. Visual Locators are used when we would like to use images to identify elements on the screen, rather than using elements attributes as an identifier, especially for dynamically added elements where we are unable to get the unique identifier."," ","Ginger Supports below operations:"," ","Set selected application window and take screenshot of your target element from Ginger"," ","Check if an element exists in an application using a screenshot"," ","Click, Double Click and Right Click on an element when it exists"," ","If element is editable and interactable then set text inside the element"," ","If element has text inside it, then get text value from the screenshot of the element"],[" ","Please ensure that Java 1.8 is installed on your system and JAVA_HOME environment variable is set in System Variables as follows: ","C:\\Program Files (x86)\\Java\\jdk1.8.0_202"],[" ","        To add Action, go to Actions Library -> General Actions -> Image Based Operation"],[" ","Click on the ","Refresh Active Windows List"," button and then click on the ","Window"," dropdown to get a list of application windows that are open on your machine. "," ","And select the desired application window on which the operation needs to be performed"],[" ","The ","Show Sikuli Console"," checkbox is used to open the Sikuli console during Action Execution. This is useful when we want to get debug-level information when raising a defect related to Sikuli Operation"],[" ","We can use the ","Capture"," button (",") to shift focus to our selected application and take a screenshot of the target element. "," ","We can also set image path in a variable and use the Value Expression option, or we can set a image path using the ","Browse"," button in case we already have the screenshots taken and do not wish to retake them."],[" ","        You can set any of the supported operations as specified in the ","Operation Type"," dropdown"],[" ","Once we have configured Image Path, the screenshot should be reflected as shown below. In case screenshot is not updated immediately, please use the ","Refresh ","button to update screenshot. In case image is too small or too large, we can adjust zoom levels accordingly."],[" ","In the advanced settings section, we can configure some settings to tweak our action."," ","Similarity Percentage:"," Using this setting, we can configure how similar we want to search for the screenshot on the screen. We can lower this setting if required when the element is visible to us on the screen, but Ginger is unable to find it. "," ","By default, the similarity is set to 70%"," ","Target Application Resolution",": If we want our application to launch with a specific resolution, we can select the target resolution from here. The default resolution launches the application in full-screen mode"," ","Java Version Path",": "," ","If JAVA_HOME environment is configured, then Ginger Automatically pics the java path and use it as default for the Action."," ","In case you want to provide the custom Java path then it can be configured by selecting the ","Use Other"," radio button and specifying the path value explicitly"]],"3":[[" ","Prerequisites"],[" ","Add Image Based Operation Action"],[" ","Select Application Window"],[" ","Show Sikuli Console"],[" ","Image Path"],[" ","Select Operation Type"],[" ","Element Screenshot Preview"],[" ","Advanced Settings"]],"id":"88"})
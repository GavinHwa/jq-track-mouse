Track Mouse
==============
Track mouse is a simple jquery plugin that lets you place some text at the tail of the mouse and that text will follow the mouse wherever it goes on the page.

#Features

Plugin has following features
- Put some text to the tail of the mouse that will follow it wherever it would go. This text can be:
    - String - Simple text that will attach it self to the tail of the mouse
    - An array - the content of it will make an unordered list
    - HTML - HTML will be rendered at the tale of the mouse
- You can make this the tracker blink and it will blink at the rate specified
- You can reset the tracker whenever you want

#Ideas to use it

You can use it however and wherever you want, some possibilies are:

  - That tracking text can act as a constant reminder to the user for something. For example let's say if there is some necessary action pending for the user, you can put this tracker to the mouse and it will keep reminding the user about that pending action
  - In case of some step by step action, you can put the tracker at mouse demonstrating the details of each of the step
  - After a user logs in, you can show a list of TODO items at the tail of mouse and hide it after some time.
  
#How to use it

Using the plugin is simple. Include the plugin script at your page. You can find get it from the repository or <a href="https://raw.githubusercontent.com/kamranahmedse/jq-track-mouse/master/jq-track-mouse.js">from here</a>.

```
<script src="js/jq-track-mouse.js"></script
```

Use the simple function call given below, to show the tracker.

```
$.trackMouse("I am going to track that mouse. You can put some reminder here.");
```

It'll put the text `I am going to track that mouse. You can put some reminder here.` at the tail of the mouse. If you provide an array i.e.

```
$.trackMouse([
    "Step 1 : Introduce the plugin script upon the page",
    "Step 2 : Make that function call",
    "Step 3 : Check that nifty text at the tail of the mouse"
]);
```

it will generate an unordered list and put it at the tail of the mouse. There is more, you can also provide your own html as the text i.e. you can do

```
$.trackMouse("Let's see, what <strong>Bold</strong>, <em>Italics</em> and <span style='font-weight: bold; color: grey;'>my custom style</span> looks like");
```
And it will all be rendered as HTML. You can also make a tracker that will auto hide itself in the time specified in mileseonds i.e.

```
$.trackMouse({
    text : [
        "Step 1 : Introduce the plugin script upon the page",
        "Step 2 : Make that function call",
        "Step 3 : Check that nifty text at the tail of the mouse"
    ],
    autoHide : 5000 // the tracker will auto hide after 5 seconds
);
```
The tracker generated using the above code will hide it self after 5 seconds of appearing. That is pretty dang cool. Right?

Also there are a set of options that you can use to modify the behavior of tooltips. Each of the options are described below:

```
$.trackMouse.options = {
	text : 'This will follow the mouse, no matter what', // Provide your text here (string, array, HTML)
	offset : {
		x : 20,     // Horizontal offset of the text from mouse
		y : 20      // Vertical offset of the text from mouse
	},
	autoHide : false,   // false if you don't want to auto hide or a number in miliseconds after which you want to auto hide the tracker
	blink : false,      // Make the text blink or not (true, false)
	blinkTime : 600     // Time to blin in miliseconds
};
```

#How can I help?
You can help by
- Adding some feature, Improving the existing features if possible
- Reporting the bugs
- Sending your suggestions and critique to my email <a href="mailto:kamranahmed.se@gmail.com">kamranahmed.se@gmail.com</a>
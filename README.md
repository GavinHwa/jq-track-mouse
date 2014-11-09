Track Mouse
==============
Track mouse is a simple jquery plugin that lets you place some text at the tail of the mouse and that text will follow the mouse wherever it goes on the page.

<img src="http://i.imgur.com/3MfNC0k.png" />

#Features

Plugin has following features
- Put some text to the tail of the mouse that will follow it wherever it would go. This text can be:
    - String - Simple text that will attach it self to the tail of the mouse
    - An array - the content of it will make an unordered list
    - HTML - HTML will be rendered at the tale of the mouse
- You can make this the tracker blink and it will blink at the rate specified
- You can reset the tracker whenever you want
- Make the tracker autohide itself after specified time
- Make the tracker appear only upon some specified element

#Ideas to use it

You can use it however and wherever you want. If you chose to show the tracker on whole page, some possibilities are:

  - That tracking text can act as a constant reminder to the user for something. For example let's say if there is some necessary action pending for the user, you can put this tracker to the mouse and it will keep reminding the user about that pending action
  - In case of some step by step action, you can put the tracker at mouse demonstrating the details of each of the step
  - After a user logs in, you can show a list of TODO items at the tail of mouse and hide it after some time.

If you chose the option to show the tracker upon some specified element, some possibilities can be:

  - Show tracker text upon any element, lets say an image, describing about that element.

The only limit is your imagination, literally ;)
  
#How to use it

Using the plugin is simple. Include the plugin script at your page. You can find get it from the repository or <a href="https://raw.githubusercontent.com/kamranahmedse/jq-track-mouse/master/jq-track-mouse.js">from here</a> or the <a href="https://raw.githubusercontent.com/kamranahmedse/jq-track-mouse/master/jq-track-mouse.min.js">minified version here</a>.

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

Above described usage will make the tracker follow the mouse upon whole page. However, if you don't want the tracker to follow the mouse everywhere and on some specific element only, you can also provide a target i.e.

```
$.trackMouse({
    text : "I will follow this mouse as long as it is in my bounds, after that I won't.",
    target : '#target' // Element upon which the tracker has to appear
});
```
You can also use the blinking with target as well i.e. make the tracker show upon the target only and when it is being shown upon the target, make it blink as well

```
$.trackMouse({
    text : "I will follow this mouse as long as it is in my bounds, after that I won't.",
    target : '#target', // Element upon which the tracker has to appear
    blink : 600
});
```

Also there are a set of options that you can use to modify the behavior of tooltips. Each of the options are described below:

```
$.trackMouse.options = {
	text : 'This will follow the mouse, no matter what', // Provide your text here (string, array, HTML)
	offset : {
		x : 20,     // Horizontal offset of the text from mouse
		y : 20      // Vertical offset of the text from mouse
	},
	autoHide : false,   // false if you don't want to auto hide or a number in miliseconds after which you want to auto hide the tracker
	blink : 600,      // Time to blink in miliseconds or false if blinking is not required
    target : '#someTarget' // So that tracker may appear only upon the target
};
```
**Note** that, all of the above options can be used together to get whatever effect you want, except for `autoHide` you can't use it when you have specified the `target`

#Todo
- Add the ability to provide custom CSS for the tracker **box**.

#Further detail
For further detail, please visit the <a href="http://kamranahmedse.github.io/jq-mousetracker">demo page 

#How can I help?
You can help by
- Adding some feature, Improving the existing features if possible
- Reporting the bugs
- Sending your suggestions and critique to my email <a href="mailto:kamranahmed.se@gmail.com">kamranahmed.se@gmail.com</a>

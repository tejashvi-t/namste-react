const heading = React.createElement("h1", { id: "heading" }, "Hello world");
//   here the createElement() tag needs three things
// 1st - the element which we want to create like h1 h2 span div etc
// 2nd - a empty object why ? discussed later
// 3rd - inner text that we want to add in tag like <h1> Hello world </>
// ABOVE IS CORE REACT THING
// *** after all this we have to add this h1 element in div that has id = root
//   first we have to create root where all dom manipulation happns
// BELOW IS DOM WORK
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// now the question is what is empty object in createElement => this helps to give attributes to tag like class ,id

// what if we log heading ?
// frst ans comes to mind is that it will give some html text
// but but but apart of it , this will give a object
console.log(heading);

// this will give object and it has one more thing that is called props and it contains all the attributes and it element
// props:{
// children:
// "Hello world"
// id
// :
// "heading" }

// part 4

//  now as we know we can be remained stucked just at one tag
// html has so many tag structured in it
// how do we do it ?
// first we have to create parent ie react.createaElement
// ex -
/**
 * <div id="parent">
 * <div>
 * <h1>heading 2 </h1>
 * </div>
 * </div>
 */

// ++++++++++        NESTED HTML STRUCTURE         ++++++++++
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", {}, "heading 1 ")
    )
);
root.render(parent);

// React.createElement(Object ) => html(browser understand)

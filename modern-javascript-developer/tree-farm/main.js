"use strict";

// define plant function with increase and decrease functions
function Plant() {
	this.height = 0;
	this.increaseHeight = function(N) {
		this.height += N;
	};
	this.decreaseHeight = function(N) {
		this.height -= N;
	};
}

// define tree function with grow and trim functions
function Tree() {
	this.branches = 0;
	this.grow = function(N) {
		// grow will increase the tree height by value passed in and branches by 1
		this.increaseHeight(N);
		this.branches += 1;
	};
	this.trim = function(N) {
		// trim will decrease the tree height by value passed in and branches by 1
		this.decreaseHeight(N);
		this.branches -= 1;
	};
}

// let tree inherit plant's properties including functions
Tree.prototype = new Plant();

// creating pear and oak trees
var PearTree = new Tree();
var OakTree = new Tree();

// counter to keep track of events to allow for stop at 30
var counter = 0;

// set interval to a variable to allow for clearing at 30
var growinTrees = setInterval(function(){
	// stop at 30 events
	if (counter % 30 === 0 && counter !== 0) {
		clearInterval(growinTrees);
		console.log("Counter is at " + counter + " ... The End.");
		return;
	}
	// height increases by 10 increase branches by 1
	if (PearTree.height % 10 && PearTree.height !== 0) {
		PearTree.branches += 1;
	}
	// height increases by 10 increase branches by 1
	if (OakTree.height % 10 && OakTree.height !== 0) {
		OakTree.branches += 1;
	}
	// each tenth growth of the trees trim them
	if (counter % 10 === 0 && counter !== 0) {
		PearTree.trim(5);
		OakTree.trim(9);
		console.log("Trees were trimmed at counter number ", counter);
	} else {
		PearTree.grow(5);
		OakTree.grow(9);
		console.log("Trees grew at counter number ", counter);
	}
	// print the values of the trees to the DOM
	document.getElementById("output").innerHTML += " Pear Tree is " + PearTree.height + "cm tall, and has " + PearTree.branches + ` branches<br>`;
	document.getElementById("output").innerHTML += " Oak Tree is " + OakTree.height + "cm tall, and has " + OakTree.branches + ` branches<br><br>`;
	// scrolls down the page as page fills
	window.scrollTo(0, 1500);
	// increase counter by 1 each interval
	counter++;
}, 1000);








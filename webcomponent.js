(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <h1>Hola everis!!!!!
		
		<script>
			window.setInterval (BlinkIt, 500);
			var color = "red";
			function BlinkIt () {
			var blink = document.getElementById ("blink");
			color = (color == "#ffffff")? "red" : "#ffffff";
			blink.style.color = color;
			blink.style.fontSize='36px';}
			</script>
			<div id="blink">Hola!</div>
			<div id="blink" onclick="parent.location='http://norfipc.com'">
			Hola!</div>
		
		
		
		
		
		</h1>
		
		
    `;

    customElements.define('com-sap-sample-helloworld1', class HelloWorld1 extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this.redraw();
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {

        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        
        }
        */

        redraw(){}
    
    
    });
        
})();
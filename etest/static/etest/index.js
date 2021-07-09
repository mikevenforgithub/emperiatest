const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    height: '300px',
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager: false,
    // Avoid any default panel

    panels: { defaults: [] },
    canvas: {
        styles: [
               
        ]},

    blockManager: {
        appendTo: '#blocks',
        blocks: [
        {
            id: 'section', // id is mandatory
            label: '<b>Section</b>', // You can use HTML/SVG inside labels
            attributes: { class:'gjs-block-section' },
            content: `<section>
            <h1>This is a simple title</h1>
            <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
        }, {
            id: 'text',
            label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
        }, {
            id: 'image',
            label: 'Image',
            // Select the component once it's dropped
            select: true,
            // You can pass components as a JSON instead of a simple HTML string,
            // in this case we also use a defined component type `image`
            content: { type: 'image' },
            // This triggers `active` event on dropped components and the `image`
            // reacts by opening the AssetManager
            activate: true,
        } , {
            id: 'presenter',
            label: '<b>Artwork Presenter<b>',
            attributes:{ class:'gjs-block-section'},
            content: `
            <header id="i74g" class="root">
            <div id="i50a" class="row">
              <div id="iosb" class="cell">
                <image id="iptk">
              </div>
              <div id="ig9a" class="cell">
                <div id="i7me1" class="cell">
                  <button type="submit" id="igi85" class="button">X</button>
                  <image id="isi6g">
                  <div id="i5gp2">THE COOL ART Company 
                  </div>
                  <div id="ic1xw">The Girl In The NighT SKy LONDON, 2021
                  </div>
                  <div id="ilqhd">
                    <div draggable="true" id="i3a91">This artwork represents a woman walking into the sunset, leaving behind a trail of lights. 
                    </div>
                  </div>
                    <div id="i4l7f" class="form-group">
                        <button type="submit" id="i6whr" class="button">Price and Size Informations</button>
                    </div>
                </div>
              </div>
            </div>
          </header>

          <style>
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
          }
          .root{
            padding-top:35px;
            padding-bottom:100px;
            color:#ffffff;
            font-family:"Times", cursive;
            font-weight:100;
            background-image:url("");
            background-attachment:fixed;
            background-position:left top, center center;
            background-repeat:no-repeat;
            background-size:cover;
            min-height:100%;
            background-color:transparent;
          }
          .form{
            border-radius:3px;
            padding:10px 15px;
            background-color:rgba(0,0,0,0.2);
          }
          .button{
            width:100%;
            margin:15px 0;
            background-color:#785580;
            border:none;
            color:#fff;
            border-radius:2px;
            padding:7px 10px;
            font-size:1em;
            cursor:pointer;
          }
          .row{
            display:flex;
            justify-content:flex-start;
            align-items:stretch;
            flex-wrap:nowrap;
            padding:10px;
          }
          .cell{
            min-height:75px;
            flex-grow:1;
            flex-basis:100%;
          }
          *{
            box-sizing:border-box;
          }
          body{
            margin:0;
            background-color:grey;
          }
          #i74g{
            width:100%;
            height:100%;
            position:absolute;
            display:block;
            padding:0 0 0 0;
            border:solid transparent;
            background-repeat:no-repeat;
            background-size:cover;
            background-attachment:scroll, scroll;
          }
          #i50a{
            height:100%;
            width:700px;
            margin:0 0 0 500px;
          }
          #iosb{
            width:150px;
            height:450px;
            min-height:auto;
            margin:auto 20px auto 0;
            background-color:white;
            border-radius:2%;
            box-shadow: 5px 10px 8px #888888;
            
    
          }
          #iptk{
            margin:15px 15px 15px 15px;
            height:420px;
            width:90%;
            background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmSYhPAnhK1XCaGLk7Ll_QODhym4Yhm_Sew&usqp=CAU');
            background-repeat:no-repeat;
            background-size:cover;
          }
          #ig9a{
            width:150px;
            height:450px;
            min-height:auto;
            margin:auto 20px auto 0;
            background-color:white;
            border-radius:2%;
            box-shadow: 5px 10px 8px #888888;
          }
          #isi6g{
            margin:0 15px 0 15px;
            height:150px;
            background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs05cc8wg8CYslC6ft4ES2U8jiFjLEF21p_xeK4y3URO3MA56EEE5s9mooevfYyZ00gfU&usqp=CAU);
            background-size:cover;
            padding:0 0 0 0;
            width: 90%;
          }
          #i7me1{
            width:auto;
            height:420px;
            min-height:auto;
            margin:15px 15px 15px 15px;
            background-color:white;
          }
          #ic1xw{
            margin:0 15px 0 15px;
            height:50px;
            color:black;
            font-family:Comic Sans MS, cursive, sans-serif;
            font-weight:700;
            text-align:center;
          }
          #ir3c{
            width:100px;
            height:100px;
            margin:15px 0 15px 50px;
            border-radius:20%;
          }
          #i5gp2{
            padding:10px;
            color:black;
            font-family:Comic Sans MS, cursive, sans-serif;
            font-weight:700;
            text-align:center;
          }
          #iip9p{
            margin:0 0 0 0;
            background-color:white;
            height:60px;
          }
          #if5fl{
            padding:0 15px 0 15px;
            margin:0 0 0 0;
            background-color:white;
          }
          #i6whr{
            width:150px;
            margin:15px 0 15px 65px;
            border-radius:5%;
          }
          #iwdrf{
            margin:15px 0 15px 50px;
            width:150px;
            border-radius:5%;
          }
          #ilqhd{
            margin:0 15px 0 15px;
            height:50px;
            color:black;
            font-family:Comic Sans MS, cursive, sans-serif;
            font-weight:100;
          }
          #ija4n{
            margin:0 0 0 0;
            height:10px;
            background-color:white;
          }
          #igi85{
            width:40px;
            float:right;
            border-radius:25%;
          }
          #i3938{
            height:60px;
          }
          #i3a91{
            font-size:12px;
            text-align:center;
          }
          @media (max-width: 768px){
            .row{
              flex-wrap:wrap;
            }
          }
          </style>
            `
            },
            {
            id: 'button',
            label: 'Button',
            content: `<button class="button" id="thebutton">Click Me</button>
            <style>
            #thebutton{
                width:150px;
                margin:15px 0 15px 65px;
                border-radius:5%;}
            .button{
                width:100%;
                margin:15px 0;
                background-color:#785580;
                border:none;
                color:#fff;
                border-radius:2px;
                padding:7px 10px;
                font-size:1em;
                cursor:pointer;
                }
                </style>`
            },
        ]
    },

    layerManager: {
        appendTo: '.layers-container'
      },
      // We define a default panel as a sidebar to contain layers
      panels: {
        defaults: [
            {
          id: 'layers',
          el: '.panel__right',
          // Make the panel resizable
          resizable: {
            maxDim: 350,
            minDim: 200,
            tc: 0, // Top handler
            cl: 1, // Left handler
            cr: 0, // Right handler
            bc: 0, // Bottom handler
            // Being a flex child we need to change `flex-basis` property
            // instead of the `width` (default)
            keyWidth: 'flex-basis',
          }, 
        }]
      },

      selectorManager: {
        appendTo: '.styles-container'
      },

      styleManager: {
        appendTo: '.styles-container',
        sectors: [{
            name: 'Dimension',
            open: false,
            // Use built-in properties
            buildProps: ['width', 'min-height', 'padding'],
            // Use `properties` to define/override single property
            properties: [
              {
                // Type of the input,
                // options: integer | radio | select | color | slider | file | composite | stack
                type: 'integer',
                name: 'The width', // Label for the property
                property: 'width', // CSS property (if buildProps contains it will be extended)
                units: ['px', '%'], // Units, available only for 'integer' types
                defaults: 'auto', // Default value
                min: 0, // Min value, available only for 'integer' types
              }
            ]
          },{
            name: 'Extra',
            open: false,
            buildProps: ['background-color', 'box-shadow', 'custom-prop'],
            properties: [
              {
                id: 'custom-prop',
                name: 'Custom Label',
                property: 'font-size',
                type: 'select',
                defaults: '32px',
                // List of options, available only for 'select' and 'radio'  types
                options: [
                  { value: '12px', name: 'Tiny' },
                  { value: '18px', name: 'Medium' },
                  { value: '32px', name: 'Big' },
                ],
             }
            ]
          }]
      }, 
      
      storageManager: {
        id: 'gjs-',             // Prefix identifier that will be used inside storing and loading
        type: 'local',          // Type of the storage
        autosave: true,         // Store data automatically
        autoload: true,         // Autoload stored data on init
        stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
        storeComponents: true,  // Enable/Disable storing of components in JSON format
        storeStyles: true,      // Enable/Disable storing of rules in JSON format
        storeHtml: true,        // Enable/Disable storing of components as HTML string
        storeCss: true,         // Enable/Disable storing of rules as CSS string
      }
      
  });


  editor.Panels.addPanel({
    id: 'panel-top',
    el: '.panel__top',
  });
  editor.Panels.addPanel({
    id: 'basic-actions',
    el: '.panel__basic-actions',
    buttons: [
      {
        id: 'visibility',
        active: true, // active by default
        className: 'btn-toggle-borders',
        label: '<u>B</u>',
        command: 'sw-visibility', // Built-in command
      }, {
        id: 'export',
        className: 'btn-open-export',
        label: 'Exp',
        command: 'export-template',
        context: 'export-template', // For grouping context of buttons from the same panel
      }, {
        id: 'show-json',
        className: 'btn-show-json',
        label: 'JSON',
        context: 'show-json',
        command(editor) {
          editor.Modal.setTitle('Components JSON')
            .setContent(`<textarea style="width:100%; height: 250px;">
              ${JSON.stringify(editor.getComponents())}
            </textarea>`)
            .open();
        }, 
       
      }
    ],
  });

  editor.on('run:export-template:before', opts => {
    console.log('Before the command run');
    if (0 /* some condition */) {
      opts.abort = 1;
    }
});

editor.on('run:export-template', () => console.log('After the command run'));

editor.on('abort:export-template', () => console.log('Command aborted'));

editor.Commands.add('show-layers', {
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getLayersEl(row) { return row.querySelector('.layers-container') },
  
    run(editor, sender) {
      const lmEl = this.getLayersEl(this.getRowEl(editor));
      lmEl.style.display = '';
    },
    stop(editor, sender) {
      const lmEl = this.getLayersEl(this.getRowEl(editor));
      lmEl.style.display = 'none';
    },
});

editor.Commands.add('show-styles', {
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getStyleEl(row) { return row.querySelector('.styles-container') },
  
    run(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = '';
    },
    stop(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = 'none';
    },
});



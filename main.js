// // Access Blockly.
// Blockly.thing;

// // Access the default blocks.
// Blockly.libraryBlocks['block_type'];

// // Access the generator.
// javascript.javascriptGenerator;


function getObjectData(HTMLNode) {
  return HTMLNode.contentDocument.body.firstChild.innerHTML;
}
function getJSONData(id) {
  return JSON.parse(getObjectData(document.getElementById("toolbox-data")));
}




const workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});
// Create the definition.
const definitions = Blockly.defineBlocksWithJsonArray([
  {
    "type": "set_pixel",
    "tooltip": "",
    "helpUrl": "",
    "message0": "set pixel %1 x %2 y %3",
    "args0": [
      {
        "type": "input_dummy",
        "name": "NAME"
      },
      {
        "type": "input_value",
        "name": "X",
        "align": "RIGHT",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y",
        "align": "RIGHT",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 285,
    "inputsInline": true
  },
  {
    "type": "clear_screen",
    "tooltip": "",
    "helpUrl": "",
    "message0": "clear screen",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 285
  },
  {
    "type": "set_color",
    "tooltip": "",
    "helpUrl": "",
    "message0": "set color %1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "COLOR",
        "options": [
          [
            "red",
            "red"
          ],
          [
            "green",
            "green"
          ],
          [
            "blue",
            "blue"
          ],
          [
            "cyan",
            "cyan"
          ],
          [
            "magenta",
            "magenta"
          ],
          [
            "yellow",
            "yellow"
          ],
          [
            "black",
            "black"
          ],
          [
            "white",
            "white"
          ]
        ]
      },
      {
        "type": "input_dummy",
        "name": ""
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 285
  }                
  ]);
  /*

  */
                      
  // Register the definition.

// Get your saved state from somewhere, e.g. local storage.
const state = JSON.parse(localStorage.getItem('workspace-state'));

// Deserialize the state.
Blockly.serialization.workspaces.load(state, workspace);
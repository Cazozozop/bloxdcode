// script.js

const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  theme: Blockly.Themes.Classic
});

// --- Define Blocks ---
Blockly.defineBlocksWithJsonArray([
  // Player
  {
    "type": "get_position",
    "message0": "get player position",
    "output": null,
    "colour": 230
  },
  {
    "type": "set_velocity",
    "message0": "set velocity x: %1 y: %2 z: %3",
    "args0": [
      { "type": "field_number", "name": "X", "value": 0 },
      { "type": "field_number", "name": "Y", "value": 0 },
      { "type": "field_number", "name": "Z", "value": 0 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
  },
  {
    "type": "set_health",
    "message0": "set health to %1",
    "args0": [
      { "type": "field_number", "name": "VALUE", "value": 20 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
  },
  {
    "type": "get_health",
    "message0": "get player health",
    "output": null,
    "colour": 230
  },
  {
    "type": "set_skin",
    "message0": "set skin to %1",
    "args0": [
      { "type": "field_input", "name": "SKIN", "text": "Wizard" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
  },
  {
    "type": "set_pose",
    "message0": "set pose to %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "POSE",
        "options": [
          ["standing","standing"],
          ["sitting","sitting"],
          ["driving","driving"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
  },
  {
    "type": "teleport_player",
    "message0": "teleport player to x: %1 y: %2 z: %3",
    "args0": [
      { "type": "field_number", "name": "X", "value": 0 },
      { "type": "field_number", "name": "Y", "value": 0 },
      { "type": "field_number", "name": "Z", "value": 0 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
  },

  // Messages
  {
    "type": "send_message",
    "message0": "send message %1",
    "args0": [
      { "type": "field_input", "name": "MESSAGE", "text": "Hello!" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210
  },
  {
    "type": "broadcast_message",
    "message0": "broadcast message %1",
    "args0": [
      { "type": "field_input", "name": "MESSAGE", "text": "Server restart soon!" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210
  },
  {
    "type": "send_flying_message",
    "message0": "send flying message %1 speed %2",
    "args0": [
      { "type": "field_input", "name": "MESSAGE", "text": "Boom!" },
      { "type": "field_number", "name": "SPEED", "value": 1 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210
  },

  // Particles
  {
    "type": "play_particles",
    "message0": "play particles type %1 at x: %2 y: %3 z: %4 size %5 lifetime %6",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "TYPE",
        "options": [
          ["bubble","bubble"],
          ["critical_hit","critical_hit"],
          ["drift","drift"],
          ["effect_5","effect_5"],
          ["glint","glint"]
        ]
      },
      { "type": "field_number", "name": "X", "value": 0 },
      { "type": "field_number", "name": "Y", "value": 0 },
      { "type": "field_number", "name": "Z", "value": 0 },
      { "type": "field_number", "name": "SIZE", "value": 1 },
      { "type": "field_number", "name": "LIFETIME", "value": 1 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30
  },

  // Blocks
  {
    "type": "set_block",
    "message0": "set block %1 at x: %2 y: %3 z: %4",
    "args0": [
      { "type": "field_input", "name": "BLOCK", "text": "stone" },
      { "type": "field_number", "name": "X", "value": 0 },
      { "type": "field_number", "name": "Y", "value": 0 },
      { "type": "field_number", "name": "Z", "value": 0 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60
  },
  {
    "type": "get_block",
    "message0": "get block at x: %1 y: %2 z: %3",
    "args0": [
      { "type": "field_number", "name": "X", "value": 0 },
      { "type": "field_number", "name": "Y", "value": 0 },
      { "type": "field_number", "name": "Z", "value": 0 }
    ],
    "output": null,
    "colour": 60
  },
  {
    "type": "remove_block",
    "message0": "remove block at x: %1 y: %2 z: %3",
    "args0": [
      { "type": "field_number", "name": "X", "value": 0 },
      { "type": "field_number", "name": "Y", "value": 0 },
      { "type": "field_number", "name": "Z", "value": 0 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60
  },

  // Inventory
  {
    "type": "give_item",
    "message0": "give item %1 quantity %2",
    "args0": [
      { "type": "field_input", "name": "ITEM", "text": "wood" },
      { "type": "field_number", "name": "QTY", "value": 1 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90
  },
  {
    "type": "drop_item",
    "message0": "drop item %1 quantity %2",
    "args0": [
      { "type": "field_input", "name": "ITEM", "text": "wood" },
      { "type": "field_number", "name": "QTY", "value": 1 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90
  },
  {
    "type": "remove_item",
    "message0": "remove item %1 quantity %2",
    "args0": [
      { "type": "field_input", "name": "ITEM", "text": "wood" },
      { "type": "field_number", "name": "QTY", "value": 1 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90
  },

  // Entities
  {
    "type": "spawn_entity",
    "message0": "spawn entity %1 at x: %2 y: %3 z: %4",
    "args0": [
      { "type": "field_input", "name": "ENTITY", "text": "zombie" },
      { "type": "field_number", "name": "X", "value": 0 },
      { "type": "field_number", "name": "Y", "value": 0 },
      { "type": "field_number", "name": "Z", "value": 0 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120
  },
  {
    "type": "set_entity_velocity",
    "message0": "set entity velocity id %1 x: %2 y: %3 z: %4",
    "args0": [
      { "type": "field_number", "name": "ID", "value": 0 },
      { "type": "field_number", "name": "X", "value": 0 },
      { "type": "field_number", "name": "Y", "value": 0 },
      { "type": "field_number", "name": "Z", "value": 0 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120
  },
  {
    "type": "play_entity_sound",
    "message0": "play sound %1 on entity id %2",
    "args0": [
      { "type": "field_input", "name": "SOUND", "text": "oink" },
      { "type": "field_number", "name": "ID", "value": 0 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120
  },
  {
    "type": "remove_entity",
    "message0": "remove entity id %1",
    "args0": [
      { "type": "field_number", "name": "ID", "value": 0 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120
  },

  // Events
  {
    "type": "event_player_join",
    "message0": "on player join do",
    "colour": 65,
    "nextStatement": null
  },
  {
    "type": "event_player_leave",
    "message0": "on player leave do",
    "colour": 65,
    "nextStatement": null
  },
  {
    "type": "event_player_click",
    "message0": "on player click do",
    "colour": 65,
    "nextStatement": null
  },

  // Math & Logic & Loops: Built-in blocks are already present (math_number, math_arithmetic, math_random_int, controls_if, logic_compare, logic_boolean, controls_repeat_ext, controls_whileUntil)
]);

// --- Code Generators ---

// Player
Blockly.JavaScript['get_position'] = function() {
  return ['api.getPosition(myId)', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_velocity'] = function(block) {
  const x = block.getFieldValue('X'),
        y = block.getFieldValue('Y'),
        z = block.getFieldValue('Z');
  return `api.setVelocity(myId, ${x}, ${y}, ${z});\n`;
};

Blockly.JavaScript['set_health'] = function(block) {
  return `api.setHealth(myId, ${block.getFieldValue('VALUE')});\n`;
};

Blockly.JavaScript['get_health'] = function() {
  return ['api.getHealth(myId)', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_skin'] = function(block) {
  return `api.changePlayerIntoSkin(myId, 'body', "${block.getFieldValue('SKIN')}");\n`;
};

Blockly.JavaScript['set_pose'] = function(block) {
  return `api.setPlayerPose(myId, "${block.getFieldValue('POSE')}");\n`;
};

Blockly.JavaScript['teleport_player'] = function(block) {
  const x = block.getFieldValue('X'),
        y = block.getFieldValue('Y'),
        z = block.getFieldValue('Z');
  return `api.teleportPlayer(myId, { x: ${x}, y: ${y}, z: ${z} });\n`;
};

// Messages
Blockly.JavaScript['send_message'] = function(block) {
  return `api.sendMessage(myId, "${block.getFieldValue('MESSAGE')}");\n`;
};

Blockly.JavaScript['broadcast_message'] = function(block) {
  return `api.broadcastMessage("${block.getFieldValue('MESSAGE')}");\n`;
};

Blockly.JavaScript['send_flying_message'] = function(block) {
  return `api.sendFlyingMiddleMessage(myId, ["${block.getFieldValue('MESSAGE')}"], ${block.getFieldValue('SPEED')});\n`;
};

// Particles
Blockly.JavaScript['play_particles'] = function(block) {
  const t = block.getFieldValue('TYPE'),
        x = block.getFieldValue('X'),
        y = block.getFieldValue('Y'),
        z = block.getFieldValue('Z'),
        s = block.getFieldValue('SIZE'),
        l = block.getFieldValue('LIFETIME');
  return `api.playParticleEffect({ texture: "${t}", pos1: [${x},${y},${z}], pos2: [${x},${y},${z}], minSize: ${s}, maxSize: ${s}, minLifeTime: ${l}, maxLifeTime: ${l} });\n`;
};

// Blocks
Blockly.JavaScript['set_block'] = function(block) {
  return `api.setBlock("${block.getFieldValue('BLOCK')}", ${block.getFieldValue('X')}, ${block.getFieldValue('Y')}, ${block.getFieldValue('Z')});\n`;
};

Blockly.JavaScript['get_block'] = function(block) {
  const x = block.getFieldValue('X'),
        y = block.getFieldValue('Y'),
        z = block.getFieldValue('Z');
  return [`api.getBlock({ x: ${x}, y: ${y}, z: ${z} })`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['remove_block'] = function(block) {
  return `api.setBlock("air", ${block.getFieldValue('X')}, ${block.getFieldValue('Y')}, ${block.getFieldValue('Z')});\n`;
};

// Inventory
Blockly.JavaScript['give_item'] = function(block) {
  return `api.giveItem(myId, "${block.getFieldValue('ITEM')}", ${block.getFieldValue('QTY')});\n`;
};

Blockly.JavaScript['drop_item'] = function(block) {
  return `api.dropItem(myId, "${block.getFieldValue('ITEM')}", ${block.getFieldValue('QTY')});\n`;
};

Blockly.JavaScript['remove_item'] = function(block) {
  return `api.removeItem(myId, "${block.getFieldValue('ITEM')}", ${block.getFieldValue('QTY')});\n`;
};

// Entities
Blockly.JavaScript['spawn_entity'] = function(block) {
  return `api.spawnEntity("${block.getFieldValue('ENTITY')}", ${block.getFieldValue('X')}, ${block.getFieldValue('Y')}, ${block.getFieldValue('Z')});\n`;
};

Blockly.JavaScript['set_entity_velocity'] = function(block) {
  return `api.setVelocity(${block.getFieldValue('ID')}, ${block.getFieldValue('X')}, ${block.getFieldValue('Y')}, ${block.getFieldValue('Z')});\n`;
};

Blockly.JavaScript['play_entity_sound'] = function(block) {
  return `api.playSoundToEntity("${block.getFieldValue('SOUND')}", ${block.getFieldValue('ID')});\n`;
};

Blockly.JavaScript['remove_entity'] = function(block) {
  return `api.removeEntity(${block.getFieldValue('ID')});\n`;
};

// Events (placeholders – tu devras placer ton code à l’intérieur)
Blockly.JavaScript['event_player_join'] = function() {
  return `// on player join event handler\n`;
};

Blockly.JavaScript['event_player_leave'] = function() {
  return `// on player leave event handler\n`;
};

Blockly.JavaScript['event_player_click'] = function() {
  return `// on player click event handler\n`;
};

// Math, Logic & Loops : Blockly inclut déjà les générateurs natifs pour ces blocs

// --- Code Generator ---
document.getElementById('generateBtn').onclick = () => {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  const output = document.getElementById('codeOutput');
  output.textContent = code;
  hljs.highlightElement(output);
};

// --- Copy Function ---
function copyCode() {
  const code = document.getElementById('codeOutput').textContent;
  navigator.clipboard.writeText(code);
  alert('Code copied!');
}

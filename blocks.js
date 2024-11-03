javascript.javascriptGenerator.forBlock['set_pixel'] = function(block, generator) {
    const value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    const value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
  
    // TODO: Assemble javascript into the code variable.
    const code = `setPixel(${value_x}, ${value_y});\n`;
    return code;
  }

  javascript.javascriptGenerator.forBlock['clear_screen'] = function(block, generator) {
    const code = `reset_canvas();\n`;
    // TODO: Change Order.NONE to the correct operator precedence strength
    return code;
  }

  javascript.javascriptGenerator.forBlock['set_color'] = function(block, generator) {
    const dropdown_color = block.getFieldValue('COLOR');
  
    // TODO: Assemble javascript into the code variable.
    const code = `setColor("${dropdown_color}");\n`;
    return code;
  }
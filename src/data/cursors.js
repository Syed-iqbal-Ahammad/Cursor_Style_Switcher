export const cursors = [
  {
    id: 'auto',
    name: 'Auto',
    value: 'auto',
    description: 'Browser determines cursor based on context',
    category: 'misc'
  },
  {
    id: 'default',
    name: 'Default',
    value: 'default',
    description: 'Default arrow cursor',
    category: 'pointer'
  },
  {
    id: 'pointer',
    name: 'Pointer',
    value: 'pointer',
    description: 'Hand pointer for clickable elements',
    category: 'pointer'
  },
  {
    id: 'text',
    name: 'Text',
    value: 'text',
    description: 'I-beam cursor for text selection',
    category: 'text'
  },
  {
    id: 'crosshair',
    name: 'Crosshair',
    value: 'crosshair',
    description: 'Crosshair for precise selection',
    category: 'misc'
  },
  {
    id: 'move',
    name: 'Move',
    value: 'move',
    description: 'Four-directional move cursor',
    category: 'drag'
  },
  {
    id: 'grab',
    name: 'Grab',
    value: 'grab',
    description: 'Open hand for draggable elements',
    category: 'drag'
  },
  {
    id: 'grabbing',
    name: 'Grabbing',
    value: 'grabbing',
    description: 'Closed hand while dragging',
    category: 'drag'
  },
  {
    id: 'wait',
    name: 'Wait',
    value: 'wait',
    description: 'Loading or processing indicator',
    category: 'wait'
  },
  {
    id: 'progress',
    name: 'Progress',
    value: 'progress',
    description: 'Background processing indicator',
    category: 'wait'
  },
  {
    id: 'help',
    name: 'Help',
    value: 'help',
    description: 'Question mark for help content',
    category: 'misc'
  },
  {
    id: 'not-allowed',
    name: 'Not Allowed',
    value: 'not-allowed',
    description: 'Prohibition sign for disabled elements',
    category: 'misc'
  },
  {
    id: 'zoom-in',
    name: 'Zoom In',
    value: 'zoom-in',
    description: 'Magnifying glass with plus sign',
    category: 'zoom'
  },
  {
    id: 'zoom-out',
    name: 'Zoom Out',
    value: 'zoom-out',
    description: 'Magnifying glass with minus sign',
    category: 'zoom'
  },
  {
    id: 'n-resize',
    name: 'North Resize',
    value: 'n-resize',
    description: 'Vertical resize cursor pointing up',
    category: 'resize'
  },
  {
    id: 's-resize',
    name: 'South Resize',
    value: 's-resize',
    description: 'Vertical resize cursor pointing down',
    category: 'resize'
  },
  {
    id: 'e-resize',
    name: 'East Resize',
    value: 'e-resize',
    description: 'Horizontal resize cursor pointing right',
    category: 'resize'
  },
  {
    id: 'w-resize',
    name: 'West Resize',
    value: 'w-resize',
    description: 'Horizontal resize cursor pointing left',
    category: 'resize'
  },
  {
    id: 'ne-resize',
    name: 'Northeast Resize',
    value: 'ne-resize',
    description: 'Diagonal resize cursor',
    category: 'resize'
  },
  {
    id: 'nw-resize',
    name: 'Northwest Resize',
    value: 'nw-resize',
    description: 'Diagonal resize cursor',
    category: 'resize'
  },
  {
    id: 'se-resize',
    name: 'Southeast Resize',
    value: 'se-resize',
    description: 'Diagonal resize cursor',
    category: 'resize'
  },
  {
    id: 'sw-resize',
    name: 'Southwest Resize',
    value: 'sw-resize',
    description: 'Diagonal resize cursor',
    category: 'resize'
  },
  {
    id: 'ew-resize',
    name: 'East-West Resize',
    value: 'ew-resize',
    description: 'Horizontal resize cursor',
    category: 'resize'
  },
  {
    id: 'ns-resize',
    name: 'North-South Resize',
    value: 'ns-resize',
    description: 'Vertical resize cursor',
    category: 'resize'
  },
  {
    id: 'nesw-resize',
    name: 'Northeast-Southwest Resize',
    value: 'nesw-resize',
    description: 'Diagonal resize cursor',
    category: 'resize'
  },
  {
    id: 'nwse-resize',
    name: 'Northwest-Southeast Resize',
    value: 'nwse-resize',
    description: 'Diagonal resize cursor',
    category: 'resize'
  },
  {
    id: 'col-resize',
    name: 'Column Resize',
    value: 'col-resize',
    description: 'Column resize cursor for tables',
    category: 'resize'
  },
  {
    id: 'row-resize',
    name: 'Row Resize',
    value: 'row-resize',
    description: 'Row resize cursor for tables',
    category: 'resize'
  },
  {
    id: 'copy',
    name: 'Copy',
    value: 'copy',
    description: 'Copy operation cursor',
    category: 'misc'
  },
  {
    id: 'alias',
    name: 'Alias',
    value: 'alias',
    description: 'Alias or shortcut cursor',
    category: 'misc'
  },
  {
    id: 'context-menu',
    name: 'Context Menu',
    value: 'context-menu',
    description: 'Context menu available cursor',
    category: 'misc'
  },
  {
    id: 'cell',
    name: 'Cell',
    value: 'cell',
    description: 'Cell selection cursor',
    category: 'text'
  },
  {
    id: 'vertical-text',
    name: 'Vertical Text',
    value: 'vertical-text',
    description: 'Vertical text selection cursor',
    category: 'text'
  },
  {
    id: 'all-scroll',
    name: 'All Scroll',
    value: 'all-scroll',
    description: 'Multi-directional scroll cursor',
    category: 'misc'
  }
];

export const categories = [
  { id: 'all', name: 'All Cursors', value: 'all' },
  { id: 'pointer', name: 'Pointer', value: 'pointer' },
  { id: 'text', name: 'Text', value: 'text' },
  { id: 'drag', name: 'Drag & Drop', value: 'drag' },
  { id: 'resize', name: 'Resize', value: 'resize' },
  { id: 'zoom', name: 'Zoom', value: 'zoom' },
  { id: 'wait', name: 'Wait', value: 'wait' },
  { id: 'misc', name: 'Miscellaneous', value: 'misc' }
];

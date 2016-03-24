var markdown = require('gitbook-markdown');
var COUNTER = 0;

function kitchenSink(block) {
  var isFirstTab = true;

  // Filter out any blocks the user doesn't need
  var blocks = block.blocks.filter(function(subBlock) {
    return block.kwargs[subBlock.name];
  });

  var tabs = blocks.map(function(subBlock) {
    subBlock.id = subBlock.name + '-' + ++COUNTER;
    subBlock.isActive = false;
    var href = '#' + subBlock.id;
    var classString = '';
    if (isFirstTab) {
      classString = 'active';
      subBlock.isActive = true;
      isFirstTab = false;
    }

    return `
      <li role="presentation" class="${classString}">
        <a href="${href}" role="tab" data-toggle="tab">
          ${block.kwargs[subBlock.name]}
        </a>
      </li>
    `;
  }).join('');

  var tabContent = blocks.map(function(subBlock) {
    var classString = 'tab-pane';
    if (subBlock.isActive) {
      classString += ' active';
    }

    return `
      <div role="tabpanel" class="${classString}" id="${subBlock.id}">
        ${markdown.page(subBlock.body).content}
      </div>
    `;
  }).join('');

  return `
    <ul class="nav nav-tabs" role="tablist">
      ${tabs}
    </ul>
    <div class="tab-content">
      ${tabContent}
    </div>
  `;
}

module.exports = {

  book: {
    assets: './assets',
    css: [
      'bootstrap.css'
    ],
    js: [
      'bootstrap.js'
    ]
  },

  blocks: {
    tabs: {
      blocks: ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6', 'tab7', 'tab8', 'tab9', 'tab10'],
      process: function(block) {
        return kitchenSink(block);
      }
    }
  }

};

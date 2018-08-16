/**
 * @since 20180808 11:11
 * @author vivaxy
 */

const BaseNode = require('./BaseNode.js');

module.exports = class CommentNode extends BaseNode {
  constructor(comment) {
    const nodeTypes = require('../../enums/nodeTypes.js');
    super(nodeTypes.COMMENT);
    this.comment = comment;
  }

  dispose() {
    super.dispose();
    this.comment = null;
  }

  toString() {
    return `<!-- ${this.comment} -->`;
  }

  toJSON() {
    return {
      type: this.type,
      comment: this.comment,
    };
  }
};

import LgmScriptParser from "../../output/production/lgmscript/LgmScriptParser.js";
import LgmScriptVisitor from "../../output/production/lgmscript/LgmScriptVisitor.js";

export default class JSVisitor extends LgmScriptVisitor {
  constructor() {
    super();
  }

  map = {};

  visitProgram(ctx) {
    console.log("进入程序");
    let value;

    if (ctx.intDeclare()) {
      this.visit(ctx.intDeclare());
    }

    if (ctx.expressionStatement()) {
      value = this.visit(ctx.expressionStatement());
      console.log("程序结果", value[0]);
    }

    if (ctx.assignmentStatement()) {
      this.visit(ctx.assignmentStatement());
    }

    return 0;
  }

  visitAdditive(ctx) {
    // console.log("触发加法");
    let value;
    if (ctx.bop) {
      switch (ctx.bop.type) {
        case LgmScriptParser.ADD:
          value = this.visit(ctx.additive()) + this.visit(ctx.multiplicative());
          break;
        case LgmScriptParser.SUB:
          value = this.visit(ctx.additive()) - this.visit(ctx.multiplicative());
          break;
      }
    } else {
      value = this.visit(ctx.multiplicative());
    }
    return value;
  }

  visitIntDeclare(ctx) {
    const id = ctx.Id().getText();
    let value = null;
    if (ctx.additive()) value = this.visit(ctx.additive());
    this.map[id] = value;
    return value;
  }

  visitMultiplicative(ctx) {
    let value;

    if (ctx.bop) {
      switch (ctx.bop.type) {
        case LgmScriptParser.MUL:
          value = this.visit(ctx.multiplicative()) * this.visit(ctx.primary());
          break;
        case LgmScriptParser.DIV:
          value = this.visit(ctx.multiplicative()) / this.visit(ctx.primary());
          break;
      }
    } else {
      value = this.visit(ctx.primary());
    }

    return value;
  }

  visitPrimary(ctx) {
    // console.log("触发常数");
    // console.log(ctx.IntLiteral());
    // switch (){

    // }
    if (ctx.IntLiteral()) return Number(ctx.IntLiteral().getText());
    if (ctx.Id()) return this.map[ctx.Id().getText()];
  }
}

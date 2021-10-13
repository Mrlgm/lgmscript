import LgmScriptParser from "../../output/production/lgmscript/LgmScriptParser.js";
import LgmScriptVisitor from "../../output/production/lgmscript/LgmScriptVisitor.js";

export default class JSVisitor extends LgmScriptVisitor {
  constructor() {
    super();
  }

  visitProgram(ctx) {
    console.log("进入程序");
    // console.log(ctx);
    let value = this.visit(ctx.expressionStatement());
    console.log("程序结果", value[0]);
    return 0;
  }

  visitAdditive(ctx) {
    // console.log("触发加法");
    let value;
    switch (ctx.bop.type) {
      case LgmScriptParser.ADD:
        value =
          this.visit(ctx.multiplicative(0)) + this.visit(ctx.multiplicative(1));
        break;
      case LgmScriptParser.SUB:
        value =
          this.visit(ctx.multiplicative(0)) - this.visit(ctx.multiplicative(1));
        break;
    }
    // console.log(ctx.multiplicative(0));
    // console.log(ctx.multiplicative(1));
    // console.log("触发加法元素", value);
    return value;
  }

  visitIntDeclare(ctx) {
    // console.log("触发声明");
    return this.visitChildren(ctx);
  }

  visitMultiplicative(ctx) {
    let value = this.visit(ctx.primary(0));
    // console.log("监听乘法元素", value);
    return value;
  }

  visitPrimary(ctx) {
    // console.log("触发常数");
    // console.log(ctx.IntLiteral());
    // switch (){

    // }
    return Number(ctx.IntLiteral().getText());
  }
}

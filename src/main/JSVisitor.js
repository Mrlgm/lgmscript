import LgmScriptVisitor from "../../output/production/lgmscript/LgmScriptVisitor.js";

export default class JSVisitor extends LgmScriptVisitor {
  constructor() {
    super();
  }

  visitProgram(ctx) {
    console.log("进入程序");
    return this.visitChildren(ctx);
  }

  visitAdditive(ctx) {
    console.log("触发加法");
    return this.visitChildren(ctx);
  }

  visitIntDeclare(ctx){
    console.log("触发声明");
    return this.visitChildren(ctx); 
  }

  visitPrimary(ctx){
      console.log("触发常数")
      return this.visitChildren(ctx);
  }

}

import LgmScriptListener from "../../output/production/lgmscript/LgmScriptListener.js";

export default class JSListener extends LgmScriptListener {
  constructor() {
    super();
  }

  enterProgram(ctx) {
    console.log(ctx.getChild(0).getText());
  }

  exitProgram(ctx) {
    console.log("退出statement");
  }

  enterAdditive(ctx) {
    console.log(ctx.getChild(0).getText());
  }

  exitAdditive(ctx) {
    console.log("退出表达式");
  }
}

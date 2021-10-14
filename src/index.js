import antlr4 from "antlr4";
import LgmScriptLexer from "../output/production/lgmscript/LgmScriptLexer.js";
import LgmScriptParser from "../output/production/lgmscript/LgmScriptParser.js";
import JSVisitor from "./main/JSVisitor.js";
import JSListener from "./main/JSListener.js";

const input = `10 + 4 * 5;`;
const chars = new antlr4.InputStream(input);
const lexer = new LgmScriptLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new LgmScriptParser(tokens);
parser.buildParseTrees = true;
const tree = parser.program();
console.log(input)

const visitor = new JSVisitor();
visitor.visitProgram(tree);
// console.log(tokens.tokens)

// const extractor = new JSListener()
// antlr4.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree)
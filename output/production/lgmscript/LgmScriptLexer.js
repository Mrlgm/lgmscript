// Generated from ./production/lgmscript/LgmScript.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0019\u0088\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0005\u00026\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0006\u0004=\n\u0004\r\u0004\u000e\u0004>\u0003\u0005",
    "\u0003\u0005\u0007\u0005C\n\u0005\f\u0005\u000e\u0005F\u000b\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007T\n\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0007\u0016t",
    "\n\u0016\f\u0016\u000e\u0016w\u000b\u0016\u0003\u0017\u0006\u0017z\n",
    "\u0017\r\u0017\u000e\u0017{\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0005\u0018\u0082\n\u0018\u0003\u0018\u0005\u0018\u0085\n\u0018",
    "\u0003\u0018\u0003\u0018\u0003D\u0002\u0019\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\'\u0015)\u0016+\u0017-\u0018/\u0019\u0003\u0002\u0006\u0003",
    "\u00022;\u0005\u0002C\\aac|\u0006\u00022;C\\aac|\u0004\u0002\u000b\u000b",
    "\"\"\u0002\u0092\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002",
    "\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002",
    "\u0002/\u0003\u0002\u0002\u0002\u00035\u0003\u0002\u0002\u0002\u0005",
    "7\u0003\u0002\u0002\u0002\u0007<\u0003\u0002\u0002\u0002\t@\u0003\u0002",
    "\u0002\u0002\u000bI\u0003\u0002\u0002\u0002\rS\u0003\u0002\u0002\u0002",
    "\u000fU\u0003\u0002\u0002\u0002\u0011W\u0003\u0002\u0002\u0002\u0013",
    "Y\u0003\u0002\u0002\u0002\u0015[\u0003\u0002\u0002\u0002\u0017]\u0003",
    "\u0002\u0002\u0002\u0019_\u0003\u0002\u0002\u0002\u001ba\u0003\u0002",
    "\u0002\u0002\u001dc\u0003\u0002\u0002\u0002\u001fe\u0003\u0002\u0002",
    "\u0002!g\u0003\u0002\u0002\u0002#i\u0003\u0002\u0002\u0002%k\u0003\u0002",
    "\u0002\u0002\'m\u0003\u0002\u0002\u0002)o\u0003\u0002\u0002\u0002+q",
    "\u0003\u0002\u0002\u0002-y\u0003\u0002\u0002\u0002/\u0084\u0003\u0002",
    "\u0002\u000212\u0007k\u0002\u000226\u0007h\u0002\u000234\u0007\u5984",
    "\u0002\u000246\u0007\u679e\u0002\u000251\u0003\u0002\u0002\u000253\u0003",
    "\u0002\u0002\u00026\u0004\u0003\u0002\u0002\u000278\u0007k\u0002\u0002",
    "89\u0007p\u0002\u00029:\u0007v\u0002\u0002:\u0006\u0003\u0002\u0002",
    "\u0002;=\t\u0002\u0002\u0002<;\u0003\u0002\u0002\u0002=>\u0003\u0002",
    "\u0002\u0002><\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?\b",
    "\u0003\u0002\u0002\u0002@D\u0007$\u0002\u0002AC\u000b\u0002\u0002\u0002",
    "BA\u0003\u0002\u0002\u0002CF\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002",
    "\u0002DB\u0003\u0002\u0002\u0002EG\u0003\u0002\u0002\u0002FD\u0003\u0002",
    "\u0002\u0002GH\u0007$\u0002\u0002H\n\u0003\u0002\u0002\u0002IJ\u0007",
    "?\u0002\u0002J\f\u0003\u0002\u0002\u0002KL\u0007?\u0002\u0002LT\u0007",
    "?\u0002\u0002MT\u0007@\u0002\u0002NO\u0007@\u0002\u0002OT\u0007?\u0002",
    "\u0002PT\u0007>\u0002\u0002QR\u0007>\u0002\u0002RT\u0007?\u0002\u0002",
    "SK\u0003\u0002\u0002\u0002SM\u0003\u0002\u0002\u0002SN\u0003\u0002\u0002",
    "\u0002SP\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002T\u000e\u0003",
    "\u0002\u0002\u0002UV\u0007,\u0002\u0002V\u0010\u0003\u0002\u0002\u0002",
    "WX\u00071\u0002\u0002X\u0012\u0003\u0002\u0002\u0002YZ\u0007-\u0002",
    "\u0002Z\u0014\u0003\u0002\u0002\u0002[\\\u0007/\u0002\u0002\\\u0016",
    "\u0003\u0002\u0002\u0002]^\u0007%\u0002\u0002^\u0018\u0003\u0002\u0002",
    "\u0002_`\u0007=\u0002\u0002`\u001a\u0003\u0002\u0002\u0002ab\u00070",
    "\u0002\u0002b\u001c\u0003\u0002\u0002\u0002cd\u0007.\u0002\u0002d\u001e",
    "\u0003\u0002\u0002\u0002ef\u0007]\u0002\u0002f \u0003\u0002\u0002\u0002",
    "gh\u0007_\u0002\u0002h\"\u0003\u0002\u0002\u0002ij\u0007}\u0002\u0002",
    "j$\u0003\u0002\u0002\u0002kl\u0007\u007f\u0002\u0002l&\u0003\u0002\u0002",
    "\u0002mn\u0007*\u0002\u0002n(\u0003\u0002\u0002\u0002op\u0007+\u0002",
    "\u0002p*\u0003\u0002\u0002\u0002qu\t\u0003\u0002\u0002rt\t\u0004\u0002",
    "\u0002sr\u0003\u0002\u0002\u0002tw\u0003\u0002\u0002\u0002us\u0003\u0002",
    "\u0002\u0002uv\u0003\u0002\u0002\u0002v,\u0003\u0002\u0002\u0002wu\u0003",
    "\u0002\u0002\u0002xz\t\u0005\u0002\u0002yx\u0003\u0002\u0002\u0002z",
    "{\u0003\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002",
    "\u0002|}\u0003\u0002\u0002\u0002}~\b\u0017\u0002\u0002~.\u0003\u0002",
    "\u0002\u0002\u007f\u0081\u0007\u000f\u0002\u0002\u0080\u0082\u0007\f",
    "\u0002\u0002\u0081\u0080\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002",
    "\u0002\u0002\u0082\u0085\u0003\u0002\u0002\u0002\u0083\u0085\u0007\f",
    "\u0002\u0002\u0084\u007f\u0003\u0002\u0002\u0002\u0084\u0083\u0003\u0002",
    "\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087\b\u0018",
    "\u0002\u0002\u00870\u0003\u0002\u0002\u0002\f\u00025>DSsu{\u0081\u0084",
    "\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LgmScriptLexer extends antlr4.Lexer {

    static grammarFileName = "LgmScript.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, "'int'", null, null, "'='", null, "'*'", 
                         "'/'", "'+'", "'-'", "'#'", "';'", "'.'", "','", 
                         "'['", "']'", "'{'", "'}'", "'('", "')'" ];
	static symbolicNames = [ null, "If", "Int", "IntLiteral", "StringLiteral", 
                          "AssignmentOP", "RelationalOP", "Star", "Divide", 
                          "Plus", "Subtract", "Sharp", "SemiColon", "Dot", 
                          "Comm", "LeftBracket", "RightBracket", "LeftBrace", 
                          "RightBrace", "LeftParen", "RightParen", "Id", 
                          "Whitespace", "Newline" ];
	static ruleNames = [ "If", "Int", "IntLiteral", "StringLiteral", "AssignmentOP", 
                      "RelationalOP", "Star", "Divide", "Plus", "Subtract", 
                      "Sharp", "SemiColon", "Dot", "Comm", "LeftBracket", 
                      "RightBracket", "LeftBrace", "RightBrace", "LeftParen", 
                      "RightParen", "Id", "Whitespace", "Newline" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

LgmScriptLexer.EOF = antlr4.Token.EOF;
LgmScriptLexer.If = 1;
LgmScriptLexer.Int = 2;
LgmScriptLexer.IntLiteral = 3;
LgmScriptLexer.StringLiteral = 4;
LgmScriptLexer.AssignmentOP = 5;
LgmScriptLexer.RelationalOP = 6;
LgmScriptLexer.Star = 7;
LgmScriptLexer.Divide = 8;
LgmScriptLexer.Plus = 9;
LgmScriptLexer.Subtract = 10;
LgmScriptLexer.Sharp = 11;
LgmScriptLexer.SemiColon = 12;
LgmScriptLexer.Dot = 13;
LgmScriptLexer.Comm = 14;
LgmScriptLexer.LeftBracket = 15;
LgmScriptLexer.RightBracket = 16;
LgmScriptLexer.LeftBrace = 17;
LgmScriptLexer.RightBrace = 18;
LgmScriptLexer.LeftParen = 19;
LgmScriptLexer.RightParen = 20;
LgmScriptLexer.Id = 21;
LgmScriptLexer.Whitespace = 22;
LgmScriptLexer.Newline = 23;




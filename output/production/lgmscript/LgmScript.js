// Generated from ./production/lgmscript/LgmScript.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0017\u0080\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u00022\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0006\u00049\n\u0004",
    "\r\u0004\u000e\u0004:\u0003\u0005\u0003\u0005\u0007\u0005?\n\u0005\f",
    "\u0005\u000e\u0005B\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007P\n\u0007\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0007\u0014l\n\u0014\f\u0014",
    "\u000e\u0014o\u000b\u0014\u0003\u0015\u0006\u0015r\n\u0015\r\u0015\u000e",
    "\u0015s\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016",
    "z\n\u0016\u0003\u0016\u0005\u0016}\n\u0016\u0003\u0016\u0003\u0016\u0003",
    "@\u0002\u0017\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017",
    "\u0003\u0002\u0006\u0003\u00022;\u0005\u0002C\\aac|\u0006\u00022;C\\",
    "aac|\u0004\u0002\u000b\u000b\"\"\u0002\u008a\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002",
    "\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002",
    "\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002",
    "\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002",
    "\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002",
    "\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002",
    "\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0003",
    "1\u0003\u0002\u0002\u0002\u00053\u0003\u0002\u0002\u0002\u00078\u0003",
    "\u0002\u0002\u0002\t<\u0003\u0002\u0002\u0002\u000bE\u0003\u0002\u0002",
    "\u0002\rO\u0003\u0002\u0002\u0002\u000fQ\u0003\u0002\u0002\u0002\u0011",
    "S\u0003\u0002\u0002\u0002\u0013U\u0003\u0002\u0002\u0002\u0015W\u0003",
    "\u0002\u0002\u0002\u0017Y\u0003\u0002\u0002\u0002\u0019[\u0003\u0002",
    "\u0002\u0002\u001b]\u0003\u0002\u0002\u0002\u001d_\u0003\u0002\u0002",
    "\u0002\u001fa\u0003\u0002\u0002\u0002!c\u0003\u0002\u0002\u0002#e\u0003",
    "\u0002\u0002\u0002%g\u0003\u0002\u0002\u0002\'i\u0003\u0002\u0002\u0002",
    ")q\u0003\u0002\u0002\u0002+|\u0003\u0002\u0002\u0002-.\u0007k\u0002",
    "\u0002.2\u0007h\u0002\u0002/0\u0007\u5984\u0002\u000202\u0007\u679e",
    "\u0002\u00021-\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u00022\u0004",
    "\u0003\u0002\u0002\u000234\u0007k\u0002\u000245\u0007p\u0002\u00025",
    "6\u0007v\u0002\u00026\u0006\u0003\u0002\u0002\u000279\t\u0002\u0002",
    "\u000287\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:8\u0003\u0002",
    "\u0002\u0002:;\u0003\u0002\u0002\u0002;\b\u0003\u0002\u0002\u0002<@",
    "\u0007$\u0002\u0002=?\u000b\u0002\u0002\u0002>=\u0003\u0002\u0002\u0002",
    "?B\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002",
    "\u0002AC\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002CD\u0007$",
    "\u0002\u0002D\n\u0003\u0002\u0002\u0002EF\u0007?\u0002\u0002F\f\u0003",
    "\u0002\u0002\u0002GH\u0007?\u0002\u0002HP\u0007?\u0002\u0002IP\u0007",
    "@\u0002\u0002JK\u0007@\u0002\u0002KP\u0007?\u0002\u0002LP\u0007>\u0002",
    "\u0002MN\u0007>\u0002\u0002NP\u0007?\u0002\u0002OG\u0003\u0002\u0002",
    "\u0002OI\u0003\u0002\u0002\u0002OJ\u0003\u0002\u0002\u0002OL\u0003\u0002",
    "\u0002\u0002OM\u0003\u0002\u0002\u0002P\u000e\u0003\u0002\u0002\u0002",
    "QR\u0007,\u0002\u0002R\u0010\u0003\u0002\u0002\u0002ST\u0007-\u0002",
    "\u0002T\u0012\u0003\u0002\u0002\u0002UV\u0007%\u0002\u0002V\u0014\u0003",
    "\u0002\u0002\u0002WX\u0007=\u0002\u0002X\u0016\u0003\u0002\u0002\u0002",
    "YZ\u00070\u0002\u0002Z\u0018\u0003\u0002\u0002\u0002[\\\u0007.\u0002",
    "\u0002\\\u001a\u0003\u0002\u0002\u0002]^\u0007]\u0002\u0002^\u001c\u0003",
    "\u0002\u0002\u0002_`\u0007_\u0002\u0002`\u001e\u0003\u0002\u0002\u0002",
    "ab\u0007}\u0002\u0002b \u0003\u0002\u0002\u0002cd\u0007\u007f\u0002",
    "\u0002d\"\u0003\u0002\u0002\u0002ef\u0007*\u0002\u0002f$\u0003\u0002",
    "\u0002\u0002gh\u0007+\u0002\u0002h&\u0003\u0002\u0002\u0002im\t\u0003",
    "\u0002\u0002jl\t\u0004\u0002\u0002kj\u0003\u0002\u0002\u0002lo\u0003",
    "\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002",
    "n(\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002pr\t\u0005\u0002",
    "\u0002qp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002sq\u0003\u0002",
    "\u0002\u0002st\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uv\b",
    "\u0015\u0002\u0002v*\u0003\u0002\u0002\u0002wy\u0007\u000f\u0002\u0002",
    "xz\u0007\f\u0002\u0002yx\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002",
    "\u0002z}\u0003\u0002\u0002\u0002{}\u0007\f\u0002\u0002|w\u0003\u0002",
    "\u0002\u0002|{\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u007f",
    "\b\u0016\u0002\u0002\u007f,\u0003\u0002\u0002\u0002\f\u00021:@Okmsy",
    "|\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LgmScript extends antlr4.Lexer {

    static grammarFileName = "LgmScript.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, "'int'", null, null, "'='", null, "'*'", 
                         "'+'", "'#'", "';'", "'.'", "','", "'['", "']'", 
                         "'{'", "'}'", "'('", "')'" ];
	static symbolicNames = [ null, "If", "Int", "IntLiteral", "StringLiteral", 
                          "AssignmentOP", "RelationalOP", "Star", "Plus", 
                          "Sharp", "SemiColon", "Dot", "Comm", "LeftBracket", 
                          "RightBracket", "LeftBrace", "RightBrace", "LeftParen", 
                          "RightParen", "Id", "Whitespace", "Newline" ];
	static ruleNames = [ "If", "Int", "IntLiteral", "StringLiteral", "AssignmentOP", 
                      "RelationalOP", "Star", "Plus", "Sharp", "SemiColon", 
                      "Dot", "Comm", "LeftBracket", "RightBracket", "LeftBrace", 
                      "RightBrace", "LeftParen", "RightParen", "Id", "Whitespace", 
                      "Newline" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

LgmScript.EOF = antlr4.Token.EOF;
LgmScript.If = 1;
LgmScript.Int = 2;
LgmScript.IntLiteral = 3;
LgmScript.StringLiteral = 4;
LgmScript.AssignmentOP = 5;
LgmScript.RelationalOP = 6;
LgmScript.Star = 7;
LgmScript.Plus = 8;
LgmScript.Sharp = 9;
LgmScript.SemiColon = 10;
LgmScript.Dot = 11;
LgmScript.Comm = 12;
LgmScript.LeftBracket = 13;
LgmScript.RightBracket = 14;
LgmScript.LeftBrace = 15;
LgmScript.RightBrace = 16;
LgmScript.LeftParen = 17;
LgmScript.RightParen = 18;
LgmScript.Id = 19;
LgmScript.Whitespace = 20;
LgmScript.Newline = 21;



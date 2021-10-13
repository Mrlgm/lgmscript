// Generated from ./production/lgmscript/LgmScript.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LgmScriptListener from './LgmScriptListener.js';
import LgmScriptVisitor from './LgmScriptVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u00197\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u0014\n",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004 ",
    "\n\u0004\f\u0004\u000e\u0004#\u000b\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0007\u0005(\n\u0005\f\u0005\u000e\u0005+\u000b\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0002\u0002\t\u0002\u0004\u0006\b\n\f\u000e",
    "\u0002\u0005\u0003\u0002\t\n\u0003\u0002\u000b\f\u0004\u0002\u0005\u0005",
    "\u0017\u0017\u00023\u0002\u0013\u0003\u0002\u0002\u0002\u0004\u0015",
    "\u0003\u0002\u0002\u0002\u0006\u001c\u0003\u0002\u0002\u0002\b$\u0003",
    "\u0002\u0002\u0002\n,\u0003\u0002\u0002\u0002\f.\u0003\u0002\u0002\u0002",
    "\u000e1\u0003\u0002\u0002\u0002\u0010\u0014\u0005\u0004\u0003\u0002",
    "\u0011\u0014\u0005\f\u0007\u0002\u0012\u0014\u0005\u000e\b\u0002\u0013",
    "\u0010\u0003\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0013",
    "\u0012\u0003\u0002\u0002\u0002\u0014\u0003\u0003\u0002\u0002\u0002\u0015",
    "\u0016\u0007\u0004\u0002\u0002\u0016\u0017\u0007\u0017\u0002\u0002\u0017",
    "\u0018\u0007\u0007\u0002\u0002\u0018\u0019\u0005\u0006\u0004\u0002\u0019",
    "\u001a\u0003\u0002\u0002\u0002\u001a\u001b\u0007\u000e\u0002\u0002\u001b",
    "\u0005\u0003\u0002\u0002\u0002\u001c!\u0005\b\u0005\u0002\u001d\u001e",
    "\t\u0002\u0002\u0002\u001e \u0005\b\u0005\u0002\u001f\u001d\u0003\u0002",
    "\u0002\u0002 #\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002",
    "!\"\u0003\u0002\u0002\u0002\"\u0007\u0003\u0002\u0002\u0002#!\u0003",
    "\u0002\u0002\u0002$)\u0005\n\u0006\u0002%&\t\u0003\u0002\u0002&(\u0005",
    "\n\u0006\u0002\'%\u0003\u0002\u0002\u0002(+\u0003\u0002\u0002\u0002",
    ")\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*\t\u0003\u0002",
    "\u0002\u0002+)\u0003\u0002\u0002\u0002,-\t\u0004\u0002\u0002-\u000b",
    "\u0003\u0002\u0002\u0002./\u0005\u0006\u0004\u0002/0\u0007\u000e\u0002",
    "\u00020\r\u0003\u0002\u0002\u000212\u0007\u0017\u0002\u000223\u0007",
    "\u0007\u0002\u000234\u0005\u0006\u0004\u000245\u0007\u000e\u0002\u0002",
    "5\u000f\u0003\u0002\u0002\u0002\u0005\u0013!)"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LgmScriptParser extends antlr4.Parser {

    static grammarFileName = "LgmScript.g4";
    static literalNames = [ null, null, "'int'", null, null, "'='", null, 
                            "'+'", "'-'", "'*'", "'/'", "'#'", "';'", "'.'", 
                            "','", "'['", "']'", "'{'", "'}'", "'('", "')'" ];
    static symbolicNames = [ null, "If", "Int", "IntLiteral", "StringLiteral", 
                             "AssignmentOP", "RelationalOP", "ADD", "SUB", 
                             "MUL", "DIV", "Sharp", "SemiColon", "Dot", 
                             "Comm", "LeftBracket", "RightBracket", "LeftBrace", 
                             "RightBrace", "LeftParen", "RightParen", "Id", 
                             "Whitespace", "Newline" ];
    static ruleNames = [ "program", "intDeclare", "additive", "multiplicative", 
                         "primary", "expressionStatement", "assignmentStatement" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LgmScriptParser.ruleNames;
        this.literalNames = LgmScriptParser.literalNames;
        this.symbolicNames = LgmScriptParser.symbolicNames;

        LgmScriptParser.prototype.start = function() {
            console.log("Started...")
        }

    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LgmScriptParser.RULE_program);
	    try {
	        this.state = 17;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 14;
	            this.intDeclare();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 15;
	            this.expressionStatement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 16;
	            this.assignmentStatement();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	intDeclare() {
	    let localctx = new IntDeclareContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LgmScriptParser.RULE_intDeclare);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(LgmScriptParser.Int);
	        this.state = 20;
	        this.match(LgmScriptParser.Id);

	        this.state = 21;
	        this.match(LgmScriptParser.AssignmentOP);
	        this.state = 22;
	        this.additive();
	        this.state = 24;
	        this.match(LgmScriptParser.SemiColon);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additive() {
	    let localctx = new AdditiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LgmScriptParser.RULE_additive);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.multiplicative();
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LgmScriptParser.ADD || _la===LgmScriptParser.SUB) {
	            this.state = 27;
	            localctx.bop = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===LgmScriptParser.ADD || _la===LgmScriptParser.SUB)) {
	                localctx.bop = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 28;
	            this.multiplicative();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplicative() {
	    let localctx = new MultiplicativeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LgmScriptParser.RULE_multiplicative);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.primary();
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LgmScriptParser.MUL || _la===LgmScriptParser.DIV) {
	            this.state = 35;
	            localctx.bop = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===LgmScriptParser.MUL || _la===LgmScriptParser.DIV)) {
	                localctx.bop = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 36;
	            this.primary();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LgmScriptParser.RULE_primary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        _la = this._input.LA(1);
	        if(!(_la===LgmScriptParser.IntLiteral || _la===LgmScriptParser.Id)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LgmScriptParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.additive();
	        this.state = 45;
	        this.match(LgmScriptParser.SemiColon);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LgmScriptParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(LgmScriptParser.Id);
	        this.state = 48;
	        this.match(LgmScriptParser.AssignmentOP);
	        this.state = 49;
	        this.additive();
	        this.state = 50;
	        this.match(LgmScriptParser.SemiColon);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LgmScriptParser.EOF = antlr4.Token.EOF;
LgmScriptParser.If = 1;
LgmScriptParser.Int = 2;
LgmScriptParser.IntLiteral = 3;
LgmScriptParser.StringLiteral = 4;
LgmScriptParser.AssignmentOP = 5;
LgmScriptParser.RelationalOP = 6;
LgmScriptParser.ADD = 7;
LgmScriptParser.SUB = 8;
LgmScriptParser.MUL = 9;
LgmScriptParser.DIV = 10;
LgmScriptParser.Sharp = 11;
LgmScriptParser.SemiColon = 12;
LgmScriptParser.Dot = 13;
LgmScriptParser.Comm = 14;
LgmScriptParser.LeftBracket = 15;
LgmScriptParser.RightBracket = 16;
LgmScriptParser.LeftBrace = 17;
LgmScriptParser.RightBrace = 18;
LgmScriptParser.LeftParen = 19;
LgmScriptParser.RightParen = 20;
LgmScriptParser.Id = 21;
LgmScriptParser.Whitespace = 22;
LgmScriptParser.Newline = 23;

LgmScriptParser.RULE_program = 0;
LgmScriptParser.RULE_intDeclare = 1;
LgmScriptParser.RULE_additive = 2;
LgmScriptParser.RULE_multiplicative = 3;
LgmScriptParser.RULE_primary = 4;
LgmScriptParser.RULE_expressionStatement = 5;
LgmScriptParser.RULE_assignmentStatement = 6;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LgmScriptParser.RULE_program;
    }

	intDeclare() {
	    return this.getTypedRuleContext(IntDeclareContext,0);
	};

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LgmScriptVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IntDeclareContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LgmScriptParser.RULE_intDeclare;
    }

	Int() {
	    return this.getToken(LgmScriptParser.Int, 0);
	};

	Id() {
	    return this.getToken(LgmScriptParser.Id, 0);
	};

	SemiColon() {
	    return this.getToken(LgmScriptParser.SemiColon, 0);
	};

	AssignmentOP() {
	    return this.getToken(LgmScriptParser.AssignmentOP, 0);
	};

	additive() {
	    return this.getTypedRuleContext(AdditiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.enterIntDeclare(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.exitIntDeclare(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LgmScriptVisitor ) {
	        return visitor.visitIntDeclare(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LgmScriptParser.RULE_additive;
        this.bop = null; // Token
    }

	multiplicative = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeContext,i);
	    }
	};

	ADD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LgmScriptParser.ADD);
	    } else {
	        return this.getToken(LgmScriptParser.ADD, i);
	    }
	};


	SUB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LgmScriptParser.SUB);
	    } else {
	        return this.getToken(LgmScriptParser.SUB, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.enterAdditive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.exitAdditive(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LgmScriptVisitor ) {
	        return visitor.visitAdditive(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplicativeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LgmScriptParser.RULE_multiplicative;
        this.bop = null; // Token
    }

	primary = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrimaryContext);
	    } else {
	        return this.getTypedRuleContext(PrimaryContext,i);
	    }
	};

	MUL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LgmScriptParser.MUL);
	    } else {
	        return this.getToken(LgmScriptParser.MUL, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LgmScriptParser.DIV);
	    } else {
	        return this.getToken(LgmScriptParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.enterMultiplicative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.exitMultiplicative(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LgmScriptVisitor ) {
	        return visitor.visitMultiplicative(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LgmScriptParser.RULE_primary;
    }

	IntLiteral() {
	    return this.getToken(LgmScriptParser.IntLiteral, 0);
	};

	Id() {
	    return this.getToken(LgmScriptParser.Id, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LgmScriptVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LgmScriptParser.RULE_expressionStatement;
    }

	additive() {
	    return this.getTypedRuleContext(AdditiveContext,0);
	};

	SemiColon() {
	    return this.getToken(LgmScriptParser.SemiColon, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.exitExpressionStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LgmScriptVisitor ) {
	        return visitor.visitExpressionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LgmScriptParser.RULE_assignmentStatement;
    }

	Id() {
	    return this.getToken(LgmScriptParser.Id, 0);
	};

	AssignmentOP() {
	    return this.getToken(LgmScriptParser.AssignmentOP, 0);
	};

	additive() {
	    return this.getTypedRuleContext(AdditiveContext,0);
	};

	SemiColon() {
	    return this.getToken(LgmScriptParser.SemiColon, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LgmScriptVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LgmScriptParser.ProgramContext = ProgramContext; 
LgmScriptParser.IntDeclareContext = IntDeclareContext; 
LgmScriptParser.AdditiveContext = AdditiveContext; 
LgmScriptParser.MultiplicativeContext = MultiplicativeContext; 
LgmScriptParser.PrimaryContext = PrimaryContext; 
LgmScriptParser.ExpressionStatementContext = ExpressionStatementContext; 
LgmScriptParser.AssignmentStatementContext = AssignmentStatementContext; 

// Generated from ./production/lgmscript/LgmScript.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LgmScriptListener from './LgmScriptListener.js';
import LgmScriptVisitor from './LgmScriptVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0019B\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0005\u0002\u0012\n\u0002\u0003\u0002\u0005",
    "\u0002\u0015\n\u0002\u0003\u0002\u0005\u0002\u0018\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u001e\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004(\n\u0004\f\u0004\u000e\u0004+\u000b\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0007\u00053\n\u0005\f\u0005\u000e\u00056\u000b\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0002\u0004\u0006\b\t\u0002\u0004\u0006\b\n\f\u000e",
    "\u0002\u0005\u0003\u0002\t\n\u0003\u0002\u000b\f\u0004\u0002\u0005\u0005",
    "\u0017\u0017\u0002@\u0002\u0011\u0003\u0002\u0002\u0002\u0004\u0019",
    "\u0003\u0002\u0002\u0002\u0006!\u0003\u0002\u0002\u0002\b,\u0003\u0002",
    "\u0002\u0002\n7\u0003\u0002\u0002\u0002\f9\u0003\u0002\u0002\u0002\u000e",
    "<\u0003\u0002\u0002\u0002\u0010\u0012\u0005\u0004\u0003\u0002\u0011",
    "\u0010\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012",
    "\u0014\u0003\u0002\u0002\u0002\u0013\u0015\u0005\f\u0007\u0002\u0014",
    "\u0013\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015",
    "\u0017\u0003\u0002\u0002\u0002\u0016\u0018\u0005\u000e\b\u0002\u0017",
    "\u0016\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018",
    "\u0003\u0003\u0002\u0002\u0002\u0019\u001a\u0007\u0004\u0002\u0002\u001a",
    "\u001d\u0007\u0017\u0002\u0002\u001b\u001c\u0007\u0007\u0002\u0002\u001c",
    "\u001e\u0005\u0006\u0004\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d",
    "\u001e\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f",
    " \u0007\u000e\u0002\u0002 \u0005\u0003\u0002\u0002\u0002!\"\b\u0004",
    "\u0001\u0002\"#\u0005\b\u0005\u0002#)\u0003\u0002\u0002\u0002$%\f\u0003",
    "\u0002\u0002%&\t\u0002\u0002\u0002&(\u0005\b\u0005\u0002\'$\u0003\u0002",
    "\u0002\u0002(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*",
    "\u0003\u0002\u0002\u0002*\u0007\u0003\u0002\u0002\u0002+)\u0003\u0002",
    "\u0002\u0002,-\b\u0005\u0001\u0002-.\u0005\n\u0006\u0002.4\u0003\u0002",
    "\u0002\u0002/0\f\u0003\u0002\u000201\t\u0003\u0002\u000213\u0005\n\u0006",
    "\u00022/\u0003\u0002\u0002\u000236\u0003\u0002\u0002\u000242\u0003\u0002",
    "\u0002\u000245\u0003\u0002\u0002\u00025\t\u0003\u0002\u0002\u000264",
    "\u0003\u0002\u0002\u000278\t\u0004\u0002\u00028\u000b\u0003\u0002\u0002",
    "\u00029:\u0005\u0006\u0004\u0002:;\u0007\u000e\u0002\u0002;\r\u0003",
    "\u0002\u0002\u0002<=\u0007\u0017\u0002\u0002=>\u0007\u0007\u0002\u0002",
    ">?\u0005\u0006\u0004\u0002?@\u0007\u000e\u0002\u0002@\u000f\u0003\u0002",
    "\u0002\u0002\b\u0011\u0014\u0017\u001d)4"].join("");


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

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.additive_sempred(localctx, predIndex);
    	case 3:
    	    		return this.multiplicative_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    additive_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    multiplicative_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LgmScriptParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LgmScriptParser.Int) {
	            this.state = 14;
	            this.intDeclare();
	        }

	        this.state = 18;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 17;
	            this.expressionStatement();

	        }
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LgmScriptParser.Id) {
	            this.state = 20;
	            this.assignmentStatement();
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(LgmScriptParser.Int);
	        this.state = 24;
	        this.match(LgmScriptParser.Id);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LgmScriptParser.AssignmentOP) {
	            this.state = 25;
	            this.match(LgmScriptParser.AssignmentOP);
	            this.state = 26;
	            this.additive(0);
	        }

	        this.state = 29;
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


	additive(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new AdditiveContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, LgmScriptParser.RULE_additive, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.multiplicative(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new AdditiveContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, LgmScriptParser.RULE_additive);
	                this.state = 34;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 35;
	                localctx.bop = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===LgmScriptParser.ADD || _la===LgmScriptParser.SUB)) {
	                    localctx.bop = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 36;
	                this.multiplicative(0); 
	            }
	            this.state = 41;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	multiplicative(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new MultiplicativeContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, LgmScriptParser.RULE_multiplicative, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.primary();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 50;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new MultiplicativeContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, LgmScriptParser.RULE_multiplicative);
	                this.state = 45;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 46;
	                localctx.bop = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===LgmScriptParser.MUL || _la===LgmScriptParser.DIV)) {
	                    localctx.bop = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 47;
	                this.primary(); 
	            }
	            this.state = 52;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LgmScriptParser.RULE_primary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
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
	        this.state = 55;
	        this.additive(0);
	        this.state = 56;
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
	        this.state = 58;
	        this.match(LgmScriptParser.Id);
	        this.state = 59;
	        this.match(LgmScriptParser.AssignmentOP);
	        this.state = 60;
	        this.additive(0);
	        this.state = 61;
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

	multiplicative() {
	    return this.getTypedRuleContext(MultiplicativeContext,0);
	};

	additive() {
	    return this.getTypedRuleContext(AdditiveContext,0);
	};

	ADD() {
	    return this.getToken(LgmScriptParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(LgmScriptParser.SUB, 0);
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

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	multiplicative() {
	    return this.getTypedRuleContext(MultiplicativeContext,0);
	};

	MUL() {
	    return this.getToken(LgmScriptParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(LgmScriptParser.DIV, 0);
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

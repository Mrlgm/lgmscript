// Generated from ./production/lgmscript/LgmScript.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LgmScriptListener from './LgmScriptListener.js';
import LgmScriptVisitor from './LgmScriptVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001aS\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0007\u0002\u0019\n\u0002\f\u0002\u000e\u0002\u001c\u000b",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\"",
    "\n\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004,\n\u0004\f\u0004\u000e",
    "\u0004/\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0007\u00057\n\u0005\f\u0005\u000e\u0005:\u000b",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0005\u0007?\n\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nQ",
    "\n\n\u0003\n\u0002\u0004\u0006\b\u000b\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0002\u0005\u0003\u0002\n\u000b\u0003\u0002\f\r\u0004\u0002",
    "\u0006\u0006\u0018\u0018\u0002R\u0002\u001a\u0003\u0002\u0002\u0002",
    "\u0004\u001d\u0003\u0002\u0002\u0002\u0006%\u0003\u0002\u0002\u0002",
    "\b0\u0003\u0002\u0002\u0002\n;\u0003\u0002\u0002\u0002\f>\u0003\u0002",
    "\u0002\u0002\u000eB\u0003\u0002\u0002\u0002\u0010D\u0003\u0002\u0002",
    "\u0002\u0012I\u0003\u0002\u0002\u0002\u0014\u0019\u0005\u0004\u0003",
    "\u0002\u0015\u0019\u0005\f\u0007\u0002\u0016\u0019\u0005\u0010\t\u0002",
    "\u0017\u0019\u0005\u0012\n\u0002\u0018\u0014\u0003\u0002\u0002\u0002",
    "\u0018\u0015\u0003\u0002\u0002\u0002\u0018\u0016\u0003\u0002\u0002\u0002",
    "\u0018\u0017\u0003\u0002\u0002\u0002\u0019\u001c\u0003\u0002\u0002\u0002",
    "\u001a\u0018\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002",
    "\u001b\u0003\u0003\u0002\u0002\u0002\u001c\u001a\u0003\u0002\u0002\u0002",
    "\u001d\u001e\u0007\u0005\u0002\u0002\u001e!\u0007\u0018\u0002\u0002",
    "\u001f \u0007\b\u0002\u0002 \"\u0005\u0006\u0004\u0002!\u001f\u0003",
    "\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002",
    "#$\u0007\u000f\u0002\u0002$\u0005\u0003\u0002\u0002\u0002%&\b\u0004",
    "\u0001\u0002&\'\u0005\b\u0005\u0002\'-\u0003\u0002\u0002\u0002()\f\u0003",
    "\u0002\u0002)*\t\u0002\u0002\u0002*,\u0005\b\u0005\u0002+(\u0003\u0002",
    "\u0002\u0002,/\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003",
    "\u0002\u0002\u0002.\u0007\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002",
    "\u000201\b\u0005\u0001\u000212\u0005\n\u0006\u000228\u0003\u0002\u0002",
    "\u000234\f\u0003\u0002\u000245\t\u0003\u0002\u000257\u0005\n\u0006\u0002",
    "63\u0003\u0002\u0002\u00027:\u0003\u0002\u0002\u000286\u0003\u0002\u0002",
    "\u000289\u0003\u0002\u0002\u00029\t\u0003\u0002\u0002\u0002:8\u0003",
    "\u0002\u0002\u0002;<\t\u0004\u0002\u0002<\u000b\u0003\u0002\u0002\u0002",
    "=?\u0005\u000e\b\u0002>=\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002",
    "\u0002?@\u0003\u0002\u0002\u0002@A\u0007\u000f\u0002\u0002A\r\u0003",
    "\u0002\u0002\u0002BC\u0005\u0006\u0004\u0002C\u000f\u0003\u0002\u0002",
    "\u0002DE\u0007\u0018\u0002\u0002EF\u0007\b\u0002\u0002FG\u0005\u0006",
    "\u0004\u0002GH\u0007\u000f\u0002\u0002H\u0011\u0003\u0002\u0002\u0002",
    "IJ\u0007\u0003\u0002\u0002JK\u0007\u0016\u0002\u0002KL\u0005\u000e\b",
    "\u0002LM\u0007\u0017\u0002\u0002MP\u0005\u0002\u0002\u0002NO\u0007\u0004",
    "\u0002\u0002OQ\u0005\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002PQ\u0003",
    "\u0002\u0002\u0002Q\u0013\u0003\u0002\u0002\u0002\t\u0018\u001a!-8>",
    "P"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LgmScriptParser extends antlr4.Parser {

    static grammarFileName = "LgmScript.g4";
    static literalNames = [ null, null, "'else'", "'int'", null, null, "'='", 
                            null, "'+'", "'-'", "'*'", "'/'", "'#'", "';'", 
                            "'.'", "','", "'['", "']'", "'{'", "'}'", "'('", 
                            "')'" ];
    static symbolicNames = [ null, "If", "Else", "Int", "IntLiteral", "StringLiteral", 
                             "AssignmentOP", "RelationalOP", "ADD", "SUB", 
                             "MUL", "DIV", "Sharp", "SemiColon", "Dot", 
                             "Comm", "LeftBracket", "RightBracket", "LeftBrace", 
                             "RightBrace", "LeftParen", "RightParen", "Id", 
                             "Whitespace", "Newline" ];
    static ruleNames = [ "program", "intDeclare", "additive", "multiplicative", 
                         "primary", "expressionStatement", "expression", 
                         "assignmentStatement", "ifStatement" ];

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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 22;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 18;
	                    this.intDeclare();
	                    break;

	                case 2:
	                    this.state = 19;
	                    this.expressionStatement();
	                    break;

	                case 3:
	                    this.state = 20;
	                    this.assignmentStatement();
	                    break;

	                case 4:
	                    this.state = 21;
	                    this.ifStatement();
	                    break;

	                } 
	            }
	            this.state = 26;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
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
	        this.state = 27;
	        this.match(LgmScriptParser.Int);
	        this.state = 28;
	        this.match(LgmScriptParser.Id);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LgmScriptParser.AssignmentOP) {
	            this.state = 29;
	            this.match(LgmScriptParser.AssignmentOP);
	            this.state = 30;
	            this.additive(0);
	        }

	        this.state = 33;
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
	        this.state = 36;
	        this.multiplicative(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new AdditiveContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, LgmScriptParser.RULE_additive);
	                this.state = 38;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 39;
	                localctx.bop = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===LgmScriptParser.ADD || _la===LgmScriptParser.SUB)) {
	                    localctx.bop = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 40;
	                this.multiplicative(0); 
	            }
	            this.state = 45;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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
	        this.state = 47;
	        this.primary();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 54;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new MultiplicativeContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, LgmScriptParser.RULE_multiplicative);
	                this.state = 49;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 50;
	                localctx.bop = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===LgmScriptParser.MUL || _la===LgmScriptParser.DIV)) {
	                    localctx.bop = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 51;
	                this.primary(); 
	            }
	            this.state = 56;
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



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LgmScriptParser.RULE_primary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LgmScriptParser.IntLiteral || _la===LgmScriptParser.Id) {
	            this.state = 59;
	            this.expression();
	        }

	        this.state = 62;
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LgmScriptParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.additive(0);
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
	    this.enterRule(localctx, 14, LgmScriptParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(LgmScriptParser.Id);
	        this.state = 67;
	        this.match(LgmScriptParser.AssignmentOP);
	        this.state = 68;
	        this.additive(0);
	        this.state = 69;
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



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LgmScriptParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(LgmScriptParser.If);
	        this.state = 72;
	        this.match(LgmScriptParser.LeftParen);
	        this.state = 73;
	        this.expression();
	        this.state = 74;
	        this.match(LgmScriptParser.RightParen);
	        this.state = 75;
	        this.program();
	        this.state = 78;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 76;
	            this.match(LgmScriptParser.Else);
	            this.state = 77;
	            this.program();

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


}

LgmScriptParser.EOF = antlr4.Token.EOF;
LgmScriptParser.If = 1;
LgmScriptParser.Else = 2;
LgmScriptParser.Int = 3;
LgmScriptParser.IntLiteral = 4;
LgmScriptParser.StringLiteral = 5;
LgmScriptParser.AssignmentOP = 6;
LgmScriptParser.RelationalOP = 7;
LgmScriptParser.ADD = 8;
LgmScriptParser.SUB = 9;
LgmScriptParser.MUL = 10;
LgmScriptParser.DIV = 11;
LgmScriptParser.Sharp = 12;
LgmScriptParser.SemiColon = 13;
LgmScriptParser.Dot = 14;
LgmScriptParser.Comm = 15;
LgmScriptParser.LeftBracket = 16;
LgmScriptParser.RightBracket = 17;
LgmScriptParser.LeftBrace = 18;
LgmScriptParser.RightBrace = 19;
LgmScriptParser.LeftParen = 20;
LgmScriptParser.RightParen = 21;
LgmScriptParser.Id = 22;
LgmScriptParser.Whitespace = 23;
LgmScriptParser.Newline = 24;

LgmScriptParser.RULE_program = 0;
LgmScriptParser.RULE_intDeclare = 1;
LgmScriptParser.RULE_additive = 2;
LgmScriptParser.RULE_multiplicative = 3;
LgmScriptParser.RULE_primary = 4;
LgmScriptParser.RULE_expressionStatement = 5;
LgmScriptParser.RULE_expression = 6;
LgmScriptParser.RULE_assignmentStatement = 7;
LgmScriptParser.RULE_ifStatement = 8;

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

	intDeclare = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IntDeclareContext);
	    } else {
	        return this.getTypedRuleContext(IntDeclareContext,i);
	    }
	};

	expressionStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionStatementContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionStatementContext,i);
	    }
	};

	assignmentStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentStatementContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentStatementContext,i);
	    }
	};

	ifStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IfStatementContext);
	    } else {
	        return this.getTypedRuleContext(IfStatementContext,i);
	    }
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

	SemiColon() {
	    return this.getToken(LgmScriptParser.SemiColon, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LgmScriptParser.RULE_expression;
    }

	additive() {
	    return this.getTypedRuleContext(AdditiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LgmScriptVisitor ) {
	        return visitor.visitExpression(this);
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



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LgmScriptParser.RULE_ifStatement;
    }

	If() {
	    return this.getToken(LgmScriptParser.If, 0);
	};

	LeftParen() {
	    return this.getToken(LgmScriptParser.LeftParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RightParen() {
	    return this.getToken(LgmScriptParser.RightParen, 0);
	};

	program = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProgramContext);
	    } else {
	        return this.getTypedRuleContext(ProgramContext,i);
	    }
	};

	Else() {
	    return this.getToken(LgmScriptParser.Else, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LgmScriptListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LgmScriptVisitor ) {
	        return visitor.visitIfStatement(this);
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
LgmScriptParser.ExpressionContext = ExpressionContext; 
LgmScriptParser.AssignmentStatementContext = AssignmentStatementContext; 
LgmScriptParser.IfStatementContext = IfStatementContext; 

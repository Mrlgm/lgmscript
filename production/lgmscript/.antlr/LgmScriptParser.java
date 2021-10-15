// Generated from /Users/mrlgm/Project/lgmscript/production/lgmscript/LgmScript.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LgmScriptParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		If=1, Else=2, Int=3, IntLiteral=4, StringLiteral=5, AssignmentOP=6, RelationalOP=7, 
		ADD=8, SUB=9, MUL=10, DIV=11, Sharp=12, SemiColon=13, Dot=14, Comm=15, 
		LeftBracket=16, RightBracket=17, LeftBrace=18, RightBrace=19, LeftParen=20, 
		RightParen=21, Id=22, Whitespace=23, Newline=24;
	public static final int
		RULE_program = 0, RULE_intDeclare = 1, RULE_additive = 2, RULE_multiplicative = 3, 
		RULE_primary = 4, RULE_expressionStatement = 5, RULE_expression = 6, RULE_assignmentStatement = 7, 
		RULE_ifStatement = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "intDeclare", "additive", "multiplicative", "primary", "expressionStatement", 
			"expression", "assignmentStatement", "ifStatement"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'else'", "'int'", null, null, "'='", null, "'+'", "'-'", 
			"'*'", "'/'", "'#'", "';'", "'.'", "','", "'['", "']'", "'{'", "'}'", 
			"'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "If", "Else", "Int", "IntLiteral", "StringLiteral", "AssignmentOP", 
			"RelationalOP", "ADD", "SUB", "MUL", "DIV", "Sharp", "SemiColon", "Dot", 
			"Comm", "LeftBracket", "RightBracket", "LeftBrace", "RightBrace", "LeftParen", 
			"RightParen", "Id", "Whitespace", "Newline"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "LgmScript.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }


	LgmScriptParser.prototype.start = function() {
	    console.log("Started...")
	}

	public LgmScriptParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public List<IntDeclareContext> intDeclare() {
			return getRuleContexts(IntDeclareContext.class);
		}
		public IntDeclareContext intDeclare(int i) {
			return getRuleContext(IntDeclareContext.class,i);
		}
		public List<ExpressionStatementContext> expressionStatement() {
			return getRuleContexts(ExpressionStatementContext.class);
		}
		public ExpressionStatementContext expressionStatement(int i) {
			return getRuleContext(ExpressionStatementContext.class,i);
		}
		public List<AssignmentStatementContext> assignmentStatement() {
			return getRuleContexts(AssignmentStatementContext.class);
		}
		public AssignmentStatementContext assignmentStatement(int i) {
			return getRuleContext(AssignmentStatementContext.class,i);
		}
		public List<IfStatementContext> ifStatement() {
			return getRuleContexts(IfStatementContext.class);
		}
		public IfStatementContext ifStatement(int i) {
			return getRuleContext(IfStatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << If) | (1L << Int) | (1L << IntLiteral) | (1L << SemiColon) | (1L << Id))) != 0)) {
				{
				setState(22);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(18);
					intDeclare();
					}
					break;
				case 2:
					{
					setState(19);
					expressionStatement();
					}
					break;
				case 3:
					{
					setState(20);
					assignmentStatement();
					}
					break;
				case 4:
					{
					setState(21);
					ifStatement();
					}
					break;
				}
				}
				setState(26);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntDeclareContext extends ParserRuleContext {
		public TerminalNode Int() { return getToken(LgmScriptParser.Int, 0); }
		public TerminalNode Id() { return getToken(LgmScriptParser.Id, 0); }
		public TerminalNode SemiColon() { return getToken(LgmScriptParser.SemiColon, 0); }
		public TerminalNode AssignmentOP() { return getToken(LgmScriptParser.AssignmentOP, 0); }
		public AdditiveContext additive() {
			return getRuleContext(AdditiveContext.class,0);
		}
		public IntDeclareContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intDeclare; }
	}

	public final IntDeclareContext intDeclare() throws RecognitionException {
		IntDeclareContext _localctx = new IntDeclareContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_intDeclare);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(27);
			match(Int);
			setState(28);
			match(Id);
			setState(31);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AssignmentOP) {
				{
				setState(29);
				match(AssignmentOP);
				setState(30);
				additive(0);
				}
			}

			setState(33);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AdditiveContext extends ParserRuleContext {
		public Token bop;
		public MultiplicativeContext multiplicative() {
			return getRuleContext(MultiplicativeContext.class,0);
		}
		public AdditiveContext additive() {
			return getRuleContext(AdditiveContext.class,0);
		}
		public TerminalNode ADD() { return getToken(LgmScriptParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(LgmScriptParser.SUB, 0); }
		public AdditiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_additive; }
	}

	public final AdditiveContext additive() throws RecognitionException {
		return additive(0);
	}

	private AdditiveContext additive(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		AdditiveContext _localctx = new AdditiveContext(_ctx, _parentState);
		AdditiveContext _prevctx = _localctx;
		int _startState = 4;
		enterRecursionRule(_localctx, 4, RULE_additive, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(36);
			multiplicative(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(43);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new AdditiveContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_additive);
					setState(38);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(39);
					((AdditiveContext)_localctx).bop = _input.LT(1);
					_la = _input.LA(1);
					if ( !(_la==ADD || _la==SUB) ) {
						((AdditiveContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(40);
					multiplicative(0);
					}
					} 
				}
				setState(45);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class MultiplicativeContext extends ParserRuleContext {
		public Token bop;
		public PrimaryContext primary() {
			return getRuleContext(PrimaryContext.class,0);
		}
		public MultiplicativeContext multiplicative() {
			return getRuleContext(MultiplicativeContext.class,0);
		}
		public TerminalNode MUL() { return getToken(LgmScriptParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(LgmScriptParser.DIV, 0); }
		public MultiplicativeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplicative; }
	}

	public final MultiplicativeContext multiplicative() throws RecognitionException {
		return multiplicative(0);
	}

	private MultiplicativeContext multiplicative(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		MultiplicativeContext _localctx = new MultiplicativeContext(_ctx, _parentState);
		MultiplicativeContext _prevctx = _localctx;
		int _startState = 6;
		enterRecursionRule(_localctx, 6, RULE_multiplicative, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(47);
			primary();
			}
			_ctx.stop = _input.LT(-1);
			setState(54);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new MultiplicativeContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_multiplicative);
					setState(49);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(50);
					((MultiplicativeContext)_localctx).bop = _input.LT(1);
					_la = _input.LA(1);
					if ( !(_la==MUL || _la==DIV) ) {
						((MultiplicativeContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(51);
					primary();
					}
					} 
				}
				setState(56);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PrimaryContext extends ParserRuleContext {
		public TerminalNode IntLiteral() { return getToken(LgmScriptParser.IntLiteral, 0); }
		public TerminalNode Id() { return getToken(LgmScriptParser.Id, 0); }
		public PrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primary; }
	}

	public final PrimaryContext primary() throws RecognitionException {
		PrimaryContext _localctx = new PrimaryContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_primary);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			_la = _input.LA(1);
			if ( !(_la==IntLiteral || _la==Id) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionStatementContext extends ParserRuleContext {
		public TerminalNode SemiColon() { return getToken(LgmScriptParser.SemiColon, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_expressionStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IntLiteral || _la==Id) {
				{
				setState(59);
				expression();
				}
			}

			setState(62);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public AdditiveContext additive() {
			return getRuleContext(AdditiveContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			additive(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentStatementContext extends ParserRuleContext {
		public TerminalNode Id() { return getToken(LgmScriptParser.Id, 0); }
		public TerminalNode AssignmentOP() { return getToken(LgmScriptParser.AssignmentOP, 0); }
		public AdditiveContext additive() {
			return getRuleContext(AdditiveContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(LgmScriptParser.SemiColon, 0); }
		public AssignmentStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentStatement; }
	}

	public final AssignmentStatementContext assignmentStatement() throws RecognitionException {
		AssignmentStatementContext _localctx = new AssignmentStatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_assignmentStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			match(Id);
			setState(67);
			match(AssignmentOP);
			setState(68);
			additive(0);
			setState(69);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode If() { return getToken(LgmScriptParser.If, 0); }
		public TerminalNode LeftParen() { return getToken(LgmScriptParser.LeftParen, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode RightParen() { return getToken(LgmScriptParser.RightParen, 0); }
		public TerminalNode Else() { return getToken(LgmScriptParser.Else, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_ifStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			match(If);
			setState(72);
			match(LeftParen);
			setState(73);
			expression();
			setState(74);
			match(RightParen);
			setState(75);
			expression();
			setState(78);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Else) {
				{
				setState(76);
				match(Else);
				setState(77);
				expression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 2:
			return additive_sempred((AdditiveContext)_localctx, predIndex);
		case 3:
			return multiplicative_sempred((MultiplicativeContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean additive_sempred(AdditiveContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean multiplicative_sempred(MultiplicativeContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\32S\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\3\2\3\2\3\2"+
		"\3\2\7\2\31\n\2\f\2\16\2\34\13\2\3\3\3\3\3\3\3\3\5\3\"\n\3\3\3\3\3\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\7\4,\n\4\f\4\16\4/\13\4\3\5\3\5\3\5\3\5\3\5\3\5\7"+
		"\5\67\n\5\f\5\16\5:\13\5\3\6\3\6\3\7\5\7?\n\7\3\7\3\7\3\b\3\b\3\t\3\t"+
		"\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\nQ\n\n\3\n\2\4\6\b\13\2\4\6"+
		"\b\n\f\16\20\22\2\5\3\2\n\13\3\2\f\r\4\2\6\6\30\30\2R\2\32\3\2\2\2\4\35"+
		"\3\2\2\2\6%\3\2\2\2\b\60\3\2\2\2\n;\3\2\2\2\f>\3\2\2\2\16B\3\2\2\2\20"+
		"D\3\2\2\2\22I\3\2\2\2\24\31\5\4\3\2\25\31\5\f\7\2\26\31\5\20\t\2\27\31"+
		"\5\22\n\2\30\24\3\2\2\2\30\25\3\2\2\2\30\26\3\2\2\2\30\27\3\2\2\2\31\34"+
		"\3\2\2\2\32\30\3\2\2\2\32\33\3\2\2\2\33\3\3\2\2\2\34\32\3\2\2\2\35\36"+
		"\7\5\2\2\36!\7\30\2\2\37 \7\b\2\2 \"\5\6\4\2!\37\3\2\2\2!\"\3\2\2\2\""+
		"#\3\2\2\2#$\7\17\2\2$\5\3\2\2\2%&\b\4\1\2&\'\5\b\5\2\'-\3\2\2\2()\f\3"+
		"\2\2)*\t\2\2\2*,\5\b\5\2+(\3\2\2\2,/\3\2\2\2-+\3\2\2\2-.\3\2\2\2.\7\3"+
		"\2\2\2/-\3\2\2\2\60\61\b\5\1\2\61\62\5\n\6\2\628\3\2\2\2\63\64\f\3\2\2"+
		"\64\65\t\3\2\2\65\67\5\n\6\2\66\63\3\2\2\2\67:\3\2\2\28\66\3\2\2\289\3"+
		"\2\2\29\t\3\2\2\2:8\3\2\2\2;<\t\4\2\2<\13\3\2\2\2=?\5\16\b\2>=\3\2\2\2"+
		">?\3\2\2\2?@\3\2\2\2@A\7\17\2\2A\r\3\2\2\2BC\5\6\4\2C\17\3\2\2\2DE\7\30"+
		"\2\2EF\7\b\2\2FG\5\6\4\2GH\7\17\2\2H\21\3\2\2\2IJ\7\3\2\2JK\7\26\2\2K"+
		"L\5\16\b\2LM\7\27\2\2MP\5\16\b\2NO\7\4\2\2OQ\5\16\b\2PN\3\2\2\2PQ\3\2"+
		"\2\2Q\23\3\2\2\2\t\30\32!-8>P";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
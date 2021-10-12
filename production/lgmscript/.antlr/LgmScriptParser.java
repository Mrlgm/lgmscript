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
		If=1, Int=2, IntLiteral=3, StringLiteral=4, AssignmentOP=5, RelationalOP=6, 
		Star=7, Divide=8, Plus=9, Subtract=10, Sharp=11, SemiColon=12, Dot=13, 
		Comm=14, LeftBracket=15, RightBracket=16, LeftBrace=17, RightBrace=18, 
		LeftParen=19, RightParen=20, Id=21, Whitespace=22, Newline=23;
	public static final int
		RULE_program = 0, RULE_intDeclare = 1, RULE_additive = 2, RULE_multiplicative = 3, 
		RULE_primary = 4, RULE_expressionStatement = 5, RULE_assignmentStatement = 6;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "intDeclare", "additive", "multiplicative", "primary", "expressionStatement", 
			"assignmentStatement"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'int'", null, null, "'='", null, "'*'", "'/'", "'+'", "'-'", 
			"'#'", "';'", "'.'", "','", "'['", "']'", "'{'", "'}'", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "If", "Int", "IntLiteral", "StringLiteral", "AssignmentOP", "RelationalOP", 
			"Star", "Divide", "Plus", "Subtract", "Sharp", "SemiColon", "Dot", "Comm", 
			"LeftBracket", "RightBracket", "LeftBrace", "RightBrace", "LeftParen", 
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
		public IntDeclareContext intDeclare() {
			return getRuleContext(IntDeclareContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public AssignmentStatementContext assignmentStatement() {
			return getRuleContext(AssignmentStatementContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			setState(17);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(14);
				intDeclare();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(15);
				expressionStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(16);
				assignmentStatement();
				}
				break;
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
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(19);
			match(Int);
			setState(20);
			match(Id);
			{
			setState(21);
			match(AssignmentOP);
			setState(22);
			additive();
			}
			setState(24);
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
		public List<MultiplicativeContext> multiplicative() {
			return getRuleContexts(MultiplicativeContext.class);
		}
		public MultiplicativeContext multiplicative(int i) {
			return getRuleContext(MultiplicativeContext.class,i);
		}
		public List<TerminalNode> Plus() { return getTokens(LgmScriptParser.Plus); }
		public TerminalNode Plus(int i) {
			return getToken(LgmScriptParser.Plus, i);
		}
		public List<TerminalNode> Subtract() { return getTokens(LgmScriptParser.Subtract); }
		public TerminalNode Subtract(int i) {
			return getToken(LgmScriptParser.Subtract, i);
		}
		public AdditiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_additive; }
	}

	public final AdditiveContext additive() throws RecognitionException {
		AdditiveContext _localctx = new AdditiveContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_additive);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(26);
			multiplicative();
			setState(31);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Plus || _la==Subtract) {
				{
				{
				setState(27);
				_la = _input.LA(1);
				if ( !(_la==Plus || _la==Subtract) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(28);
				multiplicative();
				}
				}
				setState(33);
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

	public static class MultiplicativeContext extends ParserRuleContext {
		public List<PrimaryContext> primary() {
			return getRuleContexts(PrimaryContext.class);
		}
		public PrimaryContext primary(int i) {
			return getRuleContext(PrimaryContext.class,i);
		}
		public List<TerminalNode> Star() { return getTokens(LgmScriptParser.Star); }
		public TerminalNode Star(int i) {
			return getToken(LgmScriptParser.Star, i);
		}
		public List<TerminalNode> Divide() { return getTokens(LgmScriptParser.Divide); }
		public TerminalNode Divide(int i) {
			return getToken(LgmScriptParser.Divide, i);
		}
		public MultiplicativeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplicative; }
	}

	public final MultiplicativeContext multiplicative() throws RecognitionException {
		MultiplicativeContext _localctx = new MultiplicativeContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_multiplicative);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			primary();
			setState(39);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Star || _la==Divide) {
				{
				{
				setState(35);
				_la = _input.LA(1);
				if ( !(_la==Star || _la==Divide) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(36);
				primary();
				}
				}
				setState(41);
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
			setState(42);
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
		public AdditiveContext additive() {
			return getRuleContext(AdditiveContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(LgmScriptParser.SemiColon, 0); }
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			additive();
			setState(45);
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
		enterRule(_localctx, 12, RULE_assignmentStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(47);
			match(Id);
			setState(48);
			match(AssignmentOP);
			setState(49);
			additive();
			setState(50);
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

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\31\67\4\2\t\2\4\3"+
		"\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\3\2\3\2\3\2\5\2\24\n\2\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\7\4 \n\4\f\4\16\4#\13\4\3\5\3\5"+
		"\3\5\7\5(\n\5\f\5\16\5+\13\5\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\2\2\t\2\4\6\b\n\f\16\2\5\3\2\13\f\3\2\t\n\4\2\5\5\27\27\2\63\2\23\3"+
		"\2\2\2\4\25\3\2\2\2\6\34\3\2\2\2\b$\3\2\2\2\n,\3\2\2\2\f.\3\2\2\2\16\61"+
		"\3\2\2\2\20\24\5\4\3\2\21\24\5\f\7\2\22\24\5\16\b\2\23\20\3\2\2\2\23\21"+
		"\3\2\2\2\23\22\3\2\2\2\24\3\3\2\2\2\25\26\7\4\2\2\26\27\7\27\2\2\27\30"+
		"\7\7\2\2\30\31\5\6\4\2\31\32\3\2\2\2\32\33\7\16\2\2\33\5\3\2\2\2\34!\5"+
		"\b\5\2\35\36\t\2\2\2\36 \5\b\5\2\37\35\3\2\2\2 #\3\2\2\2!\37\3\2\2\2!"+
		"\"\3\2\2\2\"\7\3\2\2\2#!\3\2\2\2$)\5\n\6\2%&\t\3\2\2&(\5\n\6\2\'%\3\2"+
		"\2\2(+\3\2\2\2)\'\3\2\2\2)*\3\2\2\2*\t\3\2\2\2+)\3\2\2\2,-\t\4\2\2-\13"+
		"\3\2\2\2./\5\6\4\2/\60\7\16\2\2\60\r\3\2\2\2\61\62\7\27\2\2\62\63\7\7"+
		"\2\2\63\64\5\6\4\2\64\65\7\16\2\2\65\17\3\2\2\2\5\23!)";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
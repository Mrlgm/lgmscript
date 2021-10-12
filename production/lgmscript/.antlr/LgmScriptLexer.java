// Generated from /Users/mrlgm/Project/lgmscript/production/lgmscript/LgmScript.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LgmScriptLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		If=1, Int=2, IntLiteral=3, StringLiteral=4, AssignmentOP=5, RelationalOP=6, 
		Star=7, Divide=8, Plus=9, Subtract=10, Sharp=11, SemiColon=12, Dot=13, 
		Comm=14, LeftBracket=15, RightBracket=16, LeftBrace=17, RightBrace=18, 
		LeftParen=19, RightParen=20, Id=21, Whitespace=22, Newline=23;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"If", "Int", "IntLiteral", "StringLiteral", "AssignmentOP", "RelationalOP", 
			"Star", "Divide", "Plus", "Subtract", "Sharp", "SemiColon", "Dot", "Comm", 
			"LeftBracket", "RightBracket", "LeftBrace", "RightBrace", "LeftParen", 
			"RightParen", "Id", "Whitespace", "Newline"
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


	public LgmScriptLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "LgmScript.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\31\u0088\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\3\2"+
		"\3\2\3\2\3\2\5\2\66\n\2\3\3\3\3\3\3\3\3\3\4\6\4=\n\4\r\4\16\4>\3\5\3\5"+
		"\7\5C\n\5\f\5\16\5F\13\5\3\5\3\5\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3"+
		"\7\5\7T\n\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16"+
		"\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25"+
		"\3\26\3\26\7\26t\n\26\f\26\16\26w\13\26\3\27\6\27z\n\27\r\27\16\27{\3"+
		"\27\3\27\3\30\3\30\5\30\u0082\n\30\3\30\5\30\u0085\n\30\3\30\3\30\3D\2"+
		"\31\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35"+
		"\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\3\2\6\3\2\62;\5\2C\\aac|\6"+
		"\2\62;C\\aac|\4\2\13\13\"\"\2\u0092\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2"+
		"\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23"+
		"\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2"+
		"\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2"+
		"\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\3\65\3\2\2\2\5\67\3\2\2\2\7<\3\2"+
		"\2\2\t@\3\2\2\2\13I\3\2\2\2\rS\3\2\2\2\17U\3\2\2\2\21W\3\2\2\2\23Y\3\2"+
		"\2\2\25[\3\2\2\2\27]\3\2\2\2\31_\3\2\2\2\33a\3\2\2\2\35c\3\2\2\2\37e\3"+
		"\2\2\2!g\3\2\2\2#i\3\2\2\2%k\3\2\2\2\'m\3\2\2\2)o\3\2\2\2+q\3\2\2\2-y"+
		"\3\2\2\2/\u0084\3\2\2\2\61\62\7k\2\2\62\66\7h\2\2\63\64\7\u5984\2\2\64"+
		"\66\7\u679e\2\2\65\61\3\2\2\2\65\63\3\2\2\2\66\4\3\2\2\2\678\7k\2\289"+
		"\7p\2\29:\7v\2\2:\6\3\2\2\2;=\t\2\2\2<;\3\2\2\2=>\3\2\2\2><\3\2\2\2>?"+
		"\3\2\2\2?\b\3\2\2\2@D\7$\2\2AC\13\2\2\2BA\3\2\2\2CF\3\2\2\2DE\3\2\2\2"+
		"DB\3\2\2\2EG\3\2\2\2FD\3\2\2\2GH\7$\2\2H\n\3\2\2\2IJ\7?\2\2J\f\3\2\2\2"+
		"KL\7?\2\2LT\7?\2\2MT\7@\2\2NO\7@\2\2OT\7?\2\2PT\7>\2\2QR\7>\2\2RT\7?\2"+
		"\2SK\3\2\2\2SM\3\2\2\2SN\3\2\2\2SP\3\2\2\2SQ\3\2\2\2T\16\3\2\2\2UV\7,"+
		"\2\2V\20\3\2\2\2WX\7\61\2\2X\22\3\2\2\2YZ\7-\2\2Z\24\3\2\2\2[\\\7/\2\2"+
		"\\\26\3\2\2\2]^\7%\2\2^\30\3\2\2\2_`\7=\2\2`\32\3\2\2\2ab\7\60\2\2b\34"+
		"\3\2\2\2cd\7.\2\2d\36\3\2\2\2ef\7]\2\2f \3\2\2\2gh\7_\2\2h\"\3\2\2\2i"+
		"j\7}\2\2j$\3\2\2\2kl\7\177\2\2l&\3\2\2\2mn\7*\2\2n(\3\2\2\2op\7+\2\2p"+
		"*\3\2\2\2qu\t\3\2\2rt\t\4\2\2sr\3\2\2\2tw\3\2\2\2us\3\2\2\2uv\3\2\2\2"+
		"v,\3\2\2\2wu\3\2\2\2xz\t\5\2\2yx\3\2\2\2z{\3\2\2\2{y\3\2\2\2{|\3\2\2\2"+
		"|}\3\2\2\2}~\b\27\2\2~.\3\2\2\2\177\u0081\7\17\2\2\u0080\u0082\7\f\2\2"+
		"\u0081\u0080\3\2\2\2\u0081\u0082\3\2\2\2\u0082\u0085\3\2\2\2\u0083\u0085"+
		"\7\f\2\2\u0084\177\3\2\2\2\u0084\u0083\3\2\2\2\u0085\u0086\3\2\2\2\u0086"+
		"\u0087\b\30\2\2\u0087\60\3\2\2\2\f\2\65>DSsu{\u0081\u0084\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
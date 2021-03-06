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
public class calcLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COS=1, SIN=2, TAN=3, ACOS=4, ASIN=5, ATAN=6, LN=7, LOG=8, SQRT=9, PRINT=10, 
		EQCOL=11, LPAREN=12, RPAREN=13, PLUS=14, MINUS=15, TIMES=16, DIV=17, GT=18, 
		LT=19, EQ=20, COMMA=21, POINT=22, POW=23, PI=24, EULER=25, I=26, VARIABLE=27, 
		REAL=28, EOL=29, WS=30;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"COS", "SIN", "TAN", "ACOS", "ASIN", "ATAN", "LN", "LOG", "SQRT", "PRINT", 
			"EQCOL", "LPAREN", "RPAREN", "PLUS", "MINUS", "TIMES", "DIV", "GT", "LT", 
			"EQ", "COMMA", "POINT", "POW", "PI", "EULER", "I", "VARIABLE", "VALID_ID_START", 
			"VALID_ID_CHAR", "REAL", "NUMBER", "E1", "E2", "SIGN", "EOL", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'cos'", "'sin'", "'tan'", "'acos'", "'asin'", "'atan'", "'ln'", 
			"'log'", "'sqrt'", "'print'", "':='", "'('", "')'", "'+'", "'-'", "'*'", 
			"'/'", "'>'", "'<'", "'='", "','", "'.'", "'^'", "'pi'", null, "'i'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COS", "SIN", "TAN", "ACOS", "ASIN", "ATAN", "LN", "LOG", "SQRT", 
			"PRINT", "EQCOL", "LPAREN", "RPAREN", "PLUS", "MINUS", "TIMES", "DIV", 
			"GT", "LT", "EQ", "COMMA", "POINT", "POW", "PI", "EULER", "I", "VARIABLE", 
			"REAL", "EOL", "WS"
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


	public calcLexer(CharStream input) {
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2 \u00d3\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\4\3\4"+
		"\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3"+
		"\b\3\b\3\b\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\f\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22"+
		"\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31"+
		"\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\7\34\u009d\n\34\f\34\16\34\u00a0"+
		"\13\34\3\35\5\35\u00a3\n\35\3\36\3\36\5\36\u00a7\n\36\3\37\3\37\3\37\5"+
		"\37\u00ac\n\37\3\37\5\37\u00af\n\37\3\37\3\37\5\37\u00b3\n\37\3 \6 \u00b6"+
		"\n \r \16 \u00b7\3 \3 \6 \u00bc\n \r \16 \u00bd\5 \u00c0\n \3!\3!\3\""+
		"\3\"\3#\3#\3$\6$\u00c9\n$\r$\16$\u00ca\3%\6%\u00ce\n%\r%\16%\u00cf\3%"+
		"\3%\2\2&\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17"+
		"\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\35"+
		"9\2;\2=\36?\2A\2C\2E\2G\37I \3\2\6\5\2C\\aac|\4\2--//\4\2\f\f\17\17\4"+
		"\2\13\13\"\"\2\u00d6\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2"+
		"\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3"+
		"\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2"+
		"\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2"+
		"\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2"+
		"\2\2\2=\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\3K\3\2\2\2\5O\3\2\2\2\7S\3\2\2\2"+
		"\tW\3\2\2\2\13\\\3\2\2\2\ra\3\2\2\2\17f\3\2\2\2\21i\3\2\2\2\23m\3\2\2"+
		"\2\25r\3\2\2\2\27x\3\2\2\2\31{\3\2\2\2\33}\3\2\2\2\35\177\3\2\2\2\37\u0081"+
		"\3\2\2\2!\u0083\3\2\2\2#\u0085\3\2\2\2%\u0087\3\2\2\2\'\u0089\3\2\2\2"+
		")\u008b\3\2\2\2+\u008d\3\2\2\2-\u008f\3\2\2\2/\u0091\3\2\2\2\61\u0093"+
		"\3\2\2\2\63\u0096\3\2\2\2\65\u0098\3\2\2\2\67\u009a\3\2\2\29\u00a2\3\2"+
		"\2\2;\u00a6\3\2\2\2=\u00a8\3\2\2\2?\u00b5\3\2\2\2A\u00c1\3\2\2\2C\u00c3"+
		"\3\2\2\2E\u00c5\3\2\2\2G\u00c8\3\2\2\2I\u00cd\3\2\2\2KL\7e\2\2LM\7q\2"+
		"\2MN\7u\2\2N\4\3\2\2\2OP\7u\2\2PQ\7k\2\2QR\7p\2\2R\6\3\2\2\2ST\7v\2\2"+
		"TU\7c\2\2UV\7p\2\2V\b\3\2\2\2WX\7c\2\2XY\7e\2\2YZ\7q\2\2Z[\7u\2\2[\n\3"+
		"\2\2\2\\]\7c\2\2]^\7u\2\2^_\7k\2\2_`\7p\2\2`\f\3\2\2\2ab\7c\2\2bc\7v\2"+
		"\2cd\7c\2\2de\7p\2\2e\16\3\2\2\2fg\7n\2\2gh\7p\2\2h\20\3\2\2\2ij\7n\2"+
		"\2jk\7q\2\2kl\7i\2\2l\22\3\2\2\2mn\7u\2\2no\7s\2\2op\7t\2\2pq\7v\2\2q"+
		"\24\3\2\2\2rs\7r\2\2st\7t\2\2tu\7k\2\2uv\7p\2\2vw\7v\2\2w\26\3\2\2\2x"+
		"y\7<\2\2yz\7?\2\2z\30\3\2\2\2{|\7*\2\2|\32\3\2\2\2}~\7+\2\2~\34\3\2\2"+
		"\2\177\u0080\7-\2\2\u0080\36\3\2\2\2\u0081\u0082\7/\2\2\u0082 \3\2\2\2"+
		"\u0083\u0084\7,\2\2\u0084\"\3\2\2\2\u0085\u0086\7\61\2\2\u0086$\3\2\2"+
		"\2\u0087\u0088\7@\2\2\u0088&\3\2\2\2\u0089\u008a\7>\2\2\u008a(\3\2\2\2"+
		"\u008b\u008c\7?\2\2\u008c*\3\2\2\2\u008d\u008e\7.\2\2\u008e,\3\2\2\2\u008f"+
		"\u0090\7\60\2\2\u0090.\3\2\2\2\u0091\u0092\7`\2\2\u0092\60\3\2\2\2\u0093"+
		"\u0094\7r\2\2\u0094\u0095\7k\2\2\u0095\62\3\2\2\2\u0096\u0097\5C\"\2\u0097"+
		"\64\3\2\2\2\u0098\u0099\7k\2\2\u0099\66\3\2\2\2\u009a\u009e\59\35\2\u009b"+
		"\u009d\5;\36\2\u009c\u009b\3\2\2\2\u009d\u00a0\3\2\2\2\u009e\u009c\3\2"+
		"\2\2\u009e\u009f\3\2\2\2\u009f8\3\2\2\2\u00a0\u009e\3\2\2\2\u00a1\u00a3"+
		"\t\2\2\2\u00a2\u00a1\3\2\2\2\u00a3:\3\2\2\2\u00a4\u00a7\59\35\2\u00a5"+
		"\u00a7\4\62;\2\u00a6\u00a4\3\2\2\2\u00a6\u00a5\3\2\2\2\u00a7<\3\2\2\2"+
		"\u00a8\u00b2\5? \2\u00a9\u00ac\5A!\2\u00aa\u00ac\5C\"\2\u00ab\u00a9\3"+
		"\2\2\2\u00ab\u00aa\3\2\2\2\u00ac\u00ae\3\2\2\2\u00ad\u00af\5E#\2\u00ae"+
		"\u00ad\3\2\2\2\u00ae\u00af\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0\u00b1\5?"+
		" \2\u00b1\u00b3\3\2\2\2\u00b2\u00ab\3\2\2\2\u00b2\u00b3\3\2\2\2\u00b3"+
		">\3\2\2\2\u00b4\u00b6\4\62;\2\u00b5\u00b4\3\2\2\2\u00b6\u00b7\3\2\2\2"+
		"\u00b7\u00b5\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8\u00bf\3\2\2\2\u00b9\u00bb"+
		"\7\60\2\2\u00ba\u00bc\4\62;\2\u00bb\u00ba\3\2\2\2\u00bc\u00bd\3\2\2\2"+
		"\u00bd\u00bb\3\2\2\2\u00bd\u00be\3\2\2\2\u00be\u00c0\3\2\2\2\u00bf\u00b9"+
		"\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0@\3\2\2\2\u00c1\u00c2\7G\2\2\u00c2B"+
		"\3\2\2\2\u00c3\u00c4\7g\2\2\u00c4D\3\2\2\2\u00c5\u00c6\t\3\2\2\u00c6F"+
		"\3\2\2\2\u00c7\u00c9\t\4\2\2\u00c8\u00c7\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca"+
		"\u00c8\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cbH\3\2\2\2\u00cc\u00ce\t\5\2\2"+
		"\u00cd\u00cc\3\2\2\2\u00ce\u00cf\3\2\2\2\u00cf\u00cd\3\2\2\2\u00cf\u00d0"+
		"\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1\u00d2\b%\2\2\u00d2J\3\2\2\2\16\2\u009e"+
		"\u00a2\u00a6\u00ab\u00ae\u00b2\u00b7\u00bd\u00bf\u00ca\u00cf\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
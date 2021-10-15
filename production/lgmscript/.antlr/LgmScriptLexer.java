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
		If=1, Else=2, Int=3, IntLiteral=4, StringLiteral=5, AssignmentOP=6, RelationalOP=7, 
		ADD=8, SUB=9, MUL=10, DIV=11, Sharp=12, SemiColon=13, Dot=14, Comm=15, 
		LeftBracket=16, RightBracket=17, LeftBrace=18, RightBrace=19, LeftParen=20, 
		RightParen=21, Id=22, Whitespace=23, Newline=24;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"If", "Else", "Int", "IntLiteral", "StringLiteral", "AssignmentOP", "RelationalOP", 
			"ADD", "SUB", "MUL", "DIV", "Sharp", "SemiColon", "Dot", "Comm", "LeftBracket", 
			"RightBracket", "LeftBrace", "RightBrace", "LeftParen", "RightParen", 
			"Id", "Whitespace", "Newline"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\32\u008f\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\3\2\3\2\3\2\3\2\5\28\n\2\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\5"+
		"\6\5D\n\5\r\5\16\5E\3\6\3\6\7\6J\n\6\f\6\16\6M\13\6\3\6\3\6\3\7\3\7\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b[\n\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f"+
		"\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3"+
		"\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\7\27{\n\27\f\27\16\27~\13"+
		"\27\3\30\6\30\u0081\n\30\r\30\16\30\u0082\3\30\3\30\3\31\3\31\5\31\u0089"+
		"\n\31\3\31\5\31\u008c\n\31\3\31\3\31\3K\2\32\3\3\5\4\7\5\t\6\13\7\r\b"+
		"\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26"+
		"+\27-\30/\31\61\32\3\2\6\3\2\62;\5\2C\\aac|\6\2\62;C\\aac|\4\2\13\13\""+
		"\"\2\u0099\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2"+
		"\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27"+
		"\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2"+
		"\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2"+
		"\2/\3\2\2\2\2\61\3\2\2\2\3\67\3\2\2\2\59\3\2\2\2\7>\3\2\2\2\tC\3\2\2\2"+
		"\13G\3\2\2\2\rP\3\2\2\2\17Z\3\2\2\2\21\\\3\2\2\2\23^\3\2\2\2\25`\3\2\2"+
		"\2\27b\3\2\2\2\31d\3\2\2\2\33f\3\2\2\2\35h\3\2\2\2\37j\3\2\2\2!l\3\2\2"+
		"\2#n\3\2\2\2%p\3\2\2\2\'r\3\2\2\2)t\3\2\2\2+v\3\2\2\2-x\3\2\2\2/\u0080"+
		"\3\2\2\2\61\u008b\3\2\2\2\63\64\7k\2\2\648\7h\2\2\65\66\7\u5984\2\2\66"+
		"8\7\u679e\2\2\67\63\3\2\2\2\67\65\3\2\2\28\4\3\2\2\29:\7g\2\2:;\7n\2\2"+
		";<\7u\2\2<=\7g\2\2=\6\3\2\2\2>?\7k\2\2?@\7p\2\2@A\7v\2\2A\b\3\2\2\2BD"+
		"\t\2\2\2CB\3\2\2\2DE\3\2\2\2EC\3\2\2\2EF\3\2\2\2F\n\3\2\2\2GK\7$\2\2H"+
		"J\13\2\2\2IH\3\2\2\2JM\3\2\2\2KL\3\2\2\2KI\3\2\2\2LN\3\2\2\2MK\3\2\2\2"+
		"NO\7$\2\2O\f\3\2\2\2PQ\7?\2\2Q\16\3\2\2\2RS\7?\2\2S[\7?\2\2T[\7@\2\2U"+
		"V\7@\2\2V[\7?\2\2W[\7>\2\2XY\7>\2\2Y[\7?\2\2ZR\3\2\2\2ZT\3\2\2\2ZU\3\2"+
		"\2\2ZW\3\2\2\2ZX\3\2\2\2[\20\3\2\2\2\\]\7-\2\2]\22\3\2\2\2^_\7/\2\2_\24"+
		"\3\2\2\2`a\7,\2\2a\26\3\2\2\2bc\7\61\2\2c\30\3\2\2\2de\7%\2\2e\32\3\2"+
		"\2\2fg\7=\2\2g\34\3\2\2\2hi\7\60\2\2i\36\3\2\2\2jk\7.\2\2k \3\2\2\2lm"+
		"\7]\2\2m\"\3\2\2\2no\7_\2\2o$\3\2\2\2pq\7}\2\2q&\3\2\2\2rs\7\177\2\2s"+
		"(\3\2\2\2tu\7*\2\2u*\3\2\2\2vw\7+\2\2w,\3\2\2\2x|\t\3\2\2y{\t\4\2\2zy"+
		"\3\2\2\2{~\3\2\2\2|z\3\2\2\2|}\3\2\2\2}.\3\2\2\2~|\3\2\2\2\177\u0081\t"+
		"\5\2\2\u0080\177\3\2\2\2\u0081\u0082\3\2\2\2\u0082\u0080\3\2\2\2\u0082"+
		"\u0083\3\2\2\2\u0083\u0084\3\2\2\2\u0084\u0085\b\30\2\2\u0085\60\3\2\2"+
		"\2\u0086\u0088\7\17\2\2\u0087\u0089\7\f\2\2\u0088\u0087\3\2\2\2\u0088"+
		"\u0089\3\2\2\2\u0089\u008c\3\2\2\2\u008a\u008c\7\f\2\2\u008b\u0086\3\2"+
		"\2\2\u008b\u008a\3\2\2\2\u008c\u008d\3\2\2\2\u008d\u008e\b\31\2\2\u008e"+
		"\62\3\2\2\2\f\2\67EKZz|\u0082\u0088\u008b\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
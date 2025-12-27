// Generated from Authors.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { AuthorsListener } from "./AuthorsListener";
import { AuthorsVisitor } from "./AuthorsVisitor";


export class Authors extends Parser {
	public static readonly SEPERATOR = 1;
	public static readonly ETAL = 2;
	public static readonly PARTICLE = 3;
	public static readonly APOSTROPHE_PARTICLE = 4;
	public static readonly APOSTROPHE = 5;
	public static readonly WORD = 6;
	public static readonly FIRSTNAMEPREFIX = 7;
	public static readonly LASTNAMEPREFIXE = 8;
	public static readonly INITIAL = 9;
	public static readonly COMMA = 10;
	public static readonly DASH = 11;
	public static readonly DOT = 12;
	public static readonly WS = 13;
	public static readonly RULE_start = 0;
	public static readonly RULE_allnames = 1;
	public static readonly RULE_fullname = 2;
	public static readonly RULE_prename = 3;
	public static readonly RULE_onename = 4;
	public static readonly RULE_initials = 5;
	public static readonly RULE_lastname = 6;
	public static readonly RULE_particles = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "allnames", "fullname", "prename", "onename", "initials", "lastname", 
		"particles",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'et al.'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "','", undefined, "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SEPERATOR", "ETAL", "PARTICLE", "APOSTROPHE_PARTICLE", "APOSTROPHE", 
		"WORD", "FIRSTNAMEPREFIX", "LASTNAMEPREFIXE", "INITIAL", "COMMA", "DASH", 
		"DOT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Authors._LITERAL_NAMES, Authors._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Authors.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Authors.g4"; }

	// @Override
	public get ruleNames(): string[] { return Authors.ruleNames; }

	// @Override
	public get serializedATN(): string { return Authors._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Authors._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Authors.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.allnames();
			this.state = 17;
			this.match(Authors.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public allnames(): AllnamesContext {
		let _localctx: AllnamesContext = new AllnamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Authors.RULE_allnames);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this.fullname();
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Authors.WS) {
				{
				this.state = 20;
				this.match(Authors.WS);
				}
			}

			this.state = 33;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 23;
					_la = this._input.LA(1);
					if (!(_la === Authors.SEPERATOR || _la === Authors.COMMA)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 25;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Authors.WS) {
						{
						this.state = 24;
						this.match(Authors.WS);
						}
					}

					this.state = 27;
					this.fullname();
					this.state = 29;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Authors.WS) {
						{
						this.state = 28;
						this.match(Authors.WS);
						}
					}

					}
					}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Authors.SEPERATOR || _la === Authors.COMMA) {
				{
				this.state = 36;
				_la = this._input.LA(1);
				if (!(_la === Authors.SEPERATOR || _la === Authors.COMMA)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Authors.WS) {
					{
					this.state = 37;
					this.match(Authors.WS);
					}
				}

				this.state = 40;
				this.match(Authors.ETAL);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fullname(): FullnameContext {
		let _localctx: FullnameContext = new FullnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Authors.RULE_fullname);
		let _la: number;
		try {
			this.state = 56;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 43;
				this.prename();
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Authors.WS) {
					{
					this.state = 44;
					this.match(Authors.WS);
					}
				}

				this.state = 47;
				this.lastname();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 49;
				this.lastname();
				this.state = 50;
				this.match(Authors.COMMA);
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Authors.WS) {
					{
					this.state = 51;
					this.match(Authors.WS);
					}
				}

				this.state = 54;
				this.prename();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prename(): PrenameContext {
		let _localctx: PrenameContext = new PrenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Authors.RULE_prename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 58;
			this.onename();
			this.state = 65;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				{
				this.state = 59;
				this.match(Authors.WS);
				}
				this.state = 60;
				this.onename();
				this.state = 63;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					{
					this.state = 61;
					this.match(Authors.WS);
					}
					this.state = 62;
					this.onename();
					}
					break;
				}
				}
				break;
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public onename(): OnenameContext {
		let _localctx: OnenameContext = new OnenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Authors.RULE_onename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Authors.INITIAL:
				{
				this.state = 67;
				this.initials();
				}
				break;
			case Authors.WORD:
				{
				this.state = 68;
				this.match(Authors.WORD);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initials(): InitialsContext {
		let _localctx: InitialsContext = new InitialsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Authors.RULE_initials);
		try {
			this.state = 75;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 71;
				this.match(Authors.INITIAL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 72;
				this.match(Authors.INITIAL);
				this.state = 73;
				this.match(Authors.DASH);
				this.state = 74;
				this.match(Authors.INITIAL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lastname(): LastnameContext {
		let _localctx: LastnameContext = new LastnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Authors.RULE_lastname);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Authors.PARTICLE || _la === Authors.APOSTROPHE_PARTICLE) {
				{
				this.state = 77;
				this.particles();
				}
			}

			this.state = 80;
			this.match(Authors.WORD);
			this.state = 85;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 81;
					this.match(Authors.WS);
					this.state = 82;
					this.match(Authors.WORD);
					}
					}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public particles(): ParticlesContext {
		let _localctx: ParticlesContext = new ParticlesContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Authors.RULE_particles);
		let _la: number;
		try {
			this.state = 98;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Authors.PARTICLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 88;
				this.match(Authors.PARTICLE);
				this.state = 89;
				this.match(Authors.WS);
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Authors.PARTICLE) {
					{
					{
					this.state = 90;
					this.match(Authors.PARTICLE);
					this.state = 91;
					this.match(Authors.WS);
					}
					}
					this.state = 96;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case Authors.APOSTROPHE_PARTICLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 97;
				this.match(Authors.APOSTROPHE_PARTICLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0Fg\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05" +
		"\x03\x18\n\x03\x03\x03\x03\x03\x05\x03\x1C\n\x03\x03\x03\x03\x03\x05\x03" +
		" \n\x03\x07\x03\"\n\x03\f\x03\x0E\x03%\v\x03\x03\x03\x03\x03\x05\x03)" +
		"\n\x03\x03\x03\x05\x03,\n\x03\x03\x04\x03\x04\x05\x040\n\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x047\n\x04\x03\x04\x03\x04\x05\x04;\n" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05B\n\x05\x05\x05D\n" +
		"\x05\x03\x06\x03\x06\x05\x06H\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07N\n\x07\x03\b\x05\bQ\n\b\x03\b\x03\b\x03\b\x07\bV\n\b\f\b\x0E\bY\v" +
		"\b\x03\t\x03\t\x03\t\x03\t\x07\t_\n\t\f\t\x0E\tb\v\t\x03\t\x05\te\n\t" +
		"\x03\t\x02\x02\x02\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x02\x03\x04\x02\x03\x03\f\f\x02o\x02\x12\x03\x02\x02\x02\x04" +
		"\x15\x03\x02\x02\x02\x06:\x03\x02\x02\x02\b<\x03\x02\x02\x02\nG\x03\x02" +
		"\x02\x02\fM\x03\x02\x02\x02\x0EP\x03\x02\x02\x02\x10d\x03\x02\x02\x02" +
		"\x12\x13\x05\x04\x03\x02\x13\x14\x07\x02\x02\x03\x14\x03\x03\x02\x02\x02" +
		"\x15\x17\x05\x06\x04\x02\x16\x18\x07\x0F\x02\x02\x17\x16\x03\x02\x02\x02" +
		"\x17\x18\x03\x02\x02\x02\x18#\x03\x02\x02\x02\x19\x1B\t\x02\x02\x02\x1A" +
		"\x1C\x07\x0F\x02\x02\x1B\x1A\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C" +
		"\x1D\x03\x02\x02\x02\x1D\x1F\x05\x06\x04\x02\x1E \x07\x0F\x02\x02\x1F" +
		"\x1E\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \"\x03\x02\x02\x02!\x19\x03" +
		"\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$+" +
		"\x03\x02\x02\x02%#\x03\x02\x02\x02&(\t\x02\x02\x02\')\x07\x0F\x02\x02" +
		"(\'\x03\x02\x02\x02()\x03\x02\x02\x02)*\x03\x02\x02\x02*,\x07\x04\x02" +
		"\x02+&\x03\x02\x02\x02+,\x03\x02\x02\x02,\x05\x03\x02\x02\x02-/\x05\b" +
		"\x05\x02.0\x07\x0F\x02\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02" +
		"\x02\x0212\x05\x0E\b\x022;\x03\x02\x02\x0234\x05\x0E\b\x0246\x07\f\x02" +
		"\x0257\x07\x0F\x02\x0265\x03\x02\x02\x0267\x03\x02\x02\x0278\x03\x02\x02" +
		"\x0289\x05\b\x05\x029;\x03\x02\x02\x02:-\x03\x02\x02\x02:3\x03\x02\x02" +
		"\x02;\x07\x03\x02\x02\x02<C\x05\n\x06\x02=>\x07\x0F\x02\x02>A\x05\n\x06" +
		"\x02?@\x07\x0F\x02\x02@B\x05\n\x06\x02A?\x03\x02\x02\x02AB\x03\x02\x02" +
		"\x02BD\x03\x02\x02\x02C=\x03\x02\x02\x02CD\x03\x02\x02\x02D\t\x03\x02" +
		"\x02\x02EH\x05\f\x07\x02FH\x07\b\x02\x02GE\x03\x02\x02\x02GF\x03\x02\x02" +
		"\x02H\v\x03\x02\x02\x02IN\x07\v\x02\x02JK\x07\v\x02\x02KL\x07\r\x02\x02" +
		"LN\x07\v\x02\x02MI\x03\x02\x02\x02MJ\x03\x02\x02\x02N\r\x03\x02\x02\x02" +
		"OQ\x05\x10\t\x02PO\x03\x02\x02\x02PQ\x03\x02\x02\x02QR\x03\x02\x02\x02" +
		"RW\x07\b\x02\x02ST\x07\x0F\x02\x02TV\x07\b\x02\x02US\x03\x02\x02\x02V" +
		"Y\x03\x02\x02\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02X\x0F\x03\x02\x02" +
		"\x02YW\x03\x02\x02\x02Z[\x07\x05\x02\x02[`\x07\x0F\x02\x02\\]\x07\x05" +
		"\x02\x02]_\x07\x0F\x02\x02^\\\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03" +
		"\x02\x02\x02`a\x03\x02\x02\x02ae\x03\x02\x02\x02b`\x03\x02\x02\x02ce\x07" +
		"\x06\x02\x02dZ\x03\x02\x02\x02dc\x03\x02\x02\x02e\x11\x03\x02\x02\x02" +
		"\x13\x17\x1B\x1F#(+/6:ACGMPW`d";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Authors.__ATN) {
			Authors.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Authors._serializedATN));
		}

		return Authors.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public allnames(): AllnamesContext {
		return this.getRuleContext(0, AllnamesContext);
	}
	public EOF(): TerminalNode { return this.getToken(Authors.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Authors.RULE_start; }
	// @Override
	public enterRule(listener: AuthorsListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: AuthorsListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AuthorsVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AllnamesContext extends ParserRuleContext {
	public fullname(): FullnameContext[];
	public fullname(i: number): FullnameContext;
	public fullname(i?: number): FullnameContext | FullnameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FullnameContext);
		} else {
			return this.getRuleContext(i, FullnameContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Authors.WS);
		} else {
			return this.getToken(Authors.WS, i);
		}
	}
	public ETAL(): TerminalNode | undefined { return this.tryGetToken(Authors.ETAL, 0); }
	public SEPERATOR(): TerminalNode[];
	public SEPERATOR(i: number): TerminalNode;
	public SEPERATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Authors.SEPERATOR);
		} else {
			return this.getToken(Authors.SEPERATOR, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Authors.COMMA);
		} else {
			return this.getToken(Authors.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Authors.RULE_allnames; }
	// @Override
	public enterRule(listener: AuthorsListener): void {
		if (listener.enterAllnames) {
			listener.enterAllnames(this);
		}
	}
	// @Override
	public exitRule(listener: AuthorsListener): void {
		if (listener.exitAllnames) {
			listener.exitAllnames(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AuthorsVisitor<Result>): Result {
		if (visitor.visitAllnames) {
			return visitor.visitAllnames(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FullnameContext extends ParserRuleContext {
	public prename(): PrenameContext | undefined {
		return this.tryGetRuleContext(0, PrenameContext);
	}
	public lastname(): LastnameContext | undefined {
		return this.tryGetRuleContext(0, LastnameContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(Authors.WS, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Authors.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Authors.RULE_fullname; }
	// @Override
	public enterRule(listener: AuthorsListener): void {
		if (listener.enterFullname) {
			listener.enterFullname(this);
		}
	}
	// @Override
	public exitRule(listener: AuthorsListener): void {
		if (listener.exitFullname) {
			listener.exitFullname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AuthorsVisitor<Result>): Result {
		if (visitor.visitFullname) {
			return visitor.visitFullname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrenameContext extends ParserRuleContext {
	public onename(): OnenameContext[];
	public onename(i: number): OnenameContext;
	public onename(i?: number): OnenameContext | OnenameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OnenameContext);
		} else {
			return this.getRuleContext(i, OnenameContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Authors.WS);
		} else {
			return this.getToken(Authors.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Authors.RULE_prename; }
	// @Override
	public enterRule(listener: AuthorsListener): void {
		if (listener.enterPrename) {
			listener.enterPrename(this);
		}
	}
	// @Override
	public exitRule(listener: AuthorsListener): void {
		if (listener.exitPrename) {
			listener.exitPrename(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AuthorsVisitor<Result>): Result {
		if (visitor.visitPrename) {
			return visitor.visitPrename(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnenameContext extends ParserRuleContext {
	public initials(): InitialsContext | undefined {
		return this.tryGetRuleContext(0, InitialsContext);
	}
	public WORD(): TerminalNode | undefined { return this.tryGetToken(Authors.WORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Authors.RULE_onename; }
	// @Override
	public enterRule(listener: AuthorsListener): void {
		if (listener.enterOnename) {
			listener.enterOnename(this);
		}
	}
	// @Override
	public exitRule(listener: AuthorsListener): void {
		if (listener.exitOnename) {
			listener.exitOnename(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AuthorsVisitor<Result>): Result {
		if (visitor.visitOnename) {
			return visitor.visitOnename(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitialsContext extends ParserRuleContext {
	public INITIAL(): TerminalNode[];
	public INITIAL(i: number): TerminalNode;
	public INITIAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Authors.INITIAL);
		} else {
			return this.getToken(Authors.INITIAL, i);
		}
	}
	public DASH(): TerminalNode | undefined { return this.tryGetToken(Authors.DASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Authors.RULE_initials; }
	// @Override
	public enterRule(listener: AuthorsListener): void {
		if (listener.enterInitials) {
			listener.enterInitials(this);
		}
	}
	// @Override
	public exitRule(listener: AuthorsListener): void {
		if (listener.exitInitials) {
			listener.exitInitials(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AuthorsVisitor<Result>): Result {
		if (visitor.visitInitials) {
			return visitor.visitInitials(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastnameContext extends ParserRuleContext {
	public WORD(): TerminalNode[];
	public WORD(i: number): TerminalNode;
	public WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Authors.WORD);
		} else {
			return this.getToken(Authors.WORD, i);
		}
	}
	public particles(): ParticlesContext | undefined {
		return this.tryGetRuleContext(0, ParticlesContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Authors.WS);
		} else {
			return this.getToken(Authors.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Authors.RULE_lastname; }
	// @Override
	public enterRule(listener: AuthorsListener): void {
		if (listener.enterLastname) {
			listener.enterLastname(this);
		}
	}
	// @Override
	public exitRule(listener: AuthorsListener): void {
		if (listener.exitLastname) {
			listener.exitLastname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AuthorsVisitor<Result>): Result {
		if (visitor.visitLastname) {
			return visitor.visitLastname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParticlesContext extends ParserRuleContext {
	public PARTICLE(): TerminalNode[];
	public PARTICLE(i: number): TerminalNode;
	public PARTICLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Authors.PARTICLE);
		} else {
			return this.getToken(Authors.PARTICLE, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Authors.WS);
		} else {
			return this.getToken(Authors.WS, i);
		}
	}
	public APOSTROPHE_PARTICLE(): TerminalNode | undefined { return this.tryGetToken(Authors.APOSTROPHE_PARTICLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Authors.RULE_particles; }
	// @Override
	public enterRule(listener: AuthorsListener): void {
		if (listener.enterParticles) {
			listener.enterParticles(this);
		}
	}
	// @Override
	public exitRule(listener: AuthorsListener): void {
		if (listener.exitParticles) {
			listener.exitParticles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AuthorsVisitor<Result>): Result {
		if (visitor.visitParticles) {
			return visitor.visitParticles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



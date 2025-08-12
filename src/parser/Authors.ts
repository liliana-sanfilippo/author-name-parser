// Generated from src/parser/Authors.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly PARTICLE = 1;
	public static readonly INITIAL = 2;
	public static readonly WORD = 3;
	public static readonly COMMA = 4;
	public static readonly DASH = 5;
	public static readonly DOT = 6;
	public static readonly WS = 7;
	public static readonly RULE_fullname = 0;
	public static readonly RULE_prename = 1;
	public static readonly RULE_onename = 2;
	public static readonly RULE_lastname = 3;
	public static readonly RULE_particles = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"fullname", "prename", "onename", "lastname", "particles",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "','", "'-'", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PARTICLE", "INITIAL", "WORD", "COMMA", "DASH", "DOT", "WS",
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
	public fullname(): FullnameContext {
		let _localctx: FullnameContext = new FullnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Authors.RULE_fullname);
		let _la: number;
		try {
			this.state = 23;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 10;
				this.lastname();
				this.state = 11;
				this.match(Authors.COMMA);
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Authors.WS) {
					{
					this.state = 12;
					this.match(Authors.WS);
					}
				}

				this.state = 15;
				this.prename();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 17;
				this.prename();
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Authors.WS) {
					{
					this.state = 18;
					this.match(Authors.WS);
					}
				}

				this.state = 21;
				this.lastname();
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
		this.enterRule(_localctx, 2, Authors.RULE_prename);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 25;
			this.onename();
			this.state = 32;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 26;
				_la = this._input.LA(1);
				if (!(_la === Authors.DASH || _la === Authors.WS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 27;
				this.onename();
				this.state = 30;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 28;
					_la = this._input.LA(1);
					if (!(_la === Authors.DASH || _la === Authors.WS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 29;
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
		this.enterRule(_localctx, 4, Authors.RULE_onename);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			_la = this._input.LA(1);
			if (!(_la === Authors.INITIAL || _la === Authors.WORD)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public lastname(): LastnameContext {
		let _localctx: LastnameContext = new LastnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Authors.RULE_lastname);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 36;
				this.particles();
				}
				break;
			}
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Authors.WORD) {
				{
				{
				this.state = 39;
				this.match(Authors.WORD);
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Authors.WS) {
					{
					this.state = 40;
					this.match(Authors.WS);
					}
				}

				this.state = 44;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 43;
					this.particles();
					}
					break;
				}
				}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
		this.enterRule(_localctx, 8, Authors.RULE_particles);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Authors.PARTICLE) {
				{
				{
				this.state = 51;
				this.match(Authors.PARTICLE);
				this.state = 52;
				this.match(Authors.WS);
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\t=\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02\x03" +
		"\x02\x03\x02\x05\x02\x10\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02" +
		"\x16\n\x02\x03\x02\x03\x02\x05\x02\x1A\n\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03!\n\x03\x05\x03#\n\x03\x03\x04\x03\x04\x03\x05\x05" +
		"\x05(\n\x05\x03\x05\x03\x05\x05\x05,\n\x05\x03\x05\x05\x05/\n\x05\x07" +
		"\x051\n\x05\f\x05\x0E\x054\v\x05\x03\x06\x03\x06\x07\x068\n\x06\f\x06" +
		"\x0E\x06;\v\x06\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\x02\x04\x04\x02\x07\x07\t\t\x03\x02\x04\x05\x02A\x02\x19\x03\x02" +
		"\x02\x02\x04\x1B\x03\x02\x02\x02\x06$\x03\x02\x02\x02\b\'\x03\x02\x02" +
		"\x02\n9\x03\x02\x02\x02\f\r\x05\b\x05\x02\r\x0F\x07\x06\x02\x02\x0E\x10" +
		"\x07\t\x02\x02\x0F\x0E\x03\x02\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x11" +
		"\x03\x02\x02\x02\x11\x12\x05\x04\x03\x02\x12\x1A\x03\x02\x02\x02\x13\x15" +
		"\x05\x04\x03\x02\x14\x16\x07\t\x02\x02\x15\x14\x03\x02\x02\x02\x15\x16" +
		"\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02\x17\x18\x05\b\x05\x02\x18\x1A" +
		"\x03\x02\x02\x02\x19\f\x03\x02\x02\x02\x19\x13\x03\x02\x02\x02\x1A\x03" +
		"\x03\x02\x02\x02\x1B\"\x05\x06\x04\x02\x1C\x1D\t\x02\x02\x02\x1D \x05" +
		"\x06\x04\x02\x1E\x1F\t\x02\x02\x02\x1F!\x05\x06\x04\x02 \x1E\x03\x02\x02" +
		"\x02 !\x03\x02\x02\x02!#\x03\x02\x02\x02\"\x1C\x03\x02\x02\x02\"#\x03" +
		"\x02\x02\x02#\x05\x03\x02\x02\x02$%\t\x03\x02\x02%\x07\x03\x02\x02\x02" +
		"&(\x05\n\x06\x02\'&\x03\x02\x02\x02\'(\x03\x02\x02\x02(2\x03\x02\x02\x02" +
		")+\x07\x05\x02\x02*,\x07\t\x02\x02+*\x03\x02\x02\x02+,\x03\x02\x02\x02" +
		",.\x03\x02\x02\x02-/\x05\n\x06\x02.-\x03\x02\x02\x02./\x03\x02\x02\x02" +
		"/1\x03\x02\x02\x020)\x03\x02\x02\x0214\x03\x02\x02\x0220\x03\x02\x02\x02" +
		"23\x03\x02\x02\x023\t\x03\x02\x02\x0242\x03\x02\x02\x0256\x07\x03\x02" +
		"\x0268\x07\t\x02\x0275\x03\x02\x02\x028;\x03\x02\x02\x0297\x03\x02\x02" +
		"\x029:\x03\x02\x02\x02:\v\x03\x02\x02\x02;9\x03\x02\x02\x02\f\x0F\x15" +
		"\x19 \"\'+.29";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Authors.__ATN) {
			Authors.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Authors._serializedATN));
		}

		return Authors.__ATN;
	}

}

export class FullnameContext extends ParserRuleContext {
	public lastname(): LastnameContext | undefined {
		return this.tryGetRuleContext(0, LastnameContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Authors.COMMA, 0); }
	public prename(): PrenameContext | undefined {
		return this.tryGetRuleContext(0, PrenameContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(Authors.WS, 0); }
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
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Authors.DASH);
		} else {
			return this.getToken(Authors.DASH, i);
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
	public INITIAL(): TerminalNode | undefined { return this.tryGetToken(Authors.INITIAL, 0); }
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


export class LastnameContext extends ParserRuleContext {
	public particles(): ParticlesContext[];
	public particles(i: number): ParticlesContext;
	public particles(i?: number): ParticlesContext | ParticlesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParticlesContext);
		} else {
			return this.getRuleContext(i, ParticlesContext);
		}
	}
	public WORD(): TerminalNode[];
	public WORD(i: number): TerminalNode;
	public WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Authors.WORD);
		} else {
			return this.getToken(Authors.WORD, i);
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



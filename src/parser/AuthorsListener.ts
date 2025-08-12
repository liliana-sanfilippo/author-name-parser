// Generated from src/parser/Authors.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FullnameContext } from "./Authors";
import { PrenameContext } from "./Authors";
import { OnenameContext } from "./Authors";
import { LastnameContext } from "./Authors";
import { ParticlesContext } from "./Authors";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `Authors`.
 */
export interface AuthorsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `Authors.fullname`.
	 * @param ctx the parse tree
	 */
	enterFullname?: (ctx: FullnameContext) => void;
	/**
	 * Exit a parse tree produced by `Authors.fullname`.
	 * @param ctx the parse tree
	 */
	exitFullname?: (ctx: FullnameContext) => void;

	/**
	 * Enter a parse tree produced by `Authors.prename`.
	 * @param ctx the parse tree
	 */
	enterPrename?: (ctx: PrenameContext) => void;
	/**
	 * Exit a parse tree produced by `Authors.prename`.
	 * @param ctx the parse tree
	 */
	exitPrename?: (ctx: PrenameContext) => void;

	/**
	 * Enter a parse tree produced by `Authors.onename`.
	 * @param ctx the parse tree
	 */
	enterOnename?: (ctx: OnenameContext) => void;
	/**
	 * Exit a parse tree produced by `Authors.onename`.
	 * @param ctx the parse tree
	 */
	exitOnename?: (ctx: OnenameContext) => void;

	/**
	 * Enter a parse tree produced by `Authors.lastname`.
	 * @param ctx the parse tree
	 */
	enterLastname?: (ctx: LastnameContext) => void;
	/**
	 * Exit a parse tree produced by `Authors.lastname`.
	 * @param ctx the parse tree
	 */
	exitLastname?: (ctx: LastnameContext) => void;

	/**
	 * Enter a parse tree produced by `Authors.particles`.
	 * @param ctx the parse tree
	 */
	enterParticles?: (ctx: ParticlesContext) => void;
	/**
	 * Exit a parse tree produced by `Authors.particles`.
	 * @param ctx the parse tree
	 */
	exitParticles?: (ctx: ParticlesContext) => void;
}


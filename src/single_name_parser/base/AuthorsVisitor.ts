// Generated from src/parser/Authors.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FullnameContext } from "./Authors";
import { PrenameContext } from "./Authors";
import { OnenameContext } from "./Authors";
import { InitialsContext } from "./Authors";
import { LastnameContext } from "./Authors";
import { ParticlesContext } from "./Authors";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Authors`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AuthorsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `Authors.fullname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullname?: (ctx: FullnameContext) => Result;

	/**
	 * Visit a parse tree produced by `Authors.prename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrename?: (ctx: PrenameContext) => Result;

	/**
	 * Visit a parse tree produced by `Authors.onename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnename?: (ctx: OnenameContext) => Result;

	/**
	 * Visit a parse tree produced by `Authors.initials`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitials?: (ctx: InitialsContext) => Result;

	/**
	 * Visit a parse tree produced by `Authors.lastname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLastname?: (ctx: LastnameContext) => Result;

	/**
	 * Visit a parse tree produced by `Authors.particles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParticles?: (ctx: ParticlesContext) => Result;
}


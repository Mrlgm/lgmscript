// Generated from ./production/lgmscript/LgmScript.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by LgmScriptParser.

export default class LgmScriptVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by LgmScriptParser#program.
	visitProgram(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LgmScriptParser#intDeclare.
	visitIntDeclare(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LgmScriptParser#additive.
	visitAdditive(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LgmScriptParser#multiplicative.
	visitMultiplicative(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LgmScriptParser#primary.
	visitPrimary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LgmScriptParser#expressionStatement.
	visitExpressionStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LgmScriptParser#assignmentStatement.
	visitAssignmentStatement(ctx) {
	  return this.visitChildren(ctx);
	}



}
grammar LgmScript;

// import CommonLexer;

@parser::members {
LgmScriptParser.prototype.start = function() {
    console.log("Started...")
}
} // members

/*
 [The "BSD licence"] 版权说明
 本文件的大部分内容来自：https://github.com/antlr/grammars-v4/blob/master/java/JavaParser.g4 在此基础上进行了一些修改。
 修改者：宫文学 2019年 原文件采用BSD licence，本文件仍然采用BSD licence. 原文件的版权声明如下：
 */

/*
 [The "BSD licence"] Copyright (c) 2013 Terence Parr, Sam Harwell Copyright (c) 2017 Ivan Kochurkin
 (upgrade to Java 8) All rights reserved. Redistribution and use in source and binary forms, with or
 without modification, are permitted provided that the following conditions are met: 1.
 Redistributions of source code must retain the above copyright notice, this list of conditions and
 the following disclaimer. 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the documentation and/or other
 materials provided with the distribution. 3. The name of the author may not be used to endorse or
 promote products derived from this software without specific prior written permission. THIS
 SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT
 NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
 OF SUCH DAMAGE.
 */

//关键字
If: 'if' | '如果'; //可以在程序里用‘如果’来代替'if'
Else: 'else';
Int: 'int';

//常量
IntLiteral: [0-9]+;
StringLiteral: '"' .*? '"'; //字符串常量

//操作符
AssignmentOP: '=';
RelationalOP: '==' | '>' | '>=' | '<' | '<=';
ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';
Sharp: '#';
SemiColon: ';';
Dot: '.';
Comm: ',';
LeftBracket: '[';
RightBracket: ']';
LeftBrace: '{';
RightBrace: '}';
LeftParen: '(';
RightParen: ')';

//标识符
Id: [a-zA-Z_] ([a-zA-Z_] | [0-9])*;

//空白字符，抛弃
Whitespace: [ \t]+ -> skip;
Newline: ( '\r' '\n'? | '\n') -> skip;

program: (
		intDeclare
		| expressionStatement
		| assignmentStatement
		| ifStatement
	)*;

intDeclare: Int Id (AssignmentOP additive)? SemiColon;

additive:
	multiplicative
	| additive bop = ( ADD | SUB) multiplicative;

multiplicative:
	primary
	| multiplicative bop = ( MUL | DIV) primary;

primary: IntLiteral | Id;

expressionStatement: expression? SemiColon;

expression: additive;

assignmentStatement: Id AssignmentOP additive SemiColon;

ifStatement: If '(' expression ')' expression (Else expression)?;
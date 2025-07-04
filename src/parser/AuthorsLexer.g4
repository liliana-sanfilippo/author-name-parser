lexer grammar AuthorsLexer;
INITIAL
    :  LETTER '.'?
    ;
WORD    : LETTER LETTER+ ('-' LETTER+)* ;
COMMA   : ',' ;
DASH : '-';
DOT     : '.' ;
WS      : [ \t\r\n]+ ;
fragment LETTER : [a-zA-Z] ;

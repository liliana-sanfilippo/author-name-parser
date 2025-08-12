lexer grammar AuthorsLexer;

PARTICLE: 'van' | 'von' | 'de' | 'dos' | 'da' | 'das' | 'du' | 'dit' | 'la' | 'der' | 'zu';

INITIAL
    :  LETTER '.'?
    ;
WORD    : LETTER LETTER+ ('-' LETTER+)* ;
COMMA   : ',' ;
DASH : '-';
DOT     : '.' ;
WS      : [ \t\r\n]+ ;
fragment LETTER : [a-zA-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ] ;

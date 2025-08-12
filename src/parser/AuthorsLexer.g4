lexer grammar AuthorsLexer;

PARTICLE: 'van' | 'von' | 'de' | 'dos' | 'da' | 'das' | 'du' | 'dit' | 'la' | 'der' | 'zu';

WORD    : LETTER LETTER+ ('-' LETTER+)* | 'e' | 'y' | 'and' | 'und' | 'of' ;

INITIAL
    :  LETTER '.'?
    ;

COMMA   : ',' ;
DASH : '-';
DOT     : '.' ;
WS      : [ \t\r\n]+ ;
fragment LETTER : [a-zA-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ] ;

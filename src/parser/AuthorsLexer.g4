lexer grammar AuthorsLexer;

PARTICLE: 'van' | 'von' | 'de' | 'dos' | 'da' | 'das' | 'du' | 'dit' | 'la' | 'der' | 'zu' | 'al'
                                                                                                 | 'el'
                                                                                                 | 'ibn'
                                                                                                 | 'bin'
                                                                                                 | 'bint'
                                                                                                 | 'abu'
                                                                                                 | 'abu al'
                                                                                                 | 'abul'
                                                                                                 ;

APOSTROPHE_PARTICLE
    : ('M’' | 'O’' | 'D’' | 'L’' | 'N’' | 'S’' | 'T’' | 'K’' | 'G’')
    ;


WORD    : LETTER LETTER+ ('-' LETTER+)* | 'e' | 'y' | 'and' | 'und' | 'of';

FIRSTNAMEPREFIX: 'Abu' | 'Umm' | 'Ibn' | 'Bin' | 'Bint' ;

LASTNAMEPREFIXE: 'al-'| 'el-'| 'ash-'| 'ad-'| 'as-'| 'az-'; 

INITIAL
    :  LETTER '.'?
    ;


COMMA   : ',' ;
DASH : '-';
DOT     : '.' ;
WS      : [ \t\r\n]+ ;
fragment LETTER : [\p{L}] ;

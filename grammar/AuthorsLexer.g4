lexer grammar AuthorsLexer;

SEPERATOR: ';' | '&' | 'and' | ', and' | ',and';
ETAL: 'et al.';

PARTICLE:
    'af'
    | 'al'
    | 'av'
    | 'aw'
    | 'd' APOSTROPHE
    | 'da'
    | 'das'
    | 'de'
    | 'de' APOSTROPHE
    | 'dei'
    | 'del'
    | 'de la'
    | 'der'
    | 'des'
    | 'di'
    | 'dit'
    | 'do'
    | 'dos'
    | 'du'
    | 'el'
    | 'és'
    | 'es'
    | 'la'
    | 'na'
    | 'til'
    | 'thoe'
    | 'tot'
    | 'van'
    | 'von'
    | 'von dem'
    | 'von der'
    | 'zu'
    | 'zum'
    | 'zur'


                                                                                                 | 'ibn'
                                                                                                 | 'bin'
                                                                                                 | 'bint'
                                                                                                 | 'abu'
                                                                                                 | 'abu al'
                                                                                                 | 'abul'
                                                                                                 ;

APOSTROPHE_PARTICLE
    : ('M' APOSTROPHE | 'O' APOSTROPHE | 'D' APOSTROPHE | 'L' APOSTROPHE | 'N' APOSTROPHE | 'S' APOSTROPHE | 'T' APOSTROPHE | 'K' APOSTROPHE | 'G' APOSTROPHE)
    ;

APOSTROPHE: [\u2019\u0027];

WORD    : LETTER LETTER+ (DASH LETTER+)* | 'e' | 'y' | 'und' | 'of' | LETTER LETTER+ APOSTROPHE? LETTER+;

FIRSTNAMEPREFIX: 'Abu' | 'Umm' | 'Ibn' | 'Bin' | 'Bint' ;

LASTNAMEPREFIXE: 'al' DASH| 'el' DASH| 'ash' DASH| 'ad' DASH| 'as' DASH| 'az' DASH; 

INITIAL
    :  LETTER '.'?
    ;
COMMA   : ',' ;
DASH : [\u002D\u2010\u2011\u2012\u2013\u2014\u2015\uFE58\uFE63\uFF0D];
DOT     : '.' ;
WS      : [ \t\r\n]+ ;

fragment LETTER : [\p{L}] ;

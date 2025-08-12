parser grammar Authors;


options { tokenVocab=AuthorsLexer; }
start : allnames EOF ;

allnames: fullname WS?  ((SEPERATOR|COMMA) WS? fullname WS?)* ((SEPERATOR|COMMA) WS? ETAL)?  ;

fullname
    : (prename  WS? lastname ) | (lastname COMMA WS?  prename)
    ;

prename: (onename((WS)onename((WS)onename)?)?);

onename: (initials|WORD);

initials: INITIAL | INITIAL DASH INITIAL;

lastname: particles? WORD (WS WORD)*;

particles: PARTICLE WS (PARTICLE WS)* | APOSTROPHE_PARTICLE;

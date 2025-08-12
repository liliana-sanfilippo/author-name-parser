parser grammar Authors;


options { tokenVocab=AuthorsLexer; }

fullname
    : (prename  WS? lastname ) | (lastname COMMA WS?  prename)
    ;

prename: (onename((WS)onename((WS)onename)?)?);

onename: (initials|WORD);

initials: INITIAL | INITIAL DASH INITIAL;

lastname: particles? WORD (WS WORD)*;

particles: PARTICLE WS (PARTICLE WS)*;

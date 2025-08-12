parser grammar Authors;


options { tokenVocab=AuthorsLexer; }

fullname
    : (lastname COMMA WS?  prename)
    | (prename  WS? lastname )
    ;

prename: (onename((DASH|WS)onename((DASH|WS)onename)?)?);

onename: (INITIAL|WORD);

lastname: particles? (WORD WS? particles?)*;

particles: (PARTICLE WS)*;



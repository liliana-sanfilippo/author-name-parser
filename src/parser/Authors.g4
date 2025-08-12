parser grammar Authors;


options { tokenVocab=AuthorsLexer; }

fullname
    : (lastname COMMA WS?  prename)
    | (prename  WS? lastname )
    ;

prename: (onename((WS)onename((WS)onename)?)?);

onename: (initials|WORD);

initials: INITIAL | INITIAL DASH INITIAL;

lastname: particles? WORD  (WS (particles | WORD))*;

particles: PARTICLE (WS PARTICLE)*;



# Bibtex Author parser

![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

Name parser for parsing author lists of bibtex references to allow for consistent styl. Includes the ANTLRts grammar. 

Planning can be seen in the [Wiki](https://github.com/liliana-sanfilippo/author-name-parser/wiki). The wiki also contains a [troubleshooting guide](https://github.com/liliana-sanfilippo/author-name-parser/wiki/Troubleshooting) that will be expanded as errors and problems occur. 

Plan: to develop it into a full webpack parser.

## Features

### Grammar

- [x] Both formats `last, first` and `first last`
- [X] Written-out names `Liliana` as well as initials with and without dot `L` / `L.` and names and initials connected with dashes 
- [X] Up to three first names
- [X] Regocnition of names with letter-apostroph beginning as last names e.g. `O'hara`
- [X] Selection of (nobility) particles e.g. `van` / `das`
- [X] Multiple unicode dashes and apostrophes and special unicode characters
- [X] Recognition of selection of arabian first name particles e.g. `ibn`
- [X] Works with multiple list seperators `,` / `;` / `and` ...

### Webpack and TypeScript component 

- [x] Browser support
- [x] NPM support
- [x] Typing support for TypeScript projects
- [x] Exportable Entry Type  for TypeScript projects
- [x] Includes inofficial type dataset

### Further info

- NOT case sensitive!

## Quickstart

### NPM / YARN

TODO - Package not released yet 

### In-Browser Use

TODO - Package not released yet 

## Build

Environment: TODO 

### For Dev

TODO 

### For Production

TODO 

## USAGE 

TODO 

## Related Projects

- [react-bibtex-source-generator](https://github.com/liliana-sanfilippo/react-bibtex-source-generator)
- [bibtex-ts-parser](https://github.com/liliana-sanfilippo/bibtex-ts-parser)

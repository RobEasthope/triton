import { SPACING } from '@/UI/constants/SPACING';
import { styled } from '@/UI/styles/stitches.config';

export const Prose = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginX: 'auto',

  '> div > *:not(figure):not(section)': {
    position: 'relative',
    maxWidth: '$prose',
    marginX: 'auto',
  },

  // Zero vertical margins
  '& *:first-child, ': {
    marginTop: 0,
  },

  '& *:last-child, ': {
    marginBottom: 0,
  },

  // Links
  '& a': {
    color: 'inherit',
  },

  '> strong': {
    fontWeight: 500,
  },

  '& p': {
    lineHeight: `$x1`,
    marginTop: `$x1`,
    marginBottom: `$x1`,
  },

  '& [class~="lead"]': {
    marginTop: `calc(${SPACING.VR_BASE} * 1.5)`,
    marginBottom: `calc(${SPACING.VR_BASE} * 1.5)`,
  },

  // Quotes
  '& blockquote': {
    fontStyle: 'italic',
    marginTop: '$x1',
    marginBottom: '$x1',
    marginLeft: 'calc(2em - (0.5em - 2px))',
    marginRight: '2em',
    paddingLeft: '0.5em',
    borderLeft: '2px solid currentColor',
  },

  // Headings
  '& h2': {
    marginTop: '$x3',
    marginBottom: 'calc($x1 + $half)',
  },

  '& h3': {
    marginTop: '$x2',
    marginBottom: '$x1',
  },

  '& h4': {
    marginTop: '$x1',
    marginBottom: '$x1',
  },

  '& h2 + *': {
    marginTop: '0',
  },

  '& h3 + *': {
    marginTop: '0',
  },

  '& h4 + *': {
    marginTop: '0',
  },

  // Code
  code: {
    color: 'white',
    fontSize: '0.75em',
    backgroundColor: '$blue10',
    padding: '.125em 0.25em',
    borderRadius: '4px',
  },

  pre: {
    fontSize: '0.75em',
    lineHeight: 1.5,
    marginTop: '1.5em',
    marginBottom: '1.5em',
    borderRadius: '8px',
    paddingTop: '0.75em',
    paddingRight: '0.75em',
    paddingBottom: '0.75em',
    paddingLeft: '0.75em',
  },

  // Lists
  '& ol': {
    marginTop: '$x1',
    marginBottom: '$x1',
    paddingLeft: '1em',
  },

  '& ol > li': {
    paddingLeft: '0.25em',
  },

  '& ul': {
    marginTop: '$x1',
    marginBottom: '$x1',
    paddingLeft: '1em',
  },

  '& li': {
    marginTop: '0.5em',
    marginBottom: '0.5em',
  },

  '& ul > li': {
    paddingLeft: '0.25em',
  },

  '> ul > li p': {
    marginTop: '0.5em',
    marginBottom: '0.5em',
  },

  '> ul > li > *:first-child': {
    marginTop: '1em',
  },

  '> ul > li > *:last-child': {
    marginBottom: '1em',
  },

  '> ol > li > *:first-child': {
    marginTop: '1em',
  },

  '> ol > li > *:last-child': {
    marginBottom: '1em',
  },

  '& ul ul, ul ol, ol ul, ol ol': {
    marginTop: '0.5em',
    marginBottom: '0.5em',
  },

  // Page breaks
  '& hr': {
    marginTop: '2em',
    marginBottom: '2em',
  },

  '& hr + *': {
    marginTop: '0',
  },

  // Tables
  '& table': {
    fontSize: '0.75em',
    lineHeight: 1.5,
  },

  '& thead th': {
    paddingRight: '0.75em',
    paddingBottom: '0.75em',
    paddingLeft: '0.75em',
  },

  '& thead th:first-child': {
    paddingLeft: '0',
  },

  '& thead th:last-child': {
    paddingRight: '0',
  },

  '& tbody td': {
    paddingTop: '0.75em',
    paddingRight: '0.75em',
    paddingBottom: '0.75em',
    paddingLeft: '0.75em',
  },

  '& tbody td:first-child': {
    paddingLeft: '0',
  },

  '& tbody td:last-child': {
    paddingRight: '0',
  },
});

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Code,
  CodePane,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#1F2022',
    secondary: '#CECECE',
    tertiary: '#03A9FC',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
    <Slide transition={['zoom']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        Objectif
      </Heading>
      <List>
        <ListItem>
          Apprendre à encoder de manière sure et simple tout problème
          assimilable à une machine à états
        </ListItem>
        <ListItem>Découvrir les ADT</ListItem>
        <ListItem>
          Avec Rust, Ocaml, ReasonML, java ... de manière adaptable à la plupart
          des langages statiquement bien typés (F#, Scala, Haskell, PureScript,
          Swift, Elm, ...)
        </ListItem>
        <ListItem>Have fun !</ListItem>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        Ce n’est pas
      </Heading>
      <List>
        <ListItem>
          Un cours de programmation fonctionnelle … en réalité c’est en lien
          avec la théorie des catégories
        </ListItem>
        <ListItem>
          Un cours idiomatique / bonnes pratiques pour un langage particulier
        </ListItem>
        <ListItem>Élitiste : posez des questions !!!</ListItem>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        TYPES PRODUITS
      </Heading>
      <List>
        <ListItem>Équivalent des produits cartésiens « A x B »</ListItem>
        <ListItem>Formellement la conjonction de plusieurs types</ListItem>
        <table width="100%">
          <tr>
            <td width="50%">
              {' '}
              <CodePane lang="ocaml" source="type point2d = (int * int)" />{' '}
              <CodePane
                lang="ocaml"
                source="type point3d = (int * int * int)"
              />
            </td>
            <td width="50%">
              {' '}
              <CodePane
                lang="java"
                source="data class Point2d (val x: Int, val y: Int)
                "
              />{' '}
              <CodePane
                lang="java"
                source="data class Point3d (val x: Int, 
                  val y: Int, 
                  val z: Int)"
              />
            </td>
          </tr>
        </table>
        <ListItem>Ou de manière générique</ListItem>
        <table width="100%">
          <tr>
            <td width="50%">
              {' '}
              <CodePane
                lang="ocaml"
                source="type  ('a, 'b) couple = ('a * 'b) "
              />{' '}
              <CodePane
                lang="ocaml"
                source="type ('a, 'b, 'c) triplet = ('a * 'b * 'c)"
              />
            </td>
            <td width="50%">
              {' '}
              <CodePane
                lang="java"
                source="data class Couple<A, B>(val a : A, val b : B)"
              />{' '}
              <CodePane
                lang="java"
                source="data class Triplet<A, B, C>(val a : A, val b : B, val c : C)"
              />
            </td>
          </tr>
        </table>
      </List>
    </Slide>
  </Deck>
);

export default Presentation;

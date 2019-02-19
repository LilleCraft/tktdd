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
  Link,
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

const row = {};
row['flexDirection'] = 'column';
row['justifyContent'] = 'space-around';

const column = {
  float: 'left',
  width: '50%',
  padding: '10px',
};

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        Présentation
      </Heading>
      <Text textColor="secondary">Thomas Haesslé</Text>
      <Text textColor="secondary">
        CTO @ <Link href="https://www.cutii.io">Cutii</Link>{' '}
      </Text>
      <Text textColor="secondary">Teacher @ Miage Lille </Text>
      <Text textColor="secondary">
        Coder : Javascript, Rust, OCaml, ReasonML (, Kotlin){' '}
      </Text>
      <Text textColor="secondary">
        J'aime les types, la programmation fonctionnelle, le craft et la bière{' '}
      </Text>

      <Text textColor="secondary">@Oteku sur Twitter </Text>
    </Slide>
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
          Avec Rust, Ocaml, ReasonML, Kotlin ... de manière adaptable à la
          plupart des langages statiquement bien typés (F#, Scala, Haskell,
          PureScript, Swift, Elm, ...)
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
        TYPES PRODUIT
      </Heading>
      <List>
        <ListItem>Équivalent des produits cartésiens « A x B »</ListItem>
        <ListItem>Formellement la conjonction de plusieurs types</ListItem>
        <div width="100%" style={row}>
          <div width="50%" style={column}>
            {' '}
            <CodePane lang="ocaml" source="type point2d = (int * int)" />{' '}
            <CodePane lang="ocaml" source="type point3d = (int * int * int)" />
          </div>
          <div width="50%" style={column}>
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
          </div>
        </div>
        <ListItem>Ou de manière générique</ListItem>
        <div width="100%" style={row}>
          <div width="50%" style={column}>
            {' '}
            <CodePane
              lang="ocaml"
              source="type  ('a, 'b) couple = ('a * 'b) "
            />{' '}
            <CodePane
              lang="ocaml"
              source="type ('a, 'b, 'c) triplet = ('a * 'b * 'c)"
            />
          </div>
          <div width="50%" style={column}>
            {' '}
            <CodePane
              lang="java"
              source="data class Couple<A, B>(val a : A, val b : B)"
            />{' '}
            <CodePane
              lang="java"
              source="data class Triplet<A, B, C>(val a : A, val b : B, val c : C)"
            />
          </div>
        </div>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        TYPES SOMME
      </Heading>
      <List>
        <ListItem>Miment les unions discriminés</ListItem>
        <ListItem>Disjonction de plusieurs types</ListItem>
        <div width="100%" style={row}>
          <CodePane lang="ocaml" source={require('./union-ocaml.exemple')} />
        </div>
        <ListItem>Ou avec des paramètres de constructeurs</ListItem>
        <div width="100%" style={row}>
          <CodePane
            lang="ocaml"
            source={require('./union-param-ocaml.exemple')}
          />
        </div>{' '}
        <ListItem>Ou avec des paramètres de type</ListItem>
        <div width="100%" style={row}>
          <CodePane
            lang="ocaml"
            source={require('./union-type-param-ocaml.exemple')}
          />
        </div>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        TYPES SOMME
      </Heading>
      <List>
        <ListItem>
          Représentable dans un langage objet par la conjonction de classes et
          d’héritage
        </ListItem>
        <div width="100%" style={row}>
          <CodePane lang="java" source={require('./union-kotlin.exemple')} />
        </div>
        <ListItem>Ou pour l’exemple 'a option :</ListItem>
        <div width="100%" style={row}>
          <CodePane
            lang="java"
            source={require('./union-type-param-kotlin.exemple')}
          />
        </div>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        Algebraic Data Types
      </Heading>
      <List>
        <ListItem>Algebraic Data Types ou types algébriques "simple"</ListItem>
        <ListItem>Sum Type & Product Type => ADT</ListItem>
        <ListItem>
          ADT permet de rendre les valeurs impossible fonctionnellement
          inaccessibles
        </ListItem>
        <ListItem>
          Dans un système de types algébriques pas de Null, NullPtr, undefined.
          L’absence de valeur est représentée par le type <Code>'a option</Code>
        </ListItem>
        <ListItem>
          ADT & Pattern matching => implémentation rapide et sûre des
          transitions
        </ListItem>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        Correspondance par motifs
      </Heading>
      <List>
        <ListItem>Par exemple pour notre type couple</ListItem>
        <div width="100%" style={row}>
          <CodePane
            lang="java"
            source={require('./pattern-matching-ocaml.exemple')}
          />
        </div>
        <ListItem>Ou pour un langage objet quand on n’en dispose pas</ListItem>
        <div width="100%" style={row}>
          <CodePane
            lang="java"
            source={require('./pattern-matching-kotlin.exemple')}
          />
        </div>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        Correspondance par motifs
      </Heading>
      <List>
        <ListItem>Dans le cas d'un type somme</ListItem>
        <div width="100%" style={row}>
          <CodePane
            lang="java"
            source={require('./pattern-matching-union-ocaml.exemple')}
          />
        </div>
        <ListItem>Ou pour un langage objet quand on n’en dispose pas</ListItem>
        <div width="100%" style={row}>
          <CodePane
            lang="java"
            source={require('./pattern-matching-union-kotlin.exemple')}
          />
        </div>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        Correspondance par motifs
      </Heading>
      <List>
        <ListItem>
          Ou pour un langage objet quand on n’en dispose pas mais qui a la bonne
          idée de simuler un ADT
        </ListItem>
        <div width="100%" style={row}>
          <CodePane
            lang="java"
            source={require('./pattern-matching-union-kotlin2.exemple')}
          />
        </div>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        Not only TDD
      </Heading>
      <Heading size={3} fit caps lineHeight={1} textColor="tertiary">
        Test Driven Design then Test Driven Development
      </Heading>
      <List ordered={true}>
        <ListItem>Encoder le problème dans votre système de type</ListItem>
        <ListItem>
          Écrire les test unitaires comme des spécifications des transitions{' '}
        </ListItem>
        <ListItem>Coder les transitions </ListItem>
        <ListItem>Tester</ListItem>
        <ListItem>Itérer</ListItem>
      </List>
    </Slide>
  </Deck>
);

export default Presentation;

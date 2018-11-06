module Main where

import Control.Applicative (pure)
import Control.Apply ((<*>))
import Data.Array (reverse)
import Data.Either (Either(..))
import Data.Function (($))
import Data.Functor ((<$>))
import Data.Maybe (Maybe(..))
import Data.Semigroup ((<>))
import Data.Unit (Unit, unit)
import Effect (Effect)
import Effect.Console (logShow)
import Node.Yargs.Applicative (flag, yarg, runY)
import Node.Yargs.Setup (example, usage)

app :: Array String -> Boolean -> Effect Unit
app [] _     = pure unit
app ss false = logShow ss
app ss true  = logShow (reverse ss)

main :: Effect Unit
main = do
  let setup = usage "$0 -w Word1 -w Word2"
              <> example "$0 -w Hello -w World" "Say hello!"

  runY setup $ app <$> yarg "w" ["word"] (Just "A word") (Right "At least one word is required") false <*> flag "r" [] (Just "Reverse the words")

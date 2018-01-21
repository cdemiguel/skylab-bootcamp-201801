describe('Hangman', function () {
    var game;

    beforeEach(function() {
        game = new Hangman('hello', 10);
    });

    function hangmantoBesWellDoneWhenAssertingWordOnThe7thAttempt() {
   

        expect(game.try('a')).toBe('9 _ _ _ _ _');
        expect(game.try('b')).toBe('8 _ _ _ _ _');
        expect(game.try('c')).toBe('7 _ _ _ _ _');
        expect(game.try('d')).toBe('6 _ _ _ _ _');
        expect(game.try('e')).toBe('6 _ E _ _ _');
        expect(game.try('l')).toBe('6 _ E L L _');
        expect(game.try('hello')).toBe('You have guessed the word, well done!');
    }
    
    it(hangmantoBesWellDoneWhenAssertingWordOnThe7thAttempt.name,hangmantoBesWellDoneWhenAssertingWordOnThe7thAttempt);
    
    function hangmantoBesSorryWhenFailingAssertionOfWordOnThe7thAttempt() {
       
    
        expect(game.try('a')).toBe('9 _ _ _ _ _');
        expect(game.try('b')).toBe('8 _ _ _ _ _');
        expect(game.try('c')).toBe('7 _ _ _ _ _');
        expect(game.try('d')).toBe('6 _ _ _ _ _');
        expect(game.try('e')).toBe('6 _ E _ _ _');
        expect(game.try('l')).toBe('6 _ E L L _');
        expect(game.try('bello')).toBe('Sorry, you have not guessed... the correct word is HELLO.');
    }
    
    it(hangmantoBesSorryWhenFailingAssertionOfWordOnThe7thAttempt.name,hangmantoBesSorryWhenFailingAssertionOfWordOnThe7thAttempt);
    
    function hangmantoBesGameOverWhenTryingToPlayAfterGameEndedWithWellDone() {
       
    
        expect(game.try('a')).toBe('9 _ _ _ _ _');
        expect(game.try('b')).toBe('8 _ _ _ _ _');
        expect(game.try('c')).toBe('7 _ _ _ _ _');
        expect(game.try('d')).toBe('6 _ _ _ _ _');
        expect(game.try('e')).toBe('6 _ E _ _ _');
        expect(game.try('l')).toBe('6 _ E L L _');
        expect(game.try('hello')).toBe('You have guessed the word, well done!');
        expect(game.try('bello')).toBe('GAME OVER.');
    }
    
    it(hangmantoBesGameOverWhenTryingToPlayAfterGameEndedWithWellDone.name,hangmantoBesGameOverWhenTryingToPlayAfterGameEndedWithWellDone);
    
    

    function hangmantoBesGameOverWhenTryingToPlayAfterGameEndedWithSorry() {
       
    
        expect(game.try('a')).toBe('9 _ _ _ _ _');
        expect(game.try('b')).toBe('8 _ _ _ _ _');
        expect(game.try('c')).toBe('7 _ _ _ _ _');
        expect(game.try('d')).toBe('6 _ _ _ _ _');
        expect(game.try('e')).toBe('6 _ E _ _ _');
        expect(game.try('l')).toBe('6 _ E L L _');
        expect(game.try('bello')).toBe('Sorry, you have not guessed... the correct word is HELLO.');
        expect(game.try('hello')).toBe('GAME OVER.');
    }
    
    it(hangmantoBesGameOverWhenTryingToPlayAfterGameEndedWithSorry.name,hangmantoBesGameOverWhenTryingToPlayAfterGameEndedWithSorry);
    
    function hangmantoBesInErrorWhenTryingToInputANonStringValue() {
       
    
        expect(game.try('a')).toBe('9 _ _ _ _ _');
        expect(game.try('b')).toBe('8 _ _ _ _ _');
        expect(game.try('c')).toBe('7 _ _ _ _ _');
        expect(game.try('d')).toBe('6 _ _ _ _ _');
        expect(game.try('e')).toBe('6 _ E _ _ _');
        expect(game.try('l')).toBe('6 _ E L L _');
        expect(game.try(0)).toBe('Please, enter a valid character or word!');
    }
    
    it(hangmantoBesInErrorWhenTryingToInputANonStringValue.name,hangmantoBesInErrorWhenTryingToInputANonStringValue);
    
    function hangmantoBesInErrorWhenTryingToInputANumericStringValue() {
       
    
        expect(game.try('a')).toBe('9 _ _ _ _ _');
        expect(game.try('b')).toBe('8 _ _ _ _ _');
        expect(game.try('c')).toBe('7 _ _ _ _ _');
        expect(game.try('d')).toBe('6 _ _ _ _ _');
        expect(game.try('e')).toBe('6 _ E _ _ _');
        expect(game.try('l')).toBe('6 _ E L L _');
        expect(game.try('0123.45')).toBe('Please, enter a valid character or word!');
    }
    
    it(hangmantoBesInErrorWhenTryingToInputANumericStringValue.name,hangmantoBesInErrorWhenTryingToInputANumericStringValue);
    
    function hangmantoBesInErrorWhenTryingToInputASymbolStringValue() {
       
    
        expect(game.try('a')).toBe('9 _ _ _ _ _');
        expect(game.try('b')).toBe('8 _ _ _ _ _');
        expect(game.try('c')).toBe('7 _ _ _ _ _');
        expect(game.try('d')).toBe('6 _ _ _ _ _');
        expect(game.try('e')).toBe('6 _ E _ _ _');
        expect(game.try('l')).toBe('6 _ E L L _');
        expect(game.try('hello%')).toBe('Please, enter a valid character or word!');
    }
    
    it(hangmantoBesInErrorWhenTryingToInputASymbolStringValue.name,hangmantoBesInErrorWhenTryingToInputASymbolStringValue);
    /**/
    // TODO func to convert camelCase text into normal case and spaces (e.g. "helloWorld" -> "hello world").

});
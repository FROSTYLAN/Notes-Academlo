import cards
import pytest

def test_not_path_file():
    with pytest.raises(AttributeError, match="Faltó el primer argumento"):
        cards.CardsDb()